# Ecosystem template acceptance checklist — October 8, 2026

Baseline deployment: b85ab34b2bd6e92097cd2c97f95ca9b3a89b334c.
Review branch: review/shared-page-templates-oct8. Production and baseline preview remain untouched.

## Template matrix
| Template | B2W | JasonAI | Clara | Items |
|---|---|---|---|---|
| Home | / | /jasonai/ | /clara/ | 3 links |
| Show | /#how-we-work | /jasonai/how-it-works/ | /clara/how-it-works/ | 5 stages |
| Know | /#insights | /jasonai/insights/ | /clara/insights/ | 6 notes |
| Flow | /#offerings | /jasonai/capabilities/ | /clara/capabilities/ | 2 cards |
| Contact | /contact/ | /contact/ | /contact/ | 3 email choices |

Additional routes: /jasonai/general-contractors/ (Show 5), /jasonai/trust/ (Know 6), /jasonai/scenarios/ (Flow 2 grouped cards retaining 6 original scenarios), /jasonai/demo/ (Flow 2 cards, 4-step interactive demo), /clara/workflow/ (Flow 2).

## JasonAI colors
Home #11150f, How It Works #ffffff, Insights #252828, Capabilities #dedfdf (silver), Scenarios #e7773d (orange). Demo white.

## Content and visual preservation
- B2W's original homepage 3 rows, layout, type sizes, SVG geometry and transitions remain the visual reference.
- Homepage primary links now target each site's Show / Know / Flow templates; B2W's JasonAI and Clara links move into the homepage footer. Product home footers link across the ecosystem.
- Existing source pages for contractor and Trust stored in research/approved-source-snapshots.
- SVG diagrams are original, editable markup using the inherited B2W stroke, color and motion treatment.
- Responsive layout inherits B2W breakpoints, keeps mobile full-screen menu and respects prefers-reduced-motion.

## Contact
Single accessible modal with 3 prepared mailto subjects/bodies:
1. General interest: name, company/role, outcome, reply details.
2. Free demo: name, company, product, demonstration goal and preferred day/time.
3. Product question: name, product, question and optional link/context.

Text-based email drafts cannot contain reliably styled HTML when opened by a mailto URL, so typography and selection design live in the site UI.

## Verification
- JS syntax validated; source comparisons against B2W baseline performed.
- Simulated render coverage for 13 routes; exact counts, palette, graphics and contact draft generation checked.
- Protected Vercel preview may still require login and limits independent browser visual QA. Manual visual sign-off required before production.
- Run node scripts/check-site.mjs and node scripts/verify-templates.mjs locally to reproduce structural tests.
