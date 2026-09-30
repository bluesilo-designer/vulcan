/* ============================================================
   BLUE SILO — home, version 3. Loaded after app.js and replaces
   only the home view; every inner page still comes from app.js.

   Order follows the questions an evaluator asks, in the order
   they ask them:
     who is this and is it for me     hero, audience line
     can I believe it                 measures
     what problem does it solve       the joins
     how                              the chain
     what changes for me              before and after
     what exactly do I buy            the systems, modular
     will it survive my site          air gap and safety
     who is it for inside my org      three readers, three routes
     how does delivery work           five stages
     will they still be here          continuity
     what else do I need to know      questions
     what do I do now                 released material, enquiry
   ============================================================ */

var SHIFT=[
 {k:"Custody",
  was:"A weapon is signed out on a form and found again by asking who has it.",
  now:"The serial is bound to a person at the locker and followed on the layout map until it is returned."},
 {k:"The closing account",
  was:"Issued, fired and returned rounds live in three ledgers and are reconciled by hand at the end of the day.",
  now:"Issue and return are counted against the same package, so the account closes as the last item comes back."},
 {k:"Safety downrange",
  was:"A person forward of the firing line is caught if somebody happens to be looking.",
  now:"Computer vision raises it, firing is inhibited and targetry paused until the area is confirmed clear."},
 {k:"The debrief",
  was:"Reconstructed afterwards from notes and memory, and hard to defend if questioned.",
  now:"Run from the timeline marked during the serial, which is the same record that gets filed."},
 {k:"Maintenance",
  was:"Equipment is fixed after it fails, often on the morning it is needed.",
  now:"Health and usage are collected continuously, so servicing happens against work done, before the failure."}
];

var READERS=[
 {k:"Range operations",who:"Range supervising officers, conductors, instructors",
  get:"A training day that runs from one roll, one timeline and one account, with the stop path outside our software.",
  href:"#/products",cta:"What each system decides"},
 {k:"Programme and procurement",who:"Programme managers, evaluators, contracts",
  get:"Modular scope, stated assurance, escrow as standard, and a continuity position written down rather than implied.",
  href:"#/assurance",cta:"Assurance and protection"},
 {k:"Integrators and primes",who:"System architects, integration leads",
  get:"An interface register with an owner per row, simulators for every counterpart, and staged integration before site.",
  href:"#/integration",cta:"Integration and interfaces"}
];

var STAGES=[
 ["Architecture","We read the architecture you need us to fit into and mark every join we would own."],
 ["Interface register","One row per interface, with initiator, mode, trigger, payload and a named owner on each side."],
 ["Staged integration","Every counterpart has a simulator first. Interfaces are integrated in dependency order, then frozen and regressed."],
 ["Site acceptance","Safety behaviour, degraded modes and reconciliation are demonstrated on site, not asserted in a document."],
 ["Sustainment","Health monitoring, a stated patch route for a fielded system, and licences renewed on the same offline path."]
];

var FAQ=[
 ["Can we take one subsystem rather than all eight?",
  "Yes. Each is deliverable on its own, with its interfaces to the rest of the facility specified either way. The chain is worth more whole, but it is not sold as a bundle."],
 ["Does any of it need an internet connection?",
  "No. Activation travels on removable media or as a scanned code, and nothing calls out at runtime. Renewal and revocation use the same offline path."],
 ["We already have a targetry or effects vendor. Does that matter?",
  "No. Targetry, effects, visualisation and public address are already delivered by others and driven by our range control system across a specified, version controlled interface."],
 ["What happens if the control software fails during a serial?",
  "The emergency stop path does not depend on it. Each layer has a defined degraded mode, and an authorised session can continue from a cached session package."],
 ["You are a small company. What if you are not here in five years?",
  "Source code escrow is offered as standard with defined release conditions, intellectual property is settled in the contract, and documentation is written so a competent third party can take the system over."],
 ["Why is so little of this published?",
  "Parts of the assurance and interface material sit close to things that should not be on a public website. It is released on request, under the terms that apply to your organisation."]
];

var RELEASE=[
 ["Capability statement","What we build, what we have built, and the disciplines behind it."],
 ["Assurance summary","Product protection, safety posture, security design and standards alignment."],
 ["ICD pack","Interface register structure, protocol patterns and our integration test approach."]
];

