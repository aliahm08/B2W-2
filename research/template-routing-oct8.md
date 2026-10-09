# B2W ecosystem template and navigation contract (2026-10-08)
Source baseline: b85ab34b2bd6e92097cd2c97f95ca9b3a89b334c. Preview changes only.

| Template | B2W | JasonAI | Clara |
|---|---|---|---|
| Home | / | /jasonai/ | /clara/ |
| Show (numbered stages) | /how-we-work#how-we-work | /jasonai/how-it-works/ | /clara/how-it-works/ |
| Know (information library) | /#insights | /jasonai/insights/ | /clara/insights/ |
| Flow (offerings/capabilities) | /#offerings | /jasonai/capabilities/ | /clara/capabilities/ |
| Contact (one shared screen) | /contact/ | /contact/ | /contact/ |

JasonAI auxiliary routes: /jasonai/general-contractors/ => Show; /jasonai/trust/ => Know; /jasonai/scenarios/ and /jasonai/demo/ => Flow. Clara /clara/workflow/ => Flow. B2W legacy /work and /perspectives retain their original mappings.

Shared authoritative B2W layout CSS: assets/css/b2w.css, assets/css/home.css, assets/css/header.css.
Product configuration/rendering: assets/js/product-templates.js; product-specific theme adapters: assets/css/product-templates.css.
Shared contact dialog: assets/js/site-contact.js, assets/css/site-contact.css.
Cross-site transitions: assets/js/ecosystem-transitions.js.
Inside B2W, existing hash controller preserves its home/section FLIP transitions; inside products, product-templates uses same-site navigation and brand FLIP; cross-site links fade content and navigate normally.
User validation required before release; never push this review branch to main without approval.
