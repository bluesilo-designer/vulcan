/* ============================================================
   BLUE SILO. Home, version 6.

   Adapted from v5 and rewritten against the 06 Oct review deck.
   Loaded after app.js. It does not depend on v4.js or v5.js: all
   content it needs is defined here, so the two earlier variants
   keep working unchanged.

   What the review changed, and is applied here:
     - six Blue Silo products are named, and AS becomes AGS
     - TRMS joins the line up, so the footer lists seven systems
     - VMS and vision AI are ACCEL, from SigmaWave, a partner
     - the flat system list becomes TRAIN / OPERATE / ACCOUNT /
       MONITOR / GOVERN
     - the chain statement becomes "Where we operate"
     - integration is stated as eight concrete categories
     - assurance is six controls, and the stop block is removed
     - customer logos are shown, approved by the client
   ============================================================ */

/* ---------- product brands, from the review table ---------- */
var V6BRAND={
  rcs:  {brand:"VULCAN",  sys:"Range Management System",            acr:"RMS"},
  trms: {brand:null,      sys:"Training Resource Management System", acr:"TRMS"},
  ewms: {brand:"SENTRAX", sys:"Electronic Weapon Management System", acr:"EWMS"},
  eams: {brand:"MUNIX",   sys:"Electronic Ammunition Management System", acr:"EAMS"},
  hums: {brand:"PRIMUS",  sys:"Health & Utilisation Monitoring System",  acr:"HUMS"},
  pwats:{brand:"WARDEN",  sys:"Personnel, Weapon & Ammunition Tracking System", acr:"PWATS"},
  as:   {brand:"AXIOM",   sys:"Administrative & Governance System",  acr:"AGS"},
  vms:  {brand:"ACCEL",   sys:"Video Management System",            acr:"VMS", partner:"SigmaWave"},
  eva:  {brand:"ACCEL",   sys:"Vision AI Operations",               acr:"EVA", partner:"SigmaWave"}
};

/* TRMS is new in this review and has no entry in data.js.
   Added here with only what the deck actually states, so nothing
   is invented to fill a product page. */
if(!PRODUCTS.filter(function(p){return p.id==='trms';}).length){
  PRODUCTS.unshift({
    id:"trms", icon:"ph-graduation-cap", acr:"TRMS",
    name:"Training Resource Management System",
    group:"Training", role:"Plans the training",
    angle:"Digitise training resources, personnel, bookings, allocation and performance, so a training day is planned against what is actually available rather than against an assumption.",
    users:["Training planner","Unit conductor","Booking officer","Instructor"],
    on:["Access","Register","Brief"],
    where:"Training management office and the booking desk",
    decides:"What is booked, who is expected, which resources are allocated, and whether the plan is achievable with what the facility has.",
    media:{id:"s-brief",kind:"Image",ratio:"r-43",label:"Briefing room before a serial",
           brief:"Empty briefing room, seats facing a dark screen. 3:4."},
    groups:[
      {k:"Resource management",m:"Training resource register · Availability and allocation · Capacity planning against demand"},
      {k:"Personnel",m:"Trainee and instructor records · Qualification and currency · Assignment to a serial"},
      {k:"Booking",m:"Slot inventory · Individual and unit booking · Amendment and cancellation"},
      {k:"Performance",m:"Attendance · Results captured from the range · Trend reporting by unit and by individual"}
    ],
    ifc:[["Range management","↔","Throughout the training day"],
         ["Identity and directory","←","At sign in"],
         ["Training records","↔","On completion"]],
    dep:"Requires an authoritative source for personnel and for the training calendar. Where a programme already runs a booking system, TRMS consumes it rather than replacing it.",
    rel:["rcs","as","hums"]
  });
}

/* ---------- approved customer and partner evidence ---------- */
var V6TRUST={
  title:"Trusted in mission-critical environments",
  line:"Supporting defence, government and homeland security organisations across Singapore and APAC.",
  logos:["MINDEF","DSTA","Certis","Surbana Jurong","NCS","ST Engineering"]
};

/* ---------- modernising defence operations ----------
   Deck page 3, marked "ADD here" between the mission line and
   the systems section. Four layers, then the connecting claim. */
