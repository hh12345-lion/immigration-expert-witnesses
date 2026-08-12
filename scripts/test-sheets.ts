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
      "Test Firm",
      "test@example.com",
      "",
      "Country Condition",
      "",
      "",
      "",
      "This is a test row from the development environment.",
      "Immigration Expert Witnesses",
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
