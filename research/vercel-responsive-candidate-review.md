# Vercel deployment and responsive-source review — 2026-10-08

## Scope
- B2W deployment history: 81 accessible metadata records
- JasonAI deployment history: 4 accessible metadata records
- Full historical HTML source retrieval from Vercel is **blocked by connector truncation**. The get_deployment_file_contents result clips the base64-encoded HTML to roughly 2,014 characters, with tens/hundreds of thousands of omitted characters. Thus a deployment source cannot be certified complete via this route.
- Protected deployment-page fetch also returned HTTP 403. Do not represent these files as fully recovered or visually QA-checked.
- Full source HTML artifacts separately recovered from ChatGPT Library were inspected as a design comparison reference; those are **not verified** as byte-for-byte identical to a particular Vercel deployment.

## Deployment anchors
| Site | Deployment | Function |
|---|---|---|
| B2W | dpl_4xkoy87MoR2zvP9X841GsjLvseWz | Last pre-Git preview deployment; compressed source ~16.5 KB base64; may represent alternate simplified design |
| B2W | dpl_5YVVnbDWEjaXW113ryf6HTyxaF8r | Pre-Git deployed main snapshot; base64 omitted ~297,916 chars |
| B2W | dpl_Covq792gRCBQNxpMqoTgSzA4WQVW | Older main source snapshot; base64 omitted ~303,272 chars |
| JasonAI | dpl_EeAXX6vqmjxLWZ1FbExRXWgCsH3c | Latest JasonAI source snapshot; omitted ~46,400 chars |
| JasonAI | dpl_3XBg7Z8fMzxZfDRUXyQ12e4RZiyV | Previous JasonAI snapshot; omitted ~50,068 chars |
| JasonAI | dpl_6u9BgKimSNEdRG2sHCQK2GM4EzBw | First JasonAI snapshot; omitted ~57,868 chars |

## Source family analysis (fully accessible ChatGPT Library copies)
| Family | Typography evidence | Mobile CSS evidence | Preliminary role | Verdict |
|---|---|---|---|---|
| B2W v14 header updated, 220 KB | shared --size 15px desktop / 14px mobile, 68 font-size declarations / 17 unique values | 27 max-width queries | Desktop + mobile typography/layout candidate | Highest-priority *inspection*, but fails literal zero-exceptions criterion |
| B2W v14 corrected, 218 KB | same --size, 68 declarations / 17 values | 26 max-width queries | Rollback / alternate mobile candidate | Inspect side-by-side |
| B2W main v53, 75 KB | 98 font-size declarations / 58 values | 23 max-width queries | Content donor ONLY | Excluded from strict typography source candidates |
| JasonAI home v68, 60 KB | 53 declarations / 33 values | 11 max-width queries | Content/interaction donor ONLY | Excluded from strict typography source candidates |
| JasonAI contractors v69, 23 KB | 26 declarations / 18 values | 4 max-width queries | Content donor ONLY | Excluded from strict typography source candidates |
| JasonAI trust v55, 31 KB | 35 declarations / 22 values | 11 max-width queries | Content donor ONLY | Excluded from strict typography source candidates |
| B2W Oct8 integrated demo, 479 KB | 558 declarations / 77 values | 65 max-width queries | Demo interaction donor, *not* typography/style donor | Excluded as template |
| B2W SMB v14, 95 KB | 138 declarations / 61 values | 29 max-width queries | Content donor ONLY | Excluded as template |

CSS media query counts do **not** establish mobile quality. The desktop/mobile winners require browser screenshots at multiple widths, computed-font-size analysis and interactive regression tests.

## Proposed split-variant selection process
1. Desktop B2W: compare recovered B2W v14 header updated versus corrected.
2. Mobile B2W: compare those same sources at 390px and 430px; choose only after menu, layout, reading order and demo scale verified.
3. JasonAI: use selected B2W typography and menu tokens for both desktop/mobile; source content and behavior from the separate JasonAI snapshots only after approval.
4. Demo: preserve graph and dashboard as isolated interactive component, not copied wholesale into every route.
5. Validate the *literal* all-text-same-size constraint using browser computed styles across h1–h6, paragraphs, nav links, captions and buttons at mobile and desktop widths; document exceptions for user review.
6. Keep B2W existing deployment available as rollback reference. Do not deploy any candidate based only on CSS inspection.

## Status
This is a **candidate assessment, not a final visual winner**. No deployments or source changes were made as part of this audit.
