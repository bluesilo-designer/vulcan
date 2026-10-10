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
         ["Administrative & Governance (AGS)","←","At registration"],
         ["Training records","↔","On completion"]],
    dep:"Requires an authoritative source for personnel and for the training calendar. Where a programme already runs a booking system, TRMS consumes it rather than replacing it.",
    rel:["rcs","as","hums"]
  });
}

/* ---------- approved customer and partner evidence ---------- */
var V6TRUST={
  title:"Trusted in mission-critical environments",
  line:"Supporting defence, government and homeland security organisations across Singapore and APAC.",
  /* Files in media/logos. MINDEF from mindef.gov.sg, the rest from
     the logo files on Wikipedia. Surbana Jurong now trades as SJ
     Group and the current mark is the SJ one. NCS and MINDEF are
     small rasters; replace with brand kit vectors for production. */
  /* f is the colour file, m the mono source where it differs.
     MINDEF ships on an opaque white ground, which a mono filter turns
     into a solid white block, so mindef-t has the ground knocked out.
     SJ is white letters inside a blue square; the filter whitens the
     square and the letters vanish into it, so sj-m drops the square.
     NCS needs nothing: its ground is already transparent. */
  logos:[
    {n:"MINDEF",         f:"mindef-t.png"},
    {n:"DSTA",           f:"dsta.svg"},
    {n:"Certis",         f:"certis.svg"},
    {n:"Surbana Jurong", f:"sj.svg",     m:"sj-m.svg"},
    {n:"NCS",            f:"ncs.png"},
    {n:"ST Engineering", f:"ste.svg"}
  ]
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
   "Target presentation, hit detection and scoring integrated with live-fire training scenarios."],
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
  /* The deck repeats Range Visualisation's text here word for word, a
     copy slip. Shipped as is, two neighbouring cards would read the same,
     so this one keeps its own line. */
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
  /* Deck page 12, as written. */
  ["ph-lock-key","Licensing and entitlement control",
   "Entitlements are bound to delivered hardware and validated offline, with no call-outs during operations."],
  ["ph-shield-chevron","System hardening",
   "Each component is hardened to the services it requires, with a documented baseline and secure configuration."],
  ["ph-tree-structure","Tamper-proof architecture",
   "Critical components are integrity checked, with subsystems separated by function to contain faults."],
  ["ph-fingerprint","Multi-factor authentication",
   "Multi-factor sign-in for operators and administrators, with role-based access control in every module."],
  ["ph-shield-warning","Cybersecurity and network segregation",
   "Segmented networks, continuous monitoring, audit logs and defined patch routes for fielded and enterprise systems."],
  ["ph-seal-check","Standards alignment and compliance",
   "Built to meet relevant defence and government standards, with evidence provided in the assurance summary."]
];

/* ---------- partners, deck page 11 ---------- */
var V6PARTNER=[
  ["ph-users-three","Align responsibilities",
   "We establish clear ownership across Blue Silo, partners, integrators and the customer before delivery begins."],
  ["ph-stack","Define the interfaces",
   "We agree how systems, data and responsibilities connect, with clear owners on both sides."],
  ["ph-gear-six","Integrate as one team",
   "We work through dependencies together, validating each interface progressively rather than leaving integration to the final stage."],
  ["ph-file-text","Manage change together",
   "Changes are documented, agreed and controlled across all parties to keep the programme aligned."]
];

/* ---------- chain panel, deck page 8 ----------
   "Too much words": one line per step instead of a paragraph, plus a
   picture of the step. The long text stays in data.js and on the
   product pages. */
var V6STEP=[
  "Identity, booking and vehicle clearance are checked at the gate, before anyone is inside.",
  "Each person checks in against their booking and is issued a tracking tag.",
  "Attendance comes from the tags, so the brief matches who is really here.",
  "The locker opens to the right person, and ammunition is issued against the package.",
  "Lanes, targetry and safety are verified ready before the serial starts.",
  "Targetry and effects run on plan, with one range state governing everything.",
  "Hazards are flagged and evidence is captured the moment they happen.",
  "Results and marked video are ready before anyone walks back.",
  "Weapons and ammunition reconcile before anyone is released.",
  "Equipment health is read against work actually done, so maintenance is planned."
];


