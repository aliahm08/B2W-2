# B2W V2 — SMB Field Notes

36 source-based entries: research, design decisions, requirements, audits, pilot discussions and illustrative scenarios. They are not 36 distinct verified customer interviews. Dates are qualified when unknown. Product demonstrations are scripted, not live backends.

## 1. A contractor built his own system

**Category:** Workflow · **Evidence type:** Observed discussion

**Who:** A contractor owner encountered during B2W discovery.

**What:** A long-running internal app connected field information, invoices and QuickBooks.

**When:** During the 2026 SMB discovery work; precise interview date unrecorded.

**Where:** Inside the contractor's existing field-to-office workflow.

**Why:** A persistent custom workaround is evidence that off-the-shelf handoffs did not fully serve the business.

**How:** Integrate selected records and sources without proposing to replace the system the business already trusts.

**Source:** B2W original field note and prior discovery conversation

---

## 2. The owner is the integration layer

**Category:** Workflow · **Evidence type:** Research synthesis

**Who:** Owner-operators coordinating crews, clients, vendors and office staff.

**What:** They reconcile calls, texts, invoice records and schedules themselves.

**When:** Recurring across B2W's 2026 contractor research; dates vary.

**Where:** Between jobsites, phones, accounting software and office processes.

**Why:** The operational burden is rebuilding context, not necessarily adding another PM.

**How:** Maintain source-linked project memory and surface the small set of decisions requiring owner action.

**Source:** B2W original field note; executive-assistant positioning

---

## 3. Buyer and operator may differ

**Category:** Discovery · **Evidence type:** Observed research pattern

**Who:** An owner who controls spending and the office or PM staff who actually manage the workflow.

**What:** An owner may not know the details of a daily information bottleneck.

**When:** B2W 2026 discovery period; individual dates unrecorded.

**Where:** Discovery calls with small-business decision makers.

**Why:** Testing only with the purchaser can miss the process owner's real difficulty.

**How:** Ask who performs the job, observe their workflow, and include them in pilot requirements.

**Source:** B2W original field note

---

## 4. When Procore already works

**Category:** Product fit · **Evidence type:** Observed discussion

**Who:** A contractor already using Procore.

**What:** Existing software was sufficient for the issues initially discussed.

**When:** During a B2W contractor discovery conversation; date unrecorded.

**Where:** Contractor project-management workflow.

**Why:** Additional software is unjustified unless a real gap remains outside the current platform.

**How:** Ask what still happens manually or outside Procore; do not manufacture a reason to displace it.

**Source:** B2W original field note

---

## 5. Good enough is good enough

**Category:** Product fit · **Evidence type:** Observed discussion

**Who:** A contractor using Housecall Pro.

**What:** The business reported its existing setup was working without an identifiable recurring gap.

**When:** During B2W outreach; exact date unrecorded.

**Where:** An existing field-service software workflow.

**Why:** Automation still has setup and trust costs even when an idea seems clever.

**How:** Qualify real repeated pain before proposing any migration or assistant.

**Source:** B2W original field note

---

## 6. Interest is not ownership

**Category:** Discovery · **Evidence type:** Research synthesis

**Who:** Small-business prospects showing initial curiosity about AI.

**What:** Interest in a demonstration did not yet define a workflow owner, baseline or success criteria.

**When:** During early B2W sales and pilot discovery in 2026.

**Where:** Introductory conversations and prospective pilot planning.

**Why:** An exploratory meeting is not evidence of adoption or readiness.

**How:** Identify responsible users and agree on a measurable decision or follow-up outcome before piloting.

**Source:** B2W original field note

---

## 7. Work is spread across channels

**Category:** Communication · **Evidence type:** Product requirement

**Who:** GC owners, coordinators and crew leads.

**What:** Job updates arrive through WhatsApp, SMS, email, calls, photos and spreadsheets.

**When:** Throughout 2026 customer discovery and dashboard planning.

**Where:** On jobsites and across the contractor's phone and office tools.

