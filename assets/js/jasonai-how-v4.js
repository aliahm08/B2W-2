/* JasonAI How It Works — browser-only example.
   Never reads accounts, files or messages. No data is transmitted or stored.
   All channels and document choices in this demonstration are illustrative;
   production integrations must be confirmed separately. */
(()=>{
"use strict";
const messaging=["WhatsApp","SMS","Voicemail inbox","Email","Telegram"];
const documents=["Excel","Drawings","Photos"];
const examples=[
 {person:"Crew A",work:"Oak Street · four days",amount:1400,source:"WhatsApp",reason:"Crew lead reported four days. At an example rate of $350/day, proposed pay is $1,400.",issue:""},
 {person:"Crew B",work:"Fairfax Addition · three days",amount:1050,source:"Excel",reason:"The example labor sheet lists three days at $350/day.",issue:""},
 {person:"Crew C",work:"Oak Street · two days",amount:null,source:"WhatsApp",reason:"Two days were reported, but the agreed rate is not in the selected records.",issue:"Confirm rate"},
 {person:"Crew D",work:"Main Street · two days",amount:null,source:"SMS",reason:"A text mentions two days of work. The project and rate still need confirmation.",issue:"Confirm job and rate"},
 {person:"Crew E",work:"Harbor Road · one day",amount:null,source:"Voicemail inbox",reason:"A voicemail mentions a workday, but the worker and rate need verification.",issue:"Identify worker and rate"},
 {person:"Crew F",work:"Market Lane · one day",amount:350,source:"Email",reason:"The example email confirms one day at an illustrative $350/day.",issue:""},
 {person:"Crew G",work:"Park Avenue · two days",amount:null,source:"Telegram",reason:"A chat mentions two workdays; the agreed pay rate is missing.",issue:"Confirm rate"}
];
const esc=s=>String(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const option=(name,group,checked)=>'<label class="jhow-source"><input type="checkbox" data-source="'+esc(name)+'" data-group="'+group+'" '+(checked?'checked ':'')+'/><span>'+esc(name)+'</span><span class="jhow-source-mark" aria-hidden="true">+</span></label>';
function render(){
 return '<div class="jhow" data-jhow-demo>'+
 '<p class="jhow-intro">Choose where your project information comes from. Tell JasonAI which rules matter. Start with a complete, reviewable Friday payroll list.</p>'+
 '<div class="jhow-path" aria-label="Example setup sequence"><span>Choose sources</span><span aria-hidden="true">→</span><span>Set rules</span><span aria-hidden="true">→</span><span>Check payroll</span><span aria-hidden="true">→</span><span>Owner approves</span></div>'+
 '<div class="jhow-layout">'+
 '<div class="jhow-inputs">'+
 '<p class="jhow-emphasis">Select the information you want JasonAI to use.</p>'+
 '<fieldset class="jhow-fieldset"><legend>Messages and inboxes</legend><div class="jhow-options">'+messaging.map(s=>option(s,"message",s==="WhatsApp")).join("")+'</div></fieldset>'+
 '<fieldset class="jhow-fieldset"><legend>Documents and evidence</legend><div class="jhow-options">'+documents.map(s=>option(s,"document",s==="Excel")).join("")+'</div></fieldset>'+
 '<p class="jhow-notice">Illustrative setup only. No accounts are connected and no files are uploaded here. Availability of individual integrations varies.</p>'+
 '<label class="jhow-rule-label" for="jhow-rule">Describe the rule JasonAI should follow.</label>'+
 '<textarea id="jhow-rule" class="jhow-rule" rows="4" spellcheck="true">Payroll is every Friday. Tell me who needs paying, how much, which days and projects the amount covers, what message or document supports it, and which hours or rates still need checking. Do not mark anything paid without my approval.</textarea>'+
 '<p class="jhow-notice">Your rule stays in this page preview and does not save to an account.</p>'+
 '</div>'+
 '<div class="jhow-preview">'+
 '<div class="jhow-preview-line"><span>Friday payroll · example</span><span class="jhow-status">Not connected</span></div>'+
 '<p class="jhow-recap" data-jhow-recap aria-live="polite"></p>'+
 '<div class="jhow-records" data-jhow-records></div>'+
 '<div class="jhow-payline"><span>Proposed total with known rates</span><strong data-jhow-total>$0</strong></div>'+
 '<div class="jhow-payline"><span>Entries requiring confirmation</span><strong data-jhow-missing>0</strong></div>'+
 '<p class="jhow-rule-preview" data-jhow-rule-preview></p>'+
 '<p class="jhow-notice">Example records only. Hours, rates and source evidence require verification. This is not a payroll system or a payment approval.</p>'+
 '</div></div>'+
 '<div class="jhow-later">'+
 '<p>Once Friday payroll is consistently accurate, JasonAI can start helping you understand patterns, rather than simply collecting updates.</p>'+
 '<div class="jhow-later-grid">'+
 '<p><strong>Next</strong><span>Track hours by worker, project and period. Identify missing entries and changes in workload. Performance should use agreed quality measures, not hours alone.</span></p>'+
 '<p><strong>Later</strong><span>Suggest who may fit an upcoming project, and flag when a rate review may be worthwhile. These remain recommendations for the owner, never automatic staffing or pay decisions.</span></p>'+
 '</div>'+
 '</div></div>';
}
const dollars=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);
function mount(root=document){
 root.querySelectorAll("[data-jhow-demo]").forEach(box=>{
  if(box.dataset.mounted==="1")return;
  box.dataset.mounted="1";
  const inputs=[...box.querySelectorAll('input[data-source]')];
  const rule=box.querySelector("#jhow-rule");
  const list=box.querySelector("[data-jhow-records]");
  const recap=box.querySelector("[data-jhow-recap]");
  const total=box.querySelector("[data-jhow-total]");
  const missing=box.querySelector("[data-jhow-missing]");
  const rulePreview=box.querySelector("[data-jhow-rule-preview]");
  function update(){
   const chosen=new Set(inputs.filter(el=>el.checked).map(el=>el.dataset.source));
   inputs.forEach(el=>el.closest(".jhow-source")?.classList.toggle("is-selected",el.checked));
   const available=examples.filter(item=>chosen.has(item.source));
   const ready=available.filter(x=>!x.issue);
   const unresolved=available.filter(x=>!!x.issue);
   const amount=ready.reduce((sum,x)=>sum+x.amount,0);
   const selectedDocs=documents.filter(name=>chosen.has(name));
   recap.textContent=available.length?
    ready.length+" entries with example amounts · "+unresolved.length+" to clarify before Friday. Source evidence is shown for each.":
    "No sample payroll entries in the selected sources. Add a messaging source or Excel to explore the example.";
   list.innerHTML=available.map(item=>
    '<div class="jhow-record">'+
      '<div class="jhow-record-top"><strong>'+esc(item.person)+'</strong><span>'+ (item.amount===null?"Amount missing":dollars(item.amount))+'</span></div>'+
      '<p>'+esc(item.work)+'</p>'+
      '<p>'+esc(item.reason)+'</p>'+
      '<div class="jhow-record-bottom"><span>'+esc(item.source)+' · example</span><span class="'+(item.issue?"jhow-unresolved":"jhow-pending")+'">'+esc(item.issue||"Owner review")+'</span></div>'+
    '</div>').join("") || '<p class="jhow-empty">Nothing to reconcile from these example sources.</p>';
   total.textContent=dollars(amount);
   missing.textContent=String(unresolved.length);
   const statement=rule.value.trim();
   rulePreview.textContent=statement?"Your rule: "+statement:"Add the rule you want JasonAI to prioritize.";
   box.dataset.hasRule=String(Boolean(statement));
   box.dataset.hasSources=String(chosen.size>0);
   const docNote=box.querySelector(".jhow-notice-selected");
   if(docNote)docNote.remove();
   if(selectedDocs.some(x=>x!=="Excel")){
    const p=document.createElement("p");
    p.className="jhow-notice jhow-notice-selected";
    p.textContent=selectedDocs.filter(x=>x!=="Excel").join(" and ")+" may provide supporting project context. This example has no payroll entries from those files.";
    recap.after(p);
   }
  }
  inputs.forEach(input=>input.addEventListener("change",update));
  rule.addEventListener("input",update);
  update();
 });
}
window.B2WJasonHowV4={render,mount,messaging,documents,stages:[["Choose the sources you authorize",[["Conversations","Select WhatsApp, SMS, voicemail inbox, email or Telegram as relevant. Connections are permission-based; not every integration is available today."],["Documents","Choose Excel sheets, drawings and photos when they help verify the work."],["Boundaries","JasonAI should never read sources you have not authorized."]]],["Tell JasonAI the rules that matter",[["Friday","Payroll is due every Friday. Prepare the list before the owner signs off."],["Evidence","For each person, connect days worked, job, agreed rate and the message or record that explains the proposed amount."],["Exceptions","Flag uncertain hours, unmatched names, missing rates and possible duplicates rather than guessing."]]],["Reconcile labor against the project",[["Collect","Link authorized updates to the worker, date and project."],["Compare","Check messages against selected sheets and supporting records."],["Surface","Keep every amount traceable to its source and identify what is still unknown."]]],["Review the Friday payroll list",[["Prepare","Show who is owed, how much, which jobs and days are included, and why."],["Resolve","Highlight missing evidence so a worker or entry is not overlooked."],["Approve","The owner reviews and approves. A suggested amount is not a completed payment."]]],["Later, learn from accurate records",[["Patterns","Compare hours, attendance and workload by worker and project over time."],["Performance","Use agreed quality, safety and reliability measures, not hours alone, before evaluating performance."],["Recommendations","Future analysis may suggest crew assignments and when pay rates merit review. Owners make the decisions."]]]]};
})();