/* Clara sample gallery — node scripts/verify-clara-sample-jobs-v6.mjs */
import fs from "node:fs";import path from "node:path";import vm from "node:vm";
const root=path.resolve(import.meta.dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const context={window:{},document:{},location:{search:""},URLSearchParams};
vm.createContext(context);
vm.runInContext(read("assets/js/clara-sample-jobs-v6.js"),context);
vm.runInContext(read("assets/js/clara-sample-gallery-v6.js"),context);
const jobs=JSON.parse(read("assets/data/clara-sample-jobs.json")).jobs;
const gallery=context.window.B2WClaraSamplesV6;
if(jobs.length!==3||gallery.jobs.length!==3)throw Error("Expected three examples");
if(JSON.stringify(Array.from(gallery.jobs))!==JSON.stringify(jobs))throw Error("JSON/JS seeds diverged");
for(const job of jobs){
 if(!job.id||!job.provenance||!job.revisions.length||!job.lines.length)throw Error("Incomplete "+job.id);
 if(!job.noteDisclaimer.includes("Illustrative"))throw Error("Voice recording falsely asserted "+job.id);
 for(const line of job.lines)if(line.qty!==""||line.rate!=="")throw Error("Unverified price "+job.id);
}
const page=gallery.render();
if((page.match(/data-cjob=/g)||[]).length!==3)throw Error("Sample picker missing entries");
if(page.includes("data-cqty")||page.includes("data-crate"))throw Error("Sample details must start collapsed");
const opened=gallery.viewer(jobs[0]);
if(!opened.includes("data-ctyped")||!opened.includes('data-cphase="note" hidden')||!opened.includes('data-cphase="estimate" hidden'))throw Error("Animation phases missing");
if(!opened.includes("data-cqty")||!opened.includes("data-crate"))throw Error("Editable estimate inputs missing");
if(!opened.includes("data-cskip")||!opened.includes("data-creplay"))throw Error("Skip/replay controls missing");
if(!page.includes("The transcripts and line items are illustrative"))throw Error("Disclosure missing");
const shell=read("clara/index.html"),engine=read("assets/js/product-templates.js");
for(const filename of ["clara-sample-jobs-v6.js","clara-sample-gallery-v6.js","clara-sample-gallery-v6.css"])if(!shell.includes(filename))throw Error("Missing asset "+filename);
if(!engine.includes("window.B2WClaraSamplesV6.render()")||!engine.includes("window.B2WClaraSamplesV6?.mount(view)"))throw Error("Gallery not wired");
const css=read("assets/css/clara-sample-gallery-v6.css");
if(!css.includes("font-size:var(--size,15px)")||!css.includes("@media(max-width:780px)"))throw Error("Typography or mobile style missing");
console.log("PASS: three anonymized Clara examples, closed job list, transcript-note-estimate phases, editable workspace.");
