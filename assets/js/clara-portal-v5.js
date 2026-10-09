/* Clara V5 portal entry and product presentation.
 * A scripted website walkthrough is not the estimating backend.
 * Free portal signup, consent and estimation will live in the portal app. */
(()=>{
"use strict";
const portal="https://portal.b2w-ai.com/";
const ready="<a class=\"clara-portal-cta\" href=\""+portal+"\" rel=\"noopener\">Open Clara portal <span aria-hidden=\"true\">↗</span></a>";
function show(){
 return '<section class="clara-portal-page" aria-label="What We Show">'+
  '<div class="clara-portal-intro"><p class="clara-intro-weight">An open estimating tool for work that starts on site.</p>'+
  '<p>Start with a voice note describing the job. Review the scope and quantities, build an editable estimate, then keep every revision with the property.</p>'+
  '<div class="clara-portal-actions">'+ready+'<span>Free access is planned. Account creation and processing availability depend on the portal launch.</span></div></div>'+
  '<div class="clara-demo-frame"><div class="clara-demo-caption"><span>Clara estimator</span><span>Interactive illustration · not a live estimate</span></div>'+
  '<div class="v2-live-stage" data-product="clara" aria-label="Illustrative Clara voice note to estimate walkthrough"></div></div>'+
  '<div class="clara-portal-journey">'+
    [
      ["01","Open the estimator","From B2W, open portal.b2w-ai.com in a new first-party app session."],
      ["02","Sign up or sign in","Create a free account or return to your work. No payment details required for the free entry tier."],
      ["03","Accept the terms","Read Terms of Service and Privacy Policy, then explicitly accept the current terms before using the app."],
      ["04","Record the job","Allow microphone access, make a site voice note and review its transcript."],
      ["05","Review the estimate","Check quantities, rates, assumptions and exclusions before sharing or relying on any amount."],
      ["06","Save and share","Store the estimate by property, revise it, and invite the people who need to review it."]
    ].map(x=>'<div class="clara-portal-step"><span>'+x[0]+'</span><span><strong>'+x[1]+'</strong><span>'+x[2]+'</span></span></div>').join("")+
  '</div>'+
  '<div class="clara-portal-close"><p>Clara estimates are drafts until reviewed. The browser animation is a demonstration; the authenticated tool and Terms acceptance must be implemented in the portal application.</p>'+ready+'</div>'+
  '</section>';
}
function features(entries){
 return '<section class="clara-feature-page"><div class="clara-feature-intro"><p>Record a job and create an estimate from a voice note. Review it, then share the finished result.</p><a href="/clara/what-we-show/">See the estimator ↗</a></div>'+
 '<div class="clara-feature-list clara-feature-cards">'+entries.map((entry,i)=>
 '<details class="clara-feature-item clara-feature-card"><summary><span class="clara-feature-index">'+String(i+1).padStart(2,"0")+'</span>'+
 '<span class="clara-feature-heading"><strong>'+entry[0]+'</strong><span>'+entry[1]+'</span></span><span class="clara-feature-marker" aria-hidden="true">+</span></summary>'+
 '<div class="clara-feature-more">'+entry[2].map(line=>'<p>'+line+'</p>').join("")+'</div></details>').join("")+'</div>'+
 '<div class="clara-feature-bottom"><span>Voice-to-estimate and sharing are the two core features. Portal availability must be verified.</span><a href="'+portal+'" rel="noopener">Open Clara portal ↗</a></div></section>';
}

window.B2WClaraPortalV5={portal,show,features};
})();