function pHomeV3(){
  var groups=["Range operations","Observation","Accountability","Sustainment","Facility"];
  return ''+

  /* who and what, in the first screen */
  '<section class="hero hero--tall">'+ART+'<div class="hero__scrim"></div><div class="shell">'+
    '<span class="label v3-eyebrow">Range training software</span>'+
    '<h1>The systems a live-firing range runs on</h1>'+
    '<p class="lead">Blue Silo builds '+count(PRODUCTS.length)+' subsystems, from controlled access at the gate to the closing weapon and ammunition account, and the interfaces that hold them together as one chain.</p>'+
    '<div class="btns"><a class="btn btn--p" href="#/contact">Request the capability statement</a>'+
    '<a class="btn btn--g" href="#chain">See a training day</a></div>'+
    '<p class="v3-for">For defence training authorities, range operators, and the primes who integrate them.</p>'+
  '</div></section>'+

  /* believable before it is interesting */
  '<div class="measure v3-measure">'+
    '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
    '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
    '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
    '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
  '</div>'+

  /* problem before solution */
  band({deep:true,label:"What actually breaks",title:"Accountability is lost between systems, not inside them",body:
    '<div class="brk rv"><div class="brk__n">01</div><h3>A signature is not an interface</h3>'+
      '<p>A weapon leaves the armskote in one system and appears in the session in another. What connects them is a form, and someone remembering to complete it while sixty people wait.</p></div>'+
    '<div class="brk rv" data-d="1"><div class="brk__n">02</div><h3>Numbers that live in separate ledgers</h3>'+
      '<p>What was issued sits in one record, what was fired in another, what came back in a third. The difference is found at the end of a long day, by hand, under pressure to release people.</p></div>'+
    '<div class="brk rv" data-d="2"><div class="brk__n">03</div><h3>Custody becomes memory</h3>'+
      '<p>Between the counter and the firing point, no system can say who is holding what, or where they are, at this moment. It gets reconstructed afterwards, if it is ever questioned.</p></div>'})+

  /* the answer, as a day */
  band({id:"chain",bleed:true,body:
    '<div class="shell"><div class="head rv"><span class="label" style="display:block;margin-bottom:var(--s4)">How it works</span>'+
    '<h2>One training day, ten steps, nothing carried by hand</h2>'+
    '<p>Select a step. Each one names what happens, what data crosses to the next system, and what that moment is accountable for.</p></div></div>'+
    '<div class="chain"><div class="chain__rail" id="rail" role="tablist" aria-label="The training day"></div>'+
    '<div class="panel"><div class="shell"><div class="panel__in" id="panel"></div></div></div></div>'})+

  /* outcome, in the reader's terms */
  band({deep:true,label:"What changes",title:"The same range day, held by systems instead of people",
    intro:"Five moments where accountability used to depend on someone remembering.",
    body:'<div class="shift rv" role="table" aria-label="Before and after">'+
      '<div class="shift__h" role="row"><span role="columnheader"></span><span role="columnheader">Today</span><span role="columnheader">With the chain</span></div>'+
      SHIFT.map(function(s){
        return '<div class="shift__r" role="row"><b role="rowheader">'+s.k+'</b>'+
          '<p role="cell"><span class="shift__m">Today</span>'+s.was+'</p>'+
          '<p role="cell" class="shift__now"><span class="shift__m">With the chain</span>'+s.now+'</p></div>';
      }).join('')+'</div>'})+

  /* what you buy */
  band({label:"The systems",title:"Built as one chain, delivered as parts",
    intro:"Each subsystem is deliverable on its own. Each is worth more when the step before it and the step after it are held by the same design.",
    body:groups.map(function(g){
      var ps=PRODUCTS.filter(function(p){return p.group===g;});
      return '<div class="v3-group rv"><span class="label">'+g+'</span><div class="reg">'+ps.map(function(p){
        return '<a href="#/products/'+p.id+'"><span class="reg__a">'+p.acr+'</span><span class="reg__n">'+p.name+'</span>'+
          '<span class="reg__r">'+p.decides.split('.')[0]+'.</span><span class="reg__g">'+p.role+'</span></a>';}).join('')+'</div></div>';
    }).join('')+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/products">Compare all '+count(PRODUCTS.length)+'</a></div>'})+

  /* will it survive the site */
  band({deep:true,body:'<div class="split">'+
    '<div class="rv"><span class="label" style="display:block;margin-bottom:var(--s4)">Built for the site</span>'+
    '<h2>Designed for a facility with no route out, and a range that must always stop</h2>'+
    '<div class="facts v3-facts">'+
      '<div class="fact"><b>Air gapped by design</b><span>Activation travels on removable media or as a scanned code. Nothing calls out at runtime.</span></div>'+
      '<div class="fact"><b>An independent emergency stop</b><span>The stop path does not depend on our control software being healthy, reachable, or even running.</span></div>'+
      '<div class="fact"><b>Interlock on a detected hazard</b><span>A person forward of the firing line inhibits firing and pauses targetry until the area is confirmed clear.</span></div>'+
      '<div class="fact"><b>Criticality in layers</b><span>Execution, accountability, observation and administration each carry their own degraded mode.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/assurance">Safety and assurance</a>'+
    '<a class="btn btn--g" href="#/integration">Integration</a></div></div>'+
    '<div class="rv" data-d="1">'+media({id:"home-control-room",kind:"Video",ratio:"r-43",label:"Control room, low light",
      brief:"Wide interior of a range control room before a serial. Operators at consoles, wall of lane displays. No faces, no unit markings. 12 seconds, slow push in."})+'</div>'+
    '</div>'})+

  /* route each reader to their page */
  band({label:"Who it is for",title:"Three readers, three different questions",
    body:'<div class="g g3 rv">'+READERS.map(function(r){
      return '<a class="v3-reader" href="'+r.href+'"><h3>'+r.k+'</h3><span class="v3-reader__who">'+r.who+'</span>'+
        '<p>'+r.get+'</p><span class="v3-reader__cta">'+r.cta+' <i class="ph ph-arrow-right" aria-hidden="true"></i></span></a>';
    }).join('')+'</div>'})+

  /* how buying and delivery actually go */
  band({deep:true,label:"How we deliver",title:"From your architecture to a range in service",
    intro:"We arrive with an interface register and a simulator, not with a request for a meeting.",
    body:'<ol class="path rv">'+STAGES.map(function(s,i){
      return '<li><span class="path__n">'+('0'+(i+1)).slice(-2)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></li>';
    }).join('')+'</ol>'})+

  /* the small company question, answered before it is asked */
  band({body:'<div class="split split--rev">'+
    '<div class="rv">'+media({id:"company-floor",kind:"Image",ratio:"r-43",label:"Engineering floor",
      brief:"Small engineering team workspace, two people at monitors seen from behind, screens abstracted. Warm task lighting against a dark room. 4:3."})+'</div>'+
    '<div class="rv" data-d="1"><span class="label" style="display:block;margin-bottom:var(--s4)">Who builds it</span>'+
    '<h2>A small company that builds only this, and says what happens if it is not here</h2>'+
    '<p style="margin-top:var(--s5)">Range training software is the whole of what we do. We are small, and any evaluator will establish that within five minutes, so the continuity position is stated up front.</p>'+
    '<div class="facts">'+
      '<div class="fact"><b>Source code escrow, as standard</b><span>Defined release conditions and a verified deposit.</span></div>'+
      '<div class="fact"><b>Intellectual property settled first</b><span>Rights are agreed in the contract, in writing, before delivery.</span></div>'+
      '<div class="fact"><b>Documentation a third party can use</b><span>Written so a competent team can take the system over, which is a testable claim.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/company">About Blue Silo</a></div></div>'+
    '</div>'})+

  /* objections, handled in place */
  band({deep:true,label:"Questions",title:"What evaluators ask first",
    body:'<div class="faq rv">'+FAQ.map(function(q,i){
      return '<details'+(i===0?' open':'')+'><summary>'+q[0]+'<span class="faq__i" aria-hidden="true"></span></summary><p>'+q[1]+'</p></details>';
    }).join('')+'</div>'})+

  /* one clear next step, with a lighter one beside it */
  '<section class="close"><div class="shell rv">'+
    '<h2>Talk to the people who build it</h2>'+
    '<p class="lead">Start with the material, or start with a question. Three routes reach three different inboxes, so it lands with someone who can answer it.</p>'+
    '<div class="g g3 v3-release">'+RELEASE.map(function(r){
      return '<a href="#/contact"><span class="label">Released on request</span><h3>'+r[0]+'</h3><p>'+r[1]+'</p>'+
        '<span class="v3-reader__cta">Request <i class="ph ph-arrow-right" aria-hidden="true"></i></span></a>';
    }).join('')+'</div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--p" href="#/contact">Send an enquiry</a></div>'+
  '</div></section>';
}

/* Swap the home view in and render again. pHome is reassigned too,
   because render() falls back to it for unknown routes. */
ROUTES['']=ROUTES['/']=pHomeV3;
pHome=pHomeV3;
render();
