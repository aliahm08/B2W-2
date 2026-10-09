/* Regression check for the approved B2W 3 / 5 / 6 / 2 page grammar.
   Run with: node scripts/verify-templates.mjs */
import fs from "node:fs";
import path from "node:path";
const root=path.resolve(import.meta.dirname,"..");
const code=fs.readFileSync(path.join(root,"assets/js/product-templates.js"),"utf8");
const graphics=fs.readFileSync(path.join(root,"assets/js/product-graphics.js"),"utf8");
const urls=[
["jasonai","/jasonai/","home",3,"#11150f"],
["jasonai","/jasonai/how-it-works/","show",5,"#ffffff"],
["jasonai","/jasonai/scenarios/","know",6,"#e7773d"],
["jasonai","/jasonai/capabilities/","flow",2,"#dedfdf"],
["jasonai","/jasonai/demo/","flow",2,"#ffffff"],
["jasonai","/jasonai/general-contractors/","show",5,"#ffffff"],
["jasonai","/jasonai/trust/","know",6,"#252828"],
["clara","/clara/","home",3,"#f7f1f4"],
["clara","/clara/how-it-works/","show",5,"#ffffff"],
["clara","/clara/scenarios/","know",6,"#252828"],
["clara","/clara/capabilities/","flow",2,"#d9cbd4"],
["clara","/clara/workflow/","flow",2,"#d9cbd4"]
];
for(const [site,url,template,count,color] of urls){
 const classes=new Set(),window={addEventListener:()=>{},scrollTo:()=>{}};
 new Function("window",graphics)(window);
 const view={innerHTML:"",addEventListener:()=>{}};
 const menu={setAttribute:()=>{},addEventListener:()=>{},querySelectorAll:()=>[{textContent:""},{textContent:""}]};
 const tray={classList:{contains:()=>false,remove:()=>{}},setAttribute:()=>{},querySelector:()=>null};
 const elements={productView:view,mobileTray:tray,currentPage:{textContent:""},demoNumber:{textContent:""},demoText:{textContent:""},demoBack:{disabled:false},demoNext:{textContent:""}};
 const document={
 body:{dataset:{product:site},classList:{add:(...c)=>c.forEach(x=>classes.add(x)),remove:(...c)=>c.forEach(x=>classes.delete(x)),contains:x=>classes.has(x)}},
 documentElement:{style:{backgroundColor:""},classList:{remove:()=>{}}},
 getElementById:id=>elements[id]??null,
 querySelector:q=>({".site-header .brand":{getBoundingClientRect:()=>({left:0,top:0})},".menu-toggle":menu,".footer":{},'meta[name="theme-color"]':{setAttribute:()=>{}},".mobile-menu-shade":{addEventListener:()=>{}}}[q]??null),
 querySelectorAll:()=>[],addEventListener:()=>{},title:""
 };
 const location={pathname:url,hash:""};
 new Function("document","window","location","history","matchMedia","requestAnimationFrame","innerWidth",code)(document,window,location,{pushState:()=>{},replaceState:()=>{}},()=>({matches:false}),callback=>callback(),980);
 const regex=template==="home"?/class="mission-unit"/g:template==="show"?/class="stage(?: open)?"/g:template==="know"?/class="field-item"/g:/class="offering-card"/g;
 const found=[...view.innerHTML.matchAll(regex)].length;
 const artwork=template==="know"?view.innerHTML.includes('class="product-note-hover"')&&window.B2WGraphics.note(site,0).includes("ecosystem-graphic"):view.innerHTML.includes("ecosystem-graphic");
 if(found!==count||!artwork||document.documentElement.style.backgroundColor!==color)throw new Error(url+": "+JSON.stringify({found,count,artwork,color:document.documentElement.style.backgroundColor}));
}
const b2w=fs.readFileSync(path.join(root,"index.html"),"utf8");
const scope=b2w.slice(b2w.indexOf('class="mission-home"'),b2w.indexOf('class="home-bottom-actions"'));
if([...scope.matchAll(/class="mission-link"/g)].length!==3)throw new Error("B2W homepage must have 3 template links.");
for(const fragment of ['data-view-link="offerings" href="#offerings"','data-view-link="insights" href="#insights"','data-view-link="how-we-work" href="#how-we-work"','href="/jasonai/"','href="/clara/"','data-contact-open'])
 if(!b2w.includes(fragment))throw new Error("B2W missing "+fragment);
console.log("12 product routes passed: 3 home, 5 show, 6 know, 2 flow; exact colors and SVG diagrams verified.");
