/* ============================================================
   BLUE SILO — home, version 4. Loaded after app.js and v3.js.
   Applies the positioning review:
     - Blue Silo leads as a defence and security technology
       company, not as a single range training chain
     - named systems (Vulcan, Centrix, Excel) sold one at a time
     - customer and partner evidence near the top
     - integration shown as categories and an ecosystem
     - assurance widened beyond software licensing
   The range chain stays, as proof of end to end range depth.
   ============================================================ */

/* Product brands. Vulcan, Centrix and Excel were named in review.
   Anything marked tbc keeps its descriptive name until named. */
var BRANDS={
 rcs:  {name:"Vulcan", line:"Range control"},
 vms:  {name:"Excel",  line:"Video management"},
 eva:  {name:"Excel",  line:"Vision AI operations"},
 as:   {name:"Centrix",line:"Security and access"},
 pwats:{name:"PWATS",  line:"Tracking",tbc:true},
 ewms: {name:"EWMS",   line:"Weapon management",tbc:true},
 eams: {name:"EAMS",   line:"Ammunition management",tbc:true},
 hums: {name:"HUMS",   line:"Health and usage",tbc:true}
};

/* Portfolio as it is sold, one card per named system. */
var PORTFOLIO=[
 {brand:"Vulcan",cat:"Range control",ids:["rcs"],flag:true,
  d:"The system a live-firing range runs on. Prepares the session, drives targetry and effects, holds the emergency stop, and files the record afterwards."},
 {brand:"Excel",cat:"Vision AI and video",ids:["vms","eva"],
  d:"Video management and computer vision in one line. Records training, marks events on the timeline, and watches perimeters and ranges for hazards."},
 {brand:"Centrix",cat:"Security",ids:["as"],
  d:"Controlled access for defence sites. Identity, booking and vehicle clearance verified at the gate before anyone is inside."},
 {brand:"Accountability",cat:"Weapons and ammunition",ids:["ewms","eams","pwats"],tbc:true,
  d:"Weapons as serialised assets, ammunition as a counted consumable, and every person and item tracked between the counter and the firing point."},
 {brand:"Sustainment",cat:"Health and usage",ids:["hums"],tbc:true,
  d:"Health, usage and utilisation collected from every connected system, turned into maintenance before a failure rather than after it."}
];

/* Evidence. Names from the review. Logos need written permission
   from each organisation before this goes public. */
var EVIDENCE={
 customers:["Singapore Army"],
 partners:["Invarise","Cubic Engineering","Terra"]
};

var IFC_CATS=[
 ["ph-crosshair","Video target systems","Targetry driven on the scenario timeline, with hit and miss returned to the session."],
 ["ph-buildings","Building management","Lighting, ventilation and alarms held in step with range state."],
 ["ph-monitor","Integrated operations centre","Status, alerts and evidence forwarded to the site operations picture."],
 ["ph-shield-check","Access control and security","Doors, zones and perimeter systems that physically act on our decisions."],
 ["ph-lightning","Environmental and battlefield effects","Smoke, sound and pyrotechnic effects triggered on plan."],
 ["ph-speaker-high","Visualisation and public address","Displays and announcements per phase of the session."],
 ["ph-users-three","Identity and directory","Single sign on and role based access against the programme directory."],
 ["ph-calendar-check","Booking and training records","Authority booking and training record systems, exchanged on schedule."]
];

var ENGAGE=[
 ["Scope the join","We agree with each partner which side owns which part of an interface before any code is written."],
 ["Interface register","One row per interface, with initiator, mode, trigger, payload and a named owner on each side."],
 ["Staged integration","Every counterpart has a simulator first. Interfaces are integrated in dependency order, not in the final month."],
 ["Change control","An interface change is a versioned document signed by both owners, then frozen and regressed on every build."]
];

var ASSURE=[
 ["ph-lock-key","Licensing","Entitlement bound to the delivered hardware and validated offline, with no call out at runtime."],
 ["ph-shield-chevron","Hardening","Each node reduced to the services it needs, against a documented baseline."],
 ["ph-tree-structure","Tamper-proof architecture","Critical components integrity checked, with subsystems separated by function so a fault stays contained."],
 ["ph-fingerprint","Multi-factor authentication","Two-factor sign in for operators and administrators, with role based permission checked in every module."],
 ["ph-shield-warning","Cybersecurity","Segmented networks, audit forwarded to the programme log platform, and a stated patch route for fielded systems."],
 ["ph-seal-check","Compliance","Standards alignment stated per control, without inflation, and evidenced in the assurance summary."]
];

