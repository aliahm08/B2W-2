/* Unified cross-site page navigation. Intra-site B2W hash and product SPA routes own their own transitions. */
(()=>{
 const reduced=matchMedia("(prefers-reduced-motion:reduce)");
 let departing=false,animation=null;
 document.addEventListener("click",async event=>{
  const anchor=event.target.closest("a[href]");
  if(!anchor||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||anchor.target==="_blank"||anchor.hasAttribute("data-contact-open")||(anchor.hasAttribute("data-view-link") && (!anchor.getAttribute("href").startsWith("/") || anchor.pathname==="/how-we-work")))return;
  const dest=new URL(anchor.href,location.href);
  if(dest.origin!==location.origin||dest.pathname===location.pathname||dest.protocol!=="https:"&&dest.protocol!=="http:")return;
  const source=document.body.dataset.product;
  if(source&&dest.pathname.startsWith("/"+source+"/"))return; // Handled without reload by product-templates.js.
  event.preventDefault();
  if(departing)return;
  departing=true;
  const content=document.querySelector(".view-wrap")||document.querySelector("main")||document.querySelector(".site-shell");
  if(!reduced.matches&&content?.animate){
    animation=content.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-12px)"}],{duration:260,easing:"cubic-bezier(.65,0,.35,1)",fill:"forwards"});
    await animation.finished.catch(()=>{});
  }
  location.assign(dest.pathname+dest.search+dest.hash);
 });
 window.addEventListener("pageshow",()=>{departing=false;animation?.cancel();animation=null});
 if(!reduced.matches){document.body.classList.add("site-arriving");setTimeout(()=>document.body.classList.remove("site-arriving"),500);}
})();