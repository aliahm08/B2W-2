/* B2W Field Notes V3: three-column editorial reader.
 * Library left · long-form note + photography/animated graphics center · six answers right.
 * Existing note IDs, deep links, search, and B2W routing stay intact.
 */
(()=>{
"use strict";
const host=document.getElementById("insights");
const data=window.B2WFieldNotesV2;
if(!host||!Array.isArray(data))return;

const escape=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const nn=n=>String(n+1).padStart(2,"0");
const id=n=>"article-field-"+n.id;
const keys=["who","what","when","where","why","how"];
const titleCase=s=>s.charAt(0).toUpperCase()+s.slice(1);

const photos={
 site:{
  src:"https://images.unsplash.com/photo-1759922378219-1d31edb644f4?auto=format&fit=crop&w=1120&q=78",
  alt:"Construction worker wearing safety gear at an active building site",
  by:"SMKN 1 Gantar",
  href:"https://unsplash.com/photos/construction-worker-wearing-a-hard-hat-and-vest-at-site-B8lr-Wvz-iM"
 },
 planning:{
  src:"https://images.unsplash.com/photo-1608303588026-884930af2559?auto=format&fit=crop&w=1120&q=78",
  alt:"People reviewing architectural plans together on a desk",
  by:"Pedro Miranda",
  href:"https://unsplash.com/photos/people-reviewing-architectural-blueprints-on-desk-3QzMBrvCeyQ"
 },
 finance:{
  src:"https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?auto=format&fit=crop&w=1120&q=78",
  alt:"A financial worksheet and smartphone on an office desk",
  by:"Jakub Żerdzicki",
  href:"https://unsplash.com/photos/office-desk-with-smartphone-and-financial-charts-heiYgqp0Tsk"
 },
 estimate:{
  src:"https://images.unsplash.com/photo-1781888688940-5730c3fd5baf?auto=format&fit=crop&w=1120&q=78",
  alt:"Architectural plan drawings and a laptop on a desk",
  by:"Jonathan Borba",
  href:"https://unsplash.com/photos/architectural-blueprints-and-a-laptop-on-a-marble-desk-rn00OVh0gEI"
 }
};

function artType(note){
 const a=note.area.toLowerCase(),t=note.title.toLowerCase();
 if(/finance|payroll|receivable|labor|accounts|cash|payment/.test(a+" "+t))return "finance";
 if(/estimat|commercial real|property|collaboration|document|scope/.test(a+" "+t))return "estimate";
 if(/project tracking|supplier|field|photos|crew|delivery|site/.test(a+" "+t))return "site";
 return "planning";
}
function graphLabels(note){
 const category=note.area.toLowerCase();
 if(/payroll|labor/.test(category))return ["CREW","HOURS","OWNER REVIEW"];
 if(/finance|data quality/.test(category))return ["SOURCE","STATUS","DECISION"];
 if(/estimat|commercial real/.test(category))return ["VISIT","SCOPE","ESTIMATE"];
 if(/collab|documents/.test(category))return ["RECORD","REVISION","APPROVAL"];
 if(/communication|integration|interface/.test(category))return ["MESSAGE","PROJECT","FOLLOW-UP"];
 return ["OBSERVE","UNDERSTAND","ACT"];
}
function visual(note,i){
 const labels=graphLabels(note);
 return '<div class="motion-visual v3-process-visual" role="img" aria-label="Animated process: '+labels.map(escape).join(" to ")+'">'+
  '<svg viewBox="0 0 560 148" focusable="false" aria-hidden="true" preserveAspectRatio="xMidYMid meet">'+
   '<path class="v3-process-base" d="M56 62 H504"/><path class="v3-process-current" d="M56 62 H504"/>'+
   [56,280,504].map((x,j)=>'<circle class="v3-process-ring v3-process-ring-'+j+'" cx="'+x+'" cy="62" r="15"/><circle class="v3-process-dot v3-process-dot-'+j+'" cx="'+x+'" cy="62" r="3.7"/>').join("")+
   labels.map((label,j)=>'<text x="'+[56,280,504][j]+'" y="107" class="v3-process-name" text-anchor="middle">'+escape(label)+'</text>').join("")+
  '</svg></div>';
}
const photo=n=>photos[artType(n)];
function figure(note){
 const p=photo(note);
 return '<figure class="v3-note-photo"><img loading="lazy" decoding="async" width="1120" height="720" data-v3-editorial-photo="1" src="'+escape(p.src)+'" alt="'+escape(p.alt)+'" />'+
 '<figcaption>Illustrative photograph · <a href="'+escape(p.href)+'" target="_blank" rel="noopener noreferrer">'+escape(p.by)+' / Unsplash ↗</a></figcaption></figure>';
}
function story(note,i){
 return '<article class="field-story" aria-label="'+escape(note.title)+'">'+
 '<div class="v3-story-prose">'+
 '<p class="v3-story-lead">'+escape(note.what)+'</p>'+
 figure(note)+
 '<p>'+escape(note.why)+'</p>'+
 '<div class="field-art">'+visual(note,i)+'</div>'+
 '<p>'+escape(note.how)+'</p>'+
 '</div>'+
 '<footer class="v3-story-foot"><p class="v3-source">Source: '+escape(note.source)+' · '+escape(note.kind)+'</p>'+
 (i<data.length-1?'<button type="button" class="next-field-note" data-next-note="'+id(data[i+1])+'" aria-label="Next field note '+nn(i+1)+'"><span>Next note '+nn(i+1)+'</span><span aria-hidden="true">→</span></button>':'')+
 '</footer></article>';
}
function facts(note){
 return '<aside class="field-facts field-text" aria-label="Who, what, when, where, why and how">'+
 keys.map((k,j)=>'<p class="v3-fact" style="--line-number:'+j+'"><strong>'+titleCase(k)+'</strong><span>'+escape(note[k])+'</span></p>').join("")+
 '</aside>';
}
const nav='<div class="v2-note-tools"><label class="v2-search-label" for="v2FieldSearch">Field notes <span class="v2-note-count" id="v2FieldCount">'+data.length+'</span></label>'+
 '<input id="v2FieldSearch" type="search" autocomplete="off" placeholder="Search field notes…" aria-label="Search field notes" /><div class="v2-note-search-status" id="v2SearchStatus" role="status" aria-live="polite"></div></div>'+
 '<nav aria-label="Field notes">'+data.map((note,i)=>
  '<button type="button" class="field-item" data-note="'+id(note)+'" aria-pressed="false" data-search="'+escape([note.title,note.area,...keys.map(k=>note[k]),note.source].join(" ").toLowerCase())+'">'+
  '<span class="field-number">'+nn(i)+'</span><span>'+escape(note.title)+'</span></button>').join("")+'</nav>';
const panels=data.map((note,i)=>
 '<div class="field-panel v3-editorial-panel" data-field="'+id(note)+'" hidden>'+story(note,i)+facts(note)+'</div>').join("");
host.innerHTML='<div class="field-workspace is-empty" id="field-workspace">'+
 '<aside class="field-library">'+nav+'</aside>'+
 '<div class="field-reader" id="field-reader"><div class="mobile-reader-toolbar"><button type="button" class="mobile-reader-back" aria-label="Return to all field notes"><span aria-hidden="true">←</span> All field notes</button></div>'+panels+'</div></div>';

// Native event capture supports image fallbacks without inline JavaScript handlers.
host.addEventListener?.("error",event=>{
 const target=event.target;
 if(target?.matches?.("img[data-v3-editorial-photo]"))
   target.closest(".v3-note-photo")?.classList.add("image-unavailable");
},true);

const input=document.getElementById("v2FieldSearch");
const buttons=[...host.querySelectorAll(".field-item")];
const count=document.getElementById("v2FieldCount"),status=document.getElementById("v2SearchStatus");
input.addEventListener("input",()=>{
 const q=input.value.trim().toLowerCase();let matches=0;
 buttons.forEach(button=>{const found=button.dataset.search.includes(q);button.hidden=!found;if(found)matches++});
 count.textContent=String(matches);
 status.textContent=q?(matches?matches+" matching field notes":"No matching field notes"):"";
});
})();