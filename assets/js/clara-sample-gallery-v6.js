/* Browser-only Clara sample workspace, seeded from public-safe estimate examples. */
(()=>{"use strict";
const jobs=window.B2WClaraSampleJobsV6||[];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const money=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(n);
function viewer(job){
 return '<div class="csample-view" data-current="'+esc(job.id)+'">'+
 '<div class="csample-meta"><span>Clara / Sample workspace</span><span>Preloaded example · no sign-in</span></div>'+
 '<p class="csample-name"><strong>'+esc(job.title)+'</strong> · '+esc(job.kind)+'</p>'+
 '<p>'+esc(job.intro)+'</p>'+
 '<p class="csample-provenance">'+esc(job.provenance)+'</p>'+
 '<div class="csample-section"><p><strong>Sample voice note</strong> · Illustrative</p><p class="csample-note">“'+esc(job.exampleNote)+'”</p><p class="csample-muted">'+esc(job.noteDisclaimer)+'</p></div>'+
 '<div class="csample-section"><p><strong>Draft scope and estimate</strong></p><p>'+esc(job.summary)+'</p>'+
 '<div class="csample-table"><div class="csample-line csample-cols"><span>Work item</span><span>Quantity</span><span>Rate ($)</span><span>Amount</span></div>'+
 job.lines.map((line,i)=>'<div class="csample-line csample-cols"><span>'+esc(line.item)+'</span>'+
 '<input type="number" min="0" step="any" data-cqty="'+i+'" aria-label="Quantity for '+esc(line.item)+'" placeholder="—">'+
 '<input type="number" min="0" step="any" data-crate="'+i+'" aria-label="Rate for '+esc(line.item)+'" placeholder="—">'+
 '<span data-camount="'+i+'">—</span></div>').join("")+'</div>'+
 '<p class="csample-sum"><strong>Calculated sample subtotal</strong><strong data-csum>—</strong></p>'+
 '<p class="csample-muted" data-pricing-note>Enter quantities and rates to explore the calculation. Original amounts are not reproduced.</p></div>'+
 '<div class="csample-section"><p><strong>Estimate versions</strong></p>'+
 job.revisions.map((item,i)=>'<p class="csample-version"><span>'+String(i+1).padStart(2,"0")+'</span><span>'+esc(item)+'</span></p>').join("")+'</div>'+
 '<div class="csample-foot"><p>'+esc(job.review)+'</p><button type="button" data-creset>Reset values</button></div>'+
 '</div>';
}
function render(){
 return '<section class="csamples" data-csamples>'+
 '<p class="csample-intro">Explore examples from previous Clara estimate exports. These are anonymized demonstrations, not reproductions of original transcripts, quantities or pricing.</p>'+
 '<div class="csample-shell"><nav class="csample-nav" aria-label="Sample estimates">'+
 '<p>'+jobs.length+' sample jobs</p>'+
 jobs.map((job,i)=>'<button type="button" data-cjob="'+esc(job.id)+'" aria-pressed="'+String(i===0)+'"><span>'+String(i+1).padStart(2,"0")+'</span><span><strong>'+esc(job.title)+'</strong><span>'+esc(job.kind)+'</span></span><span>↗</span></button>').join("")+
 '</nav><div class="csample-main" data-cmain>'+viewer(jobs[0])+'</div></div>'+
 '<p class="csample-muted csample-bottom">These sample jobs are preloaded in the website demonstration. They will need importing into the authenticated Clara portal once its MVP is connected.</p></section>';
}
function mount(root=document){
 root.querySelectorAll("[data-csamples]").forEach(box=>{
  if(box.dataset.mounted)return;box.dataset.mounted="1";
  const main=box.querySelector("[data-cmain]");
  const select=id=>{const job=jobs.find(j=>j.id===id);if(!job)return;
   box.querySelectorAll("[data-cjob]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.cjob===id)));
   main.innerHTML=viewer(job);
  };
  box.addEventListener("click",e=>{
   const btn=e.target.closest("[data-cjob]");
   if(btn){select(btn.dataset.cjob);return;}
   if(e.target.closest("[data-creset]"))select(main.querySelector("[data-current]").dataset.current);
  });
  box.addEventListener("input",e=>{
   if(!e.target.matches("[data-cqty],[data-crate]"))return;
   const cur=main.querySelector("[data-current]");
   const job=jobs.find(j=>j.id===cur.dataset.current);
   let sum=0,complete=0;
   job.lines.forEach((line,i)=>{
    const q=cur.querySelector('[data-cqty="'+i+'"]').value,r=cur.querySelector('[data-crate="'+i+'"]').value;
    const amount=q!==""&&r!==""&&Number.isFinite(+q*+r)&&+q>=0&&+r>=0?+q*+r:null;
    cur.querySelector('[data-camount="'+i+'"]').textContent=amount===null?"—":money(amount);
    if(amount!==null){sum+=amount;complete++;}
   });
   cur.querySelector("[data-csum]").textContent=complete?money(sum):"—";
   cur.querySelector("[data-pricing-note]").textContent=complete?
     "Partial calculation using values entered in this demonstration. This is not a verified customer quote.":
     "Enter quantities and rates to explore the calculation. Original amounts are not reproduced.";
  });
  const selected=new URLSearchParams(location.search).get("job");
  if(selected)select(selected);
 });
}
window.B2WClaraSamplesV6={render,mount,jobs};
})();