**Why:** Decisions become hard to trace when each source is a separate silo.

**How:** Capture permissioned updates with source metadata, then organize them by job.

**Source:** B2W Contractor Dashboard — Product Requirements

---

## 8. Organize by project, not by app

**Category:** Information architecture · **Evidence type:** Product requirement

**Who:** Contractor owners and project staff.

**What:** A worker, vendor, receipt or message can relate to a single job across different tools.

**When:** Defined during B2W dashboard design in 2026.

**Where:** Project views, communications, labor records and files.

**Why:** Searching by app forces the owner to remember where a fact appeared.

**How:** Resolve source events to project, person and activity records with cross-links.

**Source:** B2W Contractor Dashboard — Product Requirements

---

## 9. Pay workers by the job and day

**Category:** Labor · **Evidence type:** Pilot discovery

**Who:** A local GC pilot coordinating field workers.

**What:** Payroll information was tracked by worker, job and day rather than as a single general expense.

**When:** Discussed during the SB Contractors pilot in 2026; exact date not recorded.

**Where:** Field payroll and job-cost tracking.

**Why:** Labor due is not trustworthy if hours or daily rates are not tied to the right project.

**How:** Create reviewable entries by worker and project, then calculate totals only from verified records.

**Source:** SB Contractors pilot discussion

---

## 10. Labor rates need verification

**Category:** Labor · **Evidence type:** Pilot discovery

**Who:** Contractor owners, payroll coordinators and subcontracted workers.

**What:** The pilot described daily pay often around $350–$500 per worker; rates and assignments can vary.

**When:** B2W contractor pilot planning in 2026.

**Where:** Crew messages, payroll notes and job records.

**Why:** Extracted hours cannot alone determine who is owed what.

**How:** Show pay period, worker, rate, project and evidence before allowing an approval.

**Source:** B2W pilot notes and dashboard discussions

---

## 11. Make unpaid commitments obvious

**Category:** Finance · **Evidence type:** Design decision

**Who:** GC owners paying crews, suppliers and subcontractors.

**What:** The desired daily view centers on whom to pay, how much and whether it is overdue.

**When:** During October 2026 JasonAI operations dashboard iteration.

**Where:** Owner's daily to-do screen and labor register.

**Why:** A generic activity feed hides the actual financial decision.

**How:** List payment obligations with overdue tags and expandable source records, without coloring every amount.

**Source:** JasonAI Operations Dashboard design conversation

---

## 12. Receivables are not cash

**Category:** Finance · **Evidence type:** Prototype audit

**Who:** Small contractors using a financial dashboard.

**What:** Sample dashboard sums confused open invoices with collected money and projected balances.

**When:** Identified in contractor-dashboard reconciliation notes in 2026.

**Where:** Cash, accounts receivable and account-flow screens.

**Why:** Showing unpaid receivables as available funds may mislead the owner.

**How:** Separate collected cash, scheduled payments and forecasts from unpaid A/R, with shared statuses.

**Source:** contractor-dashboard-direction.md

---

## 13. Account status must agree with its source

**Category:** Finance · **Evidence type:** Prototype audit

**Who:** Contractor office staff and bookkeepers.

**What:** A demo ACH appeared collected in one view while its source said it was scheduled.

**When:** 2026 prototype review; the demonstration referenced a September payment.

**Where:** Financial summary versus underlying source communication.

**Why:** Conflicting statuses undermine trust even in a demo.

**How:** Keep one record identity and status across card, ledger, event and source history.

**Source:** contractor-dashboard-direction.md

---

## 14. A dashboard subset must be labeled

**Category:** Data quality · **Evidence type:** Prototype audit

**Who:** Contractor owners looking at project and worker counts.

**What:** Demo records showed fewer workers and projects than headline totals.

**When:** Identified during 2026 dashboard prototype review.

**Where:** Summary metrics versus table/register records.

**Why:** Inventing missing records to reconcile counts would hide errors.

