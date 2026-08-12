now follow this so the forms send lead data to the spreadsheet :
Install the Google APIs Package
npm install googleapis
This is Google's official Node.js client library. It includes typed clients for every Google API, including Sheets. No other packages are needed.

Step 2: Environment Variables
Add to .env.local at your project root:

GOOGLE_SERVICE_ACCOUNT_EMAIL=sheets-writer@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...your full key here...==\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SHEET_TAB_NAME=Sheet1
Critical notes on the private key:

The private_key from the JSON file contains literal \n escape sequences (not actual newlines). When pasting into .env.local, wrap the entire value in double quotes and keep the \n characters as-is.
The utility code below converts \n to actual newlines at runtime. This is the single most common source of authentication failures — if the key doesn't work, the \n conversion is almost always the reason.
Never commit .env.local to Git. Verify it's in your .gitignore before every push.
Step 3: Create the Google Sheets Utility Library
Create lib/google-sheets.ts:

import { google, sheets_v4 } from "googleapis";

// ─── Auth ────────────────────────────────────────────────────────────────────

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
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
  spreadsheetId?: string; // defaults to GOOGLE_SHEET_ID env var
  sheetName?: string;     // defaults to GOOGLE_SHEET_TAB_NAME env var or "Sheet1"
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
PART 3: USING THE LIBRARY IN NEXT.JS
Pattern A: Server Action (App Router, Next.js 13+)
// app/some-page/actions.ts
"use server";

import { appendRow } from "@/lib/google-sheets";

