/* One route-to-template engine for JasonAI and Clara; B2W supplies the styles. */
(()=>{
"use strict";
const site=document.body.dataset.product;
if(!["jasonai","clara"].includes(site)) return;
const base="/"+site;
const jason=site==="jasonai";
const copy={
jasonai:{
 rows:[
 ["JasonAI remembers the details from the project conversations you choose to share.","How It Works","/jasonai/how-it-works/"],
 ["An executive secretary for the owner, working with existing conversations without replacing your project manager.","Scenarios","/jasonai/scenarios/"],
 ["Turn messages, voice notes and project files into source-backed updates you can review.","Capabilities","/jasonai/capabilities/"]],
 stages:[["Share selected context",[["You choose","Select the WhatsApp chats, messages, files and tools JasonAI can access."],["JasonAI checks","Information belongs to a project without expanding its permissions."],["You retain","Control of the records and channels used."]]],["Build business memory",[["Capture","Connect selected project, labor and delivery updates."],["Reference","Keep each useful fact connected to its source."],["Ask","Find what changed without searching every conversation."]]],["Ask naturally",[["Text or speak","Send questions and voice notes in the way you work."],["Understand","JasonAI summarizes context and highlights uncertainty."],["Respond","Get an answer tied to authorized project information."]]],["Review proposed actions",[["Prepare","Ask for a reply or an update to an existing tool."],["Check","Review the source and proposed change."],["Approve","Decide before consequential messages or changes occur."]]],["Start with a daily brief",[["Collect","Review upcoming decisions, labor commitments and delivery changes from selected sources."],["Prioritize","See what needs the owner's attention and what is waiting on another person."],["Act","Review a concise, source-linked action list before updating tools."]]]],
 notes:[["The owner's executive secretary",["A contractor owner reconciles WhatsApp updates, calls, labor commitments and decisions; this is not a need for another project manager.","JasonAI follows selected conversations, remembers commitments and prepares the owner for decisions while field staff retain their responsibilities.","Design insight: sell attention and follow-through, not a replacement PM."]],["Selective access, not omniscience",["Owners select which messages, groups, voice notes and files JasonAI may use; other conversations stay outside its context.","Before answering, the assistant needs to link messages to the right people and projects without silently expanding permissions.","Design insight: source selection is the foundation of trust."]],["Business memory has three anchors",["Work information arrives in scattered messages: a worker reports hours, a supervisor confirms progress, or a supplier moves a date.","Owner-facing business memory organizes facts around only projects, labor and deliveries, each linked to its original source.","Design insight: useful memory is smaller and more traceable than a transcript."]],["Labor commitments need review",["In the contractor pilot, payroll was tracked by worker, project and day. Crew messages may omit rates and exceptions.","JasonAI prepares labor entries, but the owner verifies hours, attribution and amounts before approving or marking payments made.","Design insight: extract first, reconcile second, act only after approval."]],["Changed delivery dates are decisions",["A supplier reports a delay in a selected conversation, potentially affecting crews, milestones and promises to clients.","JasonAI attaches the original message to a project, identifies consequences and proposes an update instead of silently changing the schedule.","Design insight: surface effects and uncertainty, not just a date."]],["A daily brief is a decision queue",["An owner needs a short list of who to pay, which jobs changed and which messages require replies—not a chronological transcript.","The owner reviews source-backed suggestions with approve, reject and edit controls. Current tools remain the system of work.","Design insight: organize each day around commitments requiring decisions."]]],
 offerings:[["Conversation assistant","Ask JasonAI where your contractor work already happens.",["Questions and voice notes in selected WhatsApp context.","Source-backed replies about active jobs.","Proposed messages and follow-ups for owner approval."],"/jasonai/demo/"],["Owner dashboard","Approved conversation updates become a clear operating view.",["Payments, labor and delivery changes organized by project.","Activity with links to original sources.","Approve, edit or reject before records change."],"/jasonai/scenarios/"]],
 scenarios:[
 ["A supplier changes delivery","A supplier moves a date in a selected chat. JasonAI identifies the change and prepares the associated project update."],
 ["A crew reports its hours","A lead shares hours by voice note. JasonAI prepares a labor record for the owner to review."],
 ["A client requests an update","A request arrives. JasonAI looks at authorized project context and drafts a source-backed response."],
 ["An invoice arrives in a chat","A subcontractor shares an invoice. JasonAI links it to the job without losing the attachment."],
 ["A task is reported complete","A worker sends photos. JasonAI prepares an approval-ready project update."],
 ["Your daily brief","Upcoming decisions, payments and outstanding questions are assembled from approved sources."]]
},
clara:{
 rows:[["A portfolio of properties means a constant stream of work to estimate.","How It Works","/clara/how-it-works/"],["Reliable quotes should stay with the property, the people, and their revisions.","Scenarios","/clara/scenarios/"],["Record site work, create estimates, share versions and stay aligned in Clara chat.","Capabilities","/clara/capabilities/"]],
 stages:[["Open the property",[["Locate","Choose a property and the job that needs attention."],["Connect","Keep visits, stakeholders and previous estimates linked to that property."],["Identify","Define what needs pricing before anyone creates a proposal."]]],["Record the site visit",[["Capture","Describe work by voice while walking the property."],["Review","Keep the recording and the information it provides available for checking."],["Clarify","Flag measurements and quantities that are still missing."]]],["Structure the scope",[["Interpret","Turn the recording into a proposed set of work items."],["Organize","Associate line items with the correct property and job."],["Confirm","Check the scope and unclear details before costing."]]],["Build and share the estimate",[["Calculate","Apply approved rates and materials where they exist."],["Prepare","Make the estimate editable, with explicit assumptions."],["Share","Send the version to the appropriate reviewers for feedback."]]],["Control versions in Clara chat",[["Track","Retain each revision and the reason for the change."],["Discuss","Ask Clara chat about the property and its current estimate context."],["Approve","Keep review status visible until a person signs off."]]]],
 notes:[["From a site voice note to scope",["A contractor describes a job or records a voice note on site, including materials, measurements, tasks and unknown details.","Clara's estimator concept turns that information into a structured scope and flags quantities that still need confirmation.","Design insight: capture once, then structure the work for review."]],["A scope becomes an estimate",["The documented Clara design proceeds from voice capture to organized scope to an estimate document.","The estimate is a draft, not an automatically approved quote. Line items remain connected to sources and assumptions.","Design insight: a visible transformation makes the workflow understandable."]],["An estimate deserves one clear view",["The first design put scope beside estimate in a busy split screen. A later version centered the estimate document.","The documented rationale was to reduce clutter and let reviewers focus on essential line items and readable spacing.","Design insight: simplify the screen for document review."]],["Rates and assumptions need confirmation",["Approved price lists, vendors and formats can inform a draft where available; unknown quantities or labor inputs need flags.","The estimator or owner still checks the scope and costs before issuing a proposal. A polished draft is not a verified price.","Design insight: make uncertainty visible and editable."]],["Marked-up estimates belong to the process",["The Clara project has original, marked-up and annotated sample estimates, showing revision as part of document work.","A reviewer should be able to correct line items and see changes between drafts while retaining source context.","Design insight: an estimate remains a working document until approval."]],["From estimate to conversation",["The recorded design plan moves Capture to Scope to Estimate to Chat inside the same browser frame.","A user could discuss the proposed estimate with its context in place. This is a prototype direction, not a confirmed production integration.","Design insight: the next question begins where the document ends."]]],
 offerings:[["Voice-to-estimate","A property walkthrough becomes an editable scope and estimate.",["Voice capture and organized scope.","Rates and quantities clearly marked for review.","A shareable estimate tied to the property."],"/clara/how-it-works/"],["Property collaboration","Keep estimates and conversations together across a portfolio.",["Property-by-property work records.","Revision history when drafts are shared.","Context-aware Clara chat for follow-up."],"/clara/scenarios/"]]
}};
// Clara content is independently extensible; shared template code has no fixed row counts.
if(!jason && window.B2WClaraContentV3) copy.clara=window.B2WClaraContentV3;
if(jason&&window.B2WJasonHowV4){
 copy.jasonai.stages=window.B2WJasonHowV4.stages;
 copy.jasonai.rows[0][0]="Choose your messages, documents and Friday payroll rules. JasonAI prepares a source-backed list showing who to pay, why, and what is missing.";
 copy.jasonai.rows[2][0]="Start with reliable Friday payroll. As accurate records accumulate, explore labor trends and future staffing recommendations.";
}
const data=copy[site];let activeNotes=data.notes;const view=document.getElementById("productView"),brand=document.querySelector(".site-header .brand"),tray=document.getElementById("mobileTray"),menu=document.querySelector(".menu-toggle"),footer=document.querySelector(".footer"),currentPage=document.getElementById("currentPage");
const canonical=path=>(path.replace(/\/+$/,"")||"/");
const escaped=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const routes={home:base+"/",show:base+"/how-it-works/",know:base+"/scenarios/",flow:base+"/capabilities/"};
const modeName={home:"mode-home",show:"mode-how",know:"mode-insights",flow:"mode-offerings"};
const labels={home:"",show:"How It Works",know:"Scenarios",flow:"Capabilities"};
function templateFor(path){
 const p=canonical(path);
 if(p===base) return "home";
 if(p===base+"/how-it-works"||(jason&&p===base+"/general-contractors")) return "show";
 if(p===base+"/scenarios"||p===base+"/insights"||(jason&&p===base+"/trust")) return "know";
 return "flow";
}
function home(){
 return '<section class="mission-home">'+data.rows.map((r,i)=>
 '<div class="mission-unit"><p>'+escaped(r[0])+'</p><div class="mission-interlude">'+window.B2WGraphics.home(site,i)+
 '<a class="mission-link" data-template-link="'+(['show','know','flow'][i])+'" href="'+r[2]+'">'+escaped(r[1])+' <span aria-hidden="true">↗</span></a></div></div>').join("")+
 '</section><div class="home-bottom-actions"><span class="home-llc">© 2026 B2W LLC</span><div class="ecosystem-home-footer"><a href="/">B2W ↗</a><a href="/jasonai/">JasonAI ↗</a><a href="/clara/">Clara ↗</a><a href="/contact/" data-contact-open>Contact ↗</a></div></div>';
}

/* Five-stage JasonAI demo; illustrative local state, no integrations or uploads. */
function interactiveStage(i){
 const stages=[
 '<div class="ix-controls ix-context-controls"><button type="button" class="ix-action" data-ix-action="context">Preview selected context →</button><div class="ix-memory-scene" data-ix-scene hidden aria-label="Animated source to business memory example"><div class="ix-memory-source" data-ix-source-label>Selected sources</div><div class="ix-memory-track"><span class="ix-flow-dot"></span><span class="ix-flow-dot"></span><span class="ix-flow-dot"></span></div><div class="ix-memory-nodes"><span>Project</span><span>Labor</span><span>Delivery</span></div></div><p class="ix-feedback" data-ix-result="context" aria-live="polite"></p></div>',
 '<div class="ix-controls"><span class="ix-caption">Business memory / source-linked example</span><div class="ix-options" role="group" aria-label="Memory categories">'+['Project','Labor','Delivery'].map(n=>'<button type="button" class="ix-choice" data-ix-memory="'+n+'" aria-pressed="false">'+n+'</button>').join('')+'</div><p class="ix-feedback" data-ix-result="memory" aria-live="polite">Select a category to inspect an example.</p></div>',
 '<div class="ix-controls"><label class="ix-upload">Ask JasonAI <input type="text" data-ix-question value="Who do I need to pay on Friday?" maxlength="180"></label><div class="ix-options"><button type="button" class="ix-choice" data-ix-prompt="payroll">Friday payroll</button><button type="button" class="ix-choice" data-ix-prompt="missing">Missing information</button></div><button type="button" class="ix-action" data-ix-action="ask">Ask example assistant →</button><p class="ix-feedback" data-ix-result="ask" aria-live="polite"></p></div>',
 '<div class="ix-controls"><span class="ix-caption">Illustrative proposals / owner approval required</span><div class="ix-review"><span>Crew A · Oak Street · $1,400 · WhatsApp</span><span><button type="button" class="ix-choice" data-ix-review="Crew A" data-decision="approve">Approve</button><button type="button" class="ix-choice" data-ix-review="Crew A" data-decision="reject">Reject</button></span></div><div class="ix-review"><span>Crew B · Fairfax · $1,050 · Excel</span><span><button type="button" class="ix-choice" data-ix-review="Crew B" data-decision="approve">Approve</button><button type="button" class="ix-choice" data-ix-review="Crew B" data-decision="reject">Reject</button></span></div><div class="ix-review"><span>Crew C · Rate missing · Needs review</span><button type="button" class="ix-choice" data-ix-review="Crew C" data-decision="flag">Flag missing rate</button></div><p class="ix-feedback" data-ix-result="review" aria-live="polite">No proposals approved.</p></div>',
 '<div class="ix-controls"><span class="ix-caption">Explore a sample daily owner brief</span><div class="ix-options ix-weekdays" role="group" aria-label="Choose a weekday"><button type="button" class="ix-choice" data-ix-day="Monday" aria-pressed="true">Monday</button><button type="button" class="ix-choice" data-ix-day="Tuesday" aria-pressed="false">Tuesday</button><button type="button" class="ix-choice" data-ix-day="Wednesday" aria-pressed="false">Wednesday</button><button type="button" class="ix-choice" data-ix-day="Thursday" aria-pressed="false">Thursday</button><button type="button" class="ix-choice" data-ix-day="Friday" aria-pressed="false">Friday</button><button type="button" class="ix-choice" data-ix-day="Saturday" aria-pressed="false">Saturday</button><button type="button" class="ix-choice" data-ix-day="Sunday" aria-pressed="false">Sunday</button></div><button type="button" class="ix-action" data-ix-action="brief">Generate owner brief →</button><p class="ix-feedback" data-ix-result="brief" aria-live="polite">Generate a sample owner brief after reviewing proposals.</p><div class="ix-options"><button type="button" class="ix-choice" data-ix-insight="hours">Labor trends</button><button type="button" class="ix-choice" data-ix-insight="exceptions">Exceptions</button><button type="button" class="ix-choice" data-ix-insight="projects">Projects</button></div><p class="ix-feedback" data-ix-result="insight" aria-live="polite">Future insights are illustrative, not live features.</p></div>'
 ];return stages[i]||'';
}
function mountJasonFiveStages(){
 if(!jason||!document.body.classList.contains('mode-how'))return;
 if(!document.getElementById('ix-demo-style')){const s=document.createElement('style');s.id='ix-demo-style';s.textContent='.ix-controls{border-top:1px solid var(--rule);margin-top:20px;padding-top:19px;font-size:var(--size,15px);line-height:1.6}.ix-controls :where(button,input,select,p,span,label){font:inherit;font-size:inherit;line-height:inherit}.ix-caption{display:block;color:var(--muted);margin-bottom:12px}.ix-options{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 14px}.ix-choice,.ix-action{border:1px solid var(--rule);color:var(--ink);background:transparent;padding:9px 13px;min-height:44px;cursor:pointer;border-radius:4px}.ix-choice:hover,.ix-choice[aria-pressed=true]{background:#e8eee7;border-color:#648b6e}.ix-action{background:var(--ink);color:var(--paper);margin:8px 0}.ix-action:hover{opacity:.8}.ix-upload{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:15px 0}.ix-upload :where(input,select){min-height:40px;max-width:100%;padding:7px;border:1px solid var(--rule);background:transparent;color:var(--ink)}.ix-feedback{margin-top:10px;color:var(--muted);overflow-wrap:anywhere}.ix-review{display:flex;gap:12px;justify-content:space-between;align-items:center;border-bottom:1px solid var(--rule);padding:10px 0;flex-wrap:wrap}.ix-review>span:last-child{display:flex;flex-wrap:wrap;gap:6px}.ix-controls button:focus-visible,.ix-controls input:focus-visible,.ix-controls select:focus-visible{outline:2px solid #347d59;outline-offset:2px}@media(max-width:650px){.ix-review{align-items:flex-start}.ix-controls{max-width:100%}}';s.textContent+=' .ix-inline{margin:0;min-width:0}.ix-inline.ix-options{margin:0}.ix-inline input[type=file]{font:inherit;font-size:inherit;max-width:100%;padding:8px;border:1px solid var(--rule)}.ix-context-controls{margin-top:16px}.ix-memory-scene{padding:18px 0 12px;max-width:600px}.ix-memory-scene[hidden]{display:none}.ix-memory-source{font-weight:650;text-align:center;overflow-wrap:anywhere}.ix-memory-track{height:78px;position:relative;display:flex;justify-content:space-around;align-items:center;border-bottom:1px solid var(--rule)}.ix-memory-track:before{content:"";position:absolute;left:50%;top:4px;bottom:0;border-left:1px solid #6b8f77}.ix-flow-dot{width:9px;height:9px;border-radius:50%;background:#347d59;opacity:0}.ix-memory-nodes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:14px}.ix-memory-nodes span{border:1px solid var(--rule);padding:12px 6px;text-align:center;opacity:.5}.ix-playing .ix-flow-dot{animation:ix-drop 1.4s ease-in-out both}.ix-playing .ix-flow-dot:nth-child(2){animation-delay:.25s}.ix-playing .ix-flow-dot:nth-child(3){animation-delay:.5s}.ix-playing .ix-memory-nodes span{animation:ix-reveal .6s ease both;animation-delay:1.1s}.ix-playing .ix-memory-nodes span:nth-child(2){animation-delay:1.3s}.ix-playing .ix-memory-nodes span:nth-child(3){animation-delay:1.5s}@keyframes ix-drop{0%{transform:translateY(-28px);opacity:0}45%{opacity:1}100%{transform:translateY(22px);opacity:0}}@keyframes ix-reveal{to{opacity:1;border-color:#6b8f77;background:#edf3ee}}@media(prefers-reduced-motion:reduce){.ix-playing .ix-flow-dot{animation:none}.ix-playing .ix-memory-nodes span{animation:none;opacity:1}}';s.textContent+=' .ix-weekdays{gap:6px}.ix-weekdays .ix-choice{padding:7px 10px;min-height:40px}.ix-review{padding:6px 0;gap:8px}.ix-review .ix-choice{padding:5px 9px;min-height:34px}.ix-review+.ix-review{margin-top:0}.ix-art-hidden{display:none!important}.ix-art-running{display:block!important;animation:ix-art-enter 1.65s ease-in-out both;transform-origin:left center}@keyframes ix-art-enter{0%{opacity:0;transform:translateX(-18px) scale(.9)}25%{opacity:1}80%{opacity:1;transform:translateX(0) scale(1)}100%{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ix-art-running{animation:none}}';document.head.append(s)}
 const root=document.querySelector('.stage-list');if(!root)return;
 const chosen=new Set(),decisions={};let selectedDay='Monday',sequence=0;const weekdayBriefs={Monday:'Kickoff: review active jobs, crew assignments, and unresolved weekend messages.',Tuesday:'Operations: check material deliveries and confirm upcoming labor commitments.',Wednesday:'Midweek: reconcile reported shifts with project progress and flag discrepancies.',Thursday:'Preparation: resolve missing rates, hours, and documentation before Friday.',Friday:'Payroll: review payment proposals, pending approvals, and unresolved exceptions.',Saturday:'Catch-up: review open jobs, outstanding follow-ups, and next-week planning.',Sunday:'Planning: confirm Monday priorities, crew availability, and upcoming deliveries.'};
 const feedback=(key,message)=>{const n=root.querySelector('[data-ix-result="'+key+'"]');if(n)n.textContent=message};
 root.addEventListener('change',e=>{if(e.target.matches('[data-ix-upload]')){const files=[...e.target.files];const note=root.querySelector('[data-ix-files]');if(note)note.textContent=files.length?files.map(f=>f.name).join(' · ')+' · local only':'Files remain local to this browser; no document content is read.';}});
 const sections=[...root.querySelectorAll('.stage')];sections.forEach((section,i)=>{const control=section.querySelector('.ix-controls');if(!control)return;const graphic=section.querySelector('.product-stage-art');if(graphic){graphic.classList.add('ix-art-hidden');graphic.setAttribute('aria-hidden','true')}if(i===1||i===3){const btn=document.createElement('button');btn.type='button';btn.className='ix-action';btn.dataset.ixAction='animate';btn.textContent=i===1?'Continue with business memory →':'Continue after review →';control.append(btn)}});function playStage(button){const stage=button.closest('.stage');const index=sections.indexOf(stage);if(index<0)return;const graphic=stage.querySelector('.product-stage-art');const token=++sequence;button.disabled=true;if(graphic){graphic.classList.remove('ix-art-hidden');graphic.classList.remove('ix-art-running');void graphic.offsetWidth;graphic.classList.add('ix-art-running')}const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;setTimeout(()=>{if(token!==sequence||!root.isConnected)return;button.disabled=false;if(index<sections.length-1){stage.classList.remove('open');stage.querySelector('.stage-head').setAttribute('aria-expanded','false');const next=sections[index+1];next.classList.add('open');next.querySelector('.stage-head').setAttribute('aria-expanded','true');next.querySelector('.stage-head').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}},reduce?0:1700)}
 root.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.ixDay){selectedDay=b.dataset.ixDay;root.querySelectorAll('[data-ix-day]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));feedback('brief',selectedDay+': '+weekdayBriefs[selectedDay]+' Illustrative only.');return}
  if(b.dataset.ixAction==='animate'){playStage(b);return}
  if(b.dataset.ixSource){const v=b.dataset.ixSource;chosen.has(v)?chosen.delete(v):chosen.add(v);b.setAttribute('aria-pressed',String(chosen.has(v)));return}
  if(b.dataset.ixMemory){root.querySelectorAll('[data-ix-memory]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const examples={Project:'Oak Street · active renovation · source: selected crew chat',Labor:'Crew A · four days reported · source: WhatsApp',Delivery:'Supplier delivery delayed · needs owner confirmation'};feedback('memory',examples[b.dataset.ixMemory]);return}
  if(b.dataset.ixPrompt){const field=root.querySelector('[data-ix-question]');field.value=b.dataset.ixPrompt==='payroll'?'Who do I need to pay this Friday?':'What information is missing from payroll?';return}
  if(b.dataset.ixReview){decisions[b.dataset.ixReview]=b.dataset.decision;root.querySelectorAll('[data-ix-review="'+b.dataset.ixReview+'"]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));feedback('review',Object.entries(decisions).map(([k,v])=>k+': '+(v==='flag'?'needs follow-up':v)).join(' · '));return}
  if(b.dataset.ixInsight){root.querySelectorAll('[data-ix-insight]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const m={hours:'Example: Crew A worked four reported days; Crew B worked three. Week-over-week comparisons are planned.',exceptions:'Crew C needs a confirmed rate. No payment should be finalized without owner review.',projects:'Oak Street and Fairfax Addition have example labor updates from selected sources.'};feedback('insight',m[b.dataset.ixInsight]);return}
  if(b.dataset.ixAction==='context'){const files=root.querySelector('[data-ix-upload]').files.length;const scene=root.querySelector('[data-ix-scene]');const source=scene.querySelector('[data-ix-source-label]');source.textContent=(chosen.size?[...chosen].join(' · '):'No messages selected')+(files?' · '+files+' local file(s)':'');scene.hidden=false;scene.classList.remove('ix-playing');void scene.offsetWidth;scene.classList.add('ix-playing');feedback('context','Illustrative flow: authorized sources → project, labor and delivery memory. No file processing or live connections.');playStage(b);return}
  if(b.dataset.ixAction==='ask'){const q=root.querySelector('[data-ix-question]').value.trim();feedback('ask',q?(q.toLowerCase().includes('missing')?'Example response: Crew C has no confirmed pay rate. Review the source before approving.':'Example response: Crew A $1,400 and Crew B $1,050 are pending owner approval; Crew C needs a confirmed rate.'):'Enter a question first.');if(q)playStage(b);return}
  if(b.dataset.ixAction==='brief'){const day=selectedDay;const approved=['Crew A','Crew B'].filter(x=>decisions[x]==='approve');feedback('brief',day+' owner brief: '+weekdayBriefs[day]+' '+(approved.length?'Demo-approved: '+approved.join(', ')+'. ':'No sample payments approved. ')+'Crew C remains unresolved. No real actions sent.');playStage(b);}
 });
}

function show(path){
 const isGC=path.includes("general-contractors");
 const stages=isGC?[
 ["Payments & payroll",[["Illustrative question","Who needs to get paid this week?"],["Example response","Three payments need attention: Jose M. $1,400; NorthStar Supply $3,280; Concrete crew $2,100."],["Example sources","QuickBooks and Excel."]]],
 ["Outstanding payments",[["Illustrative question","Which projects have outstanding payments?"],["Example response","Oak Street Renovation: 18 days; Fairfax Addition: 9 days."],["Example sources","A/R Aging.xlsx and Procore Financials."]]],
 ["Risk & follow-up",[["Illustrative question","Where are areas of risk across all projects?"],["Example response","Permit response overdue (high); material delivery slipped (medium); labor hours above plan (medium)."],["Example sources","Procore, Google Drive and Excel."]]],
 ["Materials & orders",[["Illustrative question","How much do I need to pay for materials?"],["Example response","Current material obligations: $8,460. Due this week: $5,180. Later: $3,280."],["Example sources","Supplier invoices and purchase order log."]]],
 ["Daily owner brief",[["Illustrative question","What needs my attention this morning?"],["Example response","Upcoming payments, delivery updates and unresolved project questions are assembled."],["Owner reviews","The relevant source is available for every proposed action."]]]
 ]:data.stages;
 const walkthrough="";
 return '<section class="subpage">'+walkthrough+(isGC?'<p class="product-intro">For general contractor owners: support for commitments, labor, deliveries and owner approvals.</p>':"")+'<div class="stage-list">'+stages.map((s,i)=>'<section class="stage'+(i===0?" open":"")+'"><button type="button" class="stage-head" aria-expanded="'+(i===0)+'"><span class="stage-number">'+String(i+1).padStart(2,"0")+'</span><span class="stage-title">'+escaped(s[0])+'</span><span class="stage-mark">+</span></button><div class="stage-body"><div class="stage-body-inner"><div class="stage-details">'+s[1].map((d,k)=>'<div class="stage-detail"><span>'+escaped(d[0])+'</span>'+(jason&&!isGC&&i===0&&k===0?'<div class="ix-options ix-inline" role="group" aria-label="Communication sources">'+['WhatsApp','SMS','Email','Telegram'].map(n=>'<button type="button" class="ix-choice" data-ix-source="'+n+'" aria-pressed="false">'+n+'</button>').join('')+'</div>':jason&&!isGC&&i===0&&k===1?'<div class="ix-inline"><input type="file" aria-label="Attach sample documents" data-ix-upload multiple accept=".csv,.txt,.pdf,.xlsx,.xls,.png,.jpg,.jpeg,.doc,.docx"><p class="ix-feedback" data-ix-files>Files remain local to this browser; no document content is read.</p></div>':'<span>'+escaped(d[1])+'</span>')+'</div>').join("")+'</div>'+(jason&&!isGC?interactiveStage(i):'')+'</div><div class="product-stage-art" aria-hidden="true">'+window.B2WGraphics.stage(site,i)+'</div></div></section>').join("")+'</div><div class="product-links"><a href="'+routes.know+'">Insights ↗</a><a href="'+routes.flow+'">Capabilities ↗</a></div></section>';
}
function know(path){
 const notes=path.includes("/trust")?[
 ["Secure, private technology",["We use secure, private technology.","The owner chooses what project information is available to JasonAI.","Access and consequential actions should be controlled."]],
 ["No sale of personal data",["We never sell personal data.","The original Trust statement is retained here as a product commitment.","Permission and source visibility are central to the proposed workflow."]],
 ["Pay for quality",["We believe in paying for quality.","A useful assistant should be accountable for source quality and reviewable outcomes.","Owner approval remains part of the design."]],
 ["Permission by source",["Choose the conversations or files to share.","The intended design should not silently expand access.","Keep the owner responsible for permissions."]],
 ["Evidence with each update",["An important proposed change should point to the supporting message or document.","A reviewer needs to distinguish known facts from inferred ones.","A proposed draft is not a confirmed record."]],
 ["Review before action",["JasonAI should seek approval before consequential changes or external messages.","The owner can edit or reject a proposal.","The accountable person retains the final decision."]]
 ]:data.notes;activeNotes=notes;
 return '<div class="field-workspace is-empty" id="field-workspace"><aside class="field-library"><nav aria-label="Scenarios">'+notes.map((n,i)=>'<button class="field-item" type="button" data-note="'+i+'" aria-pressed="false"><span class="field-number">'+String(i+1).padStart(2,"0")+'</span><span>'+escaped(n[0])+'</span></button>').join("")+'</nav></aside><div class="product-note-hover" aria-hidden="true"></div><div class="field-reader" id="field-reader"><button class="mobile-reader-back" type="button">← All scenarios</button><div id="active-note"></div></div></div>';
}
function productWalkthrough(site){return '<section class="v2-product-embedded-demo"><h2 class="v2-embedded-title">See '+(site==="jasonai"?"JasonAI":"Clara")+' in action</h2><div class="v2-live-stage" data-product="'+site+'" aria-label="Illustrative product walkthrough"></div></section>';}
function flow(path){
 const p=canonical(path);
 if(p.endsWith("/demo")) return demo();
 const choices=data.offerings;
 return '<div class="offerings-layout">'+choices.map((c,i)=>'<article class="offering-card"><button class="offering-trigger" type="button" aria-expanded="false" aria-controls="product-feature-'+i+'"><span class="offering-title">'+escaped(c[0])+' <span aria-hidden="true">+</span></span><span class="offering-desc">'+escaped(c[1])+'</span></button><div class="offering-reveal" id="product-feature-'+i+'" aria-hidden="true"><ul class="product-flow-list">'+c[2].map(s=>'<li>'+escaped(s)+'</li>').join("")+'</ul><p><a href="'+c[3]+'">Explore further ↗</a></p></div></article>').join("")+'</div><div class="product-links"><a href="'+routes.show+'">How It Works ↗</a><a href="'+routes.know+'">Scenarios ↗</a>'+(jason?'<a href="/jasonai/demo/">Interactive demo ↗</a>':'')+'</div>'+productWalkthrough(site);
}
const demoFrames=[
 ["01 / Source","A selected crew message says framing is finished and three workers stayed late."],
 ["02 / Memory","JasonAI connects the update to the project and available labor information."],
 ["03 / Proposal","A reviewable project update is prepared; the hours need confirmation."],
 ["04 / Approval","The owner checks the source before approving or editing the change."]];
let demoStep=0;
function demo(){
 return '<div class="offerings-layout">'+
 '<article class="offering-card"><div class="offering-title">From message to decision</div><div class="product-card-art" aria-hidden="true">'+window.B2WGraphics.flow(site,0)+'</div><div class="product-demo"><p id="demoNumber"></p><p id="demoText"></p><div class="product-demo-controls"><button type="button" id="demoBack">Previous</button><button type="button" id="demoNext">Next →</button></div></div></article>'+
 '<article class="offering-card"><div class="offering-title">Review with your source</div><div class="product-card-art" aria-hidden="true">'+window.B2WGraphics.flow(site,1)+'</div><p class="offering-desc">The owner can confirm, edit or reject the proposed update. This demonstration does not connect to live tools.</p><div class="product-links"><a href="'+routes.flow+'">Capabilities ↗</a></div></article></div>';
}
function updateDemo(){const a=document.getElementById("demoNumber");if(!a)return; a.textContent=demoFrames[demoStep][0];document.getElementById("demoText").textContent=demoFrames[demoStep][1];document.getElementById("demoBack").disabled=demoStep===0;document.getElementById("demoNext").textContent=demoStep===3?"Restart ↻":"Next →";}
function closeMenu(restore=false){
 const was=tray.classList.contains("open");
 tray.classList.remove("open"); tray.inert=true; tray.setAttribute("aria-hidden","true");
 document.body.classList.remove("mobile-nav-open");
 document.documentElement.classList.remove("mobile-nav-open");
 menu.setAttribute("aria-expanded","false");
 menu.setAttribute("aria-label","Open navigation");
 menu.querySelectorAll("span")[0].textContent="Menu";menu.querySelectorAll("span")[1].textContent="+";
 if(restore&&was)menu.focus();
}
function render(){
 const path=canonical(location.pathname);
 const template=templateFor(path);
 document.body.classList.remove("mode-home","mode-how","mode-insights","mode-offerings","mode-scenarios","mode-demo");
 document.body.classList.add("product-"+site,modeName[template]);
 const scenarios=path.endsWith("/scenarios"),demoRoute=path.endsWith("/demo");
 if(scenarios)document.body.classList.add("mode-scenarios");
 if(demoRoute)document.body.classList.add("mode-demo");
 const claraColors={home:"#C7AABD",show:"#F6F0F4",know:"#34263F",flow:"#2563FF"};
 const color=!jason?claraColors[template]:
   template==="home"?"#11150f":
   template==="show"?"#ffffff":
   template==="know"?(scenarios?"#e7773d":"#252828"):
   demoRoute?"#ffffff":"#dedfdf";
 document.documentElement.style.backgroundColor=color;
 document.querySelector('meta[name="theme-color"]').setAttribute("content",color);
 currentPage.textContent=labels[template];
 document.querySelectorAll("[data-template-link]").forEach(a=>{if(a.dataset.templateLink===template){a.setAttribute("aria-current","page");a.classList.add("active")}else{a.removeAttribute("aria-current");a.classList.remove("active")}});
 document.title=(template==="home"?"":labels[template]+" · ")+(jason?"JasonAI":"Clara")+" by B2W";
 if(template==="home")view.innerHTML=home();
 else if(template==="show")view.innerHTML=show(path);
 else if(template==="know")view.innerHTML=know(path);
 else view.innerHTML=flow(path);
 closeMenu();
 demoStep=0;updateDemo();
 window.B2WLiveDemos?.mount(view);
 if(jason)window.B2WJasonHowV4?.mount(view);
 mountJasonFiveStages();
 if(location.hash&&(location.hash==="#capabilities"||location.hash==="#how-it-works")){const dest=location.hash==="#capabilities"?routes.flow:routes.show;history.replaceState(null,"",dest);render();}
}
let navigating=false;
async function go(url){
 if(navigating)return;navigating=true;
 const reduced=matchMedia("(prefers-reduced-motion:reduce)").matches;
 const before=brand.getBoundingClientRect();
 const oldHome=document.body.classList.contains("mode-home");
 try{
  if(!reduced&&view.animate){const exit=view.animate([{opacity:1,clipPath:"inset(0 0 0 0)"},{opacity:0,clipPath:"inset(0 0 100% 0)"}],{duration:280,easing:"cubic-bezier(.65,0,.35,1)",fill:"forwards"});await exit.finished.catch(()=>{});exit.cancel();}
  history.pushState(null,"",url);render();window.scrollTo(0,0);
  const after=brand.getBoundingClientRect(),newHome=document.body.classList.contains("mode-home");
  if(!reduced&&oldHome!==newHome&&brand.animate){const flip=brand.animate([{transform:"translate("+(before.left-after.left)+"px,"+(before.top-after.top)+"px)"},{transform:"translate(0,0)"}],{duration:560,easing:"cubic-bezier(.16,1,.3,1)"});await flip.finished.catch(()=>{});}
  if(!reduced&&view.animate){const arrival=view.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:360,easing:"cubic-bezier(.16,1,.3,1)"});await arrival.finished.catch(()=>{});}
 }finally{navigating=false;}
}
/* Like B2W Insights, briefly reveal a custom graphic when a library item is hovered or focused. */
function hoverNote(node){
 const workspace=document.getElementById("field-workspace");
 const tray=workspace?.querySelector(".product-note-hover");
 if(!workspace||!tray||!workspace.classList.contains("is-empty"))return;
 if(!node){tray.replaceChildren();tray.classList.remove("is-visible");return}
 if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;
 const i=Number(node.dataset.note);
 if(!Number.isInteger(i)||!activeNotes[i])return;
 tray.innerHTML=window.B2WGraphics.note(site,i);
 tray.classList.add("is-visible");
}
view.addEventListener("pointerover",e=>{
 const note=e.target.closest("[data-note]");
 if(note)hoverNote(note);
});
view.addEventListener("focusin",e=>{
 const note=e.target.closest("[data-note]");
 if(note)hoverNote(note);
});
view.addEventListener("pointerleave",()=>hoverNote(null));
view.addEventListener("focusout",e=>{
 if(!view.contains(e.relatedTarget))hoverNote(null);
});
view.addEventListener("click",e=>{
 const b=e.target.closest(".stage-head");
 if(b){const s=b.closest(".stage"),open=s.classList.toggle("open");b.setAttribute("aria-expanded",String(open));if(open&&innerWidth<=780)view.querySelectorAll(".stage").forEach(other=>{if(other!==s){other.classList.remove("open");other.querySelector(".stage-head").setAttribute("aria-expanded","false")}});return;}
 const note=e.target.closest("[data-note]");
 if(note){const index=Number(note.dataset.note),workspace=document.getElementById("field-workspace"),entry=activeNotes[index];view.querySelectorAll(".field-item").forEach(a=>a.setAttribute("aria-pressed",String(a===note)));workspace.classList.remove("is-empty","reveal-content");document.getElementById("active-note").innerHTML='<div class="field-panel"><div class="field-hero"><div class="field-art">'+window.B2WGraphics.note(site,index)+'</div><p class="field-caption">'+escaped(entry[0])+'</p></div><div class="field-text">'+entry[1].map((p,i)=>'<p style="--line-number:'+i+'">'+escaped(p)+'</p>').join("")+'</div></div>';requestAnimationFrame(()=>workspace.classList.add("reveal-content"));return;}
 if(e.target.closest(".mobile-reader-back")){const workspace=document.getElementById("field-workspace");workspace.classList.add("is-empty");workspace.classList.remove("reveal-content");view.querySelectorAll(".field-item").forEach(a=>a.setAttribute("aria-pressed","false"));return;}
 const card=e.target.closest(".offering-trigger");
 if(card){const parent=card.closest(".offering-card"),open=parent.classList.toggle("is-open");card.setAttribute("aria-expanded",String(open));parent.querySelector(".offering-reveal").setAttribute("aria-hidden",String(!open));return;}
 if(e.target.closest("#demoBack")){demoStep=Math.max(0,demoStep-1);updateDemo();return;}
 if(e.target.closest("#demoNext")){demoStep=(demoStep+1)%demoFrames.length;updateDemo();}
});
menu.addEventListener("click",()=>{const open=!tray.classList.contains("open");tray.classList.toggle("open",open);tray.inert=!open;tray.setAttribute("aria-hidden",String(!open));document.body.classList.toggle("mobile-nav-open",open);document.documentElement.classList.toggle("mobile-nav-open",open);menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation":"Open navigation");menu.querySelectorAll("span")[0].textContent=open?"Close":"Menu";menu.querySelectorAll("span")[1].textContent=open?"×":"+";if(open)tray.querySelector("a")?.focus();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&tray.classList.contains("open")){e.preventDefault();closeMenu(true)}});
document.querySelector(".mobile-menu-shade")?.addEventListener("click",()=>closeMenu(true));
window.addEventListener("resize",()=>{if(innerWidth>980)closeMenu()});
document.addEventListener("click",e=>{
 const a=e.target.closest('a[href]'); if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==="_blank"||a.hasAttribute("data-contact-open"))return;
 const dest=new URL(a.href,location.href);
 if(dest.origin!==location.origin||!canonical(dest.pathname).startsWith(base))return;
 e.preventDefault();
 if(canonical(dest.pathname)===canonical(location.pathname)){closeMenu();return;}
 go(dest.pathname+dest.search+dest.hash);
});
window.addEventListener("popstate",()=>{render();window.scrollTo(0,0)});
render();
})();