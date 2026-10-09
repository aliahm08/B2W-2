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
const routes={home:base+"/",show:base+(jason?"/how-it-works/":"/what-we-show/"),know:base+"/scenarios/",flow:base+"/capabilities/"};
const modeName={home:"mode-home",show:"mode-how",know:"mode-insights",flow:"mode-offerings"};
const labels={home:"",show:jason?"How It Works":"What We Show",know:"Scenarios",flow:"Capabilities"};
function templateFor(path){
 const p=canonical(path);
 if(p===base) return "home";
 if(p===base+"/how-it-works"||(!jason&&p===base+"/what-we-show")||(jason&&p===base+"/general-contractors")) return "show";
 if(p===base+"/scenarios"||p===base+"/insights"||(jason&&p===base+"/trust")) return "know";
 return "flow";
}
function home(){
 return '<section class="mission-home">'+data.rows.map((r,i)=>
 '<div class="mission-unit"><p>'+escaped(r[0])+'</p><div class="mission-interlude">'+window.B2WGraphics.home(site,i)+
 '<a class="mission-link" data-template-link="'+(['show','know','flow'][i])+'" href="'+r[2]+'">'+escaped(r[1])+' <span aria-hidden="true">↗</span></a></div></div>').join("")+
 '</section><div class="home-bottom-actions"><span class="home-llc">© 2026 B2W LLC</span><div class="ecosystem-home-footer"><a href="/">B2W ↗</a><a href="/jasonai/">JasonAI ↗</a><a href="/clara/">Clara ↗</a><a href="/contact/" data-contact-open>Contact ↗</a></div></div>';
}
function show(path){
 if(!jason&&window.B2WClaraPortalV5)return window.B2WClaraPortalV5.show();
 const isGC=path.includes("general-contractors");
 const stages=isGC?[
 ["Payments & payroll",[["Illustrative question","Who needs to get paid this week?"],["Example response","Three payments need attention: Jose M. $1,400; NorthStar Supply $3,280; Concrete crew $2,100."],["Example sources","QuickBooks and Excel."]]],
 ["Outstanding payments",[["Illustrative question","Which projects have outstanding payments?"],["Example response","Oak Street Renovation: 18 days; Fairfax Addition: 9 days."],["Example sources","A/R Aging.xlsx and Procore Financials."]]],
 ["Risk & follow-up",[["Illustrative question","Where are areas of risk across all projects?"],["Example response","Permit response overdue (high); material delivery slipped (medium); labor hours above plan (medium)."],["Example sources","Procore, Google Drive and Excel."]]],
 ["Materials & orders",[["Illustrative question","How much do I need to pay for materials?"],["Example response","Current material obligations: $8,460. Due this week: $5,180. Later: $3,280."],["Example sources","Supplier invoices and purchase order log."]]],
 ["Daily owner brief",[["Illustrative question","What needs my attention this morning?"],["Example response","Upcoming payments, delivery updates and unresolved project questions are assembled."],["Owner reviews","The relevant source is available for every proposed action."]]]
 ]:data.stages;
 const walkthrough=jason&&!isGC?(window.B2WJasonHowV4?.render()||""):"";
 return '<section class="subpage">'+walkthrough+(isGC?'<p class="product-intro">For general contractor owners: support for commitments, labor, deliveries and owner approvals.</p>':"")+'<div class="stage-list">'+stages.map((s,i)=>'<section class="stage'+(i===0?" open":"")+'"><button type="button" class="stage-head" aria-expanded="'+(i===0)+'"><span class="stage-number">'+String(i+1).padStart(2,"0")+'</span><span class="stage-title">'+escaped(s[0])+'</span><span class="stage-mark">+</span></button><div class="stage-body"><div class="stage-body-inner"><div class="stage-details">'+s[1].map(d=>'<div class="stage-detail"><span>'+escaped(d[0])+'</span><span>'+escaped(d[1])+'</span></div>').join("")+'</div></div><div class="product-stage-art" aria-hidden="true">'+window.B2WGraphics.stage(site,i)+'</div></div></section>').join("")+'</div><div class="product-links"><a href="'+routes.know+'">Scenarios ↗</a><a href="'+routes.flow+'">Capabilities ↗</a></div></section>';
}
function know(path){
 if(!jason&&window.B2WClaraSamplesV6)return window.B2WClaraSamplesV6.render();
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
 if(!jason&&window.B2WClaraPortalV5)return window.B2WClaraPortalV5.features(data.offerings);
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
 if(!jason)window.B2WClaraSamplesV6?.mount(view);
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