var FAQ4=[
 ["Can we buy one system on its own, for example ammunition management?",
  "Yes. Every system is sold and delivered individually, with its interfaces to the rest of the facility specified either way. The portfolio is worth more together, but it is not sold as a bundle."],
 ["Is Blue Silo only a range company?",
  "No. Range training is where we go deepest, from the gate to the closing account. The same systems, and the security and vision products alongside them, serve defence and secure sites more broadly."],
 ["We already have a targetry, video or building management vendor. Does that matter?",
  "No. Working across other suppliers is how the portfolio is already built. Their systems sit behind specified, version controlled interfaces."],
 ["Does any of it need an internet connection?",
  "No. Activation travels on removable media or as a scanned code, and nothing calls out at runtime."],
 ["You are a small company. What if you are not here in five years?",
  "Source code escrow is offered as standard, intellectual property is settled in the contract, and documentation is written so a competent third party can take the system over."]
];

var RELEASE4=[
 ["Capability statement","Portfolio, track record, and the disciplines behind it."],
 ["Assurance summary","Licensing, hardening, architecture, cybersecurity and compliance."],
 ["ICD pack","Interface register structure, protocol patterns and our integration test approach."]
];

function prodById(id){ return PRODUCTS.filter(function(p){return p.id===id;})[0]; }
function mark(name,tbc){
  return '<span class="wm'+(tbc?' wm--tbc':'')+'">'+name+'</span>';
}
function logoSlot(name,kind){
  return '<div class="logo" title="Logo pending permission"><span class="logo__k">'+kind+'</span><b>'+name+'</b></div>';
}

