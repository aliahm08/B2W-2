/* JasonAI payroll-first website regression. Run: node scripts/verify-jasonai-payroll-v4.mjs */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root=path.resolve(import.meta.dirname,"..");
const read=name=>fs.readFileSync(path.join(root,name),"utf8");
const code=read("assets/js/jasonai-how-v4.js");
const ctx={window:{},document:{createElement:()=>({textContent:"",after:()=>{},remove:()=>{}})}};
vm.createContext(ctx);
vm.runInContext(code,ctx);
const demo=ctx.window.B2WJasonHowV4;
const wantedMessages=["WhatsApp","SMS","Voicemail inbox","Email","Telegram"];
const wantedDocs=["Excel","Drawings","Photos"];
if(wantedMessages.join("|")!==Array.from(demo.messaging).join("|")||
 wantedDocs.join("|")!==Array.from(demo.documents).join("|"))throw Error("Source picker incomplete");
const html=demo.render();
for(const source of [...wantedMessages,...wantedDocs])if(!html.includes(source))throw Error("Missing "+source);
if(!html.includes("Payroll is every Friday"))throw Error("Friday priority missing");
if(!html.includes("No accounts are connected"))throw Error("Simulation disclosure missing");
if(demo.stages.length!==5)throw Error("Expected five process steps");
const handlers={},nodes={};
const node=()=>({innerHTML:"",textContent:"",after:()=>{},remove:()=>{}});
for(const key of ["[data-jhow-recap]","[data-jhow-records]","[data-jhow-total]","[data-jhow-missing]","[data-jhow-rule-preview]"])
 nodes[key]=node();
const inputs=[...wantedMessages,...wantedDocs].map(name=>({
 checked:name==="WhatsApp"||name==="Excel",dataset:{source:name},
 addEventListener:(type,handler)=>{handlers[name]=handler},
 closest:()=>({classList:{toggle:()=>{}}})
}));
const rule={value:"Payroll is every Friday.",addEventListener:(type,handler)=>{handlers.rule=handler}};
const box={dataset:{},querySelectorAll:sel=>sel==='input[data-source]'?inputs:[],querySelector:sel=>
  sel==="#jhow-rule"?rule:sel===".jhow-notice-selected"?null:nodes[sel]??null
};
demo.mount({querySelectorAll:sel=>sel==="[data-jhow-demo]"?[box]:[]});
if(nodes["[data-jhow-total]"].textContent!=="$2,450")throw Error("Incorrect default total");
if(nodes["[data-jhow-missing]"].textContent!=="1")throw Error("Missed unconfirmed rate");
if(!nodes["[data-jhow-records]"].innerHTML.includes("Confirm rate"))throw Error("Rate exception missing");
inputs.find(input=>input.dataset.source==="SMS").checked=true;handlers.SMS();
if(nodes["[data-jhow-missing]"].textContent!=="2")throw Error("SMS exception not included");
inputs.forEach(input=>input.checked=false);handlers.WhatsApp();
if(nodes["[data-jhow-total]"].textContent!=="$0")throw Error("Empty source total incorrect");
if(!nodes["[data-jhow-records]"].innerHTML.includes("Nothing to reconcile"))throw Error("Empty source state missing");
rule.value="";handlers.rule();
if(!nodes["[data-jhow-rule-preview]"].textContent.includes("Add the rule"))throw Error("Empty rule not flagged");
const template=read("assets/js/product-templates.js");
if(!template.includes("B2WJasonHowV4?.mount(view)")||!template.includes("B2WJasonHowV4?.render()"))
 throw Error("Product template not wired");
const jason=read("jasonai/index.html");
for(const item of ["jasonai-how-v4.js","jasonai-how-v4.css"])
 if(!jason.includes(item))throw Error("Missing Jason asset "+item);
const css=read("assets/css/jasonai-how-v4.css");
if(!css.includes("font-size:var(--size,15px)!important"))throw Error("Single-size typography missing");
if(!css.includes("prefers-reduced-motion:reduce"))throw Error("Reduced-motion support missing");
const animation=read("assets/js/live-product-demos-v2.js");
if(!animation.includes("this Friday")||!animation.includes("Rate unknown"))
 throw Error("Animated Friday walkthrough out of sync");
console.log("PASS: eight selectable source types, editable payroll rule, accurate simulated Friday checklist, missing-rate warnings, responsive design and product routing.");