/* ---------- company ---------- */
var V6FACTS=[
  /* Deck page 13, the reference card copy. */
  ["ph-code","Source code escrow, as standard",
   "Defined release conditions and a verified deposit to ensure continued access when required."],
  ["ph-file-text","Intellectual property settled first",
   "Rights are clearly assigned in the contract, in writing, before delivery."],
  ["ph-users-three","Documentation a third party can use",
   "Comprehensive technical and operational documentation so a competent team can take over if needed."]
];

/* ---------- questions, deck page 14, as written ---------- */
var V6FAQ=[
  ["Can Blue Silo systems be deployed individually?",
   "Yes. Each system can be deployed independently with its own hardware, software and interfaces. Our systems are designed to operate as standalone modules, while remaining ready to integrate with other Blue Silo or third-party systems as the programme evolves."],
  ["Is Blue Silo only a range systems company?",
   "No. While range training is a core focus, we also develop and integrate systems for security, video analytics, asset management, operational monitoring and training management. Our solutions support military training facilities, defence installations and other mission-critical environments."],
  ["Can Blue Silo work with our existing suppliers and systems?",
   "Yes. We work with prime contractors, system integrators and technology partners. Our systems are designed with defined interfaces and industry-standard protocols, allowing integration with existing infrastructure, third-party hardware and software where required."],
  ["Can the systems operate in isolated or offline environments?",
   "Yes. Our systems can be deployed in isolated, secure networks without internet connectivity. Activation, licensing and updates can be handled through controlled offline methods, with no live internet connection required during operations."],
  ["What happens if we need long-term continuity or another team needs to take over?",
   "We provide comprehensive documentation, source-code escrow, and clearly defined intellectual property rights. Our systems are designed for maintainability, allowing a competent third party to take over support if required. We also offer long-term support and maintenance options for continued operations."]
];

/* ---------- material released on request ---------- */
var V6RELEASE=[
  ["Capability Statement","An overview of our defence systems, capabilities and experience.","rel-capability"],
  ["Assurance Summary","Our approach to licensing, hardening, cybersecurity and compliance.","rel-assurance"],
  ["Integration & Interface Pack","Interface structures, protocol patterns and our approach to multi-system delivery.","rel-interface"]
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
  /* The three top functions now share a bus that merges into Monitor,
     and a pulse of light runs the route in order: down from each box,
     along the bus to the junction, down into Monitor, then Govern.
     The earlier version had three short stems that joined nothing, so
     it never showed a flow at all. Chips link to their product pages. */
  var top=[["Train",["trms"]],["Operate",["rcs"]],["Account",["ewms","eams","pwats"]]];
  function chip(id){
    var b=V6BRAND[id], label=b.brand==='ACCEL'?'ACCEL':b.acr;
    return '<a class="v6dg__c" href="#/products/'+id+'" title="'+(b.brand?b.brand+', ':'')+b.sys+'">'+label+'</a>';
  }
  function node(k,ids,mod){
    return '<div class="v6dg__n'+(mod||'')+'"><span class="v6dg__k">'+k+'</span>'+
      '<span class="v6dg__l">'+ids.map(chip).join('')+'</span></div>';
  }
  return '<figure class="v6dg rv" aria-label="Blue Silo systems, grouped by function">'+
    '<figcaption class="v6dg__t">Blue Silo systems</figcaption>'+
    '<div class="v6dg__row v6dg__row--3">'+top.map(function(t){return node(t[0],t[1]);}).join('')+'</div>'+
    '<div class="v6dg__bus" aria-hidden="true">'+
      '<i class="v6f v6f--y v6f--a"></i><i class="v6f v6f--y v6f--a"></i><i class="v6f v6f--y v6f--a"></i>'+
      '<b class="v6f v6f--x v6f--l"></b><b class="v6f v6f--x v6f--r"></b>'+
      '<u class="v6f v6f--y v6f--b"></u><em class="v6dg__dot"></em>'+
    '</div>'+
    '<div class="v6dg__row">'+node("Monitor",["hums","vms"]," v6dg__n--m")+'</div>'+
    '<div class="v6dg__link" aria-hidden="true"><u class="v6f v6f--y v6f--c"></u></div>'+
    '<div class="v6dg__row">'+node("Govern",["as"]," v6dg__n--g")+'</div>'+
  '</figure>';
}

/* ------------------------------------------------------------
   SYSTEM EXPLORER. An alternative to diagram + tiles, kept beside
   them for comparison. The diagram showed the structure and the
   tiles showed the content, so the reader had to match one to the
   other. Here the hierarchy is the navigation and the detail sits
   beside it: one selection, no matching.
   ------------------------------------------------------------ */
