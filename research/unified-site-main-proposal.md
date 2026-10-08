# Unified B2W / JasonAI Main (review build)

This proposal combines the original HTML source candidates into one static multi-page site with a persistent cross-site navigation, mobile full-screen tray, active-page indicators, and working deep links.

## Routes and source snapshots
| Route | Snapshot | Status |
|---|---|---|
| / | b2w_v14_header_updated.html | candidate |
| /work/ | b2w_v14_header_updated.html (offerings section) | temporary; dedicated portfolio pending |
| /how-we-work/ | b2w_v14_header_updated.html (how-we-work) | section-based prototype |
| /perspectives/ | b2w_v14_header_updated.html (insights) | section-based prototype |
| /jasonai/ | jasonai-home-v68.html | candidate |
| /jasonai/general-contractors/ | jasonai-general-contractors-v69.html | candidate |
| /jasonai/trust/ | jasonai-trust-v55.html | candidate |
| /jasonai/demo/ | index(20261008-011908).html | alternative demo concept |
| /businesses/ | b2w-smb-v14.html | optional |

The implementation preserves existing HTML as much as possible. It remaps old cross-site .html links to canonical routes and injects a shared top navigation.

This is a review prototype, **not a claim of visual approval**. In particular /work, /how-we-work and /perspectives reuse the full B2W document and auto-scroll to sections. The individual page design and demo have not yet been approved.

## Deployment safeguards
No automatic production deployment. The downloadable complete build is available in its ChatGPT conversation as b2w_unified_preview.zip. Before preview deployment, commit the package to a separate branch, validate route navigation, mobile menu and demos, and test the selected page designs.

Original historical versions tracked in research/chatgpt-website-version-inventory.csv.