**How:** Show when a register is a subset and derive all counts from a canonical dataset.

**Source:** contractor-dashboard-direction.md

---

## 15. The source belongs next to the action

**Category:** Trust · **Evidence type:** Design decision

**Who:** Owners reviewing updates drafted from field communications.

**What:** Activity changes need sender identity, original messages and attachments visible with the proposal.

**When:** JasonAI dashboard revision, October 2026.

**Where:** Activity feed with approve, reject and edit controls.

**Why:** Approving a summary without the original evidence can propagate a wrong detail.

**How:** Keep source link, person, project, suggested edit and explicit owner decision together.

**Source:** JasonAI Operations Dashboard conversation

---

## 16. A daily brief should be a decision queue

**Category:** Operations · **Evidence type:** Product requirement

**Who:** Owner-operators with multiple active jobs.

**What:** Briefing should surface labor dues, delayed deliveries, unresolved questions and commitments.

**When:** B2W dashboard and JasonAI planning, September–October 2026.

**Where:** Owner's Today view or existing communication channel.

**Why:** Another chronological digest does not explain what should happen next.

**How:** Group owner decisions and deadlines, not just events in arrival order.

**Source:** B2W Dashboard Requirements and JasonAI brief iteration

---

## 17. Clients want visible timelines

**Category:** Client communications · **Evidence type:** Prior work example

**Who:** Customers relying on a project dashboard or web app.

**What:** Feedback requested a timeline of changes and upcoming stages; the feature proved useful in earlier product work.

**When:** Recounted in an October 2026 interview about prior dashboard delivery.

**Where:** Customer-facing dashboard and project updates.

**Why:** A clear sequence provides context that raw cards and status labels do not.

**How:** Make dated commitments and progress changes visible, sourced and comprehensible.

**Source:** User's product example from October 2026 interview

---

## 18. Photos should stay attached to progress

**Category:** Project tracking · **Evidence type:** Product requirement

**Who:** Workers sending site photos and owners confirming milestones.

**What:** A photo can be evidence of completed work, damage, delivered materials or an inspection state.

**When:** Specified during 2026 dashboard requirements discussions.

**Where:** Jobsite camera/WhatsApp and project record.

**Why:** A progress conclusion without its photo and sender is difficult to verify.

**How:** Preserve original attachment, time and source alongside any inferred activity.

**Source:** B2W Contractor Dashboard — Product Requirements

---

## 19. A delivery change can affect three teams

**Category:** Suppliers · **Evidence type:** Illustrative scenario

**Who:** Supplier, field crew, contractor owner and client.

**What:** Moving a material arrival date can change crew plans and client commitments.

**When:** 2026 JasonAI communications scenarios; example illustrates intended behavior.

**Where:** Selected supplier chat and related project record.

**Why:** A changed date matters because of its consequences across the job.

**How:** Propose source-linked schedule and follow-up updates for owner approval.

**Source:** JasonAI scenario design

---

## 20. Invoice documents need a job context

**Category:** Documents · **Evidence type:** Product requirement

**Who:** Subcontractors, administrators and the GC owner.

**What:** Invoices and receipts can arrive as attachments separate from job-cost records.

**When:** 2026 contractor product discussions.

**Where:** Email, WhatsApp, QuickBooks and job documents.

**Why:** Without job mapping and status, invoices get duplicated or lost.

**How:** Extract vendor, amount and job, flag uncertainty, and keep the original file.

**Source:** B2W dashboard requirements and prior contractor discovery

---

## 21. Permits and inspections are commitments

**Category:** Project tracking · **Evidence type:** Illustrative scenario

**Who:** GC owners, inspectors, schedulers and office staff.

**What:** Permits, responses and inspections can remain unresolved across threads.

**When:** During 2026 contractor-risk demo planning.

**Where:** Project communications and document timelines.

**Why:** A missed prerequisite can block work despite otherwise healthy progress.

**How:** Track owner, expected date, last update and evidence; flag only actionable exceptions.

