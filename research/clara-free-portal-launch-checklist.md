# Clara free estimator — launch checklist and architectural decisions
Date: 2026-10-09. This file describes future implementation work and must not be presented as deployed functionality.

## What exists now
The B2W static marketing site has the new Clara **What We Show** page, 10-entry **Scenarios** adoption strategy, and 7-card **Features** gallery, all within the existing shared templates. The What We Show page includes a scripted voice-to-estimate product visualization and a link to `https://portal.b2w-ai.com/`. The B2W Capabilities Clara card links to the portal directly. Neither the portal app's DNS availability nor a working microphone/auth/estimate backend has been established. **Do not advertise free public estimating until the next steps pass.**

## Deploy and verify coded MVP
1. Identify the **actual coded Clara estimator MVP repository/path**, its server, runtime, storage, model providers and rate sources. Do not assume the separate B2W proposals portal or the Open WebUI fork contains it.
2. Stand up a standalone deployment (e.g. separate Vercel project if the stack fits serverless, otherwise app host with an API worker). Set required environment secrets on the **server only**; never ship LLM API keys in browser JS.
3. Map `portal.b2w-ai.com` as an application hostname using a DNS CNAME/ALIAS supplied by the host. Verify DNS, valid HTTPS certificate, session cookies and HTTPS redirects before activating public CTA.
4. Keep the estimator as a first-party application on the portal. The B2W site links to it by default. An iframe preview on the B2W marketing page can be reconsidered *after* portal deployment and after explicitly configuring `Content-Security-Policy: frame-ancestors` and cross-site cookie/auth behavior. Avoid embedding sign-in in a third-party iframe; it routinely fails under browser tracking protections.

## Registration, free use, terms
5. Integrate a managed identity provider (Clerk, Supabase Auth, Auth.js or equivalent) with sign-up, sign-in, recovery, session expiry, account removal and rate-limit protection. Always enforce resource ownership in server queries and storage.
6. Present explicit, **unchecked** consent to [Terms of Service] and [Privacy Policy] prior to first use (signup or first sign-in after policy changes). Store `user_id`, `terms_version`, `privacy_version`, `accepted_at` (server timestamp), `consent_source`, and optionally request/IP audit metadata consistent with data minimization. Reject app/API estimation requests without accepted current terms; the UI checkbox alone is insufficient. Obtain legal review of terms, free use policy, content ownership, estimation disclaimers and voice/privacy retention language.
7. Start with a publicly stated free tier and clear per-account usage limits (recording duration, monthly transcription/estimate jobs, storage retention, and supported languages). Apply per-user server-side quotas and abuse protection; do not quietly promise unlimited costly generation.

## Voice-to-estimate reliability
8. On HTTPS, record audio using `navigator.mediaDevices.getUserMedia` + `MediaRecorder`; handle mic permission denial, iOS Safari MIME formats, interrupted capture, stop/retry, max duration, network failure and audio playback.
9. Upload audio via signed server-generated object-storage URLs with user/work-order ownership and sensible retention. Transcribe on the server. Store timestamps, transcript, provenance, and errors; offer users an editable transcript.
10. Extract a typed scope/quantity list from transcript with validation. Flag absent dimensions, unclear trades, and unspecified rate assumptions rather than inventing final prices.
11. Generate *draft* estimate line items from verified inputs and approved rate source(s). Keep quantity/rate/unit/cost calculations deterministic, auditable, and user-editable. Explicitly mark assumptions, exclusions, confidence and source evidence. No estimate should be issued as accurate without a human review action.
12. Save jobs/estimates under an authenticated user's property/work order. Implement version history, comparison of edits, review status, scoped collaborator access, PDF export, and optionally context-aware Clara chat. Protect property information with access checks and signed asset URLs.

## Launch gates
13. Test fresh signup and Terms acceptance; returning login; re-consent after updated terms; microphone capture on iOS and Android; empty/long/noisy audio; pricing missing; quota exceeded; collaboration permissions; PDF output; concurrent revisions; account deletion; and privacy/consent logs.
14. Monitor actual transcriptions, extraction corrections, edit rate, first-estimate completion, repeat usage, user satisfaction and AI infrastructure cost before announcing a free public launch.

## What We Show / Scenarios / Capabilities semantics
- **What We Show**: real product preview with an explicit illustrative-demo label, and the *planned* free portal journey. The live product should open in a first-party portal.
- **Scenarios**: three anonymized sample jobs based on archived Clara estimate artifacts, with illustrative voice-note and draft-scope placeholders. The interactive website sample workspace is public but not an authenticated portal workspace.
- **Features**: functional product feature definitions. Not evidence that all features are shipped.
- **Visual**: shared B2W one-size 15px design rule; Clara mauve / purple / electric blue surfaces; B2W's Capabilities view moved to brighter electric green `#B4FF56`, with dark ink for contrast.

**Deployment owner input needed**: a link to the actual Clara MVP repository or build artifact, and authorization to configure the portal domain/auth/storage/terms. No such credentials were supplied, and none were fabricated.

## Public sample job fixture
The `assets/data/clara-sample-jobs.json` seed contains three anonymized estimate examples (barbershop, shoe-store fit-out, property repair), each mapped to an archived Clara PDF. Quantities, rates and original audio were not available as verified text and are intentionally blank or expressly illustrative. The same sample job records power the website demonstration. When the authenticated portal MVP is identified, import these seed records under a dedicated read-only demo account or template namespace and enforce per-user duplication/ownership; **no portal import has been performed yet**.
