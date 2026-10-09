/* Site-specific editorial SVGs. No stock assets or external image requests. */
(()=>{
 const wrap=(body,view="0 0 180 42",label="")=>'<svg class="ecosystem-graphic" viewBox="'+view+'" fill="none" role="img" aria-label="'+label+'">'+body+'</svg>';
 const path=(d,cls="graphic-wire")=>'<path class="'+cls+'" d="'+d+'"/>';
 const dot=(x,y,r=3,cls="graphic-node")=>'<circle class="'+cls+'" cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
 const box=(x,y,w,h,cls="graphic-frame",rx=2)=>'<rect class="'+cls+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'"/>';
 const homes={
 jasonai:[
   path("M5 12H48M5 22H37M5 32H48")+path("M48 12C79 12 80 21 97 21M48 32C79 32 80 21 97 21")+dot(97,21,7,"graphic-hub")+path("M104 21H171")+dot(171,21),
   box(8,8,38,27)+path("M16 16H38M16 24H30M46 21H94M94 21C119 21 118 7 141 7M94 21C119 21 118 35 141 35")+dot(94,21,6,"graphic-hub")+dot(145,7,4)+dot(145,35,4),
   box(7,9,34,25)+dot(51,21,4)+path("M41 21H69C78 21 78 8 91 8H128M69 21C78 21 78 34 91 34H128")+box(128,3,29,14)+box(128,27,29,14)+path("M135 10L140 14L149 5M135 34L140 37L149 29","graphic-accent")]
 ,clara:[
   path("M6 35L25 14L44 35L63 14L82 35M6 35H90")+dot(25,14,4)+dot(63,14,4)+path("M90 23H171")+dot(171,23),
   box(13,4,48,34)+path("M22 13H50M22 21H48M22 29H43")+path("M61 21H109")+dot(109,21,6,"graphic-hub")+path("M115 21H166")+dot(166,21),
   box(8,7,52,30)+path("M17 16H52M17 24H52M17 31H37")+path("M60 22H94")+box(104,11,13,25)+box(127,5,13,31)+box(150,0,13,36)+path("M106 8L132 0L157 0","graphic-accent")]
 };
 function home(site,i){return wrap(homes[site][i]+"", "0 0 180 42",site==="jasonai"?"Messages, business memory and approvals":"Field work, knowledge and estimates");}
 function note(site,i){
  const shift=(i%3)*10;
  if(site==="jasonai"){
   const shapes=[dot(18,43,7)+dot(18,93,7)+dot(18,128,7)+path("M25 43C60 43 57 75 87 75M25 93H87M25 128C60 128 57 75 87 75")+dot(98,75,14,"graphic-hub")+path("M112 75H158")+box(158,53,29,44)+path("M164 64H181M164 76H181M164 88H174"),
   box(16,20,50,36)+box(16,86,50,36)+path("M66 38H112M66 104H112M112 38L144 75L112 104")+dot(144,75,11,"graphic-hub")+path("M155 75H186"),
   box(8,40,55,70)+path("M17 56H54M17 70H54M17 84H45M17 98H54")+path("M63 75H122")+box(122,49,62,55)+path("M136 75L149 89L174 59","graphic-accent")];
   return wrap(shapes[i%3]+(i>2?path("M80 "+(20+shift)+"H183","graphic-light"):""),"0 0 200 150","JasonAI project information diagram");
  }
  const shapes=[
   box(15,16,61,118)+path("M27 35H64M27 49H64M27 63H64M27 77H56M27 91H64")+path("M76 75H115")+box(115,38,69,75)+path("M129 53H174M129 66H174M129 80H170M129 96H161"),
   path("M14 122L39 34L77 85L105 22L140 68L184 28")+dot(39,34,6)+dot(77,85,6)+dot(105,22,6)+dot(140,68,6)+dot(184,28,6)+path("M8 129H188","graphic-light"),
   box(12,23,70,105)+path("M23 43H70M23 56H70M23 69H70M23 82H61M23 95H65")+path("M82 75H105")+box(110,86,14,36)+box(135,57,14,65)+box(160,30,14,92)+path("M115 78L142 49L167 22","graphic-accent")
  ];
  return wrap(shapes[i%3]+(i>2?dot(190,124,4):""),"0 0 200 150","Clara project documents diagram");
 }
 function flow(site,i){
  if(site==="jasonai"){return wrap(i===0?
    box(8,14,50,70)+path("M17 28H48M17 41H48M17 54H40")+path("M58 49H106")+dot(110,49,11,"graphic-hub")+path("M121 49H169")+box(169,31,39,39)+path("M177 51L185 59L201 39","graphic-accent"):
    dot(17,19,7)+dot(17,58,7)+dot(17,92,7)+path("M24 19C58 19 59 57 82 57M24 58H82M24 92C58 92 59 57 82 57")+dot(93,57,13,"graphic-hub")+path("M106 57H141")+box(141,12,63,90)+path("M152 29H193M152 47H193M152 65H184M152 84H193"),
    "0 0 220 112","JasonAI "+(i?"business memory":"assistant")+" workflow");}
  return wrap(i===0?
    path("M10 100L40 33L73 100M10 100H82")+dot(40,33,5)+path("M82 60H110")+box(111,12,90,87)+path("M126 28H188M126 44H188M126 60H177M126 77H183"):
    box(10,10,80,94)+path("M21 27H79M21 44H79M21 61H79M21 78H72")+path("M90 54H122")+box(126,65,15,33)+box(150,41,15,57)+box(174,20,15,78)+path("M130 55L158 32L182 10","graphic-accent"),
    "0 0 220 112","Clara "+(i?"estimate review":"field document")+" workflow");
 }
 function stage(site,i){return wrap(site==="jasonai"?path("M8 20H58C79 20 80 7 95 7S115 35 131 35H172")+dot(58,20,4)+dot(95,7,4)+dot(131,35,4)+dot(172,35,4):box(10,6,40,30)+path("M18 14H42M18 23H39M50 21H108")+dot(108,21,7,"graphic-hub")+path("M115 21H170")+dot(170,21,4),"0 0 180 42",site+" step "+(i+1));}
 window.B2WGraphics={home,note,flow,stage};
})();