var V6XIMG={trms:"s-brief",rcs:"s-firingline",ewms:"ewms",eams:"eams",
            pwats:"pwats",hums:"hums",vms:"vms",as:"as"};

function v6xgroups(){
  var order=[], seen={};
  V6TILES.forEach(function(t){
    if(!seen[t[0]]){ seen[t[0]]=[]; order.push(t[0]); }
    seen[t[0]].push(t);
  });
  return order.map(function(k){ return {k:k, items:seen[k]}; });
}

function v6explorer(){
  /* The left panel uses the diagram's hierarchy, which reviewers
     preferred to a tree list: three functions across, then monitor,
     then govern. Each system in it is a tab for the detail panel. */
  var first=V6TILES[0][1];
  function tab(id){
    var b=V6BRAND[id], label=b.brand==='ACCEL'?'ACCEL':b.acr;
    return '<button type="button" class="v6x__it v6xd__b" role="tab" id="v6x-t-'+id+'" '+
      'aria-controls="v6x-panel" aria-selected="'+(id===first)+'" tabindex="'+(id===first?0:-1)+'" '+
      'data-id="'+id+'" title="'+(b.brand?b.brand+', ':'')+b.sys+'">'+label+'</button>';
  }
  function node(k,ids){
    return '<div class="v6xd__n"><span class="v6xd__k">'+k+'</span>'+
      '<span class="v6xd__l">'+ids.map(tab).join('')+'</span></div>';
  }
  return '<div class="v6x rv">'+
    '<nav class="v6x__tree v6x__tree--dg" aria-label="Blue Silo systems by function">'+
      '<span class="v6x__root">Blue Silo systems</span>'+
      '<div class="v6x__list" role="tablist" aria-orientation="vertical">'+
        '<div class="v6xd__row v6xd__row--3">'+
          node("Train",["trms"])+node("Operate",["rcs"])+node("Account",["ewms","eams","pwats"])+
        '</div>'+
        '<div class="v6xd__stem" aria-hidden="true"></div>'+
        '<div class="v6xd__row">'+node("Monitor",["hums","vms"])+'</div>'+
        '<div class="v6xd__stem" aria-hidden="true"></div>'+
        '<div class="v6xd__row">'+node("Govern",["as"])+'</div>'+
      '</div>'+
      '<span class="v6x__hint">Select a system to see its detail</span>'+
    '</nav>'+
    '<div class="v6x__panel" id="v6x-panel" role="tabpanel" aria-live="polite"></div>'+
  '</div>';
}

function v6xpaint(id){
  var panel=document.getElementById('v6x-panel'); if(!panel) return;
  var t=V6TILES.filter(function(x){return x[1]===id;})[0];
  var p=v6p(id), b=V6BRAND[id]; if(!t||!p||!b) return;
  panel.setAttribute('aria-labelledby','v6x-t-'+id);
  panel.innerHTML=
    '<figure class="v6x__img"><img src="media/'+V6XIMG[id]+'.jpg" alt="" decoding="async">'+
      '<span class="v6x__fnb">'+t[0]+'</span></figure>'+
    '<div class="v6x__body">'+
      '<div class="v6x__head"><i class="ph '+p.icon+'" aria-hidden="true"></i>'+
        '<div><h3>'+(b.brand||b.acr)+'</h3><span class="v6x__sys">'+b.sys+'</span></div>'+
        (b.partner?'<span class="v6x__partner">Partner, '+b.partner+'</span>':'')+
      '</div>'+
      '<p class="v6x__desc">'+t[2]+'</p>'+
      '<dl class="v6x__facts">'+
        '<div><dt>Used by</dt><dd>'+p.users.slice(0,4).join(', ')+'</dd></div>'+
        '<div><dt>Deployed at</dt><dd>'+p.where+'</dd></div>'+
        /* summary view: first sentence only, the full text is on the
           product page one click away */
        '<div><dt>The decision it supports</dt><dd>'+p.decides.split(/(?<=\.)\s/)[0]+'</dd></div>'+
      '</dl>'+
      '<a class="v6x__go" href="#/products/'+id+'">Explore '+b.acr+
        ' <span>'+p.groups.length+' capability areas</span>'+
        ' <i class="ph ph-arrow-right" aria-hidden="true"></i></a>'+
    '</div>';
}