**Source:** JasonAI contractor scenarios

---

## 22. Users should text an assistant like a coworker

**Category:** Interface · **Evidence type:** Product direction

**Who:** Busy owners who already work in messages.

**What:** The product direction is to ask questions and issue commands by text or voice note.

**When:** JasonAI positioning work in 2026.

**Where:** WhatsApp and connected owner-facing channels.

**Why:** Requiring a new PM system creates an additional burden.

**How:** Let authorized messages and voice notes initiate contextual lookup and proposed updates.

**Source:** JasonAI product definition

---

## 23. The memory is permission-scoped

**Category:** Trust · **Evidence type:** Product direction

**Who:** The business owner choosing authorized sources.

**What:** The agent knows only the business information explicitly selected for it.

**When:** JasonAI positioning in 2026.

**Where:** Selected chats, files and existing business tools.

**Why:** Automatic access expansion breaks user expectations and trust.

**How:** Maintain allowed sources, per-project context and transparent citations.

**Source:** JasonAI product definition

---

## 24. Use current tools before replacing them

**Category:** Integration · **Evidence type:** Product direction

**Who:** GC owners with QuickBooks, spreadsheets or Procore.

**What:** Customers may already trust one or more tools for final records.

**When:** B2W discovery and architecture work in 2026.

**Where:** Accounting tools, spreadsheets, project software and messaging.

**Why:** A replacement platform raises adoption costs and data risks.

**How:** Use approval-gated updates in existing tools while preserving each system of record.

**Source:** B2W original field notes; feature request tracker

---

## 25. Not all requested AI functions are shipped

**Category:** Scope · **Evidence type:** Roadmap status

**Who:** Contractor prospects and B2W implementation team.

**What:** A feature tracker lists unified projects, Q&A, briefs, connections and approvals as pending.

**When:** Recorded in the General Contractor AI Feature Request Tracker.

**Where:** Roadmap planning and internal product approvals.

**Why:** A concept demo must not be confused with a connected production system.

**How:** Label scripted interactions as demonstrations and document planned versus implemented behaviors.

**Source:** General_Contractor_AI_Feature_Request_Tracker.docx

---

## 26. Five-second comprehension matters

**Category:** Usability · **Evidence type:** Design principle

**Who:** Experienced SMB owners comfortable with spreadsheets but not BI dashboards.

**What:** Users should immediately identify the screen, important change and next action.

**When:** Defined in dashboard requirements during 2026.

**Where:** Desktop/mobile overview and project screens.

**Why:** Dense dashboards create work instead of reducing it.

**How:** Use familiar rows, filters, totals, progressive disclosure and visible evidence.

**Source:** B2W Contractor Dashboard — Product Requirements

---

## 27. Keep different registers in sync

**Category:** Information architecture · **Evidence type:** Implementation plan

**Who:** Office administrators and business owners.

**What:** Payroll, payables, receivables, activity and calendar should reference the same records.

**When:** Contractor dashboard reconciliation plan, 2026.

**Where:** Four finance screens and related record panels.

**Why:** Duplicated values and mismatched IDs create contradictory answers.

**How:** Use shared typed records so all views open the same source and status.

**Source:** contractor-dashboard-direction.md

---

## 28. Commercial properties generate repeated scopes

**Category:** Commercial real estate · **Evidence type:** Product direction

**Who:** CRE property managers coordinating work across a portfolio.

**What:** Each site visit may generate new maintenance or improvement work requiring a reliable estimate.

**When:** B2W CRE positioning and Clara direction, 2026.

**Where:** Multiple properties and recurring site visits.

**Why:** Scattered estimates make comparison, review and follow-up difficult.

**How:** Keep job scopes, documents, estimates and chat tied to each property.

**Source:** B2W commercial real-estate positioning and Clara request

---

## 29. Voice capture helps field estimates

**Category:** Estimating · **Evidence type:** Design prototype

**Who:** Field staff, contractors and property managers.

