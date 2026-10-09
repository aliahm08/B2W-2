/* Scripted interactive product walkthroughs for the B2W site and product Capabilities pages.
 * Never connects to WhatsApp, records audio, modifies real ledgers or sends estimates.
 */
(()=>{
"use strict";
const C={
 jasonai:{
  name:"JasonAI",summary:"From a contractor's question to a source-backed owner dashboard.",
  labels:["Question","Selected chat","Reconcile","Friday review"],
  panes:[
  '<div class="v2-scene-heading">Ask like an employee</div><div class="v2-ask-prompt"><span>JasonAI, </span><span class="v2-type-text">who do I need to pay this Friday, why, and what is missing?</span><span class="v2-caret">|</span></div><p class="v2-scene-caption">A question from a general contractor owner</p>',
  '<div class="v2-whatsapp"><div class="v2-app-title"><span class="v2-app-dot"></span> WhatsApp <small>Selected project chat</small></div><div class="v2-wa-line left">Crew lead · Crew A worked four days on Oak Street.</div><div class="v2-wa-line right">Owner · Who is missing from Friday payroll?</div><div class="v2-wa-line left">Crew lead · Crew C worked two days; rate is still unknown.</div><div class="v2-app-meta">Illustrative messages · access chosen by owner</div></div>',
  '<div class="v2-whatsapp agent"><div class="v2-app-title"><span class="v2-app-dot"></span> JasonAI <small>Project context</small></div><div class="v2-wa-line left">Two amounts can be prepared for review. One worker still needs a confirmed rate.</div><div class="v2-wa-line left"><strong>Oak Street</strong><br>Crew A: 4 days reported<br>Crew B: 3 days in an example spreadsheet<br>Crew C: rate missing<br>Sources: selected messages + Excel</div><div class="v2-wa-line right">Owner · Show me who, how much, why, and what to confirm.</div><div class="v2-app-meta">No actions sent automatically</div></div>',
  '<div class="v2-dash"><div class="v2-dash-top"><span>Friday / Payroll review</span><span>3 example entries</span></div><div class="v2-dash-tiles"><div><small>Known amounts</small><b>2 entries</b></div><div><small>Missing evidence</small><b>1 rate</b></div></div><div class="v2-dash-row"><span>Crew A · $1,400 · chat</span><strong>Review</strong></div><div class="v2-dash-row"><span>Crew B · $1,050 · Excel</span><strong>Review</strong></div><div class="v2-dash-row"><span>Crew C · Rate unknown</span><strong>Confirm</strong></div><div class="v2-dash-action"><span>✓ Approve</span><span>✎ Edit</span><span>× Reject</span></div><div class="v2-app-meta">Illustrative only · owner must approve</div></div>'
  ]
 },
 clara:{
  name:"Clara",summary:"Property visit to voice scope, shareable estimate, revisions and chat.",
  labels:["Properties","Voice","Estimate","Versions + Chat"],
  panes:[
  '<div class="v2-scene-heading">All the work across your properties</div><div class="v2-est-app"><div class="v2-dash-top"><span>Property work / Portfolio</span><span>12 properties · example</span></div><div class="v2-property-row"><span>Maple Center</span><small>Exterior repairs · Estimate needed</small></div><div class="v2-property-row"><span>Harbor Building</span><small>Interior fit-out · Review</small></div><div class="v2-property-row"><span>North Plaza</span><small>Roof work · Draft v1</small></div><div class="v2-app-meta">One shared workspace per property</div></div>',
  '<div class="v2-scene-heading">Record the job on site</div><div class="v2-record"><span class="v2-record-dot"></span><div><b>Maple Center · Site visit</b><small>Voice capture simulation · 00:18</small></div></div><div class="v2-wave">'+Array.from({length:28},(_,i)=>'<i style="--bar:'+i+'"></i>').join("")+'</div><p class="v2-scene-caption">“Replace damaged flashing, check 28 feet, include labor and lift…”</p>',
  '<div class="v2-est-app"><div class="v2-dash-top"><span>Maple Center / Estimate</span><span>Draft · v1</span></div><div class="v2-est-line"><span>Flashing replacement</span><span>$1,820</span></div><div class="v2-est-line"><span>Lift and equipment</span><span>$780</span></div><div class="v2-est-line"><span>Labor allowance</span><span>$2,250</span></div><div class="v2-est-total"><span>Illustrative total</span><strong>$4,850</strong></div><div class="v2-app-meta">Scope, quantities and prices require review</div></div>',
  '<div class="v2-est-app"><div class="v2-dash-top"><span>Maple Center / Share & Chat</span><span>Version history</span></div><div class="v2-versions"><span>v1 · Draft</span><span>→</span><strong>v2 · Shared for review</strong></div><div class="v2-chat-line right">Manager · Which version did we share?</div><div class="v2-chat-line left">Clara · Version 2 is shared. The owner’s approval is still pending.</div><div class="v2-app-meta">Property context, revisions and Clara chat · simulated</div></div>'
  ]
 }
};
const html=(product)=>{
 const d=C[product];return '<div class="v2-demo-topline"><span>'+d.name+' / Product walkthrough</span><span class="v2-demo-status">Illustrative demo</span></div><div class="v2-live-panes">'+d.panes.map((body,i)=>'<div class="v2-live-pane" data-phase="'+i+'" aria-hidden="true">'+body+'</div>').join("")+'</div><div class="v2-demo-footer">'+d.labels.map((s,i)=>'<span class="v2-demo-step" data-step="'+i+'"><i></i>'+s+'</span>').join("")+'</div>';
};
const reduced=matchMedia("(prefers-reduced-motion: reduce)");
function frame(node,n){const product=node.dataset.product;if(!C[product])return;const step=reduced.matches?C[product].panes.length-1:n%C[product].panes.length;node.dataset.activePhase=String(step);
 node.querySelectorAll(".v2-live-pane").forEach((e,i)=>{e.classList.toggle("is-active",i===step);e.setAttribute("aria-hidden",String(i!==step))});
 node.querySelectorAll(".v2-demo-step").forEach((e,i)=>e.classList.toggle("is-active",i===step));
}
function mount(root=document){root.querySelectorAll(".v2-live-stage[data-product]").forEach(node=>{if(node.dataset.mounted)return;node.dataset.mounted="1";node.innerHTML=html(node.dataset.product);frame(node,0);})}
setInterval(()=>{if(reduced.matches)return;document.querySelectorAll(".v2-live-stage[data-mounted]").forEach(node=>{if(!node.getClientRects().length)return;const n=Number(node.dataset.activePhase)||0;frame(node,n+1);})},3300);
window.B2WLiveDemos={mount};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>mount());else mount();
})();
