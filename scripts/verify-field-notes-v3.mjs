/* B2W V3 Field Notes regression test. Run: node scripts/verify-field-notes-v3.mjs */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root=path.resolve(import.meta.dirname,"..");
const file=p=>fs.readFileSync(path.join(root,p),"utf8");
const input={value:"",addEventListener:()=>{}};
const observedEvents=[];
const host={innerHTML:"",querySelectorAll:()=>[],addEventListener:(name,fn,capture)=>observedEvents.push({name,capture})};
const document={getElementById:id=>id==="insights"?host:id==="v2FieldSearch"?input:id==="v2FieldCount"||id==="v2SearchStatus"?{textContent:""}:null};
const context={window:{},document};
vm.createContext(context);
vm.runInContext(file("assets/js/field-notes-data-v2.js"),context);
vm.runInContext(file("assets/js/field-notes-ui-v2.js"),context);
const data=context.window.B2WFieldNotesV2,html=host.innerHTML;
const count=pattern=>[...html.matchAll(new RegExp(pattern,"g"))].length;
const expected=data.length;
const observed={
 panels:count('class="field-panel v3-editorial-panel"'),
 shortNotes:count('class="v3-story-prose"'),
 stories:count('class="field-story"'),
 facts:count('class="field-facts field-text"'),
 labels:count('class="v3-fact"'),
 photos:count('class="v3-note-photo"'),
 visuals:count('class="motion-visual v3-process-visual"'),
 credits:count('target="_blank" rel="noopener noreferrer"')
};
for(const [key,value] of Object.entries(observed)){
 const required=key==="labels"?expected*6:expected;
 if(value!==required)throw Error(key+" expected "+required+", observed "+value);
}
for(const record of data){
 const id="article-field-"+record.id;
 if(!html.includes('data-field="'+id+'"'))throw Error("Deep link not found "+id);
 for(const k of ["who","what","when","where","why","how"])if(!record[k])throw Error("Empty "+k+" on "+id);
}
const css=file("assets/css/field-notes-editorial-v3.css");
const page=file("index.html");
if(/<h[1-6][ >]|<header[ >]|v3-story-index|v3-facts-head/.test(html))throw Error("Field notes must have no article titles, headings or subtitles");
if(!css.replaceAll(/\/\*[\s\S]*?\*\//g,"").includes("font-size:var(--size,15px)!important"))throw Error("One-size typography enforcement missing");
if(html.includes("onerror="))throw Error("Unexpected inline error handler");
if(!observedEvents.some(e=>e.name==="error"&&e.capture===true))throw Error("Image fallback handler not registered");
if(!html.includes('data-v3-editorial-photo="1"'))throw Error("Editorial images missing fallback marker");
if(!css.includes("grid-template-columns:minmax(0,1.56fr) minmax(220px,1fr)"))throw Error("Missing article + facts columns");
if(!css.includes("position:sticky;top:88px"))throw Error("Missing sticky facts");
if(!css.includes("grid-template-columns:1fr!important"))throw Error("Mobile column must stack");
if(!css.includes("prefers-reduced-motion:reduce"))throw Error("Motion preference missing");
if(!(page.indexOf('field-notes-v2.css')<page.indexOf('field-notes-editorial-v3.css')))throw Error("Editorial CSS order incorrect");
if(!html.includes('data-field="article-field-note-006"'))throw Error("Existing deep link not preserved");
if(!html.includes('data-next-note="article-field-note-007"'))throw Error("Next note navigation missing");
console.log("PASS: "+expected+" field notes, "+observed.labels+" six-question facts, "+observed.photos+" representative photos and animated graphics; desktop/mobile layout contracts preserved");
