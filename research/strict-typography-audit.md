# Strict typography source audit — October 8, 2026

The earlier deployed `index.html` / `main.js` codebase is a navigation scaffold, **not** an approved B2W design. Do not use it as design source.

## Acceptance rule
A source may be used for a page ONLY after inspection confirms all user-facing text uses the same computed font size at a chosen viewport. Responsive changes may use another single shared size if explicitly approved. Distinguish uniform **base text** from genuinely identical **all text**.

## Findings from full recovered HTML files
| Source | Shared size variable | Evidence | Strict eligibility |
| --- | --- | --- | --- |
| b2w_v14_header_updated.html | YES | `--size:15px`, responsive `--size:14px`; 43 `font-size:var(--size)` declarations but 25 other `font-size` declarations | NOT YET: needs normalization/audit |
| b2w_v14_corrected.html | YES | Same shared typography setup and 25 remaining special overrides | NOT YET: needs normalization/audit |
| jasonai-home-v68.html | NO | 53 font-size declarations across 33 values | EXCLUDE |
| jasonai-general-contractors-v69.html | NO | 26 declarations across 18 values | EXCLUDE |
| jasonai-trust-v55.html | NO | 35 declarations across 22 values | EXCLUDE |
| b2w-main-v53.html | NO | 98 declarations across 58 values | EXCLUDE |
| b2w-smb-v14.html | NO | 138 declarations across 61 values | EXCLUDE |
| index(20261008-011908).html | NO | 558 declarations across 76 values | EXCLUDE |
| preview.html | NO | 556 declarations across 76 values | EXCLUDE |

## Recommendation
Use B2W v14 as a **typography reference only**, not a claim that all its visible text has identical size. For each page: select an original source, explicitly normalize remaining font-size exceptions, inspect rendered computed styles on desktop/mobile, and obtain approval before deployment.

The current main-branch navigation scaffold does not meet visual-fidelity requirements and should not be treated as approved.