var V6MODERN={
  title:"Modernising defence operations",
  line:"Defence operations are becoming increasingly connected.",
  close:"Blue Silo connects these layers into a unified operational environment.",
  cols:[
    ["Training",  "ph-graduation-cap",
      [["Personnel","ph-users-three"],["Resources","ph-stack"]]],
    ["Operations","ph-crosshair",
      [["Ranges","ph-target"],["Facilities","ph-buildings"]]],
    ["Assets",    "ph-package",
      [["Weapons","ph-vault"],["Ammunition","ph-circles-three"]]],
    ["Data",      "ph-chart-line",
      [["Events","ph-pulse"],["Analytics","ph-chart-bar"]]]
  ]
};

/* ---------- the tile board, deck page 5 ----------
   One tile per system, grouped by the function it serves. */
var V6TILES=[
  ["Train",  "trms", "Digitise training resources, personnel, bookings, allocation and performance."],
  ["Operate","rcs",  "Coordinate range operations, control, safety and utilisation."],
  ["Account","ewms", "Hold weapons as serialised assets, from issue and return to fit for firing certification."],
  ["Account","eams", "Issue, verify and reconcile ammunition as a counted consumable, daily and weekly."],
  ["Account","pwats","Locate personnel and issued items to sub metre accuracy, refreshed every second."],
  ["Monitor","hums", "Read equipment health and usage, so maintenance is planned against evidence."],
  ["Monitor","vms",  "Record what happened and detect what is happening now, processed at the edge."],
  ["Govern", "as",   "Control who is inside the fence, and keep the administrative record defensible."]
];

/* ---------- the system overview, five functions ---------- */
var V6STACK=[
  {k:"Train",   d:"Plan the training day against what the facility actually has.", ids:["trms"]},
  {k:"Operate", d:"Run the range, hold the safety state, file the record.",        ids:["rcs"]},
  {k:"Account", d:"Weapons, ammunition and people, counted and located.",          ids:["ewms","eams","pwats"]},
  {k:"Monitor", d:"Watch the equipment and watch the ground.",                     ids:["hums","vms","eva"]},
  {k:"Govern",  d:"Control who is inside, and keep the record defensible.",        ids:["as"]}
];

/* ---------- where we operate ---------- */
var V6OPS=[
  ["ph-graduation-cap","Training","Military training"],
  ["ph-crosshair","Ranges","Live fire range operations"],
  ["ph-package","Assets","Weapons and ammunition"],
  ["ph-users-three","Readiness","Personnel operations"],
  ["ph-shield-check","Security","Surveillance, AI and video"],
  ["ph-scales","Governance","Administration and compliance"]
];

/* ---------- integration, eight categories ---------- */
var V6IFC=[
  ["ph-crosshair","Live-Fire Target & Scoring Systems",
   "Target presentation, hit detection and scoring integrated with the training scenario, with results captured and returned to the session."],
  ["ph-cube","Virtual Training & Simulation Systems",
   "Simulated and virtual training environments driven from the same scenario, so results carry across live and virtual delivery."],
  ["ph-buildings","Range Infrastructure & BMS",
   "Facility systems, environmental controls and alarms integrated with range operations and training states."],
  ["ph-monitor","Integrated Operations Centre",
   "Centralise system status, alerts, events and operational data into a unified command and control view."],
  ["ph-shield-check","Security & Access Control",
   "Access control, secure zones, perimeter systems and surveillance integrated into the wider operational environment."],
  ["ph-lightning","Battlefield Effects & Simulation",
   "Coordinate smoke, sound, lighting and battlefield effects with training scenarios to create realistic operational environments."],
  ["ph-speaker-high","Range Visualisation & Communications",
   "Coordinate displays, announcements and visual cues with the training phase, scenario and operational state."],
  ["ph-calendar-check","Training Management & Scheduling",
   "Exchange bookings, schedules and training records with authority scheduling and training record systems."]
];

