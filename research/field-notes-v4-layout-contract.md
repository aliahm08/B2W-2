# Field Notes V4 — full reading canvas

Review only. Based on Field Notes V3 one-size preview at commit `1a355361cabefcd14c5ecaa0350dec74e9f9409c`. Preserve original B2W shared type, homepage, header, colors, assets and page transitions.

- Desktop B2W Insights uses a wide reading canvas up to 1500px, with only a narrow searchable left rail. The selected article fills all remaining main-page width, with no separate right-hand column.
- Entering `#insights` opens Field Note 001 by default. `#article-field-note-006` and other deep links open the requested record as before. Each next-note control updates the hash; the browser back button works.
- The article begins with six complete source-data points in a compact two-column introductory area, rendered as plain content, not labeled with Who/What/When/Where/Why/How or any 'six questions' heading.
- Below the introductory summary is a contextual image, continuous research article prose, and the animated process graphic. All visible text is the same 15px size; weight, color, layout and whitespace establish hierarchy. No article titles, section headings or subtitles.
- At mobile widths, the intro stacks into one column and the article uses the available width. "All field notes" returns to a dedicated `#insights-list` route, showing the searchable library; the Insights navigation remains active.
- All 36 source-backed records, captions, responsive behavior, photo fallbacks and motion preferences remain intact. No JasonAI or Clara files are changed.

Run `node scripts/verify-field-notes-v3.mjs` to validate the revised page contract. Production unchanged until visual approval.
