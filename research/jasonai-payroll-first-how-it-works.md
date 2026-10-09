# JasonAI — payroll-first How It Works

This review-only page maintains the shared B2W white Show template, Inter 15px typography, expandable process rows, full-screen mobile tray, and cross-site navigation.

The intended customer workflow is:

1. The GC owner chooses authorized sources from WhatsApp, SMS, voicemail inbox, email, Telegram, Excel sheets, drawings and photos. These selections are a **simulation** of future/available integrations, not a claim that each source can currently be connected.
2. The owner states the rules. The first B2W/JasonAI use case is **Friday payroll**: who gets paid, for which project and days, at what rate, on what evidence, and which missing facts need confirmation.
3. JasonAI organizes approved information into source-linked labor records and highlights missing time, worker, project, rate or duplicate evidence.
4. The owner reviews the Friday list, exceptions and proposed amounts. The example doesn't send payments, message workers, upload files, or connect any account.
5. **After** payroll is reliable: workforce activity and trend analysis. Future recommendations may address project assignments and rate reviews, with agreed quality/safety criteria and owner control.

The interactive demonstration defaults to WhatsApp and Excel, showing illustrative records for two known amounts totaling $2,450 and one missing-rate exception. Choosing other messaging sources reveals other illustrative records, and choosing drawings/photos explains they could support context but are not themselves verified payroll entries. No user data is sent or persisted.

Preserved:
- JasonAI black Home, white How It Works, orange Scenarios, silver Capabilities.
- Shared B2W page template, one font size, existing source-backed scenarios, Clara styles, and previously approved B2W Insights layouts.
- The legacy /jasonai/trust/ and /jasonai/general-contractors/ page shells load the same updated assets.

QA: `node scripts/verify-jasonai-payroll-v4.mjs` and `node scripts/verify-templates.mjs`. Human visual review still required before production.
