/* Field Notes V4: full-width article and six unlabeled summary items.
   Run with: node scripts/verify-field-notes-v3.mjs */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root=path.resolve(import.meta.dirname,"..");
const file=p=>fs.readFileSync(path.join(root,p),"utf8");
const input={value:"",addEventListener:()=>{}};
const listeners=[];
const host={innerHTML:"",querySelectorAll:()=>[],addEventListener:(type,callback,capture)=>listeners.push({type,capture})};
const document={getElementById:id=>id==="insights"?host:id==="v2FieldSearch"?input:id==="v2FieldCount"||id==="v2SearchStatus"?{textContent:""}:null};
const context={window:{},document};
vm.createContext(context);
vm.runInContext(file("assets/js/field-notes-data-v2.js"),context);
vm.runInContext(file("assets/js/field-notes-ui-v2.js"),context);
const data=context.window.B2WFieldNotesV2,html=host.innerHTML;
const count=s=>[...html.matchAll(new RegExp(s,"g"))].length;
const N=data.length;
const expected={
 panels:count('class="field-panel v3-editorial-panel"'),
 stories:count('class="field-story"'),
 summaries:count('class="v4-intro-summary"'),
 points:count('class="v4-summary-point"'),
 images:count('class="v3-note-photo"'),
 graphics:count('class="motion-visual v3-process-visual"'),
 credits:count('target="_blank" rel="noopener noreferrer"')
};
for(const [k,n] of Object.entries(expected))if(n!==(k==="points"?N*6:N))throw Error(k+" "+n+" expected "+(k==="points"?N*6:N));
if(/class="field-facts|class="v3-fact|<h[1-6][ >]|v3-facts-head|>Who<|>What<|>When<|>Where<|>Why<|>How</.test(html))throw Error("Labels, question headings, or separate fact panel remain.");
for(const [i,note] of data.entries()){
 const id="article-field-"+note.id;
 if(!html.includes('data-field="'+id+'"'))throw Error("Missing deep link "+id);
 for(const k of ["who","what","when","where","why","how"])if(!note[k])throw Error("Missing original summary fact "+k);
}
if(!html.includes('data-field="article-field-note-006"')||!html.includes('data-next-note="article-field-note-007"'))throw Error("Original links not preserved.");
if(!listeners.some(e=>e.type==="error"&&e.capture))throw Error("Photo failure handler missing.");
const css=file("assets/css/field-notes-editorial-v3.css");
const controller=file("assets/js/b2w-controller.js");
const mobile=file("assets/js/b2w-mobile-navigation.js");
const page=file("index.html");
if(!css.includes("grid-template-columns:clamp(180px,17vw,240px) minmax(0,1fr)"))throw Error("Narrow left-margin library missing.");
if(!css.includes("grid-template-columns:repeat(2,minmax(0,1fr))"))throw Error("Two-column intro summary missing.");
if(!css.includes("grid-template-columns:1fr;"))throw Error("Mobile single-column summary missing.");
if(!css.includes("font-size:var(--size)!important"))throw Error("One text size not enforced.");
if(!css.includes("prefers-reduced-motion:reduce"))throw Error("Reduced motion support missing.");
if(!controller.includes('route === "insights-list" ? "" : "article-field-note-001"'))throw Error("Default article missing.");
if(!controller.includes('p === "insights-list"'))throw Error("Back-to-library route missing.");
if(!mobile.includes('location.hash = "#insights-list"'))throw Error("Mobile back link broken.");
if(!page.includes("field-notes-editorial-v3.css"))throw Error("Stylesheet not linked.");
console.log("PASS: "+N+" full-page articles, "+(6*N)+" unlabeled summary facts, narrow left library, mobile and deep links retained.");
