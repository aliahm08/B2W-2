/* One lightweight Contact dialog for B2W, JasonAI and Clara.
   A mailto link can prefill only plain-text subject/body, not HTML styling.
   No user information is collected by this site. */
(()=>{
 "use strict";
 const inbox="hello@b2w-ai.com";
 const dialog=document.createElement("dialog");
 dialog.className="site-contact-screen";
 dialog.setAttribute("aria-label","Choose how to contact B2W");
 dialog.innerHTML=`
  <div class="contact-screen-head">
   <a class="contact-mark" href="/" aria-label="B2W homepage">B2W</a>
   <span class="contact-label">/ Contact</span>
   <button type="button" class="contact-close" aria-label="Close contact options">Close ×</button>
  </div>
  <div class="contact-intro"><p>Start a conversation.</p><p class="contact-muted">Choose what you're reaching out about. We'll prepare an email with the right details.</p></div>
  <nav class="contact-choice-list" aria-label="Contact options">
   <a class="contact-choice" data-contact-kind="general" href="mailto:hello@b2w-ai.com">
    <span class="contact-count">01</span><span class="contact-choice-copy"><strong>General interest</strong><small>Discuss your work or an opportunity.</small></span><span class="contact-arrow" aria-hidden="true">↗</span>
   </a>
   <a class="contact-choice" data-contact-kind="demo" href="mailto:hello@b2w-ai.com">
    <span class="contact-count">02</span><span class="contact-choice-copy"><strong>Free demo</strong><small>See how a product could work for you.</small></span><span class="contact-arrow" aria-hidden="true">↗</span>
   </a>
   <a class="contact-choice" data-contact-kind="question" href="mailto:hello@b2w-ai.com">
    <span class="contact-count">03</span><span class="contact-choice-copy"><strong>Product question</strong><small>Ask about JasonAI or Clara.</small></span><span class="contact-arrow" aria-hidden="true">↗</span>
   </a>
  </nav>
  <p class="contact-footnote">Opens your email app with a prepared message. Please fill in the blanks before sending.</p>
  <div class="contact-screen-bottom"><span>© 2026 B2W LLC</span><a href="mailto:hello@b2w-ai.com">hello@b2w-ai.com ↗</a></div>`;
 document.body.appendChild(dialog);
 const standalone=location.pathname.replace(/\/+$/,"")==="/contact";
 function context(){
  const product=document.body.dataset.product;
  if(product==="jasonai"||location.pathname.startsWith("/jasonai"))return "JasonAI";
  if(product==="clara"||location.pathname.startsWith("/clara"))return "Clara";
  return "B2W";
 }
 const request={
  general:(product)=>({subject:"B2W | General interest"+(product==="B2W"?"":" | "+product),
   body:["B2W / GENERAL INTEREST","","Name: ","Company / role: ","What are you looking to improve or explore? ","Best way to reach you: ","","---","Context: "+product].join("\n")}),
  demo:(product)=>({subject:"B2W | Free demo request"+(product==="B2W"?"":" | "+product),
   body:["B2W / FREE DEMO","","Name: ","Company: ","Product you'd like to see: "+(product==="B2W"?"[JasonAI / Clara]":product),"What would you like to try? ","Preferred day/time and time zone: ","","---","We'll respond with next steps. No payment information is needed."].join("\n")}),
  question:(product)=>({subject:"B2W | Product question"+(product==="B2W"?"":" | "+product),
   body:["B2W / PRODUCT QUESTION","","Name: ","Product: "+(product==="B2W"?"[JasonAI / Clara]":product),"Your question: ","Optional link or context: ","","---","Please avoid sharing confidential project information in an initial message."].join("\n")})
 };
 const choices=[...dialog.querySelectorAll("[data-contact-kind]")];
 function prepare(){
  const product=context();
  for(const link of choices){
   const {subject,body}=request[link.dataset.contactKind](product);
   link.setAttribute("href","mailto:"+inbox+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body));
  }
 }
 function open(){
  if(dialog.open)return;
  prepare();
  // Use the same mobile navigation close action before opening a top-layer dialog.
  const tray=document.querySelector(".mobile-tray.open");
  const toggle=document.querySelector(".menu-toggle");
  if(tray&&toggle)toggle.click();
  dialog.showModal();
 }
 document.addEventListener("click",event=>{
  const link=event.target.closest("a[data-contact-open]");
  if(!link)return;
  event.preventDefault();
  open();
 });
 dialog.querySelector(".contact-close").addEventListener("click",()=>dialog.close());
 dialog.addEventListener("click",event=>{
  if(event.target!==dialog)return;
  const r=dialog.getBoundingClientRect();
  if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();
 });
 dialog.addEventListener("close",()=>{if(standalone)location.assign("/")});
 if(standalone)open();
})();