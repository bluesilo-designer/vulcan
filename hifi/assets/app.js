/* ============================================================
   BLUE SILO — views and router
   ============================================================ */

/* ---------- primitives ---------- */
var WORDS=["no","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
function count(n){ return WORDS[n] || String(n); }
function Count(n){ var w=count(n); return w.charAt(0).toUpperCase()+w.slice(1); }

function band(o){
  return '<section class="band'+(o.deep?' band--deep':'')+(o.tight?' band--tight':'')+(o.bleed?' band--bleed':'')+'"'+
    (o.id?' id="'+o.id+'"':'')+'>'+(o.bleed?'':'<div class="shell">')+
    (o.title?'<div class="head rv">'+(o.label?'<span class="label" style="display:block;margin-bottom:var(--s4)">'+o.label+'</span>':'')+
      '<h2>'+o.title+'</h2>'+(o.intro?'<p>'+o.intro+'</p>':'')+'</div>':'')+
    o.body+(o.bleed?'':'</div>')+'</section>';
}
function tbl(head,rows,cap){
  return '<div class="tbl rv"><table>'+(cap?'<caption>'+cap+'</caption>':'')+
   '<thead><tr>'+head.map(function(h){return '<th scope="col">'+h+'</th>';}).join('')+'</tr></thead><tbody>'+
   rows.map(function(r){return '<tr>'+r.map(function(c,i){
     return i===0?'<th scope="row">'+c+'</th>':'<td>'+c+'</td>';}).join('')+'</tr>';}).join('')+
   '</tbody></table></div>';
}
/* Media slot. Renders the real asset when its id is listed in MEDIA_READY,
   and the briefed placeholder when it is not. No request is made for a file
   that has not been added, so the console stays clean while slots are empty. */
function media(m,extra){
  var isVid=(m.kind||'Image')==='Video';
  var ready=(typeof MEDIA_READY!=='undefined') && MEDIA_READY.indexOf(m.id)>-1;
  var src='media/'+m.id+(isVid?'.mp4':'.jpg');
  var asset = !ready ? '' : (isVid
    ? '<video class="media__asset" src="'+src+'" muted loop playsinline preload="metadata" onloadeddata="mediaReady(this)"></video>'
    : '<img class="media__asset" src="'+src+'" alt="'+m.label+'" loading="lazy" onload="mediaReady(this)">');
  return '<figure class="media '+(m.ratio||'r-43')+(ready?' is-live':'')+'" data-media="'+(isVid?'video':'image')+'" '+
    'data-id="'+m.id+'"'+(extra||'')+'>'+asset+
    '<span class="media__kind">'+(m.kind||'Image')+'</span>'+
    '<b>'+m.label+'</b><span class="media__brief">'+m.brief+'</span></figure>';
}
function mediaReady(el){
  var fig=el.closest('.media'); if(!fig) return;
  fig.classList.add('has-media');
  if(el.tagName==='VIDEO' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.play().catch(function(){});
  }
}
function closer(label,line){
  return '<section class="close"><div class="shell rv"><h2>Talk to the people who build it</h2>'+
    '<p class="lead">'+(line||'Procurement, technical integration, or anything else. Three routes reach three different inboxes, so the question lands with someone who can answer it.')+'</p>'+
    '<div class="btns"><a class="btn btn--p" href="#/contact">'+(label||'Send an enquiry')+'</a></div></div></section>';
}
function railStatic(on){
  return '<div class="chain__rail" role="list">'+CHAIN.map(function(c,i){
    var isOn=on.indexOf(c.k)>-1;
    return '<div class="step '+(isOn?'step--on':'step--off')+'" role="listitem" aria-current="'+(isOn?'step':'false')+'">'+
      '<span class="step__n">'+('0'+(i+1)).slice(-2)+'</span><span class="step__k">'+c.k+'</span></div>';
  }).join('')+'</div>';
}

/* ---------- home ---------- */
function pHome(){
  return ''+
  '<section class="hero hero--tall">'+ART +'<div class="hero__scrim"></div><div class="shell">'+
    '<h1>The systems a live-firing range runs on</h1>'+
    '<p class="lead">A trainee arrives, registers, draws a weapon and ammunition, fires, is reviewed, and hands everything back.</p>'+
    '<div class="btns"><a class="btn btn--p" href="#/products">See the systems</a>'+
    '<a class="btn btn--g" href="#chain">How the chain works</a></div></div></section>'+

  '<div class="shelf"><div class="shell"><div class="shelf__in">'+
    PRODUCTS.map(function(p){
      return '<a href="#/products/'+p.id+'">'+
        '<i class="ph '+p.icon+'" aria-hidden="true"></i>'+
        '<b>'+p.acr+'</b><span>'+p.role+'</span></a>';
    }).join('')+
  '</div></div></div>'+

  band({id:"chain",bleed:true,body:
    '<div class="shell"><div class="head rv"><h2>One training day, ten steps, nothing carried by hand</h2>'+
    '<p>Select a step. Each one names what happens, what data crosses to the next system, and what that moment is accountable for.</p></div></div>'+
    '<div class="chain"><div class="chain__rail" id="rail" role="tablist" aria-label="The training day"></div>'+
    '<div class="panel"><div class="shell"><div class="panel__in" id="panel"></div></div></div></div>'})+

  band({deep:true,label:"Why the joins matter",title:"Accountability is lost between systems, not inside them",body:
    '<div class="brk rv"><div class="brk__n">01</div><h3>A signature is not an interface</h3>'+
      '<p>A weapon leaves the armskote in one system and appears in the session in another. What connects them is a form, and someone remembering to complete it while sixty people wait.</p></div>'+
    '<div class="brk rv" data-d="1"><div class="brk__n">02</div><h3>Numbers that live in separate ledgers</h3>'+
      '<p>What was issued sits in one record, what was fired in another, what came back in a third. The difference is found at the end of a long day, by hand, under pressure to release people.</p></div>'+
    '<div class="brk rv" data-d="2"><div class="brk__n">03</div><h3>Custody becomes memory</h3>'+
      '<p>Between the counter and the firing point, no system can say who is holding what, or where they are, at this moment. It gets reconstructed afterwards, if it is ever questioned.</p></div>'})+

  band({title:"Every subsystem, designed as one chain",
    intro:"Each is deliverable on its own. Each is worth more when the step before it and the step after it are held by the same design.",
    body:'<div class="reg rv">'+PRODUCTS.map(function(p){
      return '<a href="#/products/'+p.id+'"><span class="reg__a">'+p.acr+'</span><span class="reg__n">'+p.name+'</span>'+
        '<span class="reg__r">'+p.decides.split('.')[0]+'.</span><span class="reg__g">'+p.group+'</span></a>';}).join('')+'</div>'})+

  band({deep:true,body:'<div class="split">'+
    '<div class="rv"><h2>Built for a facility with no route out</h2>'+
    '<p style="margin-top:var(--s5)">Defence sites do not have an internet path, and software that assumes one fails on its first morning. Licensing, validation and operation are designed for an isolated environment as the normal case, not as a degraded one.</p>'+
    '<div class="facts">'+
      '<div class="fact"><b>Air gapped by design</b><span>Activation travels on removable media or as a scanned code. Nothing calls out at runtime.</span></div>'+
      '<div class="fact"><b>Redundant where it counts</b><span>Clustered application nodes, active and standby at the network edge and for directory services.</span></div>'+
      '<div class="fact"><b>Separated by function</b><span>Each subsystem runs in its own cluster, so the blast radius of a fault is the function it belongs to.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/integration">Integration and interfaces</a></div></div>'+
    '<div class="rv" data-d="1">'+media({id:"home-control-room",kind:"Video",ratio:"r-43",label:"Control room, low light",
      brief:"Wide interior of a range control room before a serial. Operators at consoles, wall of lane displays. No faces, no unit markings. 12 seconds, slow push in."})+'</div>'+
    '</div>'})+

  band({body:'<div class="split split--rev">'+
    '<div class="rv">'+media({id:"home-range-dawn",kind:"Image",ratio:"r-32",label:"Empty range, before dawn",
      brief:"Indoor range with lanes receding to the target line, lights low, nobody present and no weapons in frame. 3:2."})+'</div>'+
    '<div class="rv" data-d="1"><h2>Our software is never the only thing standing between a session and an incident</h2>'+
    '<p style="margin-top:var(--s5)">The emergency stop path does not depend on our control software being healthy, reachable, or even running. Where computer vision sees a person forward of the firing line, firing is inhibited and targetry paused until the area is confirmed clear.</p>'+
    '<div class="facts">'+
      '<div class="fact"><b>Five controls on the product itself</b><span>Licence protection, secure validation, offline readiness, tamper protection, and standards alignment stated without inflation.</span></div>'+
      '<div class="fact"><b>Criticality in layers</b><span>Execution, accountability, observation and administration each carry their own availability target and defined degraded mode.</span></div></div>'+
    '<div class="btns" style="margin-top:var(--s7)"><a class="btn btn--g" href="#/assurance">Safety and assurance</a></div></div>'+
    '</div>'})+
  closer();
}

/* ---------- products index ---------- */
function pProducts(){
  var groups=["Range operations","Observation","Accountability","Sustainment","Facility"];
  return '<div class="shell page-head rv"><span class="label">Products</span>'+
    '<h1>'+Count(PRODUCTS.length)+' subsystems</h1>'+
    '<p class="lead">Take one, or take all of them. Every product page states what it decides, where it is deployed, and what has to exist for it to mean anything.</p></div>'+

  band({tight:true,body:'<div class="reg rv">'+PRODUCTS.map(function(p){
      return '<a href="#/products/'+p.id+'"><span class="reg__a">'+p.acr+'</span><span class="reg__n">'+p.name+'</span>'+
        '<span class="reg__r">'+p.role+'</span><span class="reg__g">'+p.group+'</span></a>';}).join('')+'</div>'})+

  band({deep:true,title:"What each one actually decides",
    intro:"Not a feature comparison. The question each subsystem exists to answer, and the person who has to answer it.",
    body: tbl(["Subsystem","Primary users","The decision it supports"],
      PRODUCTS.map(function(p){return [p.acr+' <em class="dim" style="display:block;margin-top:3px">'+p.name+'</em>',
        p.users.slice(0,3).join(', '),p.decides];}))})+

  band({title:"Where they run",
    intro:"A subsystem is not one screen in one room. Knowing where each client sits is what makes the operating concept real.",
    body: tbl(["Subsystem","Deployed at"],PRODUCTS.map(function(p){return [p.acr,p.where];}))})+

  band({deep:true,title:"Acronyms that look alike",
    intro:"Four systems share a naming pattern and two handle video. Confusing them in a specification is expensive later.",
    body:'<div class="g g4 rv">'+
      '<div class="tile"><h4>Ours</h4><p><strong>EWMS</strong> weapons as serialised assets. <strong>EAMS</strong> ammunition as a consumable.</p></div>'+
      '<div class="tile"><h4>Counterparts</h4><p><strong>EKMS</strong> physical keys. <strong>EACS</strong> doors and zones. Neither is ours.</p></div>'+
      '<div class="tile"><h4>Two video systems, ours</h4><p><strong>VMS</strong> video for training inside the range. <strong>EVA</strong> edge analytics outside it.</p></div>'+
      '<div class="tile"><h4>A different system entirely</h4><p><strong>VSS</strong> facility security surveillance. Different purpose, different owner, outside this scope.</p></div>'+
      '</div>'})+
  closer();
}

/* ---------- product page ---------- */
function pProduct(id){
  var p=PRODUCTS.filter(function(x){return x.id===id;})[0];
  if(!p) return pProducts();
  var caps=p.groups.map(function(g){
    return '<div class="cap"><h3>'+g.k+'</h3><ul>'+g.m.split(' · ').map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';
  }).join('');
  var mini=CHAIN.map(function(c){return '<i class="'+(p.on.indexOf(c.k)>-1?'on':'')+'">'+c.k+'</i>';}).join('');

  return '<div class="shell"><div class="pmast">'+
    '<div class="rv"><span class="label" style="display:block;margin-bottom:var(--s5)">Products, '+p.group+'</span>'+
      '<h1>'+p.name+'</h1><div class="prole" style="margin-top:var(--s5)">'+p.acr+', '+p.role+'</div>'+
      '<p class="lead">'+p.angle+'</p></div>'+
    '<dl class="pcard rv" data-d="1">'+
      '<div class="prow"><dt>Role</dt><dd>'+p.role+'</dd></div>'+
      '<div class="prow"><dt>Used by</dt><dd>'+p.users.join(', ')+'</dd></div>'+
      '<div class="prow"><dt>Deployed at</dt><dd>'+p.where+'</dd></div>'+
      '<div class="prow"><dt>In the chain</dt><dd><span class="mini">'+mini+'</span></dd></div>'+
      '<div class="prow"><dt>Interfaces</dt><dd>'+p.ifc.length+' counterpart classes</dd></div>'+
      '<div class="prow"><dt>Capabilities</dt><dd>'+p.groups.length+' areas</dd></div>'+
    '</dl></div></div>'+

  band({deep:true,tight:true,body:'<div class="decide rv"><span>The decision it supports</span><p>'+p.decides+'</p></div>'})+

  band({bleed:true,body:'<div class="chain">'+railStatic(p.on)+'</div>'})+

  band({title:"What it does",intro:"Capability areas, drawn from the module requirement rather than summarised from it.",
    body:'<div class="caps rv">'+caps+'</div>'})+

  band({deep:true,body:'<div class="split"><div class="rv">'+media(p.media)+'</div>'+
    '<div class="rv" data-d="1"><h2>Dependencies and assumptions</h2>'+
    '<p style="margin-top:var(--s5)">'+p.dep+'</p></div></div>'})+

  band({title:"What it talks to",intro:"Counterpart classes, not vendor product names. The specific counterparts on any programme belong to that programme.",
    body: tbl(["Counterpart class","Direction","Trigger"],p.ifc.map(function(r){
      return [r[0],'<span class="arrow">'+r[1]+'</span>',r[2]];}))})+

  band({deep:true,tight:true,title:"Related systems",body:'<div class="reg rv">'+p.rel.map(function(r){
      var q=PRODUCTS.filter(function(x){return x.id===r;})[0];
      return '<a href="#/products/'+q.id+'"><span class="reg__a">'+q.acr+'</span><span class="reg__n">'+q.name+'</span>'+
        '<span class="reg__r">'+q.role+'</span><span class="reg__g">'+q.group+'</span></a>';}).join('')+'</div>'})+
  closer();
}

/* ---------- integration ---------- */
function pIntegration(){
  return '<div class="shell page-head rv"><span class="label">Integration</span>'+
    '<h1>Interfaces are the product, not the work left at the end</h1>'+
    '<p class="lead">We arrive with an interface register and a simulator, not with a request for a meeting.</p>'+
    '<div class="btns" style="margin-top:var(--s6)"><a class="btn btn--p" href="#/contact">Request the ICD pack</a></div></div>'+

  band({title:"What we interface with",
    intro:"Described as classes. The named systems on any given programme are that programme business, not ours to publish.",
    body:'<div class="g g4 rv">'+["Targetry systems","Environmental and battlefield effects","Visualisation and public address",
      "Access control and security","Building management","Identity and directory services",
      "Authority booking and training records","Integrated operations and data platform"]
      .map(function(c,i){return '<div class="tile"><h4>'+c+'</h4></div>';}).join('')+'</div>'})+

  band({deep:true,title:"One row per interface, with an owner",
    intro:"Not one row per module, and not one arrow on an architecture diagram. An interface that nobody owns is an interface that arrives late.",
    body: tbl(["Field","What it records"],[
      ["Initiator","Which side opens the exchange, and therefore which side fails first"],
      ["Direction","One way or bidirectional, stated per payload rather than per system"],
      ["Mode","Request and response, publish and subscribe, store and forward, or file exchange"],
      ["Trigger","Scheduled, event driven, or continuous, and what happens when it is missed"],
      ["Payload","What is carried, at the level of meaning rather than field names"],
      ["Owner","The named person on each side who signs the change"]],
      "Register structure shown. Contents are supplied on request, under the terms that apply.")})+

  band({body:'<div class="split"><div class="rv"><h2>We already work across vendors, inside our own scope</h2>'+
    '<p style="margin-top:var(--s5)">Several systems in this chain are supplied by others. Targetry, effects, visualisation and public address are driven by our range control system but delivered by someone else. That boundary is specified, tested and version controlled exactly the way an interface to your systems would be.</p>'+
    '<p style="margin-top:var(--s4)"><strong>So the cross vendor discipline we are describing is not a promise about how we would behave. It is how we are already built.</strong></p></div>'+
    '<div class="rv" data-d="1">'+media({id:"integration-bench",kind:"Image",ratio:"r-43",label:"Integration test bench",
      brief:"Lab bench with rack mounted equipment, patch cables and two monitors showing abstracted interface traffic. No people, no readable text. 4:3."})+'</div></div>'})+

  band({deep:true,title:"Three dependencies we refuse to treat as optional",
    intro:"All three are routinely left off integration matrices. All three are load bearing.",
    body:'<div class="brk rv"><div class="brk__n">01</div><h3>Identity and directory</h3>'+
      '<p>Single sign on and role based access for every subsystem, against the programme directory. One user database per subsystem is one offboarding failure per subsystem waiting to happen.</p></div>'+
      '<div class="brk rv" data-d="1"><div class="brk__n">02</div><h3>Time synchronisation</h3>'+
      '<p>Video, detections, tracking and health data cannot be correlated without it, and an after action review that cannot be correlated is not defensible in an investigation.</p></div>'+
      '<div class="brk rv" data-d="2"><div class="brk__n">03</div><h3>Audit and log forwarding</h3>'+
      '<p>Audit trails for weapon and ammunition handling belong in the programme log platform, not only in our own database where we control them.</p></div>'})+

  band({title:"How we prove it before site",body:'<div class="g g4 rv">'+
    [["Simulators and stubs","Every counterpart has a stub before it has a partner engineer."],
     ["Staged integration","Interfaces are integrated in dependency order, not all at once in the final month."],
     ["Change control","An interface change is a versioned document, not an email."],
     ["Frozen regression","Once an interface passes, it is regressed against on every build."]]
    .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+
  closer("Request the ICD pack","Send us the architecture you need us to fit into, and we will come back with the interface register rather than with questions.");
}

/* ---------- assurance ---------- */
function pAssurance(){
  return '<div class="shell page-head rv"><span class="label">Assurance</span>'+
    '<h1>Protected product, protected range</h1>'+
    '<p class="lead">Two obligations sit on this software. It must not be usable by anyone who is not entitled to it, and it must never be the only thing standing between a session and an incident.</p></div>'+

  band({title:"Five controls, asked in order",
    intro:"Licensing in a defence facility is not a commercial convenience. It is the control that decides whether a copy of this software may run at all, in an environment where nobody can phone home to ask. Each control answers one question, and each depends on the one before it.",
    body:'<div class="gates rv">'+PROTECT.map(function(x){
        return '<div class="gate"><b>'+x.n+'</b><span>'+x.k+'</span><i>'+x.gate+'</i></div>';}).join('')+'</div>'+
      '<div style="margin-top:var(--s8)">'+PROTECT.map(function(x){
        return '<div class="ctrl rv">'+
          '<div><div class="ctrl__n">Control '+x.n+'</div><div class="ctrl__h">'+x.k+'</div>'+
            '<div class="ctrl__q">'+x.d+'</div></div>'+
          '<div class="ctrl__d">'+
            '<section><h4>In practice</h4><p>'+x.practice+'</p></section>'+
            '<section><h4>'+(x.n==="05"?"Three claims, kept apart":"What it prevents")+'</h4><ul>'+
              x.prevents.map(function(y){return '<li>'+y+'</li>';}).join('')+'</ul></section>'+
            '<section><h4>How to check us</h4><p>'+x.evidence+'</p></section>'+
          '</div>'+
          '<div class="impl"><div class="impl__k"><b>Reference implementation</b>'+
            '<i>Draft, the approach we would propose, pending confirmation by engineering</i></div><ul>'+
            x.impl.map(function(y){return '<li><b>'+y[0]+'</b>'+y[1]+'</li>';}).join('')+'</ul></div>'+
        '</div>';}).join('')+'</div>'})+

  band({deep:true,body:'<div class="split"><div class="rv">'+
      media({id:"assurance-estop",kind:"Image",ratio:"r-32",label:"Emergency stop, wall mounted",
        brief:"Close crop of a wall mounted emergency stop device in a corridor, slightly off centre. Hard shadow, industrial. No people, no signage text. 3:2."})+'</div>'+
    '<div class="rv" data-d="1"><h2>Safety posture on the range</h2>'+
    '<div class="facts">'+
      '<div class="fact"><b>An independent emergency stop</b><span>The stop path does not depend on our control software being healthy, reachable, or even running. Activated physically or virtually, it halts targetry and environmental effects immediately.</span></div>'+
      '<div class="fact"><b>Interlock on a detected hazard</b><span>Where a person is detected forward of the firing line, firing is inhibited and targetry paused until the area is confirmed clear, with an alert, an evidence clip and a timeline marker raised at the same moment.</span></div>'+
      '<div class="fact"><b>Defined fail safe behaviour</b><span>Loss of communication, loss of power and network degradation each have a specified safe state, written down in advance and tested rather than assumed.</span></div>'+
    '</div></div></div>'})+

  band({title:"Not every layer needs the same availability",
    intro:"Treating a whole system as uniformly critical is how programmes end up paying for redundancy where it does not matter, and lacking it where it does.",
    body: tbl(["Layer","Criticality","Degraded mode"],[
      ["Execution","Mission and safety critical","Runs an authorised session from a cached session package"],
      ["Accountability","Mission critical","Records locally, reconciliation deferred but never skipped"],
      ["Observation","Mission critical","Recording continues, analytics degrade before recording does"],
      ["Administrative","Business critical","Does not block a session already under way"]])})+

  band({deep:true,title:"How the software is actually built",body:'<div class="g g4 rv">'+
    [["Version control and review","No change reaches a build without a second pair of eyes."],
     ["Test strategy","Interfaces, safety behaviour and reconciliation logic are tested separately and explicitly."],
     ["Configuration management","What is deployed at a site is a known, reproducible set of versions."],
     ["Vulnerability handling","Dependencies are tracked, and there is a stated route for patching a fielded system."]]
    .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+
  closer("Request the assurance summary","The full assurance summary is released on request rather than published, because parts of it are close to material that should not sit on a public website.");
}

/* ---------- company ---------- */
function pCompany(){
  return '<div class="shell page-head rv"><span class="label">Company</span>'+
    '<h1>Blue Silo</h1>'+
    '<p class="lead">We build the software that runs range training complexes. That is the whole of what we do.</p></div>'+

  band({body:'<div class="split"><div class="rv"><h2>What we build, and why we build only this</h2>'+
    '<div class="prose" style="margin-top:var(--s5)">'+
    '<p>Range training complexes are run by many systems from many suppliers, and the gaps between those systems are where accountability goes. Someone signs a form. Someone remembers a number. Someone reconciles at the end of a long day. It works, until the day it is questioned.</p>'+
    '<p>We build the subsystems that close those gaps, and we treat the interfaces between them, including the ones to systems we do not own, as the product rather than as integration work to be scheduled later.</p>'+
    '<p><strong>We do not build anything else.</strong> A supplier serving range training and three other markets is a supplier whose attention is somewhere else when your programme needs it.</p></div></div>'+
    '<div class="rv" data-d="1">'+media({id:"company-floor",kind:"Image",ratio:"r-43",label:"Engineering floor",
      brief:"Small engineering team workspace, two people at monitors seen from behind, screens abstracted. Warm task lighting against a dark room. 4:3."})+'</div></div>'})+

  band({deep:true,title:"Leadership",intro:"Few, and real. Every name here is verifiable, and evaluators do verify.",
    body:'<div class="g g3 rv">'+[1,2,3].map(function(i){
      return '<div>'+media({id:"portrait-"+i,kind:"Image",ratio:"r-11",label:"Portrait "+i,
        brief:"Plain headshot, even lighting, neutral dark ground, shoulders up. The only photographs of people on this site."})+
        '<div class="tile" style="margin-top:var(--s4)"><h4>Name and role</h4><p>Relevant background in defence, control systems or delivery, in three sentences.</p></div></div>';
    }).join('')+'</div>'})+

  band({title:"Disciplines, not headcount",body:'<div class="g g4 rv">'+
    [["Control systems","Real time equipment control, safety interlocks, and degraded mode behaviour."],
     ["Systems integration","Interface design, ICD authorship, simulators, and staged integration testing."],
     ["Computer vision","Detection, re-identification and association, engineered for the edge."],
     ["Security engineering","Segmentation, classification handling, audit design, isolated operation."]]
    .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+

  band({deep:true,title:"What happens if we are not here",
    intro:"We are a small company, and any evaluator will establish that within five minutes. So we state it, and then state how the continuity risk is actually handled, which is a stronger position than hoping it is not raised.",
    body:'<div class="g g3 rv">'+
      [["Intellectual property","Rights are settled in the contract, in writing, before delivery rather than at the end of it."],
       ["Source code escrow","Offered as standard, with defined release conditions and a verified deposit."],
       ["Documentation","Written so a competent third party can take the system over, which is a testable claim rather than a promise."]]
      .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+

  band({title:"Corporate",body: tbl(["Field","Detail"],[
    ["Registered entity","Blue Silo Pte. Ltd."],["UEN","<em class=\"dim\">To confirm from the ACRA record</em>"],
    ["Registered address","<em class=\"dim\">To confirm from the ACRA record</em>"],
    ["Incorporated","<em class=\"dim\">To confirm from the ACRA record</em>"]])})+
  closer();
}

/* ---------- contact ---------- */
function pContact(){
  return '<div class="shell page-head rv"><span class="label">Enquiries</span>'+
    '<h1>Three routes, three inboxes</h1>'+
    '<p class="lead">A technical integration question that lands in a general inbox gets lost. Choose the route and it reaches the person who can answer it.</p></div>'+

  band({tight:true,body:'<div class="g g3 rv">'+
    [["Procurement","Tender, capability and commercial enquiries. Reaches the person who can commit to a response."],
     ["Technical integration","Interfaces, ICDs, simulators and system integration testing. Reaches an engineer, not an account manager."],
     ["General","Everything else, including press and partnership."]]
    .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+

  band({deep:true,title:"Five fields, each with a reason",body:
    '<form class="form rv" onsubmit="return false">'+
    '<div class="fr"><div class="field"><label for="org">Organisation</label>'+
      '<input id="org" name="org" type="text" placeholder="Who you are writing on behalf of">'+
      '<small>Determines which terms apply to material we send back</small></div>'+
      '<div class="field"><label for="nm">Name</label><input id="nm" name="nm" type="text" placeholder="Your name"></div></div>'+
    '<div class="fr"><div class="field"><label for="rl">Role</label><input id="rl" name="rl" type="text" placeholder="Your role">'+
      '<small>Determines who from our side should reply</small></div>'+
      '<div class="field"><label for="ty">Type of enquiry</label><select id="ty" name="ty">'+
      '<option>Procurement</option><option>Technical integration</option><option>General</option></select>'+
      '<small>Routes to one of the three inboxes above</small></div></div>'+
    '<div class="field"><label for="ms">Message</label><textarea id="ms" name="ms" placeholder="What you need from us"></textarea></div>'+
    '<div class="btns"><button class="btn btn--p" type="submit">Send enquiry</button></div>'+
    '<p class="note">No third party challenge test. Some of the people we most want to hear from work on devices that block it.</p>'+
    '</form>'})+

  band({title:"Material we release rather than publish",
    intro:"The gate is control over what leaves, not a marketing tactic. None of these are public downloads.",
    body:'<div class="g g3 rv">'+
      [["Capability statement","What we build, what we have built, and the disciplines behind it."],
       ["Assurance summary","Product protection, safety posture, security design and standards alignment."],
       ["ICD pack","Interface register structure, protocol patterns, and our integration test approach."]]
      .map(function(c){return '<div class="tile"><h4>'+c[0]+'</h4><p>'+c[1]+'</p></div>';}).join('')+'</div>'})+

  band({deep:true,tight:true,body: tbl(["Direct","Detail"],[
    ["Email","<em class=\"dim\">Three addresses, one per route. To confirm.</em>"],
    ["Registered address","<em class=\"dim\">To confirm from the ACRA record.</em>"],
    ["Response time","We state a window and we meet it. A stated window that is missed is worse than none."]])});
}

/* ============================================================
   ROUTER + BEHAVIOUR
   ============================================================ */
var ROUTES={'':pHome,'/':pHome,'/products':pProducts,'/integration':pIntegration,
  '/assurance':pAssurance,'/company':pCompany,'/contact':pContact};

function render(){
  var h=(location.hash||'#/').replace(/^#/,'');
  if(h.charAt(0)!=='/'){ document.getElementById('main').scrollIntoView(); return; } /* in-page anchor */
  var html,key=h, m=h.match(/^\/products\/([a-z]+)$/);
  if(m){ html=pProduct(m[1]); key='/products'; }
  else if(ROUTES[h]){ html=ROUTES[h](); }
  else { html=pHome(); key='/'; }
  document.getElementById('main').innerHTML=html;
  document.querySelectorAll('#nav [data-route]').forEach(function(a){
    if(a.getAttribute('data-route')===key) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
  closeMenu(); bindChain(); observe(); window.scrollTo(0,0);
  document.title=(m?PRODUCTS.filter(function(p){return p.id===m[1];})[0].acr+'. ':'')+'Blue Silo. Range Training Systems';
}

function bindChain(){
  var rail=document.getElementById('rail'), panel=document.getElementById('panel');
  if(!rail||!panel) return;
  rail.innerHTML=CHAIN.map(function(c,i){
    return '<button class="step" type="button" role="tab" data-i="'+i+'" aria-selected="'+(i===0)+'">'+
      '<span class="step__n">'+('0'+(i+1)).slice(-2)+'</span><span class="step__k">'+c.k+'</span>'+
      '<span class="step__s">'+c.s+'</span></button>';}).join('');
  function paint(i){var c=CHAIN[i];
    panel.innerHTML='<div><h3>'+c.t+'</h3><p>'+c.b+'</p></div>'+
      '<dl><div><dt>Data that moves</dt><dd>'+c.d+'</dd></div>'+
      '<div><dt>What this step holds</dt><dd>'+c.h+'</dd></div>'+
      '<div><dt>Subsystems</dt><dd>'+c.s+'</dd></div></dl>';}
  rail.addEventListener('click',function(e){
    var b=e.target.closest('.step'); if(!b) return;
    rail.querySelectorAll('.step').forEach(function(s){s.setAttribute('aria-selected',s===b);});
    paint(+b.dataset.i);});
  paint(0);
}

var io=null;
function observe(){
  var els=document.querySelectorAll('.rv');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    els.forEach(function(e){e.classList.add('in');}); return;
  }
  if(io) io.disconnect();
  io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e);});
}

/* products menu */
var mBtn,mPanel;
function closeMenu(){ if(mPanel){ mPanel.hidden=true; mBtn.setAttribute('aria-expanded','false'); } }
function buildMenu(){
  mBtn=document.getElementById('mBtn'); mPanel=document.getElementById('mPanel');
  mPanel.innerHTML='<div class="shell">'+PRODUCTS.map(function(p){
    return '<a href="#/products/'+p.id+'"><b>'+p.acr+'</b><span>'+p.role+'</span></a>';
  }).join('')+'</div>';
  mBtn.addEventListener('click',function(e){ e.stopPropagation();
    var open=mPanel.hidden; mPanel.hidden=!open; mBtn.setAttribute('aria-expanded',open?'true':'false'); });
  mPanel.addEventListener('click',function(e){ if(e.target.closest('a')) closeMenu(); });
  document.addEventListener('click',function(e){ if(!mPanel.hidden && !e.target.closest('.dd,#mPanel')) closeMenu(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!mPanel.hidden){ closeMenu(); mBtn.focus(); }});
}

/* nav state */
function navWatch(){
  var nav=document.getElementById('nav'), s=document.createElement('div');
  s.style.cssText='position:absolute;top:0;height:1px;width:1px';
  document.body.prepend(s);
  new IntersectionObserver(function(es){ nav.classList.toggle('is-stuck',!es[0].isIntersecting); },
    {rootMargin:'-40px 0px 0px 0px'}).observe(s);
}

window.addEventListener('hashchange',render);
buildMenu(); navWatch(); render();
