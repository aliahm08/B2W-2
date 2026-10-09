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
 ["An executive secretary for the owner, working with existing conversations without replacing your project manager.","Insights","/jasonai/insights/"],
 ["Turn messages, voice notes and project files into source-backed updates you can review.","Capabilities","/jasonai/capabilities/"]],
 stages:[["Share selected context",[["You choose","Select the WhatsApp chats, messages, files and tools JasonAI can access."],["JasonAI checks","Information belongs to a project without expanding its permissions."],["You retain","Control of the records and channels used."]]],["Build business memory",[["Capture","Connect selected project, labor and delivery updates."],["Reference","Keep each useful fact connected to its source."],["Ask","Find what changed without searching every conversation."]]],["Ask naturally",[["Text or speak","Send questions and voice notes in the way you work."],["Understand","JasonAI summarizes context and highlights uncertainty."],["Respond","Get an answer tied to authorized project information."]]],["Review proposed actions",[["Prepare","Ask for a reply or an update to an existing tool."],["Check","Review the source and proposed change."],["Approve","Decide before consequential messages or changes occur."]]],["Start with a daily brief",[["Collect","Review upcoming decisions, labor commitments and delivery changes from selected sources."],["Prioritize","See what needs the owner's attention and what is waiting on another person."],["Act","Review a concise, source-linked action list before updating tools."]]]],
 notes:[["The owner is the integration layer",["Project updates move through calls, messages and field conversations.","JasonAI is designed to surface the commitments an owner otherwise has to collect manually.","It should complement the project manager rather than replace one."]],["What business memory contains",["Business memory begins with the selected information the owner shares.","Labor, projects and deliveries become linked context, with traceable sources.","Unknown or conflicting information should remain visible for review."]],["Trust and permission",["You decide which conversations, documents and tools to connect.","An action that changes a record or sends a message should be shown for approval.","The intended workflow keeps the owner responsible for the final decision."]],["Sources and uncertainty",["An answer should link back to the message or document that supports it.","Conflicting dates and missing details should be flagged rather than silently resolved.","Owners should be able to inspect the original source before approving an action."]],["A useful daily brief",["A daily brief is organized around commitments, not the order messages arrived.","Payments, delayed deliveries and unanswered client requests can appear together.","The intended result is a short, prioritized list of decisions."]],["Approval history",["Proposed replies and updates should be presented for review.","Each action should identify its source and affected project.","Approved, edited and rejected changes should remain traceable."]]],
 offerings:[
 ["Agent","A secretary in your existing conversations.",["Ask questions, send voice notes and receive project summaries.","Prepare replies with owner review.","Surface unresolved commitments."],"/jasonai/demo/"],
 ["Platform","A working view of the business.",["Connect project information with labor and deliveries.","See the source behind a proposed update.","Review activity before it updates your tools."],"/jasonai/scenarios/"]],
 scenarios:[
 ["A supplier changes delivery","A supplier moves a date in a selected chat. JasonAI identifies the change and prepares the associated project update."],
 ["A crew reports its hours","A lead shares hours by voice note. JasonAI prepares a labor record for the owner to review."],
 ["A client requests an update","A request arrives. JasonAI looks at authorized project context and drafts a source-backed response."],
 ["An invoice arrives in a chat","A subcontractor shares an invoice. JasonAI links it to the job without losing the attachment."],
 ["A task is reported complete","A worker sends photos. JasonAI prepares an approval-ready project update."],
 ["Your daily brief","Upcoming decisions, payments and outstanding questions are assembled from approved sources."]]
},
clara:{
 rows:[
 ["Clara helps project teams complete document work directly from the job site.","How It Works","/clara/how-it-works/"],
 ["Keep company knowledge, pricing and assumptions connected to the work.","Insights","/clara/insights/"],
 ["Capture job details, develop estimates and review editable outputs.","Capabilities","/clara/capabilities/"]],
 stages:[["Start with the job",[["Capture","Describe the work in plain language or start with field notes."],["Bring","Gather available project details, photos and documents."],["Confirm","Clarify the scope before producing an estimate."]]],["Apply company knowledge",[["Use","Apply approved pricing, preferred vendors and company formats."],["Structure","Build a traceable scope and line items."],["Identify","Highlight assumptions and information still needed."]]],["Review the estimate",[["Inspect","Check scope, costs, assumptions and revisions."],["Edit","Keep each proposed document change reviewable."],["Approve","Decide when the estimate is ready to use."]]],["Prepare an editable draft",[["Build","Organize scope, quantities and estimate line items in an editable document."],["Compare","Review labor and material assumptions against the supplied information."],["Mark","Keep unknown values clearly identified for a reviewer."]]],["Revise and approve",[["Review","Check with the project owner or estimator."],["Update","Apply corrections without losing the underlying inputs."],["Use","Approve only when the document is ready for the job."]]]],
 notes:[["A private workspace",["Clara is a concept for focused, project-specific document work.","The workspace can organize field notes, scopes, estimates and proposals.","Availability depends on its implementation and connected sources."]],["Company standards",["Approved pricing, preferred vendors and document formats can shape each draft.","Inputs and assumptions should remain visible so a reviewer can identify gaps.","The team retains authority over the final output."]],["Review before use",["Every generated scope or estimate should remain editable.","Users verify materials, labor, quantities and pricing before approval.","Clara is a concept, not a currently guaranteed production service."]],["Field notes as inputs",["Start with descriptions, measurements, photos and existing notes.","Separate confirmed details from measurements still needed.","These are intended concept workflows, not claims of a live integration."]],["Pricing and assumptions",["Approved price lists and company standards provide a consistent starting point.","Quantities, materials and labor rates remain editable.","Estimate assumptions should be explicit."]],["Document history",["Drafts and revisions need clear review points.","Teams should see what changed between drafts.","Final outputs remain subject to approval."]]],
 offerings:[
 ["Capture and structure","Start with what the field already knows.",["Describe a job in plain language.","Organize notes, photos and source documents.","Develop a working scope for review."],"/clara/how-it-works/"],
 ["Estimate and review","Apply company standards to a proposed output.",["Consider approved pricing and preferred vendors.","Check quantities, assumptions and revisions.","Keep deliverables editable before approval."],"/clara/insights/"]]
}};
const data=copy[site];let activeNotes=data.notes;const view=document.getElementById("productView"),brand=document.querySelector(".site-header .brand"),tray=document.getElementById("mobileTray"),menu=document.querySelector(".menu-toggle"),footer=document.querySelector(".footer"),currentPage=document.getElementById("currentPage");
const canonical=path=>(path.replace(/\/+$/,"")||"/");
const escaped=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const routes={home:base+"/",show:base+"/how-it-works/",know:base+"/insights/",flow:base+"/capabilities/"};
const modeName={home:"mode-home",show:"mode-how",know:"mode-insights",flow:"mode-offerings"};
const labels={home:"",show:"How It Works",know:"Insights",flow:"Capabilities"};
function templateFor(path){
 const p=canonical(path);
 if(p===base) return "home";
 if(p===base+"/how-it-works"||(jason&&p===base+"/general-contractors")) return "show";
 if(p===base+"/insights"||(jason&&p===base+"/trust")) return "know";
 return "flow";
}
function home(){
 return '<section class="mission-home">'+data.rows.map((r,i)=>
 '<div class="mission-unit"><p>'+escaped(r[0])+'</p><div class="mission-interlude">'+window.B2WGraphics.home(site,i)+
 '<a class="mission-link" data-template-link="'+(['show','know','flow'][i])+'" href="'+r[2]+'">'+escaped(r[1])+' <span aria-hidden="true">↗</span></a></div></div>').join("")+
 '</section><div class="home-bottom-actions"><span class="home-llc">© 2026 B2W LLC</span><div class="ecosystem-home-footer"><a href="/">B2W ↗</a><a href="/jasonai/">JasonAI ↗</a><a href="/clara/">Clara ↗</a><a href="/contact/" data-contact-open>Contact ↗</a></div></div>';
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
 return '<section class="subpage">'+(isGC?'<p class="product-intro">For general contractor owners: support for commitments, labor, deliveries and owner approvals.</p>':"")+'<div class="stage-list">'+stages.map((s,i)=>'<section class="stage'+(i===0?" open":"")+'"><button type="button" class="stage-head" aria-expanded="'+(i===0)+'"><span class="stage-number">'+String(i+1).padStart(2,"0")+'</span><span class="stage-title">'+escaped(s[0])+'</span><span class="stage-mark">+</span></button><div class="stage-body"><div class="stage-body-inner"><div class="stage-details">'+s[1].map(d=>'<div class="stage-detail"><span>'+escaped(d[0])+'</span><span>'+escaped(d[1])+'</span></div>').join("")+'</div></div><div class="product-stage-art" aria-hidden="true">'+window.B2WGraphics.stage(site,i)+'</div></div></section>').join("")+'</div><div class="product-links"><a href="'+routes.know+'">Insights ↗</a><a href="'+routes.flow+'">Capabilities ↗</a></div></section>';
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
 return '<div class="field-workspace is-empty" id="field-workspace"><aside class="field-library"><nav aria-label="Insights">'+notes.map((n,i)=>'<button class="field-item" type="button" data-note="'+i+'" aria-pressed="false"><span class="field-number">'+String(i+1).padStart(2,"0")+'</span><span>'+escaped(n[0])+'</span></button>').join("")+'</nav></aside><div class="product-note-hover" aria-hidden="true"></div><div class="field-reader" id="field-reader"><button class="mobile-reader-back" type="button">← All insights</button><div id="active-note"></div></div></div>';
}
function flow(path){
 const p=canonical(path);
 if(p.endsWith("/demo")) return demo();
 const choices=p.endsWith("/scenarios")&&jason?[["Project communications","Changes across suppliers, crews and clients.",data.scenarios.slice(0,3).map(s=>s[0]+" — "+s[1]),"/jasonai/demo/"],["Owner review","Documents, task confirmations and daily briefings.",data.scenarios.slice(3).map(s=>s[0]+" — "+s[1]),"/jasonai/demo/"]]:data.offerings;
 return '<div class="offerings-layout">'+choices.map((c,i)=>'<article class="offering-card"><button class="offering-trigger" type="button" aria-expanded="false" aria-controls="product-feature-'+i+'"><span class="offering-title">'+escaped(c[0])+' <span aria-hidden="true">+</span></span><span class="offering-desc">'+escaped(c[1])+'</span><span class="product-card-art" aria-hidden="true">'+window.B2WGraphics.flow(site,i)+'</span></button><div class="offering-reveal" id="product-feature-'+i+'" aria-hidden="true"><ul class="product-flow-list">'+c[2].map(s=>'<li>'+escaped(s)+'</li>').join("")+'</ul><p><a href="'+c[3]+'">Explore further ↗</a></p></div></article>').join("")+'</div><div class="product-links"><a href="'+routes.show+'">How It Works ↗</a><a href="'+routes.know+'">Insights ↗</a>'+(jason?'<a href="/jasonai/scenarios/">Scenarios ↗</a><a href="/jasonai/demo/">Interactive demo ↗</a>':'')+'</div>';
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
 '<article class="offering-card"><div class="offering-title">Review with your source</div><div class="product-card-art" aria-hidden="true">'+window.B2WGraphics.flow(site,1)+'</div><p class="offering-desc">The owner can confirm, edit or reject the proposed update. This demonstration does not connect to live tools.</p><div class="product-links"><a href="/jasonai/scenarios/">Scenarios ↗</a><a href="'+routes.flow+'">Capabilities ↗</a></div></article></div>';
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
 const color=template==="home"?(jason?"#11150f":"#f7f1f4"):template==="show"?"#ffffff":template==="know"?"#252828":jason?(scenarios?"#e7773d":demoRoute?"#ffffff":"#dedfdf"):"#d9cbd4";
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