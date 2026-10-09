/* Shared-template regression coverage. Clara item counts come from content data,
   not a global 5/6/2 design constraint. Run: node scripts/verify-templates.mjs */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
const root=path.resolve(import.meta.dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const code=read("assets/js/product-templates.js");
const graphics=read("assets/js/product-graphics.js");
const claraSrc=read("assets/js/clara-content-v3.js");
const c={window:{}};vm.createContext(c);vm.runInContext(claraSrc,c);
const clara=c.window.B2WClaraContentV3;
if(!clara||!Array.isArray(clara.stages)||!Array.isArray(clara.notes)||!Array.isArray(clara.offerings))
  throw new Error("Clara content must be data-driven arrays");
const pageType={
 home:{fragment:'class="mission-unit"',claraCount:clara.rows.length},
 show:{fragment:'class="stage',claraCount:clara.stages.length},
 know:{fragment:'class="field-item"',claraCount:clara.notes.length},
 flow:{fragment:'class="offering-card"',claraCount:clara.offerings.length},
};
const paths=[
 ["jasonai","/jasonai/","home","#11150f"],
 ["jasonai","/jasonai/how-it-works/","show","#ffffff"],
 ["jasonai","/jasonai/scenarios/","know","#e7773d"],
 ["jasonai","/jasonai/capabilities/","flow","#dedfdf"],
 ["clara","/clara/","home","#C7AABD"],
 ["clara","/clara/how-it-works/","show","#F6F0F4"],
 ["clara","/clara/scenarios/","know","#34263F"],
 ["clara","/clara/capabilities/","flow","#2563FF"],
 ["clara","/clara/insights/","know","#34263F"],
 ["clara","/clara/workflow/","flow","#2563FF"]
];
function count(html,kind){
 const re=kind==="home"?/class="mission-unit"/g:kind==="show"?/class="stage(?: open)?"/g:kind==="know"?/class="field-item"/g:/class="offering-card"/g;
 return [...html.matchAll(re)].length;
}
for(const [site,url,kind,background] of paths){
 const classes=new Set(),window={addEventListener:()=>{},scrollTo:()=>{},B2WLiveDemos:{mount:()=>{}}};
 new Function("window",graphics)(window);
 if(site==="clara")new Function("window",claraSrc)(window);
 const view={innerHTML:"",addEventListener:()=>{}};
 const menu={setAttribute:()=>{},addEventListener:()=>{},querySelectorAll:()=>[{textContent:""},{textContent:""}]};
 const tray={classList:{contains:()=>false,remove:()=>{}},setAttribute:()=>{},querySelector:()=>null};
 const elements={productView:view,mobileTray:tray,currentPage:{textContent:""},demoNumber:{textContent:""},demoText:{textContent:""},demoBack:{disabled:false},demoNext:{textContent:""}};
 const document={
 body:{dataset:{product:site},classList:{add:(...a)=>a.forEach(x=>classes.add(x)),remove:(...a)=>a.forEach(x=>classes.delete(x)),contains:x=>classes.has(x)}},
 documentElement:{style:{backgroundColor:""},classList:{remove:()=>{}}},
 getElementById:id=>elements[id]??null,
 querySelector:q=>({".site-header .brand":{getBoundingClientRect:()=>({left:0,top:0})},".menu-toggle":menu,".footer":{},'meta[name="theme-color"]':{setAttribute:()=>{}},".mobile-menu-shade":{addEventListener:()=>{}}}[q]??null),
 querySelectorAll:()=>[],addEventListener:()=>{},title:""
 };
 const location={pathname:url,hash:""};
 new Function("document","window","location","history","matchMedia","requestAnimationFrame","innerWidth",code)(document,window,location,{pushState:()=>{},replaceState:()=>{}},()=>({matches:false}),callback=>callback(),980);
 const found=count(view.innerHTML,kind);
 if(found===0||document.documentElement.style.backgroundColor!==background)throw new Error(url+" render/theme invalid");
 if(site==="clara"&&found!==pageType[kind].claraCount)throw new Error(url+" expected "+pageType[kind].claraCount+", got "+found);
 if(kind==="flow"&&!view.innerHTML.includes('data-product="'+site+'"'))throw new Error(url+" missing walkthrough");
 if(kind==="know"&&!view.innerHTML.includes("product-note-hover"))throw new Error(url+" missing info-library preview");
}
const claraHtml=read("clara/index.html");
for(const route of ["/clara/how-it-works/","/clara/scenarios/","/clara/capabilities/"]){
 if(!claraHtml.includes('href="'+route+'"'))throw new Error("Clara navigation missing "+route);
}
if(!claraHtml.includes("clara-theme-v3.css")||!claraHtml.includes("clara-content-v3.js"))throw new Error("Clara V3 assets missing");
const b2w=read("index.html");
const scope=b2w.slice(b2w.indexOf('class="mission-home"'),b2w.indexOf('class="home-bottom-actions"'));
if([...scope.matchAll(/class="mission-link"/g)].length!==3)throw new Error("B2W's 3 home links must be preserved");
console.log("PASS: 10 shared routes, Clara data-driven",clara.stages.length,"stages,",clara.notes.length,"scenarios,",clara.offerings.length,"capabilities; colors, links, animated product view preserved");

const claraTheme=read("assets/css/clara-theme-v3.css");
for(const token of [
 '--paper:var(--clara-electric);--ink:#FFFFFF',
 'html:has(body.product-clara.mode-offerings){background:var(--clara-electric)}',
 '--link-paper:var(--clara-electric);--link-ink:#FFFFFF'
]) if(!claraTheme.includes(token))throw Error("Clara electric blue Capabilities not consistently applied: "+token);