function v6xbind(){
  var list=document.querySelector('.v6x__list'); if(!list) return;
  var tabs=[].slice.call(list.querySelectorAll('.v6x__it'));
  function select(btn,focus){
    tabs.forEach(function(x){
      var on=x===btn; x.setAttribute('aria-selected',String(on)); x.tabIndex=on?0:-1;
    });
    v6xpaint(btn.dataset.id);
    if(focus) btn.focus();
    /* stacked layout: bring the detail into view so the tap visibly
       does something */
    if(!focus && window.innerWidth<980){
      var pnl=document.getElementById('v6x-panel'), r=pnl.getBoundingClientRect();
      if(r.top>window.innerHeight*0.6) pnl.scrollIntoView({behavior:
        window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    }
  }
  list.addEventListener('click',function(e){
    var b=e.target.closest('.v6x__it'); if(b) select(b,false);
  });
  list.addEventListener('keydown',function(e){
    var i=tabs.indexOf(document.activeElement); if(i<0) return;
    var n=null;
    if(e.key==='ArrowDown'||e.key==='ArrowRight') n=tabs[(i+1)%tabs.length];
    else if(e.key==='ArrowUp'||e.key==='ArrowLeft') n=tabs[(i-1+tabs.length)%tabs.length];
    else if(e.key==='Home') n=tabs[0];
    else if(e.key==='End') n=tabs[tabs.length-1];
    if(n){ e.preventDefault(); select(n,true); }
  });
  v6xpaint(tabs[0].dataset.id);
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
    '<div class="v6trust__logos">'+
      '<div class="v6logos" id="v6logos" data-mode="mono">'+V6TRUST.logos.map(function(l){
        /* the name lives on the figure, so it survives whichever
           of the two images is hidden by the current mode */
        return '<figure class="v6logo" role="img" aria-label="'+l.n+'" title="'+l.n+'">'+
          '<img class="v6logo__m" src="media/logos/'+(l.m||l.f)+'" alt="" loading="lazy" decoding="async">'+
          '<img class="v6logo__c" src="media/logos/'+l.f+'" alt="" loading="lazy" decoding="async">'+
        '</figure>';
      }).join('')+'</div>'+
      /* Deck page 2 asked to try mono and colour side by side. */
      '<div class="v6lt" role="group" aria-label="Logo treatment">'+
        '<button type="button" data-mode="mono" aria-pressed="true">Mono</button>'+
        '<button type="button" data-mode="colour" aria-pressed="false">Colour</button>'+
      '</div>'+
    '</div>'+
  '</div></section>'+

  /* ---- 3. modernising defence operations, deck page 3 ---- */
  /* The deck drew four separate boxes, but the copy argues that the
     layers are connected and that we connect them. Four boxes say
     the opposite, so the layers sit on a shared rail and their stems
     converge into the closing claim, which is the actual argument
     and was previously a footnote under the grid. */
  /* An overhead view of a facility sits behind the layers: blocks
     joined by roads, which is the argument of the section drawn as
     a place. It was the plainest band on the page before this. */
  '<section class="v6modwrap">'+
    '<div class="v6modwrap__bed" aria-hidden="true">'+
      '<img src="media/s-aerial.jpg" alt="" loading="lazy" decoding="async"></div>'+
    '<div class="v6modwrap__veil" aria-hidden="true"></div>'+
  band({body:
    '<div class="v6mod rv">'+
      '<div class="v6mod__h"><h2>'+V6MODERN.title+'</h2>'+
        '<p class="lead">'+V6MODERN.line+'</p></div>'+

      '<div class="v6mod__flow">'+
        '<div class="v6mod__rail" aria-hidden="true">'+
          V6MODERN.cols.map(function(){return '<i></i>';}).join('')+'</div>'+

        '<div class="v6mod__g">'+V6MODERN.cols.map(function(c,i){
          return '<div class="v6mod__c">'+
            '<span class="v6mod__top">'+
              '<span class="v6mod__ic"><i class="ph '+c[1]+'" aria-hidden="true"></i></span>'+
              '<span class="v6mod__n">'+('0'+(i+1)).slice(-2)+'</span>'+
            '</span>'+
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
  '</section>'+

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
    /* Alternative layout for comparison: hierarchy left, detail right.
       The two above are left in place on purpose. */
    '<div class="v6x__intro rv"><span class="label">Alternative layout</span>'+
      '<p>The same seven systems and ACCEL, with the hierarchy as navigation and the detail beside it.</p></div>'+
    v6explorer()+
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
  /* Deck page 9, as is: the title was kept, only the intro line was
     marked "REPLACING", and Identity and directory was struck out. */
  band({label:"Integration",title:"Built to connect to what is already on site",
    intro:"Blue Silo can integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.",
    body:'<div class="ifc rv">'+V6IFC.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div>'})+

  /* ---- 8. simulate, integrate, deploy ----
     Deck page 10: the bench photograph was "not very relevant", replaced
     with the client's command centre image, and the three points set as
     icon and label in a row, as the attached example has them. */
  '<section class="v6say v6say--r v6say--cmd">'+
    '<div class="v6say__bed"><img class="v6say__img" src="media/sim-command-4k.jpg" alt="" decoding="async" loading="lazy"></div>'+
    '<div class="v6say__veil"></div>'+
    '<div class="shell"><div class="v6say__in rv">'+
      '<h2>Simulate.<br>Integrate. Deploy.</h2>'+
      '<p>Blue Silo validates system interfaces, dependencies and operational behaviour before deployment, reducing integration risk and ensuring every component works together as designed.</p>'+
      '<span class="v6cmd__rule" aria-hidden="true"></span>'+
      '<ul class="v6cmd">'+
        '<li><i class="ph ph-cube" aria-hidden="true"></i><span>Interface validation</span></li>'+
        '<li><i class="ph ph-graph" aria-hidden="true"></i><span>System dependency mapping</span></li>'+
        '<li><i class="ph ph-file-text" aria-hidden="true"></i><span>Scenario testing and simulation</span></li>'+
      '</ul>'+
    '</div></div>'+
  '</section>'+

  /* ---- 8b. partners and integrators, deck page 11 ---- */
  v6partners()+

  /* ---- 9. assurance, deck page 12 ---- */
  v6assure()+

  /* ---- 10. company, deck page 13 ----
     "Not every section must have a large image." Assurance directly
     above already carries one, so this stays typographic: the ask was
     icons and a sharper line per point. */
  band({deep:true,body:
    '<div class="v6co__head rv"><span class="label">Blue Silo</span>'+
      '<h2>A defence and security specialist, and the continuity to match.</h2>'+
      '<p>We design, develop and integrate mission-critical systems for military training, range operations, asset accountability and operational readiness, with a long-term commitment to the environments we serve.</p></div>'+
    '<div class="v6feat__grid v6feat__grid--3 rv">'+V6FACTS.map(function(f,i){
      return '<div class="v6fc v6fc--box v6fc--co"><span class="v6fc__top"><i class="ph '+f[0]+'" aria-hidden="true"></i>'+
        '<span class="v6fc__n">'+('0'+(i+1)).slice(-2)+'</span></span><h3>'+f[1]+'</h3><p>'+f[2]+'</p></div>';
    }).join('')+'</div>'+
    '<div class="v6feat__cta rv"><a class="btn btn--g" href="#/company">About Blue Silo <i class="ph ph-arrow-right" aria-hidden="true"></i></a>'+
      '<span class="v6feat__tag">A long-term partner for defence and security organisations</span></div>'})+

  /* ---- 11. questions, deck page 14: numbered, chevrons ---- */
  '<section class="band" id="questions"><div class="shell">'+
    '<div class="v6q__head rv"><div><span class="label">Questions</span><h2>What evaluators ask first.</h2></div>'+
      '<p>For defence organisations, programme teams and evaluators.</p></div>'+
    '<div class="v6q rv">'+V6FAQ.map(function(q,i){
      return '<details'+(i===0?' open':'')+'><summary><span class="v6q__n">'+('0'+(i+1)).slice(-2)+'</span>'+
        '<span class="v6q__t">'+q[0]+'</span><i class="ph ph-caret-down" aria-hidden="true"></i></summary>'+
        '<p>'+q[1]+'</p></details>';
    }).join('')+'</div>'+
  '</div></section>'+

  /* ---- 12. contact, deck page 15 ---- */
  v6contact();
}

/* Partners and integrators, deck page 11. Shared by the home page and
   the Integration page: the home page's "Our partner approach" button
   points at Integration, which did not carry this at all. */
function v6partners(){
  return '<section class="v6feat v6feat--partner">'+
    '<div class="v6feat__media" aria-hidden="true"><img src="media/partners.jpg" alt="" loading="lazy" decoding="async"></div>'+
    '<div class="v6feat__veil" aria-hidden="true"></div>'+
    '<div class="shell">'+
      '<div class="v6feat__head rv"><span class="label">Engagement</span>'+
        '<h2>How we work with partners and integrators</h2>'+
        '<p>We work alongside prime contractors, technology partners, system integrators and customer teams to define responsibilities, align interfaces and deliver as one programme team.</p></div>'+
      '<div class="v6feat__grid v6feat__grid--4 v6feat__grid--rail rv">'+V6PARTNER.map(function(c,i){
        return '<div class="v6fc"><span class="v6fc__n">'+('0'+(i+1)).slice(-2)+'</span>'+
          '<i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
      }).join('')+'</div>'+
      '<div class="v6feat__cta rv"><a class="btn btn--g" href="#/integration">Our partner approach <i class="ph ph-arrow-right" aria-hidden="true"></i></a>'+
        '<span class="v6feat__tag">Built for complex, multi-party defence programmes</span></div>'+
    '</div>'+
  '</section>';
}

/* Assurance, deck page 12. Shared by the home page and the Assurance
   page so the two cannot drift apart again. */
function v6assure(){
  return '<section class="v6feat v6feat--assure">'+
    '<div class="v6feat__media" aria-hidden="true"><img src="media/assurance.jpg" alt="" loading="lazy" decoding="async"></div>'+
    '<div class="v6feat__veil" aria-hidden="true"></div>'+
    '<div class="shell">'+
      '<div class="v6feat__head rv"><span class="label">Assurance</span>'+
        '<h2>Secure by design,<br>from the node to the enterprise.</h2>'+
        '<p>We build security, reliability and compliance into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.</p></div>'+
      '<div class="v6feat__grid v6feat__grid--3 rv">'+V6ASSURE.map(function(c,i){
        return '<div class="v6fc v6fc--box"><span class="v6fc__n">'+('0'+(i+1)).slice(-2)+'</span>'+
          '<i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
      }).join('')+'</div>'+
    '</div>'+
  '</section>';
}

/* Contact, deck page 15. Shared by the home page and the Contact page. */
function v6contact(){
  return '<section class="v6close">'+
    '<div class="v6close__topo" aria-hidden="true">'+v6topo()+'</div>'+
    '<div class="shell">'+
      '<div class="v6close__grid rv">'+
        '<div><span class="label">Contact</span>'+
          '<h2>Start a conversation with Blue Silo.</h2>'+
          '<p class="lead">Whether you are planning a new defence programme, evaluating a system, or looking for an integration partner, our team can help you understand the right approach.</p></div>'+
        '<div class="v6close__tag"><span>Mission-critical systems.</span><span>Built for the long term.</span></div>'+
      '</div>'+
      '<div class="v6rel rv">'+V6RELEASE.map(function(r,i){
        return '<a href="#/contact"><span class="v6rel__img"><img src="media/'+r[2]+'.jpg" alt="" loading="lazy" decoding="async"></span>'+
          '<span class="v6rel__body"><span class="v6rel__n">'+('0'+(i+1)).slice(-2)+'</span>'+
          '<h3>'+r[0]+'</h3><p>'+r[1]+'</p>'+
          '<span class="v6rel__cta">Request <i class="ph ph-arrow-right" aria-hidden="true"></i></span></span></a>';
      }).join('')+'</div>'+
      '<div class="v6close__foot rv"><a class="btn btn--p" href="#/contact">Discuss your requirements <i class="ph ph-arrow-right" aria-hidden="true"></i></a>'+
        '<span>For defence organisations, prime contractors, system integrators and technology partners.</span></div>'+
    '</div>'+
  '</section>';
}

/* Topographic contour lines, drawn rather than photographed: a few KB,
   sharp at any width, and themeable. Used by the contact block and the
   footer, as in the deck. */
function v6topo(){
  var paths='';
  for(var k=0;k<14;k++){
    var y=40+k*26, a=18+k*2.2, ph=k*0.55;
    var d='M -40 '+y;
    for(var x=0;x<=1640;x+=40){
      var yy=y+Math.sin(x/170+ph)*a+Math.sin(x/61+ph*1.7)*a*0.28;
      d+=' L '+x+' '+yy.toFixed(1);
    }
    paths+='<path d="'+d+'"/>';
  }
  return '<svg viewBox="0 0 1600 420" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" stroke-width="1">'+paths+'</svg>';
}

/* ------------------------------------------------------------
   EVERY PAGE, not only the home page.

   The inner pages render from app.js and data.js, which still carry
   the names from before the review: Range Control System, Health and
   Usage Monitoring, Administrative System, RCS, AS. An audit of every
   route found them on Products, on five product pages, and in the
   chain rail. The review's names are applied to the data once, here,
   so every page that reads it agrees with the home page.
   ------------------------------------------------------------ */
function v6acr(t){
  return typeof t==='string' ? t.replace(/\bRCS\b/g,'RMS').replace(/\bAS\b/g,'AGS') : t;
}
PRODUCTS.forEach(function(p){
  var b=V6BRAND[p.id]; if(!b) return;
  p.name=b.sys; p.acr=b.acr;
  /* the old acronyms also sit inside the prose, e.g. "RCS drives
     equipment supplied by others" on the RMS page */
  ['angle','where','decides','dep'].forEach(function(k){ p[k]=v6acr(p[k]); });
  (p.groups||[]).forEach(function(g){ g.m=v6acr(g.m); });
  (p.ifc||[]).forEach(function(r){ for(var i=0;i<r.length;i++) r[i]=v6acr(r[i]); });
});
CHAIN.forEach(function(c){
  c.s=String(c.s||'').replace(/\bRCS\b/g,'RMS').replace(/\bAS\b/g,'AGS');
});
/* V6BYACR, built further down from V6BRAND, already maps RMS and AGS. */

/* A band of an app.js page, found by its heading, so a page can be
   edited section by section without copying the whole template. */
function v6dropBand(html,heading){
  var re=new RegExp('<section class="band[^"]*"[^>]*>(?:(?!</section>)[\\s\\S])*?'+heading.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'[\\s\\S]*?</section>');
  return html.replace(re,'');
}
function v6swapBand(html,heading,withHtml){
  var marker='<!--v6swap-->';
  var out=v6dropBand(html.replace(new RegExp('(<section class="band[^"]*"[^>]*>(?:(?!</section>)[\\s\\S])*?'+heading.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')'),marker+'$1'),heading);
  return out.replace(marker,withHtml);
}

/* Company. The review struck the "small company" question from the
   questions; the same argument had its own band here. */
var pCompanyBase=pCompany;
pCompany=function(){ return v6dropBand(pCompanyBase(),'What happens if we are not here'); };

/* Assurance. The five licensing controls become the review's six,
   presented exactly as on the home page. The safety posture band stays:
   it is the one place the site explains the independent stop path. */
var pAssuranceBase=pAssurance;
pAssurance=function(){ return v6swapBand(pAssuranceBase(),'Five controls, asked in order',v6assure()); };

/* Contact. The home page's contact block replaces the old opening and
   the three inbox tiles; the release band repeated the cards, so it
   goes. The enquiry form and the direct details stay. */
var pContactBase=pContact;
pContact=function(){
  var html=pContactBase();
  var head=html.indexOf('<div class="shell page-head');
  var firstBandEnd=html.indexOf('</section>',html.indexOf('<section',head))+'</section>'.length;
  html=html.slice(0,head)+v6contact()+html.slice(firstBandEnd);
  return v6dropBand(html,'Material we release rather than publish');
};

/* Products. Its title was derived from the number of entries, which
   became "Nine subsystems" once TRMS was added: ACCEL is listed twice,
   as video and as vision AI. The review counts seven and a partner. */
var pProductsBase=pProducts;
pProducts=function(){
  return pProductsBase().replace(/<h1>[^<]*<\/h1>/,'<h1>Seven systems, plus ACCEL</h1>');
};

/* Integration. The interface list still offered Identity and directory,
   which the review struck, and the page had no partner approach though
   the home page sends people here for it. */
var pIntegrationBase=pIntegration;
pIntegration=function(){
  var html=pIntegrationBase();
  var list='<section class="band"><div class="shell"><div class="head rv">'+
    '<span class="label" style="display:block;margin-bottom:var(--s4)">What we interface with</span>'+
    '<h2>Built to connect to what is already on site</h2>'+
    '<p>Blue Silo can integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.</p></div>'+
    '<div class="ifc rv">'+V6IFC.map(function(c){
      return '<div class="ifc__c"><i class="ph '+c[0]+'" aria-hidden="true"></i><h3>'+c[1]+'</h3><p>'+c[2]+'</p></div>';
    }).join('')+'</div></div></section>';
  html=html.replace(/<section class="band[^"]*"[^>]*>(?:(?!<\/section>)[\s\S])*?What we interface with[\s\S]*?<\/section>/,list);
  /* partner approach goes before the closing call to action */
  var close=html.lastIndexOf('<section class="close');
  return close>-1 ? html.slice(0,close)+v6partners()+html.slice(close) : html+v6partners();
};

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

function v6medal(raw){
  var a=raw.trim(), id=V6BYACR[a], p=id?v6p(id):null, b=id?V6BRAND[id]:null;
  if(!p||!b) return '';
  /* product badge: a medallion in the brand blue, not gold */
  return '<a class="v6medal" href="#/products/'+id+'" title="'+(b.brand?b.brand+', ':'')+b.sys+'">'+
    '<span class="v6medal__disc"><i class="ph '+p.icon+'" aria-hidden="true"></i></span>'+
    '<b>'+(b.brand||b.acr)+'</b><span>'+b.acr+'</span></a>';
}

function v6chain(){
  var rail=document.getElementById('rail'), panel=document.getElementById('panel');
  if(!rail||!panel) return;
  function paint(i){
    var c=CHAIN[i], n=('0'+(i+1)).slice(-2);
    var data=String(c.d||'').split(',').map(function(x){return x.trim();}).filter(Boolean);
    panel.innerHTML=
      '<figure class="v6cp__img"><img src="media/chain-'+n+'.jpg" alt="" decoding="async">'+
        '<span class="v6cp__n">'+n+' / '+c.k+'</span></figure>'+
      '<div class="v6cp__body">'+
        '<h3>'+c.t+'</h3>'+
        '<p>'+(V6STEP[i]||c.b)+'</p>'+
        '<div class="v6cp__data"><span class="v6cp__lbl">Data that moves</span>'+
          '<span class="v6cp__chips">'+data.map(function(d){return '<i>'+d+'</i>';}).join('')+'</span></div>'+
        '<div class="v6cp__sys"><span class="v6cp__lbl">Systems on this step</span>'+
          '<span class="v6medals">'+String(c.s||'').split('\u00b7').map(v6medal).join('')+'</span></div>'+
      '</div>';
    panel.classList.add('v6cp');
    panel.classList.remove('v6cp--in'); void panel.offsetWidth; panel.classList.add('v6cp--in');
  }
  rail.addEventListener('click',function(e){
    var b=e.target.closest('.step'); if(!b) return;
    paint(+b.dataset.i);
  });
  paint(0);
}

/* Logo treatment toggle, deck page 2. */
function v6logos(){
  var wrap=document.getElementById('v6logos');
  var group=document.querySelector('.v6lt');
  if(!wrap||!group) return;
  group.addEventListener('click',function(e){
    var b=e.target.closest('button'); if(!b) return;
    wrap.setAttribute('data-mode',b.dataset.mode);
    group.querySelectorAll('button').forEach(function(x){
      x.setAttribute('aria-pressed',String(x===b));
    });
  });
}

/* Page transition. Replays on each route change. An in-page anchor
   such as #systems is not a new page and must not replay it. */
function v6enter(){
  var m=document.getElementById('main'); if(!m) return;
  var h=location.hash||'';
  if(h && !/^#\//.test(h)) return;
  m.classList.remove('v6enter');
  void m.offsetWidth;
  m.classList.add('v6enter');
}

/* app.js answers an in-page anchor such as #questions by scrolling
   to the top of main, which lands on the hero rather than the target.
   Follow it to the element instead. */
function v6anchor(){
  var h=location.hash||'';
  if(!h || /^#\//.test(h)) return;
  var el=document.getElementById(h.slice(1));
  if(el) el.scrollIntoView({block:'start'});
}

/* Footer ground, drawn once. */
(function(){ var t=document.querySelector('.v6foot__topo'); if(t) t.innerHTML=v6topo(); })();

function v6after(){ v6menu(); v6media(); v6title(); v6chain(); v6logos(); v6xbind(); v6enter(); v6anchor(); }

ROUTES['']=ROUTES['/']=pHomeV6;
/* app.js stored these functions in ROUTES when it loaded, so replacing
   pProducts and pIntegration above did not reach the router. */
ROUTES['/products']=pProducts;
ROUTES['/integration']=pIntegration;
ROUTES['/company']=pCompany;
ROUTES['/assurance']=pAssurance;
ROUTES['/contact']=pContact;
pHome=pHomeV6;
window.addEventListener('hashchange',v6after);
render(); v6after();
