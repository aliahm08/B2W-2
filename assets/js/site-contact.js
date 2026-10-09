/* A single contact screen shared by all B2W product sites. */
(()=>{
 const dialog=document.createElement("dialog");
 dialog.className="site-contact-screen";
 dialog.setAttribute("aria-label","Contact B2W");
 dialog.innerHTML='<div class="contact-screen-head"><strong>B2W / Contact</strong><button type="button" class="contact-close" aria-label="Close contact screen">Close ×</button></div><h2>Start a conversation.</h2><p>Tell us about the work, the information you use, and what you want to improve.</p><a class="contact-action" href="mailto:hello@b2w-ai.com?subject=B2W%20inquiry"><span>hello@b2w-ai.com</span><span aria-hidden="true">↗</span></a><p class="contact-context">B2W · JasonAI · Clara</p>';
 document.body.appendChild(dialog);
 const standalone=location.pathname.replace(/\/+$/,"")==="/contact";
 const open=()=>{if(!dialog.open)dialog.showModal()};
 document.addEventListener("click",event=>{
 const trigger=event.target.closest("a[data-contact-open]");
 if(trigger){event.preventDefault();open()}
 });
 dialog.querySelector(".contact-close").addEventListener("click",()=>{
 dialog.close();if(standalone)location.assign("/");
 });
 dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
 if(standalone)open();
})();