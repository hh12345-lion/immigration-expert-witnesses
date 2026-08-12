import { google, sheets_v4 } from "googleapis";

// ─── Auth ────────────────────────────────────────────────────────────────────

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

function getAuthClient() {
  const rawKey = process.env.GOOGLE_PRIVATE_KEY?.trim() ?? "";
  // Netlify / dashboards sometimes wrap the key in quotes
  const unquoted =
    (rawKey.startsWith('"') && rawKey.endsWith('"')) ||
    (rawKey.startsWith("'") && rawKey.endsWith("'"))
      ? rawKey.slice(1, -1)
      : rawKey;

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim(),
      private_key: unquoted.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
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
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
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
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: rows,
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
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

/**
 * Read all rows from a sheet (or a specific range).
 * Returns an array of arrays — each inner array is one row.
 */
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
    range: range || sheetName,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

/**
 * Get the number of rows with data in a sheet.
 * Useful for pagination or knowing where to write next.
 */
export async function getRowCount(target?: SheetTarget): Promise<number> {
  const result = await readRows(undefined, target);
  return result.rows.length;
}

// ─── Delete Operations ───────────────────────────────────────────────────────

/**
 * Clear the contents of a specific range (keeps formatting).
 */
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

// ─── Sheet Metadata ──────────────────────────────────────────────────────────

/**
 * Get information about the spreadsheet (sheet names, row counts, etc.).
 * Useful for dynamically discovering available tabs.
 */
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