export async function handleFormSubmission(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields" };
  }

  const sanitize = (str: string) => str.replace(/<[^>]*>/g, "").trim();
  const timestamp = new Date().toISOString();

  try {
    await appendRow([
      timestamp,
      sanitize(name),
      email.toLowerCase().trim(),
      sanitize(message),
    ]);
    return { success: true };
  } catch (error) {
    console.error("Sheet write failed:", error);
    return { success: false, error: "Submission failed" };
  }
}
Pattern B: API Route — App Router
// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    await appendRow([timestamp, name.trim(), email.toLowerCase().trim(), message.trim()]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
Pattern C: API Route — Pages Router
// pages/api/submit.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { appendRow } from "@/lib/google-sheets";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const timestamp = new Date().toISOString();

    await appendRow([timestamp, name.trim(), email.toLowerCase().trim(), message.trim()]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
Pattern D: Reading Data Back (dashboards, admin panels, etc.)
// app/api/submissions/route.ts
import { NextResponse } from "next/server";
import { readRows } from "@/lib/google-sheets";

export async function GET() {
  try {
    const result = await readRows();

    if (!result.rows.length) {
      return NextResponse.json({ data: [], total: 0 });
    }

    const [headers, ...dataRows] = result.rows;

    const data = dataRows.map((row) => {
      const obj: Record<string, unknown> = {};
      headers.forEach((header, i) => {
        obj[String(header)] = row[i] ?? null;
      });
      return obj;
    });

    return NextResponse.json({ data, total: data.length });
  } catch (error) {
    console.error("Read error:", error);
    return NextResponse.json({ data: [], total: 0, error: "Failed to read data" }, { status: 500 });
  }
}
Pattern E: Writing to Multiple Spreadsheets
If your application writes to more than one spreadsheet, pass the target explicitly:

await appendRow(
  [timestamp, name, email, message],
  { spreadsheetId: process.env.SHEET_ID_FORM_A, sheetName: "Submissions" }
);

await appendRow(
  [timestamp, name, email, phone, category, description],
  { spreadsheetId: process.env.SHEET_ID_FORM_B, sheetName: "Inquiries" }
);
Add both IDs to your .env.local:

SHEET_ID_FORM_A=1AbCdEfG...
SHEET_ID_FORM_B=2HiJkLmN...
PART 4: HANDLING THE PRIVATE KEY ACROSS HOSTING PLATFORMS
The private key's \n newline escaping is the single most common cause of authentication failures when deploying.

Vercel
Add GOOGLE_PRIVATE_KEY in the Vercel dashboard (Settings → Environment Variables). Paste the key exactly as it appears in the JSON file, including the -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY----- markers. Vercel handles newline escaping in most cases. If you get "Could not deserialize key data" errors, the replace(/\\n/g, "\n") line in the utility code handles it.

Netlify
Same approach as Vercel. Add the env var in the Netlify dashboard under Site Settings → Environment Variables. The replace fix in the utility code covers any escaping issues.

Railway / Render / Fly.io
Add the env var through their dashboards or CLI. Same \n replacement logic applies.

Docker / Self-Hosted
Two options:

Option 1: Environment variable (recommended) Set GOOGLE_PRIVATE_KEY in your docker-compose.yml, .env file, or container orchestration config.

Option 2: Mount the JSON key file Mount the entire service account JSON file as a secret and point to it:

function getAuthClient() {
  return new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_KEY_FILE_PATH || "/secrets/service-account.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}
AWS (Lambda / ECS / EC2)
Store the private key in AWS Secrets Manager or SSM Parameter Store (SecureString). Retrieve it at runtime. Never bake secrets into Lambda environment variables in plaintext for production.

PART 5: TESTING THE CONNECTION
Before wiring the library into your application, test it in isolation.

Create scripts/test-sheets.ts:

import { appendRow, readRows, getSpreadsheetInfo } from "../lib/google-sheets";

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");

  try {
    const info = await getSpreadsheetInfo();
    console.log("✅ Spreadsheet found:", info.title);
    console.log("   Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("❌ Failed to read spreadsheet info:", error);
    return;
  }

  try {
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "test@example.com",
      "This is a test row from the development environment.",
    ]);
    console.log("✅ Row written:", result.updatedRange);
  } catch (error) {
    console.error("❌ Failed to write row:", error);
    return;
  }

  try {
    const result = await readRows();
    console.log(`✅ Read ${result.rows.length} rows (including header)`);
    console.log("   Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("❌ Failed to read rows:", error);
  }

  console.log("\n--- All tests passed ---");
}

test();
Run it:

npx tsx scripts/test-sheets.ts
Common errors and fixes:

Error Message	Cause	Fix
The caller does not have permission	Spreadsheet not shared with service account	Share it with the service account email as Editor
Could not deserialize key data	Private key \n not converting to real newlines	Verify the replace(/\\n/g, "\n") line is in your auth code
Google Sheets API has not been enabled	API not turned on in Cloud Console	Go to APIs & Services → Library → enable Google Sheets API
Requested entity was not found	Wrong spreadsheet ID	Double-check the ID from the spreadsheet URL
ENOTFOUND oauth2.googleapis.com	Network / firewall blocking Google APIs	Check network, proxy, or firewall settings
Invalid grant	Clock skew between server and Google	Sync your system clock (NTP)
Delete or exclude the test script before deploying to production.

PART 6: ERROR HANDLING BEST PRACTICES
Never Let a Sheets Failure Block Your Application
If Google Sheets is a secondary data store (e.g., form submissions also trigger emails), always wrap Sheets calls in try/catch:

try {
  await appendRow(rowData);
} catch (error) {
  console.error("Google Sheets write failed:", error);
  // Log it, alert yourself, but don't fail the user's action
}

// Continue with email send, success response, etc.
Retry Logic for Transient Failures
If Sheets is your primary data store, add a simple retry with exponential backoff:

async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: any) {
      const isRetryable =
        error?.code === 429 ||  // Rate limited
        error?.code === 503 ||  // Service unavailable
        error?.code === 500;    // Internal server error

      if (isRetryable && attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
Structured Error Logging
try {
  await appendRow(data);
} catch (error: any) {
  console.error("Google Sheets error:", {
    message: error?.message,
    code: error?.code,
    status: error?.response?.status,
    spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
    timestamp: new Date().toISOString(),
  });
  // Don't log the full error object — it may contain your private key in the auth context
}
PART 7: RATE LIMITS AND QUOTAS
Limit	Value	Notes
Read requests per minute per project	300	Shared across all sheets in the project
Write requests per minute per project	300	Shared across all sheets in the project
Requests per minute per user (service account)	60	Per service account identity
Requests per 100 seconds per project	500	Burst ceiling
For most applications (contact forms, data collection, internal tools), you will never hit these limits. If you approach them (batch imports, high-volume collection):

Use appendRows to batch multiple rows into one API call
Queue submissions and flush in batches every N seconds
Distribute across multiple service accounts (each gets 60/minute)
The Sheets API is free — no cost for read or write operations.

PART 8: SECURITY CHECKLIST
[ ] .env.local is in .gitignore — verify before every commit
[ ] The downloaded JSON key file is deleted from your machine or stored in a password manager / secrets vault
[ ] GOOGLE_PRIVATE_KEY is set as an environment variable on your hosting platform, not hardcoded
[ ] The service account has Editor access only to the specific spreadsheet(s) it needs — not your entire Google Drive
[ ] lib/google-sheets.ts is imported ONLY in server-side code (API routes, Server Actions, server components) — never in "use client" files
[ ] The spreadsheet is NOT shared publicly via "Anyone with the link" — only the service account and authorized human accounts should have access
[ ] No test scripts are included in the production build
[ ] Error logs do not expose the full private key or credentials
[ ] If using the keyFile approach, the JSON file is mounted as a read-only secret, not baked into a Docker image layer
PART 9: TYPESCRIPT CONFIGURATION NOTE
If you get import errors on googleapis, ensure your tsconfig.json includes:

{
  "compilerOptions": {
    "esModuleInterop": true,
    "moduleResolution": "bundler"
  }
}
Next.js 13+ with App Router typically has this already. Older Pages Router setups may need it added.

PART 10: QUICK REFERENCE
Minimum viable setup (four steps)
1. Install:

npm install googleapis
2. Environment variables (.env.local):

GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id
3. Utility (lib/google-sheets.ts):

import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function appendRow(values: (string | number | boolean | null)[]) {
  return sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "Sheet1!A:A",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });
}
4. Use it (server-side only):

await appendRow([new Date().toISOString(), "Jane", "jane@example.com", "Hello"]);
Four steps from zero to rows in a spreadsheet.\