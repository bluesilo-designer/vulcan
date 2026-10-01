/* ============================================================
   BLUE SILO. Home, version 5. Loaded after app.js and v4.js.

   v5 keeps v4's positioning word for word. What changes:
     - real footage carries the first screen instead of a schematic
     - the portfolio reads as a register, not a wall of panels
     - two statements sit over stills, so the page breathes
     - customer evidence is anonymised until permission is in writing

   Everything reused from v4: PORTFOLIO, IFC_CATS, ENGAGE, ASSURE,
   FAQ4, RELEASE4, BRANDS. Nothing is restated here.
   ============================================================ */

/* Media used by the home page. Ids match files in media/ and the
   MEDIA_READY manifest in data.js. */
var V5M={
  hero:   {id:"home-control-room",kind:"Video",ratio:"",
           label:"Control room before a serial",
           brief:"Range control room, empty, screens live. 16:9."},
  range:  {id:"home-range-dawn",kind:"Image",ratio:"",
           label:"Indoor range before first light",
           brief:"Lanes receding to the target line, nobody present. 3:2."},
  bench:  {id:"integration-bench",kind:"Image",ratio:"",
           label:"Integration test bench",
           brief:"Rack mounted equipment and a patch loom. 4:3."},
  estop:  {id:"assurance-estop",kind:"Image",ratio:"r-32",
           label:"Emergency stop, corridor",
           brief:"Wall mounted stop control, hard shadow. 3:2."}
};

/* Evidence. v4 printed a customer name as text on a public page.
   Until written permission exists for each organisation, this
   states the relationship class and nothing identifying. */
var V5TRUST=[
  ["Delivered for",
   "<b>A national defence force</b> and its appointed operating contractor, on a live firing range complex. The programme, the site and the agency are named only under a signed non-disclosure agreement."],
  ["Working with",
   "<b>Targetry, video, building management and tracking specialists</b> as named subcontractors and partners. Logos are published once each organisation has given written permission, and not before."]
];

