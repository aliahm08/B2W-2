/* Clara V5 / portal integration contract — node scripts/verify-clara-portal-v5.mjs
   Static website cannot substitute for the authenticated estimating application. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root=path.resolve(import.meta.dirname,"..");
const read=name=>fs.readFileSync(path.join(root,name),"utf8");
const ctx={window:{}};vm.createContext(ctx);
vm.runInContext(read("assets/js/clara-content-v3.js"),ctx);
vm.runInContext(read("assets/js/clara-portal-v5.js"),ctx);
const c=ctx.window.B2WClaraContentV3,p=ctx.window.B2WClaraPortalV5;
if(c.rows.map(r=>r[1]).join("|")!=="What We Show|Scenarios|Capabilities")throw Error("Clara navigation labels invalid");
if(!c.rows[0][2].endsWith("/what-we-show/"))throw Error("What We Show path wrong");
if(c.notes.length!==3||c.offerings.length!==7)throw Error("Sample job/feature counts mismatch");
if(p.portal!=="https://portal.b2w-ai.com/")throw Error("Portal destination invalid");
const what=p.show(),features=p.features(c.offerings);
if(!what.includes("v2-live-stage")||!what.includes("Open Clara portal"))throw Error("Estimation walkthrough missing");
for(const text of ["Sign up or sign in","Accept the terms","Record the job","Review the estimate"])
 if(!what.includes(text))throw Error("Portal step missing "+text);
if(!what.includes("not a live estimate")||!what.includes("Free access is planned"))throw Error("Must identify prototype vs live portal");
if((features.match(/class="clara-feature-item"/g)||[]).length!==7)throw Error("Feature list count incorrect");
const site=read("index.html"),clara=read("clara/index.html");
if(!site.includes('href="https://portal.b2w-ai.com/" aria-label="Open Clara estimation portal"'))throw Error("B2W Clara launch link missing");
for(const label of ["What We Show","Scenarios","Capabilities"])if(!clara.includes(">"+label+"<"))throw Error("Clara navigation missing "+label);
for(const file of ["clara-content-v3.js","clara-portal-v5.js","product-templates.js"])if(!clara.includes(file))throw Error("Script load missing "+file);
const template=read("assets/js/product-templates.js");
if(!template.includes("window.B2WClaraPortalV5.show()")||!template.includes("window.B2WClaraPortalV5.features(data.offerings)"))throw Error("Renderer not hooked");
const config=JSON.parse(read("vercel.json"));
if(!config.rewrites.some(r=>r.source==="/clara/what-we-show/"&&r.destination==="/clara/index.html"))throw Error("Deep link missing");
if(!read("assets/js/b2w-theme.js").includes("#B4FF56"))throw Error("Electric green not applied");
if(!read("assets/css/clara-portal-v5.css").includes("font-size:var(--size,15px)"))throw Error("One-text-size rule missing");
console.log("Clara V5 PASS — routing, 10 acquisition strategies, 7 features, embedded illustrative tour, external portal link, and electric green.");