/* ---------- simulate, integrate, deploy ---------- */
var V6SIM=[
  ["ph-plugs-connected","Interface validation","Every interface is exercised against a stand in before the counterpart arrives."],
  ["ph-tree-structure","System dependency mapping","Dependencies are mapped and integrated in order, not discovered in the final month."],
  ["ph-flask","Scenario testing and simulation","Operational behaviour is rehearsed end to end before anything is deployed."]
];

/* ---------- assurance, six controls ---------- */
var V6ASSURE=[
  ["ph-lock-key","Licensing and entitlement control",
   "Entitlement is bound to the delivered hardware and validated offline, with no call out at runtime."],
  ["ph-shield-chevron","System hardening",
   "Each node is reduced to the services it needs, against a documented and repeatable baseline."],
  ["ph-tree-structure","Tamper-proof architecture",
   "Critical components are integrity checked, with subsystems separated by function so a fault stays contained."],
  ["ph-fingerprint","Multi-factor authentication",
   "Two factor sign in for operators and administrators, with role based permission checked in every module."],
  ["ph-shield-warning","Cybersecurity and network segregation",
   "Segmented networks, audit forwarded to the programme log platform, and a stated patch route for fielded systems."],
  ["ph-seal-check","Standards alignment and compliance",
   "Standards alignment stated per control, without inflation, and evidenced in the assurance summary."]
];

/* ---------- company ---------- */
var V6FACTS=[
  ["ph-code","Source code escrow, as standard",
   "Defined release conditions and a verified deposit, so continued access never depends on goodwill."],
  ["ph-certificate","Intellectual property settled first",
   "Rights are clearly assigned in the contract, in writing, before delivery begins."],
  ["ph-book-open","Documentation a third party can use",
   "Comprehensive technical and operational documentation, so a competent team can take over if needed."]
];

/* ---------- questions ---------- */
var V6FAQ=[
  ["Can Blue Silo systems be deployed individually?",
   "Yes. Each system can be deployed independently with its own hardware, software and interfaces. Our systems are designed to operate as standalone modules, while remaining ready to integrate with other Blue Silo or third party systems as the programme evolves."],
  ["Is Blue Silo only a range systems company?",
   "No. While range training is a core focus, we also develop and integrate systems for security, video analytics, asset management, operational monitoring and training management. Our solutions support military training facilities, defence installations and other mission-critical environments."],
  ["Can Blue Silo work with our existing suppliers and systems?",
   "Yes. We work with prime contractors, system integrators and technology partners. Our systems are designed with defined interfaces and industry standard protocols, allowing integration with existing infrastructure, third party hardware and software where required."],
  ["Can the systems operate in isolated or offline environments?",
   "Yes. Our systems can be deployed in isolated, secure networks without internet connectivity. Activation, licensing and updates can be handled through controlled offline methods, with no live internet connection required during operations."],
  ["What happens if we need long-term continuity or another team needs to take over?",
   "We provide comprehensive documentation, source code escrow, and clearly defined intellectual property rights. Our systems are designed for maintainability, allowing a competent third party to take over support if required. We also offer long term support and maintenance options for continued operations."]
];

/* ---------- material released on request ---------- */
var V6RELEASE=[
  ["Capability Statement","An overview of our defence systems, capabilities and experience."],
  ["Assurance Summary","Our approach to licensing, hardening, cybersecurity and compliance."],
  ["Integration & Interface Pack","Interface structures, protocol patterns and our approach to multi-system delivery."]
];

/* ============================================================
   HELPERS
   ============================================================ */
function v6p(id){ return PRODUCTS.filter(function(p){return p.id===id;})[0]; }

/* The system diagram from deck page 4. Drawn as markup rather than
   an image so it stays crisp, themeable and readable to a screen
   reader. Order matches the deck: three functions across the top,
   then monitor, then govern. */