function pHomeV5(){
  var n=count(PRODUCTS.length);

  return ''+

  /* ---------- 1. hero, full bleed footage ---------- */
  '<section class="v5hero">'+
    '<div class="v5hero__bed">'+media(V5M.hero)+'</div>'+
    '<div class="v5hero__veil"></div>'+
    '<div class="ticks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'+
    '<div class="shell">'+
      '<span class="label v3-eyebrow">Defence and security technology</span>'+
      '<h1>The systems behind military training and secure sites</h1>'+
      '<p class="lead">Blue Silo builds range control, vision AI, security and accountability systems for defence. Each is available on its own, and each is built to work with the equipment you already run.</p>'+
      '<div class="btns"><a class="btn btn--p" href="#systems">Explore the systems</a>'+
      '<a class="btn btn--g" href="#/contact">Request the capability statement</a></div>'+
    '</div>'+
    '<div class="v5cue" aria-hidden="true"><span>Scroll</span><i></i></div>'+
  '</section>'+

  /* ---------- 2. evidence, anonymised ---------- */
  '<section class="v5trust">'+V5TRUST.map(function(t){
    return '<div class="shell"><span class="label">'+t[0]+'</span><p>'+t[1]+'</p></div>';
  }).join('')+'</section>'+

  /* ---------- 3. the portfolio, as a register ---------- */
  band({id:"systems",label:"Systems",
    title:"Named systems, bought one at a time or together",
    intro:"Take the range control system alone, or only ammunition management. Every system stands on its own and is worth more beside the others.",
    body:'<div class="v5reg">'+PORTFOLIO.map(function(s,i){
      var ps=s.ids.map(prodById);
      return '<div class="v5reg__r rv">'+
        '<span class="v5reg__n">'+('0'+(i+1)).slice(-2)+'</span>'+
        '<span class="v5reg__h"><span class="v5reg__b">'+mark(s.brand,s.tbc)+'</span>'+
          '<span class="v5reg__c">'+s.cat+'</span>'+
          '<span class="v5reg__t">'+(s.tbc?'Product name to follow':'Available on its own')+'</span></span>'+
        '<p class="v5reg__d">'+s.d+'</p>'+
        '<span class="v5reg__l">'+ps.map(function(p){
          return '<a href="#/products/'+p.id+'"><i class="ph '+p.icon+'" aria-hidden="true"></i>'+
            '<b>'+p.acr+'</b></a>';
        }).join('')+'</span>'+
      '</div>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)">'+
    '<a class="btn btn--g" href="#/products">Compare all '+n+' systems</a></div>'})+

  /* ---------- 4. statement over the range still ---------- */
  '<section class="v5say">'+
    '<div class="v5say__bed">'+media(V5M.range)+'</div>'+
    '<div class="v5say__veil"></div>'+
    '<div class="shell"><div class="v5say__in rv">'+
      '<h2>A range day is a chain, and it breaks at the joins</h2>'+
      '<p>Booking, access, the armskote, the ammunition counter, the firing point, the return. Each step is somebody else&rsquo;s system, and the account only closes if every handover carried the right data. We build the steps and we specify the joins.</p>'+
    '</div></div>'+
  '</section>'+

  /* ---------- 5. the chain, interactive ---------- */
  band({id:"chain",bleed:true,deep:true,body:
    '<div class="shell"><div class="head rv">'+
    '<h2>From the gate to the closing account, on one range day</h2>'+
    '<p>Where the systems meet, nothing is carried by hand. Select a step to see what happens, what data crosses, and which system holds it.</p></div></div>'+
    '<div class="chain"><div class="chain__rail" id="rail" role="tablist" aria-label="The training day"></div>'+
    '<div class="panel"><div class="shell"><div class="panel__in" id="panel"></div></div></div></div>'})+

  /* ---------- 6. measures ---------- */
  '<div class="measure v3-measure">'+
    '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
    '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
    '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
    '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
  '</div>'+

  /* ---------- 7. integration ---------- */
  band({label:"Integration",title:"Built to connect to what is already on site",
    intro:"Interfaces are described as classes. The named counterparts on any programme belong to that programme.",
    body:'<div class="ifc rv">'+IFC_CATS.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'})+

  /* ---------- 8. statement over the bench ---------- */
  '<section class="v5say v5say--r">'+
    '<div class="v5say__bed">'+media(V5M.bench)+'</div>'+
    '<div class="v5say__veil"></div>'+
    '<div class="shell"><div class="v5say__in rv">'+
      '<h2>Every counterpart gets a simulator before it gets a cable</h2>'+
      '<p>Interfaces are integrated in dependency order, on a bench, against a stand in for the other side. The alternative is discovering in the final month that two suppliers read the same field differently.</p>'+
    '</div></div>'+
  '</section>'+

  /* ---------- 9. engagement ---------- */
  band({deep:true,label:"Engagement",title:"How we work with partners and integrators",
    intro:"The same discipline applies whether the other side is a partner, a prime, or your own team.",
    body:'<ol class="path path--4 rv">'+ENGAGE.map(function(s,i){
      return '<li><span class="path__n">'+('0'+(i+1)).slice(-2)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></li>';
    }).join('')+'</ol>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/integration">Integration and interfaces</a>'+
    '<a class="btn btn--g" href="#/contact">Request the ICD pack</a></div>'})+

  /* ---------- 10. assurance ---------- */
  band({label:"Assurance",title:"Secure by design, from the node to the enterprise",
    intro:"Protection of the product and of the site, for environments that are isolated by default.",
    body:'<div class="ifc ifc--3 rv">'+ASSURE.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'+
    '<div class="v5stop">'+
      '<div class="rv">'+media(V5M.estop)+'</div>'+
      '<div class="rv" data-d="1"><h3>And a range that must always stop</h3>'+
      '<p>The emergency stop path does not depend on our control software being healthy, reachable, or even running. Where a person is detected forward of the firing line, firing is inhibited until the area is confirmed clear.</p>'+
      '<div class="btns"><a class="btn btn--g" href="#/assurance">Safety and assurance</a></div></div>'+
    '</div>'})+

  /* ---------- 11. company ---------- */
  band({deep:true,label:"Blue Silo",
    title:"A defence and security specialist, and the continuity to match",
    intro:"Control systems, integration, computer vision and security engineering under one roof, focused on defence. The continuity position is stated up front rather than asked for.",
    body:'<div class="facts rv">'+
      '<div class="fact"><b>Source code escrow, as standard</b><span>Defined release conditions and a verified deposit.</span></div>'+
      '<div class="fact"><b>Intellectual property settled first</b><span>Rights are agreed in the contract, in writing, before delivery.</span></div>'+
      '<div class="fact"><b>Documentation a third party can use</b><span>Written so a competent team can take the system over.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/company">About Blue Silo</a></div>'})+

  /* ---------- 12. questions ---------- */
  band({label:"Questions",title:"What evaluators ask first",
    body:'<div class="faq rv">'+FAQ4.map(function(q,i){
      return '<details'+(i===0?' open':'')+'><summary>'+q[0]+'<span class="faq__i" aria-hidden="true"></span></summary><p>'+q[1]+'</p></details>';
    }).join('')+'</div>'})+

  /* ---------- 13. close ---------- */
  '<section class="close"><div class="shell rv">'+
    '<h2>Talk to the people who build it</h2>'+
    '<p class="lead">Start with the material, or start with a question. Three routes reach three different inboxes, so it lands with someone who can answer it.</p>'+
    '<div class="g g3 v3-release">'+RELEASE4.map(function(r){
      return '<a href="#/contact"><span class="label">Released on request</span><h3>'+r[0]+'</h3><p>'+r[1]+'</p>'+
        '<span class="v3-reader__cta">Request <i class="ph ph-arrow-right" aria-hidden="true"></i></span></a>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--p" href="#/contact">Send an enquiry</a></div>'+
  '</div></section>';
}

/* ------------------------------------------------------------
   Post render fixes.

   1. media() writes preload="metadata" and waits for loadeddata.
      With metadata only preload that event does not fire in
      Chrome, so the hero video loaded and then sat paused. We
      promote it to a real autoplay element and start it here.
   2. app.js render() rewrites document.title on every render,
      and v5 renders after v4 has already retitled, so the old
      range-only title came back. Set it last.
   3. app.js binds hashchange to its own render reference, so
      reassigning the global would not reach it. Listen instead.
   ------------------------------------------------------------ */
function v5media(){
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.media__asset').forEach(function(el){
    if(el.tagName==='VIDEO'){
      el.preload='auto'; el.muted=true; el.playsInline=true;
      if(!still){ el.autoplay=true; }
      if(el.readyState>=2){ mediaReady(el); }
      else { el.addEventListener('loadeddata',function(){ mediaReady(el); },{once:true}); }
      if(!still){ el.play().catch(function(){}); }
    } else if(el.complete && el.naturalWidth){
      mediaReady(el);
    }
  });
}

function v5title(){
  var h=(location.hash||'#/').replace(/^#/,''), m=h.match(/^\/products\/([a-z]+)$/), pre='';
  if(m){ var p=PRODUCTS.filter(function(x){return x.id===m[1];})[0]; if(p) pre=p.acr+'. '; }
  document.title=pre+'Blue Silo. Defence and Security Technology';
}

function v5after(){ v5media(); v5title(); }

ROUTES['']=ROUTES['/']=pHomeV5;
pHome=pHomeV5;
window.addEventListener('hashchange',v5after);
render(); v5after();

/* ============================================================
   PRODUCT PAGES. Cinematic stage.

   The base product page puts its media in a small split beside
   the dependencies text, where a video is wasted. v5 lifts that
   media into a pinned full bleed stage under the masthead and
   strips the now duplicate figure out of the split.

   media() output is deterministic, so the exact figure string
   can be removed rather than matched with a regex over nested
   markup.
   ============================================================ */

/* Products whose still was generated and can serve as a poster
   frame. Setting poster for anything else would request a file
   that does not exist and put a 404 in the console. */
var V5POSTER={vms:1,eva:1,pwats:1};

var pProductV4=pProduct;
pProduct=function(id){
  var html=pProductV4(id);
  var p=PRODUCTS.filter(function(x){return x.id===id;})[0];
  if(!p) return html;

  var fig=media(p.media);
  var wrapped='<div class="rv">'+fig+'</div>';

  /* only build the stage if the figure is where we expect it */
  if(html.indexOf(wrapped)<0) return html;
  html=html.replace(wrapped,'').replace('<div class="split">','<div class="split split--solo">');

  var stage='<section class="pv">'+
    '<div class="pv__stick">'+fig+
      '<div class="pv__veil"></div>'+
      '<div class="pv__ticks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'+
      '<div class="pv__cap rv">'+
        '<span class="label">'+p.acr+', '+p.role.toLowerCase()+'</span>'+
        '<b>'+p.media.label+'</b>'+
        '<span>'+p.where+'</span>'+
      '</div>'+
    '</div>'+
  '</section>';

  /* Scroll driven CSS is a progressive enhancement and does not run
     everywhere. Give the capability blocks the project's own
     IntersectionObserver reveal as well, staggered, so the page is
     never flat on a browser without scroll timelines. The wrapper
     loses .rv so the children are not revealed twice. */
  html=html.replace('<div class="caps rv">','<div class="caps">');
  var k=0;
  html=html.replace(/<div class="cap">/g,function(){
    return '<div class="cap rv" style="--i:'+(k++)+'">';
  });

  var mark='</dl></div></div>';
  var i=html.indexOf(mark);
  if(i<0) return html;
  return html.slice(0,i+mark.length)+stage+html.slice(i+mark.length);
};

/* Read progress rail, added once and shown by body class. */
(function(){
  var el=document.createElement('div');
  el.className='pv-prog'; el.setAttribute('aria-hidden','true');
  document.body.appendChild(el);
})();

/* Poster frames, and the product body class the rail keys off. */
var v5mediaBase=v5media;
v5media=function(){
  document.querySelectorAll('video.media__asset').forEach(function(v){
    var id=v.closest('.media') && v.closest('.media').dataset.id;
    if(id && V5POSTER[id] && !v.getAttribute('poster')) v.setAttribute('poster','media/'+id+'.jpg');
  });
  v5mediaBase();
};

/* v5after is already bound to hashchange further up, and it calls
   v5media and v5title by name, so both pick up the versions above
   without binding a second listener. Only the body class is new. */
var v5titleBase=v5title;
v5title=function(){
  v5titleBase();
  document.body.classList.toggle('is-product',/^#\/products\/[a-z]+$/.test(location.hash||''));
};

/* pProduct was replaced after the first render() above, so the page
   on screen was still built by the v4 version. Render again now that
   the stage wrapper is in place. */
render();
v5after();
