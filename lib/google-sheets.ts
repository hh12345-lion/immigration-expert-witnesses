import { google, sheets_v4 } from "googleapis";

// ─── Auth ────────────────────────────────────────────────────────────────────

/** Normalize private key from .env / Netlify (quoted, literal \\n, or real newlines). */
export function normalizePrivateKey(raw: string | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  let key = raw.trim();

  // Strip wrapping quotes that some hosts / paste flows add
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  // If the whole value was JSON-stringified, parse it
  if (key.startsWith("-----BEGIN") === false && key.includes("BEGIN PRIVATE KEY")) {
    try {
      key = JSON.parse(`"${key.replace(/^"/, "").replace(/"$/, "")}"`);
    } catch {
      /* keep as-is */
    }
  }

  key = key.replace(/\\n/g, "\n");

  // Netlify sometimes collapses PEM into one line with spaces
  if (key.includes("-----BEGIN") && !key.includes("\n") && key.includes(" ")) {
    key = key
      .replace("-----BEGIN PRIVATE KEY----- ", "-----BEGIN PRIVATE KEY-----\n")
      .replace(" -----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----")
      .replace(/ -----END/, "\n-----END");
  }

  return key;
}

/** Prefer base64 env (bulletproof on Netlify); fall back to GOOGLE_PRIVATE_KEY. */
export function getPrivateKey(): string | undefined {
  const b64 = process.env.GOOGLE_PRIVATE_KEY_B64?.trim();
  if (b64) {
    try {
      const decoded = Buffer.from(b64, "base64").toString("utf8").trim();
      if (decoded.includes("BEGIN")) return decoded;
    } catch {
      /* fall through */
    }
  }
  return normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
}

export function getSheetsConfigStatus(): {
  configured: boolean;
  missing: string[];
  sheetIdSet: boolean;
} {
  const missing: string[] = [];
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() ?? "";
  const key = getPrivateKey();
  const sheetId = process.env.GOOGLE_SHEET_ID?.trim() ?? "";

  if (!email) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  if (!key) missing.push("GOOGLE_PRIVATE_KEY (or GOOGLE_PRIVATE_KEY_B64)");
  if (!sheetId) missing.push("GOOGLE_SHEET_ID");

  return {
    configured: missing.length === 0,
    missing,
    sheetIdSet: Boolean(sheetId),
  };
}

export function isGoogleSheetsConfigured(): boolean {
  return getSheetsConfigStatus().configured;
}

function getAuthClient() {
  const privateKey = getPrivateKey();
  if (!privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is missing or could not be parsed");
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim(),
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

/** Quote sheet tab names so spaces / special chars work in A1 ranges. */
function sheetA1(sheetName: string, a1 = "A:A"): string {
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!${a1}`;
}

// ─── Types ───────────────────────────────────────────────────────────────────

type CellValue = string | number | boolean | null;

interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
  updatedCells: number;
}

interface ReadResult {
  success: boolean;
  rows: CellValue[][];
}

// ─── Write Operations ────────────────────────────────────────────────────────

/**
 * Append a single row to the bottom of a sheet.
 * Values must be in column order matching your header row.
 */
export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId.trim(),
    range: sheetA1(sheetName.trim()),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  const updatedCells = response.data.updates?.updatedCells ?? 0;
  if (updatedCells < 1) {
    throw new Error("Google Sheets append returned no updated cells");
  }

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
    updatedCells,
  };
}

/**
 * Append multiple rows at once (batch insert).
 * Each inner array is one row.
 */
export async function appendRows(
  rows: CellValue[][],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId.trim(),
    range: sheetA1(sheetName.trim()),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: rows,
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
    updatedCells: response.data.updates?.updatedCells ?? 0,
  };
}

/**
 * Update a specific range (overwrites existing data).
 * Use for updating a known cell or range, not for appending.
 */
export async function updateRange(
  range: string,
  values: CellValue[][],
  target?: SheetTarget
): Promise<{ success: boolean }> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });

  return { success: true };
}

/**
 * Retry wrapper for transient Sheets API failures (429 / 500 / 503).
 */
export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const code =
        error && typeof error === "object" && "code" in error
          ? Number((error as { code: unknown }).code)
          : undefined;
      const isRetryable = code === 429 || code === 503 || code === 500;

      if (isRetryable && attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}

// ─── Read Operations ─────────────────────────────────────────────────────────

export async function readRows(
  range?: string,
  target?: SheetTarget
): Promise<ReadResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName = target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: range || sheetA1(sheetName, "A:Z"),
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getRowCount(target?: SheetTarget): Promise<number> {
  const result = await readRows(undefined, target);
  return result.rows.length;
}

export async function clearRange(
  range: string,
  target?: SheetTarget
): Promise<{ success: boolean }> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range,
  });

  return { success: true };
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = spreadsheetId || process.env.GOOGLE_SHEET_ID;

  if (!id) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.get({
    spreadsheetId: id,
  });

  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
      rowCount: s.properties?.gridProperties?.rowCount,
      columnCount: s.properties?.gridProperties?.columnCount,
    })),
  };
}
