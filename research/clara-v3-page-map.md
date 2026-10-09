# Clara V3 — three B2W templates, independent color tokens

Source: `review/v2-demo-notes-oct` at `0a70f093594094a6a43eb875dc239d562925009b`. This is a new preview-only review branch, not production.

## Page map and color contract
| Clara route | Shared B2W template | Paper | Content |
|---|---|---|---|
| `/clara/` | Home | Main mauve `#C7AABD` | Three links to templates |
| `/clara/how-it-works/` | Show | Pale mauve `#F6F0F4` | Data-defined stages |
| `/clara/scenarios/` | Know | Deep metallic purple `#34263F` | Data-defined selectable scenarios |
| `/clara/capabilities/` | Flow | Soft mauve `#E6D6E2` | Data-defined expandable capabilities, with the existing animated Clara walkthrough |

Electric blue: `#2563FF` for borders, buttons, interactions, focus; accessible light-blue companion `#78A3FF` on the deep-purple surface. Readable highlighted text on mauve uses a deeper blue `#163998`.

Clara currently has 7 How It Works stages, 12 Scenarios, and 6 Capabilities. These are **content counts, not template limits**; the renderer uses `Array.map` and the test derives expected counts directly from `clara-content-v3.js`.

How It Works: property/job → voice visit → scope → estimate → share → versions → Clara chat.

Scenarios: recurring CRE maintenance, site visits, multi-property work, estimates with unknowns, tenant turnover, approvals, version conflicts, and property-aware follow-up. These are *illustrative situations*, not claims about a shipped backend or testimonials.

Capabilities: property workspace, voice-to-scope, editable estimates, sharing/reviews, version history, and Clara chat.

## Preservation
B2W and JasonAI template geometry, nav components, contact dialog, typography, mobile tray and cross-site transitions are retained. Clara's page-specific style file is loaded **after** the shared styles. The original V2 remains available for rollback. Ali's approval is required before production changes.