function v6diagram(){
  var top=[["Train",["TRMS"]],["Operate",["RMS"]],["Account",["EWMS","EAMS","PWATS"]]];
  function node(k,list){
    return '<div class="v6dg__n"><span class="v6dg__k">'+k+'</span>'+
      '<span class="v6dg__l">'+list.map(function(a){return '<i>'+a+'</i>';}).join('')+'</span></div>';
  }
  return '<figure class="v6dg rv" aria-label="Blue Silo systems, grouped by function">'+
    '<figcaption class="v6dg__t">Blue Silo systems</figcaption>'+
    '<div class="v6dg__row v6dg__row--3">'+top.map(function(t){return node(t[0],t[1]);}).join('')+'</div>'+
    '<div class="v6dg__stem" aria-hidden="true"></div>'+
    '<div class="v6dg__row">'+node("Monitor",["HUMS","ACCEL"])+'</div>'+
    '<div class="v6dg__stem" aria-hidden="true"></div>'+
    '<div class="v6dg__row">'+node("Govern",["AGS"])+'</div>'+
  '</figure>';
}

function v6tile(t){
  var fn=t[0], id=t[1], d=t[2], p=v6p(id), b=V6BRAND[id];
  if(!p||!b) return '';
  return '<a class="v6tile" href="#/products/'+id+'">'+
    '<span class="v6tile__fn">'+fn+'</span>'+
    '<i class="ph '+p.icon+'" aria-hidden="true"></i>'+
    (b.brand?'<span class="v6tile__b">'+b.brand+'</span>':'')+
    '<span class="v6tile__s">'+b.sys+'</span>'+
    '<p>'+d+'</p>'+
    (b.partner?'<span class="v6tile__p">Partner, '+b.partner+'</span>':'')+
    '<span class="v6tile__go">Explore '+b.acr+' <i class="ph ph-arrow-right" aria-hidden="true"></i></span>'+
  '</a>';
}

function v6chip(id){
  var b=V6BRAND[id], p=v6p(id);
  if(!p) return '';
  var name=b&&b.brand ? b.brand : (b?b.acr:p.acr);
  return '<a class="v6chip" href="#/products/'+id+'">'+
    '<i class="ph '+p.icon+'" aria-hidden="true"></i>'+
    '<span class="v6chip__b">'+name+'</span>'+
    '<span class="v6chip__s">'+(b?b.acr:p.acr)+'</span>'+
    (b&&b.partner?'<span class="v6chip__p">'+b.partner+'</span>':'')+
    '</a>';
}

/* ============================================================
   HOME
   ============================================================ */
