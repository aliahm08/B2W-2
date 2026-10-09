/* Clara V7: selectable jobs, then a narrated transcript → note → estimate.
 * All sample voice text is illustrative. No AI, microphone, or account is connected. */
(()=>{"use strict";
const jobs=window.B2WClaraSampleJobsV6||[];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const money=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(n);
const label=i=>String(i+1).padStart(2,"0");

function viewer(job){
 return '<article class="csample-view" data-current="'+esc(job.id)+'">'+
 '<div class="csample-meta"><span>'+esc(job.kind)+' · anonymized archived estimate</span><span>Illustrative demonstration</span></div>'+
 '<div class="csample-action"><button type="button" data-creplay>Replay sequence ↻</button><button type="button" data-cskip>Show all</button><button type="button" data-cclose>Close ↑</button></div>'+
 '<div class="csample-stages">'+
 '<section class="csample-stage is-visible" data-cphase="transcript">'+
 '<div class="csample-phase-label"><span>01 / Voice note</span><span data-cstatus>Transcribing…</span></div>'+
 '<p class="csample-muted">Simulated transcript. The original job recording was not available.</p>'+
 '<div class="csample-transcript"><span class="csample-type-output" data-ctyped aria-hidden="true"></span>'+
 '<span class="csample-sr-only">Example transcript: '+esc(job.exampleNote)+'</span><span class="csample-cursor" aria-hidden="true"></span></div></section>'+
 '<div class="csample-transfer" data-ctransfer="note" hidden aria-hidden="true"><span>↓</span></div>'+
 '<section class="csample-stage" data-cphase="note" hidden>'+
 '<div class="csample-phase-label"><span>02 / Organized note</span><span>Derived from the illustrative transcript</span></div>'+
 '<div class="csample-organized"><p><strong>'+esc(job.title)+'</strong> · '+esc(job.kind)+'</p>'+
 '<p>'+esc(job.summary)+'</p>'+
 '<div class="csample-organized-lines">'+job.lines.map((line,i)=>
 '<p><span>'+label(i)+'</span><span>'+esc(line.item)+'</span><span>Quantity and rate to confirm</span></p>').join("")+'</div>'+
 '<p class="csample-muted">'+esc(job.review)+'</p></div></section>'+
 '<div class="csample-transfer" data-ctransfer="estimate" hidden aria-hidden="true"><span>↓</span></div>'+
 '<section class="csample-stage" data-cphase="estimate" hidden>'+
 '<div class="csample-phase-label"><span>03 / Editable estimate</span><span>Draft · review required</span></div>'+
 '<p class="csample-muted">Scope rows carried into an estimate. Enter your own quantities and rates to calculate an illustrative subtotal.</p>'+
 '<div class="csample-table"><div class="csample-line csample-cols"><span>Work item</span><span>Quantity</span><span>Rate ($)</span><span>Amount</span></div>'+
 job.lines.map((line,i)=>'<div class="csample-line csample-cols"><span>'+esc(line.item)+'</span>'+
 '<input type="number" min="0" step="any" data-cqty="'+i+'" aria-label="Quantity for '+esc(line.item)+'" placeholder="—">'+
 '<input type="number" min="0" step="any" data-crate="'+i+'" aria-label="Rate for '+esc(line.item)+'" placeholder="—">'+
 '<span data-camount="'+i+'">—</span></div>').join("")+'</div>'+
 '<p class="csample-sum"><strong>Illustrative subtotal</strong><strong data-csum>—</strong></p>'+
 '<p class="csample-muted" data-pricing-note>Rates and quantities are blank because the archived estimate amounts were not verified.</p></section>'+
 '</div>'+
 '<div class="csample-section csample-history"><p><strong>Estimate history</strong> · '+esc(job.provenance)+'</p>'+
 job.revisions.map((item,i)=>'<p class="csample-version"><span>'+label(i)+'</span><span>'+esc(item)+'</span></p>').join("")+'</div>'+
 '</article>';
}
function render(){
 return '<section class="csamples" data-csamples>'+
 '<p class="csample-intro">Choose a sample job to see a voice note turn into an organized scope, then an editable estimate. The transcripts and line items are illustrative, based on archived Clara estimate examples.</p>'+
 '<div class="csample-index" aria-label="Clara sample jobs">'+jobs.map((job,i)=>
 '<button type="button" class="csample-index-item" data-cjob="'+esc(job.id)+'" aria-expanded="false" aria-controls="csample-expanded">'+
 '<span class="csample-index-number">'+label(i)+'</span><span class="csample-index-name"><strong>'+esc(job.title)+'</strong><span>'+esc(job.kind)+'</span></span>'+
 '<span class="csample-index-arrow" aria-hidden="true">↗</span></button>').join("")+'</div>'+
 '<div class="csample-expanded" id="csample-expanded" data-cmain hidden></div>'+
 '<p class="csample-muted csample-bottom">These are website demonstrations, not processed recordings or estimates in a signed-in Clara account.</p></section>';
}
function mount(root=document){
 root.querySelectorAll("[data-csamples]").forEach(box=>{
  if(box.dataset.mounted)return;box.dataset.mounted="1";
  const main=box.querySelector("[data-cmain]");
  let generation=0,handles=[];
  function cancel(){generation++;for(const t of handles)clearTimeout(t);handles=[];}
  function later(fn,ms,run){const t=setTimeout(()=>{if(run===generation)fn()},ms);handles.push(t);}
  function revealAll(job){
   const current=main.querySelector("[data-current]");if(!current||current.dataset.current!==job.id)return;
   const typed=current.querySelector("[data-ctyped]");typed.textContent=job.exampleNote;
   current.querySelector("[data-cstatus]").textContent="Transcript ready";
   current.querySelector(".csample-cursor")?.classList.add("is-done");
   current.querySelector('[data-cphase="note"]').hidden=false;
   current.querySelector('[data-cphase="estimate"]').hidden=false;
   current.querySelector('[data-ctransfer="note"]').hidden=false;
   current.querySelector('[data-ctransfer="estimate"]').hidden=false;
   current.querySelectorAll("[data-cphase]").forEach(node=>node.classList.add("is-visible"));
  }
  function animate(job){
   cancel();
   main.innerHTML=viewer(job);main.hidden=false;
   const run=generation,current=main.querySelector("[data-current]");
   const typed=current.querySelector("[data-ctyped]");
   if(typeof matchMedia==="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches){revealAll(job);return;}
   const transcript=job.exampleNote;
   const maxDuration=2400;
   const delay=Math.max(8,Math.min(22,maxDuration/Math.max(1,transcript.length)));
   let index=0;
   function nextChar(){
    if(generation!==run)return;
    index=Math.min(transcript.length,index+1);
    typed.textContent=transcript.slice(0,index);
    if(index<transcript.length){later(nextChar,delay,run);return;}
    current.querySelector("[data-cstatus]").textContent="Transcript ready";
    current.querySelector(".csample-cursor")?.classList.add("is-done");
    later(()=>{
     current.querySelector('[data-ctransfer="note"]').hidden=false;
     const note=current.querySelector('[data-cphase="note"]');
     note.hidden=false;note.classList.add("is-visible");
    },420,run);
    later(()=>{
     current.querySelector('[data-ctransfer="estimate"]').hidden=false;
     const estimate=current.querySelector('[data-cphase="estimate"]');
     estimate.hidden=false;estimate.classList.add("is-visible");
    },1350,run);
   }
   later(nextChar,170,run);
  }
  function close(){
   cancel();main.hidden=true;main.innerHTML="";
   box.querySelectorAll("[data-cjob]").forEach(btn=>btn.setAttribute("aria-expanded","false"));
  }
  function open(id){
   const job=jobs.find(j=>j.id===id);if(!job)return;
   const current=main.querySelector("[data-current]")?.dataset.current;
   if(!main.hidden&&current===id){close();return;}
   box.querySelectorAll("[data-cjob]").forEach(btn=>btn.setAttribute("aria-expanded",String(btn.dataset.cjob===id)));
   animate(job);
   const reduce=typeof matchMedia==="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;
   main.scrollIntoView?.({behavior:reduce?"auto":"smooth",block:"start"});
  }
  box.addEventListener("click",e=>{
   const jobButton=e.target.closest("[data-cjob]");
   if(jobButton){open(jobButton.dataset.cjob);return;}
   if(e.target.closest("[data-cclose]")){close();return;}
   const current=main.querySelector("[data-current]");if(!current)return;
   const job=jobs.find(j=>j.id===current.dataset.current);if(!job)return;
   if(e.target.closest("[data-cskip]")){cancel();revealAll(job);return;}
   if(e.target.closest("[data-creplay]")){animate(job);return;}
  });
  box.addEventListener("input",e=>{
   if(!e.target.matches("[data-cqty],[data-crate]"))return;
   const current=main.querySelector("[data-current]");
   const job=jobs.find(j=>j.id===current?.dataset.current);if(!job)return;
   let total=0,complete=0;
   job.lines.forEach((line,i)=>{
    const q=current.querySelector('[data-cqty="'+i+'"]').value;
    const rate=current.querySelector('[data-crate="'+i+'"]').value;
    const valid=q!==""&&rate!==""&&Number.isFinite(Number(q)*Number(rate))&&Number(q)>=0&&Number(rate)>=0;
    const amount=valid?Number(q)*Number(rate):null;
    current.querySelector('[data-camount="'+i+'"]').textContent=valid?money(amount):"—";
    if(valid){total+=amount;complete++;}
   });
   current.querySelector("[data-csum]").textContent=complete?money(total):"—";
   current.querySelector("[data-pricing-note]").textContent=complete?"Partial calculation from values entered in this demo. This is not a verified estimate.":"Rates and quantities are blank because the archived estimate amounts were not verified.";
  });
  const requested=new URLSearchParams(location.search).get("job");
  if(jobs.some(j=>j.id===requested))open(requested);
 });
}
window.B2WClaraSamplesV6={render,mount,jobs,viewer};
})();