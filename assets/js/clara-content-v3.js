/* Clara V3 content. The template renders arrays without fixed item-count rules.
 * All examples describe product concepts, not verified live integrations. */
(()=>{
"use strict";
window.B2WClaraContentV3={
rows:[
 ["Every property creates work that deserves a reliable, shareable estimate.","How It Works","/clara/how-it-works/"],
 ["Understand the challenges across visits, budgets, approvals, and multiple properties.","Scenarios","/clara/scenarios/"],
 ["One place to capture, estimate, revise, share, and follow up.","Capabilities","/clara/capabilities/"]
],
stages:[
 ["Choose the property and the job",[
  ["Property","Select an existing property or establish a new property record."],
  ["Work","Start a job for repairs, upgrades, turnover, or maintenance."],
  ["Context","Keep contacts, past estimates, and site information associated with that property."]
 ]],
 ["Capture the site visit by voice",[
  ["Record","Describe the work in plain language while walking the location."],
  ["Document","Add measurements, photos, and source notes where available."],
  ["Clarify","Keep uncertain dimensions and missing details visible for review."]
 ]],
 ["Build a structured scope",[
  ["Interpret","Turn the recording into a proposed list of tasks, trades, and materials."],
  ["Organize","Link those items to the correct property and specific job."],
  ["Confirm","Correct transcription errors and scope assumptions before costing."]
 ]],
 ["Prepare the estimate",[
  ["Price","Use approved rates and supplier information only when they are available."],
  ["Review","Verify quantities, labor allowances, and exclusions."],
  ["Edit","Produce an estimate document that remains editable and traceable to its inputs."]
 ]],
 ["Share with the right people",[
  ["Send","Share the chosen estimate version with a property manager, owner, or contractor."],
  ["Comment","Collect questions and requested scope changes."],
  ["Protect","Keep drafts and approvals distinct from a finalized quote."]
 ]],
 ["Track each version",[
  ["Compare","See what changed between the original estimate and later revisions."],
  ["History","Keep the date, reviewer, and reason for each update."],
  ["Resolve","Know which version has been shared and which still needs a decision."]
 ]],
 ["Stay current through Clara chat",[
  ["Ask","Ask questions within the context of the property and current job."],
  ["Find","Retrieve the relevant scope, estimate version, and pending review item."],
  ["Follow up","Bring unresolved work into the next conversation without reconstructing the history."]
 ]]
],
notes:[
 ["A new repair request across a property portfolio",[
  "A property manager oversees multiple sites and receives recurring repair requests across different locations.",
  "Each request needs its own job record, scope, estimate, responsible contacts, and review status rather than another disconnected PDF.",
  "Clara's proposed workflow keeps the property and job visible from the initial request through the latest estimate. Illustrative scenario."
 ]],
 ["The walkthrough generates a voice note",[
  "A field worker visits a storefront and describes damaged flashing, measurements, and access needs aloud.",
  "The voice recording is turned into a draft scope; unconfirmed measurements remain marked as questions.",
  "The estimator reviews the captured work before applying rates or sharing a quote. Illustrative scenario."
 ]],
 ["Tenant turnover requires several trades",[
  "A vacant suite needs paint, minor electrical work, flooring repairs, and cleaning.",
  "Separate work items can belong to one property and one turnaround effort, with assumptions and pricing reviewed individually.",
  "Clara would organize the combined estimate without losing each trade's details. Illustrative scenario."
 ]],
 ["A property has more than one active estimate",[
  "A building may need roofing work while a separate suite needs a tenant improvement estimate.",
  "Each estimate must be attached to its own job even though both belong to the same property.",
  "The property workspace should show the right status and version for every job. Illustrative scenario."
 ]],
 ["A measurement is missing before pricing",[
  "A site recording mentions a damaged area without confirming its exact size.",
  "Guessing the quantity would turn an uncertain note into a misleading price.",
  "Clara should flag the missing dimension and hold the draft for review before the final estimate. Illustrative scenario."
 ]],
 ["Two stakeholders review the same proposal",[
  "A property manager shares an estimate with the building owner and an outside contractor.",
  "Feedback about timing, costs, and scope may arrive in different messages.",
  "The team needs one version history so nobody treats a superseded draft as the approved document. Illustrative scenario."
 ]],
 ["A quote is revised after a site visit",[
  "After a follow-up visit, a contractor discovers another affected area.",
  "The estimate needs revised quantities and a clear explanation of what changed from the previous version.",
  "Clara's review workflow should preserve both versions and make the delta easy to inspect. Illustrative scenario."
 ]],
 ["One repair appears across several properties",[
  "The same property team is evaluating similar maintenance work at multiple locations.",
  "They may want consistent scope language while keeping site-specific quantities, labor, and access requirements.",
  "Reusable structure can save effort without copying one property's assumptions into another. Illustrative scenario."
 ]],
 ["The owner asks which estimate was shared",[
  "A stakeholder asks which proposal is currently awaiting approval.",
  "The answer depends on the property, job, recipient, and most recently shared version.",
  "Clara chat should retrieve that version context and identify any outstanding decisions. Illustrative scenario."
 ]],
 ["An urgent repair is not the same as an approved job",[
  "A leak requires immediate assessment, but permission to investigate is not necessarily permission to proceed with every repair.",
  "The team needs to distinguish the inspection scope, estimated remediation, and approved work.",
  "Clara should keep those stages and approvals explicit. Illustrative scenario."
 ]],
 ["A property manager needs an audit trail",[
  "Months after a repair, someone needs to understand why a scope and price changed.",
  "The relevant recording, measurements, estimate drafts, and reviewer comments must remain attached to the job.",
  "A traceable history is more useful than a single final PDF. Illustrative scenario."
 ]],
 ["A portfolio-wide question belongs in one place",[
  "A manager asks which properties have estimates awaiting feedback.",
  "The information spans jobs, estimate versions, stakeholders, and due dates.",
  "A property-aware conversation can summarize pending work while keeping every answer linked to its underlying record. Illustrative scenario."
 ]]
],
offerings:[
 ["Property and job workspace","A shared record of what needs attention across multiple buildings.",[
   "Organize buildings, spaces, and jobs by property.",
   "Keep estimates, contacts, and source documents with each job.",
   "Track what is open, waiting for review, or approved."
  ],"/clara/scenarios/"],
 ["Voice-to-scope capture","Describe the job on site without starting with a blank form.",[
   "Record a walkthrough and retain the original input.",
   "Draft tasks, materials, and measurements from the description.",
   "Flag unknowns before they become cost assumptions."
  ],"/clara/how-it-works/"],
 ["Editable estimating","Move from a checked scope into a proposal you can review.",[
   "Build line items for labor, materials, and equipment.",
   "Apply approved price information where available.",
   "Keep assumptions and exclusions clear to the reviewer."
  ],"/clara/how-it-works/"],
 ["Sharing and review","Send a specific version to the people making the decision.",[
   "Identify recipients and what was shared.",
   "Capture comments, requested changes, and approval state.",
   "Keep the previous version accessible."
  ],"/clara/scenarios/"],
 ["Version control","Understand how an estimate changes across its lifetime.",[
   "Compare successive drafts.",
   "Record changes and who requested them.",
   "Distinguish a draft from the approved version."
  ],"/clara/scenarios/"],
 ["Clara chat","Carry property and estimate context into the next question.",[
   "Ask which jobs are awaiting an estimate or response.",
   "Locate the latest scope and shared version for a property.",
   "Surface outstanding decisions without losing source context."
  ],"/clara/scenarios/"]
]
};
})();