function pHomeV6(){
  return ''+

  /* ---- 1. hero ---- */
  '<section class="v6hero">'+
    '<div class="v6hero__bed">'+media({id:"home-control-room",kind:"Video",ratio:"",
      label:"Control room before a serial",brief:"Range control room, empty, screens live."})+'</div>'+
    '<div class="v6hero__veil"></div>'+
    '<div class="shell">'+
      '<span class="label v6eyebrow">Defence and security technology</span>'+
      '<h1>Digital systems for defence readiness</h1>'+
      '<p class="lead">Blue Silo designs, develops and integrates mission-critical systems for military training, range operations, asset accountability and operational readiness.</p>'+
      '<div class="v6geo"><span>Singapore</span><span>Southeast Asia</span><span>APAC</span></div>'+
      '<div class="btns"><a class="btn btn--p" href="#systems">Explore our systems</a>'+
      '<a class="btn btn--g" href="#/contact">Talk to us</a></div>'+
    '</div>'+
  '</section>'+

  /* ---- 2. trust, approved by the client ---- */
  '<section class="v6trust"><div class="shell">'+
    '<div class="v6trust__t"><span class="label">'+V6TRUST.title+'</span>'+
      '<p>'+V6TRUST.line+'</p></div>'+
    '<div class="v6logos">'+V6TRUST.logos.map(function(n){
      return '<span class="v6logo">'+n+'</span>';
    }).join('')+'</div>'+
  '</div></section>'+

  /* ---- 3. modernising defence operations, deck page 3 ---- */
  /* The deck drew four separate boxes, but the copy argues that the
     layers are connected and that we connect them. Four boxes say
     the opposite, so the layers sit on a shared rail and their stems
     converge into the closing claim, which is the actual argument
     and was previously a footnote under the grid. */
  band({deep:true,body:
    '<div class="v6mod rv">'+
      '<div class="v6mod__h"><h2>'+V6MODERN.title+'</h2>'+
        '<p class="lead">'+V6MODERN.line+'</p></div>'+

      '<div class="v6mod__flow">'+
        '<div class="v6mod__rail" aria-hidden="true">'+
          V6MODERN.cols.map(function(){return '<i></i>';}).join('')+'</div>'+

        '<div class="v6mod__g">'+V6MODERN.cols.map(function(c){
          return '<div class="v6mod__c">'+
            '<span class="v6mod__ic"><i class="ph '+c[1]+'" aria-hidden="true"></i></span>'+
            '<span class="v6mod__k">'+c[0]+'</span>'+
            '<ul>'+c[2].map(function(x){
              return '<li><i class="ph '+x[1]+'" aria-hidden="true"></i>'+x[0]+'</li>';
            }).join('')+'</ul>'+
          '</div>';
        }).join('')+'</div>'+

        '<div class="v6mod__join" aria-hidden="true">'+
          V6MODERN.cols.map(function(){return '<i></i>';}).join('')+
          '<b></b><u></u></div>'+
      '</div>'+

      '<p class="v6mod__close">'+
        '<svg class="v6mod__mark" width="22" height="24" viewBox="0 0 26 28" aria-hidden="true">'+
          '<path d="M4 3h9a6 6 0 0 1 0 12H8" fill="none" stroke="var(--brand)" stroke-width="3"/>'+
          '<path d="M22 25h-9a6 6 0 0 1 0-12h5" fill="none" stroke="var(--brand)" stroke-width="3"/>'+
        '</svg>'+
        '<span>'+V6MODERN.close+'</span>'+
      '</p>'+
    '</div>'})+

  /* ---- 4. the system overview: diagram, then the tile board ---- */
  band({id:"systems",label:"Systems",
    title:"One line, five functions, each system available on its own",
    intro:"Seven systems from Blue Silo, plus ACCEL from our partner SigmaWave for video and vision AI. Take one, or take the line.",
    /* Diagram, then the tile board, exactly as the deck asks.
       An earlier pass also listed every system as a row of chips
       between the two. That made the section 4072px, five screens,
       and showed the same eight systems three times running without
       adding anything. The diagram carries the five functions, each
       tile carries its own function label, so the middle block was
       pure repetition and is gone. */
    body:v6diagram()+
    '<div class="v6tiles rv">'+V6TILES.map(v6tile).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)">'+
    '<a class="btn btn--g" href="#/products">Compare every system</a></div>'})+

  /* ---- 4. where we operate ---- */
  '<section class="v6say">'+
    '<div class="v6say__bed">'+media({id:"home-range-dawn",kind:"Image",ratio:"",
      label:"Indoor range before first light",brief:"Lanes receding to the target line."})+'</div>'+
    '<div class="v6say__veil"></div>'+
    '<div class="shell"><div class="v6say__in rv">'+
      '<span class="label">Where we operate</span>'+
      '<h2>Built for complex defence environments</h2>'+
      '<div class="v6ops">'+V6OPS.map(function(o){
        return '<div class="v6op"><i class="ph '+o[0]+'" aria-hidden="true"></i>'+
          '<b>'+o[1]+'</b><span>'+o[2]+'</span></div>';
      }).join('')+'</div>'+
    '</div></div>'+
  '</section>'+

  /* ---- 5. the chain, kept as proof of depth ---- */
  band({id:"chain",bleed:true,deep:true,body:
    '<div class="shell"><div class="head rv">'+
    '<h2>From the gate to the closing account, on one range day</h2>'+
    '<p>Where the systems meet, nothing is carried by hand. Select a step to see what happens, what data crosses, and which system holds it.</p></div></div>'+
    '<div class="chain"><div class="chain__rail" id="rail" role="tablist" aria-label="The training day"></div>'+
    '<div class="panel"><div class="shell"><div class="panel__in" id="panel"></div></div></div></div>'})+

  /* ---- 6. measures ---- */
  '<div class="measure v3-measure">'+
    '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
    '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
    '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
    '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
  '</div>'+

  /* ---- 7. integration, eight categories ---- */
  band({label:"Integration",title:"We integrate the whole training and range environment",
    intro:"From live targets and virtual training through to infrastructure, operations, security and training management.",
    body:'<div class="ifc rv">'+V6IFC.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'})+

  /* ---- 8. simulate, integrate, deploy ---- */
  '<section class="v6say v6say--r">'+
    '<div class="v6say__bed">'+media({id:"integration-bench",kind:"Image",ratio:"",
      label:"Integration test bench",brief:"Rack mounted equipment and a patch loom."})+'</div>'+
    '<div class="v6say__veil"></div>'+
    '<div class="shell"><div class="v6say__in rv">'+
      '<h2>Simulate. Integrate. Deploy.</h2>'+
      '<p>Blue Silo validates system interfaces, dependencies and operational behaviour before deployment, reducing integration risk and ensuring every component works together as designed.</p>'+
      '<div class="v6sim">'+V6SIM.map(function(s){
        return '<div class="v6simc"><i class="ph '+s[0]+'" aria-hidden="true"></i>'+
          '<b>'+s[1]+'</b><span>'+s[2]+'</span></div>';
      }).join('')+'</div>'+
    '</div></div>'+
  '</section>'+

  /* ---- 9. assurance, six controls ---- */
  band({label:"Assurance",title:"Secure by design, from the node to the enterprise",
    intro:"We build security, reliability and compliance into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.",
    body:'<div class="ifc ifc--3 rv">'+V6ASSURE.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)">'+
    '<a class="btn btn--g" href="#/assurance">Safety and assurance</a></div>'})+

  /* ---- 10. company ---- */
  band({deep:true,label:"Blue Silo",
    title:"A defence and security specialist, and the continuity to match",
    intro:"We design, develop and integrate mission-critical systems for military training, range operations, asset accountability and operational readiness, with a long term commitment to the environments we serve.",
    body:'<div class="v6facts rv">'+V6FACTS.map(function(f,i){
      return '<div class="v6fact"><span class="v6fact__n">'+('0'+(i+1)).slice(-2)+'</span>'+
        '<i class="ph '+f[0]+'" aria-hidden="true"></i>'+
        '<b>'+f[1]+'</b><span>'+f[2]+'</span></div>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/company">About Blue Silo</a>'+
    '<span class="v6note">A long term partner for defence and security organisations</span></div>'})+

  /* ---- 11. questions ---- */
  band({label:"Questions",title:"What evaluators ask first",
    intro:"For defence organisations, programme teams and evaluators.",
    body:'<div class="faq rv">'+V6FAQ.map(function(q,i){
      return '<details'+(i===0?' open':'')+'><summary>'+q[0]+'<span class="faq__i" aria-hidden="true"></span></summary><p>'+q[1]+'</p></details>';
    }).join('')+'</div>'})+

  /* ---- 12. contact ---- */
  '<section class="v6close"><div class="shell">'+
    '<div class="v6close__top"><span class="label">Contact</span>'+
      '<span class="v6close__tag">Mission-critical systems, built for the long term</span></div>'+
    '<div class="rv"><h2>Start a conversation with Blue Silo</h2>'+
    '<p class="lead">Whether you are planning a new defence programme, evaluating a system, or looking for an integration partner, our team can help you understand the right approach.</p></div>'+
    '<div class="v6rel rv">'+V6RELEASE.map(function(r,i){
      return '<a href="#/contact"><span class="v6rel__n">'+('0'+(i+1)).slice(-2)+'</span>'+
        '<h3>'+r[0]+'</h3><p>'+r[1]+'</p>'+
        '<span class="v6rel__cta">Request <i class="ph ph-arrow-right" aria-hidden="true"></i></span></a>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)">'+
      '<a class="btn btn--p" href="#/contact">Discuss your requirements</a></div>'+
    '<p class="v6note" style="margin-top:var(--s5)">For defence organisations, prime contractors, system integrators and technology partners.</p>'+
  '</div></section>';
}

/* ============================================================
   PRODUCT PAGES. Brand above the system name.
   ============================================================ */
var pProductV6Base=pProduct;
pProduct=function(id){
  var html=pProductV6Base(id), p=v6p(id), b=V6BRAND[id];
  if(!p||!b) return html;
  var head='<div class="v6pbrand">'+
    (b.brand?'<span class="v6pbrand__b">'+b.brand+'</span>':'')+
    '<span class="v6pbrand__s">'+b.acr+'</span>'+
    (b.partner?'<span class="v6pbrand__p">Partner product, '+b.partner+'</span>':'')+
    '</div>';
  return html.replace('<h1>'+p.name+'</h1>', head+'<h1>'+b.sys+'</h1>');
};

/* ============================================================
   MENU + BOOT
   ============================================================ */
function v6menu(){
  var panel=document.getElementById('mPanel');
  if(!panel) return;
  var order=["trms","rcs","ewms","eams","pwats","hums","vms","eva","as"];
  panel.innerHTML='<div class="shell">'+order.map(function(id){
    var p=v6p(id), b=V6BRAND[id];
    if(!p) return '';
    return '<a href="#/products/'+id+'"><b>'+(b&&b.brand?b.brand+' <em>'+b.acr+'</em>':b.acr)+'</b>'+
      '<span>'+(b?b.sys:p.name)+'</span></a>';
  }).join('')+'</div>';
}

function v6media(){
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.media__asset').forEach(function(el){
    if(el.tagName==='VIDEO'){
      el.preload='auto'; el.muted=true; el.playsInline=true;
      if(!still) el.autoplay=true;
      if(el.readyState>=2) mediaReady(el);
      else el.addEventListener('loadeddata',function(){ mediaReady(el); },{once:true});
      if(!still) el.play().catch(function(){});
    } else if(el.complete && el.naturalWidth) mediaReady(el);
  });
}

function v6title(){
  var h=(location.hash||'#/').replace(/^#/,''), m=h.match(/^\/products\/([a-z]+)$/), pre='';
  if(m && V6BRAND[m[1]]) pre=V6BRAND[m[1]].acr+'. ';
  document.title=pre+'Blue Silo. Defence and Security Technology';
}

/* ------------------------------------------------------------
   Chain panel, deck page 8.

   The panel listed its subsystems as a run of bare acronyms,
   which is also the least scannable thing on the page and still
   used the superseded names. Each one becomes a product badge
   carrying the brand, the current acronym and an icon, and it
   links straight to that system.
   ------------------------------------------------------------ */
var V6BYACR={};
Object.keys(V6BRAND).forEach(function(id){
  V6BYACR[V6BRAND[id].acr]=id;
  /* the chain data still carries the names used before the review */
});
V6BYACR.RCS='rcs'; V6BYACR.AS='as';

function v6badges(str){
  return '<span class="v6badges">'+String(str||'').split('·').map(function(raw){
    var a=raw.trim(); if(!a) return '';
    var id=V6BYACR[a], p=id?v6p(id):null, b=id?V6BRAND[id]:null;
    if(!p||!b) return '<span class="v6badge v6badge--plain">'+a+'</span>';
    return '<a class="v6badge" href="#/products/'+id+'">'+
      '<i class="ph '+p.icon+'" aria-hidden="true"></i>'+
      (b.brand?'<b>'+b.brand+'</b>':'')+
      '<span>'+b.acr+'</span></a>';
  }).join('')+'</span>';
}

function v6chain(){
  var rail=document.getElementById('rail'), panel=document.getElementById('panel');
  if(!rail||!panel) return;
  function paint(i){
    var c=CHAIN[i];
    panel.innerHTML='<div><h3>'+c.t+'</h3><p>'+c.b+'</p></div>'+
      '<dl><div><dt>Data that moves</dt><dd>'+c.d+'</dd></div>'+
      '<div><dt>What this step holds</dt><dd>'+c.h+'</dd></div>'+
      '<div><dt>Systems on this step</dt><dd>'+v6badges(c.s)+'</dd></div></dl>';
  }
  rail.addEventListener('click',function(e){
    var b=e.target.closest('.step'); if(!b) return;
    paint(+b.dataset.i);
  });
  paint(0);
}

function v6after(){ v6menu(); v6media(); v6title(); v6chain(); }

ROUTES['']=ROUTES['/']=pHomeV6;
pHome=pHomeV6;
window.addEventListener('hashchange',v6after);
render(); v6after();
