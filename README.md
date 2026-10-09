# B2W ecosystem website

Static HTML, CSS, and JavaScript. No application framework or build step is required. Vercel serves the files and maps the routes in `vercel.json`.

## Where to edit

| Change                                                                           | File                                                                |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| B2W copy, links, process steps, field notes, and team                            | `index.html`                                                        |
| B2W header layout, logo height, centered navigation, pill buttons, mobile header | `assets/css/header.css`                                             |
| B2W homepage rows, illustrations, spacing, hover glow                            | `assets/css/home.css`                                               |
| B2W subpage layouts and palettes                                                 | `assets/css/b2w.css`                                                |
| Home ↔ subpage logo movement and content wipes                                  | `assets/js/b2w-controller.js`                                       |
| Exit animation into JasonAI or Clara                                             | `assets/js/ecosystem-transitions.js`                                |
| Full-screen B2W menu and keyboard behavior                                       | `assets/js/b2w-mobile-navigation.js`                                |
| JasonAI content and page interactions                                            | `assets/js/jasonai-pages.js`                                        |
| JasonAI styles                                                                   | `assets/css/jasonai.css`                                            |
| B2W → JasonAI brand arrival                                                      | `assets/js/jasonai-entry.js`, `assets/js/jasonai-brand-transfer.js` |
| Clara copy                                                                       | `clara/index.html`                                                  |
| Clara styling and step interactions                                              | `assets/css/clara.css`, `assets/js/clara-pages.js`                  |
| Internal routes                                                                  | `vercel.json`                                                       |

## Header and transition contracts

The B2W header has three grid columns: brand, centered B2W page links, and an action group ordered Contact → JasonAI → Clara. The current page label is shown only below the mobile header breakpoint. Header rules live in `header.css`; do not append header overrides elsewhere.

The homepage logo occupies the middle grid column. Internal navigation moves the actual logo into the first column, then reveals the navigation rail and destination content. Returning home reverses that sequence. Company keeps a real `/how-we-work` href for direct visits while the controller handles normal clicks within the page.

Product links retain native browser behavior for modified clicks. A normal click runs the departure animation before navigation. JasonAI receives the source logo position through short-lived session storage and owns its arrival animation. Reduced motion skips the travel and exit sequences. Browser back restores any retained departure animations.

## Local preview and review deployment

Run `python3 -m http.server 8765` in the repository to preview physical pages. Vercel rewrites are needed for virtual JasonAI subpage URLs and B2W path aliases; test those on the review preview or with a local server that mirrors `vercel.json`.

The review work belongs on `review/unified-mobile-template-oct8`. Git commits on that branch deploy previews to `b2w-live-preview`. Keep releases to main and the separate public production project outside this workflow.

Before publishing a preview, run `node scripts/check-site.mjs` and `git diff --check`, and verify desktop/mobile header placement, home ↔ Company movement, menu navigation, product exits, browser back, field notes, accordions, and the JasonAI demo. Assets are external files so page markup stays readable and diffs do not contain embedded portrait data.
