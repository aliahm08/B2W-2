# JasonAI Design & Motion System — v1

**Repository:** `aliahm08/B2W-2` · **Target:** `/jasonai/` · **Status:** design specification / reusable primitives; existing production HTML unchanged.

## Objective
Create small, legible animations that explain the general contractor owner's executive secretary: incoming authorized messages become structured project memory, which becomes reviewable actions. Never depict JasonAI as an autonomous project manager replacing staff. Show the source of claims and require approval for consequential actions.

## Existing page inventory (inspected from `jasonai/index.html`)
| Existing selector | Content | Visual scene | Trigger |
|---|---|---|---|
| `.hero .stage .prompt-line` | Rotating questions addressed to JasonAI | 01 / Ask: question resolves into a single useful answer | Existing rotation; don't double animate |
| `#how-it-works .platform-block` | Messaging-platform marquee | 02 / Capture: selected chat sources enter a single organized stream | On section reveal |
| `#how-it-works .inline-action` | Search, summarize, daily brief | 03 / Understand: chips transition into searchable project memory | On scroll or deliberate user click |
| `#built-to-work .briefing-preview` | Daily Briefing | 04 / Prioritize: source events map to today’s priority list | On accordion open |
| `#built-to-work details:nth-child(2)` | New Job Log | 05 / Log: message resolves into job/project metadata | On accordion open |
| `#built-to-work details:nth-child(3)` | Instruction Recall | 06 / Recall: decision + timestamp + source chat highlighted | On accordion open |
| `#built-to-work details:nth-child(4)` | Operations / Project Manager | 07 / Review: pending activity turns into owner-approved change | On accordion open |
| Footer | Contact | No animation required | — |

## Visual tokens
- Surface: `#fbfbf7`; text: `#11110f`; muted: `#76766f`; stroke: `#deded6`; restrained accent: `#347d59`.
- Type: use **16 px** uniformly for scene text, including labels and headings. Convey hierarchy via 400/500/700 weight, contrast, line length, and whitespace; **do not override existing live-page typography globally** until reviewed.
- Layout: max scene width 850 px; 8 px spacing scale; 1 px borders; 6–12 px radii; no drop shadows, glass effects, oversized gradients, or decorative illustrations.
- Motion: fast 180 ms (feedback), normal 420 ms (state change), slow 800 ms (narration), easing `cubic-bezier(.22,1,.36,1)`. Stagger 90 ms. No perpetual movement besides optional low-key processing indication.
- Responsive: diagrams reflow into a vertical narrative on narrow screens. Never shrink demo to illegible text or require horizontal scrolling.
- Status: use dashed subdued frames for planned integrations and solid frames for current implemented capabilities. Any demo data must be labeled illustrative.

## Seven scenes — storyboard
1. **Ask:** owner's question types in or appears; key words get a green underline; only one question visible at a time. Reuse existing rotating-question animation rather than stacking another.
2. **Capture:** selectable authorized WhatsApp/SMS/email source chips feed three simple project/labor/delivery rows. Documents/voicemail/meetings only appear as `Planned` unless implemented.
3. **Remember:** one source message goes through a thin curved connector into a knowledge graph with only **Labor**, **Project**, **Delivery**; provide source links to the original event. Fade graph into a clear answer.
4. **Friday payroll:** week view → submitted work → editable worker/date/job/amount table → list of who to pay and why → owner review. Prioritize confirmed entries; disputed or missing evidence remains flagged and never silently approved.
5. **New job log:** demonstrate field message with sender/time/project, extraction candidates, owner confirmation, then one updated activity row; no fake automatic sync.
6. **Instruction recall:** highlight a decision, person, date and its originating message, then show the answer and source citation.
7. **Operations review:** short job activity row with Approve / Reject / Edit; reveal downstream dashboard updates **only after approval**.

## Animation contract
Scenes must be **explanatory, not simulated product evidence**. Each scene has: `id`, `state` (idle/running/paused/complete), `trigger` (scroll/open/click), `duration`, `source`, `status` (available/planned), `fallback` (static), and `reducedMotion` behavior. Every interactive animation has replay or step controls and visible state labels. Provide pause when auto-playing beyond five seconds.

### Minimal markup
```html
<link rel="stylesheet" href="/jasonai/design-system/tokens.css">
<section class="j-scene" aria-label="How messages become project memory">
  <div class="j-scene__canvas j-motion-stagger" data-j-motion="stagger">
    <div class="j-node">WhatsApp · crew submitted 8 hours</div>
    <div class="j-node">Labor · 8 hours · Pending review</div>
    <div class="j-node j-state--verified">Friday payroll · Needs owner approval</div>
  </div>
</section>
<script src="/jasonai/design-system/motion.js" defer></script>
```
The JavaScript uses IntersectionObserver, initializes once, avoids the production page's existing animation classes, and honors `prefers-reduced-motion`.

## Integration protocol
1. Implement scenes in *new modules* under `jasonai/scenes/`; leave the approved hero, marquee, accordion and header markup intact.
2. Import `tokens.css` and `motion.js` into a **staging copy** of the JasonAI page.
3. Replace only the appropriate accordion detail body or supplementary diagram area after visual comparison against the original.
4. Verify desktop 1440 px, tablet 768 px and mobile 390 px; keyboard navigation, source links, no scroll lock, reduced motion.
5. Do not assert support for integrations not currently shipped; distinguish roadmap visually and in adjacent text.

## Implementation priorities
**P0:** Friday payroll and evidence trail, source-to-memory graph. **P1:** daily briefing, instruction recall, job logs. **P2:** operations trends and AI recommendations (clearly planned). Defer ornate graphics until interaction and content are verified.

## Acceptance checks
- Original live page unaffected until scenes are individually approved.
- Every section has a clear story and a static fallback.
- Motion does not alter page height unexpectedly or obstruct controls.
- Colors, spacing, typography and state indicators are reused across scenes.
- Links from source items to evidence are preserved in real UI.
- Animation never implies an action was approved when it was only suggested.