function pHomeV4(){
  return ''+

  /* company first, range second */
  '<section class="hero hero--tall">'+ART+'<div class="hero__scrim"></div><div class="shell">'+
    '<span class="label v3-eyebrow">Defence and security technology</span>'+
    '<h1>The systems behind military training and secure sites</h1>'+
    '<p class="lead">Blue Silo builds range control, vision AI, security and accountability systems for defence. Each is available on its own, and each is built to work with the equipment you already run.</p>'+
    '<div class="btns"><a class="btn btn--p" href="#systems">Explore the systems</a>'+
    '<a class="btn btn--g" href="#/contact">Request the capability statement</a></div>'+
  '</div></section>'+

  /* evidence, straight after the claim */
  '<section class="trust"><div class="shell">'+
    '<div class="trust__row"><span class="label">Delivered for</span><div class="logos">'+
      EVIDENCE.customers.map(function(n){return logoSlot(n,'Customer');}).join('')+'</div></div>'+
    '<div class="trust__row"><span class="label">Working with</span><div class="logos">'+
      EVIDENCE.partners.map(function(n){return logoSlot(n,'Partner');}).join('')+'</div></div>'+
  '</div></section>'+

  /* the portfolio leads */
  band({id:"systems",label:"Systems",title:"Named systems, bought one at a time or together",
    intro:"Take the range control system alone, or only ammunition management. Every system stands on its own and is worth more beside the others.",
    body:'<div class="port rv">'+PORTFOLIO.map(function(s){
      var ps=s.ids.map(prodById);
      return '<article class="port__c'+(s.flag?' port__c--flag':'')+'">'+
        '<div class="port__top">'+mark(s.brand,s.tbc)+'<span class="port__cat">'+s.cat+'</span></div>'+
        '<p>'+s.d+'</p>'+
        '<ul class="port__ps">'+ps.map(function(p){
          return '<li><a href="#/products/'+p.id+'"><i class="ph '+p.icon+'" aria-hidden="true"></i>'+
            '<span><b>'+p.acr+'</b>'+p.name+'</span><i class="ph ph-arrow-right" aria-hidden="true"></i></a></li>';
        }).join('')+'</ul>'+
        (s.tbc?'<span class="port__tbc">Product name to follow</span>':'<span class="port__tbc">Available on its own</span>')+
      '</article>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/products">Compare every system</a></div>'})+

  /* believable numbers */
  '<div class="measure v3-measure">'+
    '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
    '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
    '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
    '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
  '</div>'+

  /* range depth, as proof rather than as the headline */
  band({id:"chain",bleed:true,deep:true,body:
    '<div class="shell"><div class="head rv"><span class="label" style="display:block;margin-bottom:var(--s4)">Range specialist, start to end</span>'+
    '<h2>From the gate to the closing account, on one range day</h2>'+
    '<p>Where the systems meet, nothing is carried by hand. Select a step to see what happens, what data crosses, and which system holds it.</p></div></div>'+
    '<div class="chain"><div class="chain__rail" id="rail" role="tablist" aria-label="The training day"></div>'+
    '<div class="panel"><div class="shell"><div class="panel__in" id="panel"></div></div></div></div>'})+

  /* integration as evidence */
  band({label:"Integration",title:"Built to connect to what is already on site",
    intro:"Interfaces are described as classes. The named counterparts on any programme belong to that programme.",
    body:'<div class="ifc rv">'+IFC_CATS.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'})+

  /* how partners work with us */
  band({deep:true,label:"Engagement",title:"How we work with partners and integrators",
    intro:"The same discipline applies whether the other side is a partner, a prime, or your own team.",
    body:'<ol class="path path--4 rv">'+ENGAGE.map(function(s,i){
      return '<li><span class="path__n">'+('0'+(i+1)).slice(-2)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></li>';
    }).join('')+'</ol>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/integration">Integration and interfaces</a>'+
    '<a class="btn btn--g" href="#/contact">Request the ICD pack</a></div>'})+

  /* assurance, wider than licensing */
  band({label:"Assurance",title:"Secure by design, from the node to the enterprise",
    intro:"Protection of the product and of the site, for environments that are isolated by default.",
    body:'<div class="ifc ifc--3 rv">'+ASSURE.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'+
    '<div class="split v4-safety rv"><div><h3>And a range that must always stop</h3>'+
    '<p>The emergency stop path does not depend on our control software being healthy, reachable, or even running. Where a person is detected forward of the firing line, firing is inhibited until the area is confirmed clear.</p></div>'+
    '<div class="btns"><a class="btn btn--g" href="#/assurance">Safety and assurance</a></div></div>'})+

  /* who builds it */
  band({deep:true,body:'<div class="split split--rev">'+
    '<div class="rv">'+media({id:"company-floor",kind:"Image",ratio:"r-43",label:"Engineering floor",
      brief:"Small engineering team workspace, two people at monitors seen from behind, screens abstracted. Warm task lighting against a dark room. 4:3."})+'</div>'+
    '<div class="rv" data-d="1"><span class="label" style="display:block;margin-bottom:var(--s4)">Blue Silo</span>'+
    '<h2>A defence and security specialist, and the continuity to match</h2>'+
    '<p style="margin-top:var(--s5)">Control systems, integration, computer vision and security engineering under one roof, focused on defence. The continuity position is stated up front.</p>'+
    '<div class="facts">'+
      '<div class="fact"><b>Source code escrow, as standard</b><span>Defined release conditions and a verified deposit.</span></div>'+
      '<div class="fact"><b>Intellectual property settled first</b><span>Rights are agreed in the contract, in writing, before delivery.</span></div>'+
      '<div class="fact"><b>Documentation a third party can use</b><span>Written so a competent team can take the system over.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/company">About Blue Silo</a></div></div>'+
    '</div>'})+

  band({label:"Questions",title:"What evaluators ask first",
    body:'<div class="faq rv">'+FAQ4.map(function(q,i){
      return '<details'+(i===0?' open':'')+'><summary>'+q[0]+'<span class="faq__i" aria-hidden="true"></span></summary><p>'+q[1]+'</p></details>';
    }).join('')+'</div>'})+

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

/* Product pages carry the brand above the descriptive name. */
var pProductBase=pProduct;
pProduct=function(id){
  var p=prodById(id), b=BRANDS[id], html=pProductBase(id);
  if(!p||!b||b.tbc) return html;
  return html.replace('<h1>'+p.name+'</h1>',
    '<div class="v4-pbrand">'+mark(b.name)+'<span>'+b.line+'</span></div><h1>'+p.name+'</h1>');
};

/* Menu lists brands first. */
mPanel.innerHTML='<div class="shell">'+PRODUCTS.map(function(p){
  var b=BRANDS[p.id];
  return '<a href="#/products/'+p.id+'"><b>'+(b&&!b.tbc?b.name+' <em>'+p.acr+'</em>':p.acr)+'</b><span>'+p.role+'</span></a>';
}).join('')+'</div>';

ROUTES['']=ROUTES['/']=pHomeV4;
pHome=pHomeV4;
render();

/* app.js sets the old range-only title on every render. */
function retitle(){ document.title=document.title.replace('Range Training Systems','Defence and Security Technology'); }
window.addEventListener('hashchange',retitle); retitle();
