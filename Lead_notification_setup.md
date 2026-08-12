follow this :
# Contact form: send lead data to your webhook URL on submit
 
Use this pattern on other brand sites: on **form submit**, POST a fixed set of fields to a URL you store in environment variables (e.g. **n8n**).
 
---
 
## On submit: what gets sent
 
When the user submits the contact form, the app **POST**s JSON to **`/api/submit-lead`** with:
 
| Field sent to the API | Source (contact form) |
|------------------------|-------------------------|
| **`fullName`** | Full name |
| **`email`** | Email |
| **`phone`** | Phone (country prefix + national number, may be empty string) |
 
The Netlify function **`submit-lead`** reads that body and **POST**s to **`Lead_notification_url`** (from env) with **only** these keys:
 
| Key in the outbound JSON | Value |
|---------------------------|--------|
| **`Full Name`** | From `fullName` |
| **`Email`** | From `email` |
| **`Phone Number`** | From `phone` |
| **`Brand name`** | Fixed in code for this site (e.g. `Redd Growth`); change **`BRAND_NAME`** in **`netlify/functions/submit-lead.js`** per brand |
 
Content type: **`application/json`**.
 
---
 
## Where the URL is configured
 
| Environment variable | Purpose |
|----------------------|--------|
| **`Lead_notification_url`** | Webhook URL (POST). **`LEAD_NOTIFICATION_URL`** is accepted as a fallback. |
 
Set it in **Netlify → Environment variables** and in local **`.env`** for **`netlify dev`**.
 
Do not commit real URLs in Git; keep **`.env`** gitignored.
 
---
 
## Netlify wiring
 
- **`netlify.toml`**: redirect **`/api/submit-lead`** → **`/.netlify/functions/submit-lead`**.
- **`netlify/functions/submit-lead.js`**: builds the four keys above and **`fetch` POST**s to **`Lead_notification_url`**.
 
For local testing, run **`netlify dev`** and open the URL it prints (often **`http://localhost:8888`**) so **`/api/submit-lead`** resolves to the function.
 
---
 
## Files to copy for another project
 
- **`netlify/functions/submit-lead.js`** (update **`BRAND_NAME`** per brand)
- **`netlify.toml`** block for **`/api/submit-lead`**
- In your form handler: **`fetch('/api/submit-lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fullName, email, phone }) })`**