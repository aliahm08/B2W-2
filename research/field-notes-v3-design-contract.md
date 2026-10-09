# B2W Field Notes — V3 editorial reader

Source: e0da8d4c7a1f8cb22eddb187df7d8c0636a753f1 (Clara V3). Review-only changes: `assets/js/field-notes-ui-v2.js`, `assets/css/field-notes-editorial-v3.css`, and B2W index CSS link. B2W, JasonAI, and Clara home/Show/Flow templates unchanged.

## Layout
- Left: existing searchable, numbered 36-note index.
- Middle: titled long-form field-note article. Starts with the observed signal, then the implication, a source-linked animated workflow graphic, and the recommended approach. Includes representative, license-permitted photographic imagery.
- Right: separate sticky, independently scrollable **Who / What / When / Where / Why / How** facts panel. This restores the intended three-column reading hierarchy.
- Narrow widths: preserve the B2W mobile reader/back navigation; stack article then facts, with no horizontal scrolling.
- Hover preview: the motion graphic remains in the center column; rightmost region stays visually empty when no note is open.
- Existing `#article-field-note-006` deep link, next-note links, search, field-note IDs and reduced-motion behavior retained.

## Photography and provenance
Photography is **illustrative, not documented customer or project evidence**. The UI displays an attribution alongside each image.
- Construction: [SMKN 1 Gantar, Unsplash](https://unsplash.com/photos/construction-worker-wearing-a-hard-hat-and-vest-at-site-B8lr-Wvz-iM).
- Planning: [Pedro Miranda, Unsplash](https://unsplash.com/photos/people-reviewing-architectural-blueprints-on-desk-3QzMBrvCeyQ).
- Finance: [Jakub Żerdzicki, Unsplash](https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk).
- Estimating: [Jonathan Borba, Unsplash](https://unsplash.com/photos/architectural-blueprints-and-a-laptop-on-a-marble-desk-rn00OVh0gEI).

Photographs use the Unsplash image CDN with modest image dimensions, lazy loading, alt text, credit links, and an accessible fallback where the remote image cannot load. CSS motion graphics are authored in code and do not require external assets.

## Validation
Run `node scripts/verify-v2.mjs` and `node scripts/verify-field-notes-v3.mjs`. Human desktop/mobile visual acceptance remains required before production.