**What:** An onsite description contains quantities, work items, materials and gaps.

**When:** Clara estimator design history, 2026.

**Where:** Property walkthrough / mobile voice capture.

**Why:** Manual retyping of a job introduces omissions and slows quoting.

**How:** Transcribe a recording into a reviewable scope with unknown values flagged.

**Source:** clara-design-history.md

---

## 30. The scope should become a real estimate

**Category:** Estimating · **Evidence type:** Design prototype

**Who:** Estimator and person approving the budget.

**What:** The design moves from captured scope to an editable estimate document.

**When:** Clara design evolution, 2026.

**Where:** Clara estimator and document review screen.

**Why:** A polished document matters only if the quantities and prices can be reviewed.

**How:** Build line items from authorized inputs and require human verification of prices.

**Source:** clara-design-history.md

---

## 31. An estimate needs a single clear view

**Category:** Usability · **Evidence type:** Design prototype

**Who:** Property manager or estimator reviewing a bid.

**What:** Clara's early split scope/estimate interface was replaced with a centered estimate document.

**When:** Documented in Clara design versions 1–2.

**Where:** Estimator screen.

**Why:** Competing panels distracted from the cost document and its line items.

**How:** Focus the UI on the document, with progressive access to scope and source detail.

**Source:** clara-design-history.md

---

## 32. Revisions need version history

**Category:** Collaboration · **Evidence type:** Design prototype

**Who:** Property owners, estimators and reviewing stakeholders.

**What:** Shared estimates can be marked up, revised and circulated more than once.

**When:** Clara prototype artifacts and sample annotated estimates in 2026.

**Where:** Estimate PDF drafts and share/review workflows.

**Why:** Reviewers need to know which version incorporates a change.

**How:** Keep versions linked to the same property and work order, with change history.

**Source:** Clara estimate samples and design history

---

## 33. Chat should know which property is in view

**Category:** Collaboration · **Evidence type:** Prototype direction

**Who:** CRE owners, managers and project contributors.

**What:** A follow-up question belongs with the active estimate and the property's prior work.

**When:** Clara prototype design evolution, 2026.

**Where:** Proposed in-frame Clara chat connected to the estimate.

**Why:** Context loss leads to wrong-property follow-up or repeated explanations.

**How:** Open chat with property/estimate context and review unresolved updates in one workspace.

**Source:** clara-design-history.md

---

## 34. Collaborators should approve the final draft

**Category:** Workflow · **Evidence type:** Design requirement

**Who:** Estimator, owner and property manager.

**What:** A preliminary scope or estimate may need edits from multiple people.

**When:** Clara team design discussions and annotated sample documents, 2026.

**Where:** Shared estimate and version review.

**Why:** Sharing a draft does not make it approved or accurate.

**How:** Record versions, reviewers, outstanding questions and explicit final sign-off.

**Source:** Clara annotated estimate artifacts

---

## 35. A discovery call starts with the real process

**Category:** Discovery · **Evidence type:** Research method

**Who:** Local contractor owners and the B2W sales team.

**What:** The research script begins by asking how project information is handled, not by pitching AI.

**When:** B2W local outreach planning, 2026.

**Where:** Phone calls to contractors in Northern Virginia.

**Why:** Leading with a solution can bias what the prospect says.

**How:** Ask what actually happens, what works, who feels friction and whether follow-up is welcome.

**Source:** Script - Pain Point Discovery

---

## 36. Operations pain must survive qualification

**Category:** Discovery · **Evidence type:** Research method

**Who:** Contractor who has an established system but still chases missing updates.

**What:** Even with Procore or other tools, the open question is whether people enter job information on time.

**When:** Documented in the B2W discovery script, 2026.

**Where:** Contractor calls and office follow-up.

**Why:** An unmet handoff can exist despite good software, but it needs verification.

**How:** Explore existing workarounds; avoid pitching without a specific persistent gap.

**Source:** Script - Pain Point Discovery
