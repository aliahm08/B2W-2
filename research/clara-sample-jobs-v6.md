# Clara Scenarios — preloaded sample jobs
Review branch: review/clara-preloaded-sample-jobs-v6. User-approved production rollout is not implied.

Three archived Clara estimate examples were found in Drive: a barbershop estimate with marked-up reviewer copy, multiple shoe-store design estimate exports, and a property-specific estimate. The public examples are titled Barbershop renovation, Shoe store fit-out, and Property repairs. Individual names, the street address and private Drive links are deliberately not published.

The original estimate PDFs were identified, but their numerical line items and voice recordings were not available as verified extracted text. The sample voice notes, scope categories and edit fields are expressly illustrative. No price or quantity is prefilled, and a partial subtotal is labeled as an unverified demonstration calculation.

Scenarios now contains a selectable browser-based Clara sample workspace pre-populated with these three anonymized examples and revision markers. The editable estimate view updates totals in the browser; it does not call an AI service or store changes in an authenticated account. A synchronized import-ready seed file is located at assets/data/clara-sample-jobs.json. The actual portal.b2w-ai.com application remains unverified; a backend import into user accounts has not occurred.

Maintain B2W's single-size typography, Clara's deep metallic purple Scenarios color, and shared site navigation. Tests: node scripts/verify-clara-sample-jobs-v6.mjs and node scripts/verify-templates.mjs.

## V7 interaction revision
Clara's product subpage is now called **Features**, linked at `/clara/features/` (the older `/clara/capabilities/` still resolves). The seven capabilities render as independent expandable cards on the existing electric-blue background.

Scenarios first renders only the three-item job list. A click expands a single sample article beneath the list, simulates typing its illustrative voice transcript, reveals an organized scope note, and then reveals an editable estimate with the same line items. Source audio was not available and is never described as an authentic transcript. The motion sequence supports Replay, Show all, Close, browser reduced-motion settings, and explicit invalid price/quantity states. It does not generate live estimates or persist data to the portal.
