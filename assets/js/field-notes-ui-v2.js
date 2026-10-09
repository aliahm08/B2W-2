/* The same Know template renders as many evidence-backed field notes as the library holds.
   Script runs before b2w-controller so its existing transitions and deep links remain intact. */
(()=>{
"use strict";
const host=document.getElementById("insights");
const data=window.B2WFieldNotesV2;
if(!host||!Array.isArray(data))return;
const escape=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const num=n=>String(n+1).padStart(2,"0");
const id=n=>"article-field-"+n.id;
const visual=(note,i)=>'<div class="motion-visual v2-note-visual" role="img" aria-label="Six questions framing this field note"><div class="v2-note-visual-head">'+escape(note.area)+'</div><div class="v2-note-visual-grid">'+["Who","What","When","Where","Why","How"].map((k,j)=>'<span class="v2-note-token" style="--token-delay:'+j+'">'+k+'</span>').join("")+'</div></div>';
const nav='<div class="v2-note-tools"><label class="v2-search-label" for="v2FieldSearch">Field notes <span class="v2-note-count" id="v2FieldCount">'+data.length+'</span></label><input id="v2FieldSearch" type="search" autocomplete="off" placeholder="Search field notes…" aria-label="Search field notes" /><div class="v2-note-search-status" id="v2SearchStatus" role="status" aria-live="polite"></div></div><nav aria-label="Field notes">'+data.map((note,i)=>'<button type="button" class="field-item" data-note="'+id(note)+'" aria-pressed="false" data-search="'+escape([note.title,note.area,note.who,note.what,note.why,note.source].join(" ").toLowerCase())+'"><span class="field-number">'+num(i)+'</span><span>'+escape(note.title)+'</span></button>').join("")+'</nav>';
const keys=["who","what","when","where","why","how"];
const panels=data.map((note,i)=>'<div class="field-panel" data-field="'+id(note)+'" hidden><h1 class="mobile-reader-title">'+escape(note.title)+'</h1><div class="field-hero"><div class="field-meta">Field note '+num(i)+' · '+escape(note.area)+'</div><div class="field-art">'+visual(note,i)+'</div><div class="field-caption">'+escape(note.kind)+' · '+escape(note.source)+'</div></div><article class="field-text v2-field-answers">'+keys.map(k=>'<p class="v2-field-answer"><strong>'+k.charAt(0).toUpperCase()+k.slice(1)+'</strong><span>'+escape(note[k])+'</span></p>').join("")+'<p class="v2-field-source"><strong>Source</strong><span>'+escape(note.source)+' · '+escape(note.kind)+'</span></p>'+(i<data.length-1?'<button type="button" class="next-field-note" data-next-note="'+id(data[i+1])+'" aria-label="Next field note '+num(i+1)+'"><span>Next field note · '+num(i+1)+'</span><span aria-hidden="true">→</span></button>':'')+'</article></div>').join("");
host.innerHTML='<div class="field-workspace is-empty" id="field-workspace"><aside class="field-library">'+nav+'</aside><div class="field-reader" id="field-reader"><div class="mobile-reader-toolbar"><button type="button" class="mobile-reader-back" aria-label="Return to all field notes"><span aria-hidden="true">←</span> All field notes</button></div>'+panels+'</div></div>';
const input=document.getElementById("v2FieldSearch");
const buttons=[...host.querySelectorAll(".field-item")];
const count=document.getElementById("v2FieldCount"),status=document.getElementById("v2SearchStatus");
input.addEventListener("input",()=>{
 const query=input.value.trim().toLowerCase();
 let matched=0;
 for(const button of buttons){const hit=button.dataset.search.includes(query);button.hidden=!hit;if(hit)matched++;}
 count.textContent=String(matched);
 status.textContent=query?(matched?matched+" matching field notes":"No matching field notes"):"";
});
})();
