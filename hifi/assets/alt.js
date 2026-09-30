/* ============================================================
   ALTERNATIVE HOME — footage led.
   Reuses data.js, app.css and the media manifest.
   ============================================================ */

/* Where each system physically lives. This is the section that does not
   exist on the reference site, and it is the one an evaluator actually
   needs: which box in the building is running which piece of software. */
var ZONES=[
 {id:"gate",k:"Gate",node:"n-admin",
  t:"Nobody reaches the range without being cleared at the gate",
  b:"Identity and booking are verified from a scanned credential, the vehicle plate is matched automatically, and the result is shown to the guard before the barrier moves. Perimeter analytics watch the fenceline while it happens.",
  sys:["as","eva"]},
 {id:"armskote",k:"Armskote",node:"n-arms",
  t:"A weapon leaves the rack against a serial number, not a signature",
  b:"Authentication unlocks the assigned locker, the locker reports what was actually removed, and the serial is bound to the person and to the tracking system in the same transaction.",
  sys:["ewms","pwats"]},
 {id:"magazine",k:"Magazine",node:"n-ammo",
  t:"Ammunition is issued against a package and counted back",
  b:"Type and quantity are verified at the counter, receipt is confirmed by the person drawing, and usage is tracked closely enough that resupply is arranged before a range runs short.",
  sys:["eams","pwats"]},
 {id:"control",k:"Control room",node:"n-control",
  t:"One room decides whether the range is hot",
  b:"Readiness is checked and recorded, the exercise is loaded, the dry run is conducted, and only then is the range declared ready. During the serial, targetry, effects and recording are driven from here.",
  sys:["rcs","vms"]},
 {id:"range",k:"The range",node:"n-range",
  t:"What happens on the lane is seen, marked and kept",
  b:"Positions are tracked to sub metre and refreshed every second. Computer vision watches muzzle direction, the butt area, unattended weapons and smoke, and where a person is detected downrange, firing is inhibited until the area is confirmed clear.",
  sys:["rcs","vms","eva","pwats"]},
 {id:"plant",k:"Plant",node:"n-plant",
  t:"Whether the facility is fit for tomorrow",
  b:"Health, usage and utilisation are collected continuously from every connected system, measured against work actually done rather than against elapsed time, and turned into maintenance that happens before a failure rather than after it.",
  sys:["hums"]}
];

/* Plan drawing with addressable zones. Not decoration: every element here
   corresponds to something named in the captions beside it. */
var PLAN='<svg viewBox="0 0 800 520" fill="none" role="img" aria-label="Facility plan with addressable zones">'+
 '<defs><pattern id="hz" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'+
 '<path d="M0 0V8" stroke="#2B323A"/></pattern></defs>'+
 '<rect x="32" y="32" width="736" height="456" stroke="#2B323A" stroke-dasharray="6 5"/>'+
 '<g class="z" id="n-admin"><rect x="48" y="52" width="64" height="40" stroke="#5EA5FF" fill="#101A28"/>'+
   '<rect x="76" y="68" width="8" height="8" fill="#5EA5FF"/>'+
   '<text x="48" y="46" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">GATE</text></g>'+
 '<g class="z" id="n-arms"><rect x="48" y="142" width="64" height="40" stroke="#5EA5FF" fill="#101A28"/>'+
   '<rect x="76" y="158" width="8" height="8" fill="#5EA5FF"/>'+
   '<text x="48" y="136" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">ARMSKOTE</text></g>'+
 '<g class="z" id="n-control"><rect x="48" y="230" width="64" height="52" stroke="#5EA5FF" fill="#101A28"/>'+
   '<rect x="73" y="249" width="14" height="14" fill="#5EA5FF"/>'+
   '<text x="48" y="224" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">CONTROL</text></g>'+
 '<g class="z" id="n-ammo"><rect x="48" y="332" width="64" height="40" stroke="#5EA5FF" fill="#101A28"/>'+
   '<rect x="76" y="348" width="8" height="8" fill="#5EA5FF"/>'+
   '<text x="48" y="326" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">MAGAZINE</text></g>'+
 '<g class="z" id="n-plant"><rect x="48" y="422" width="64" height="40" stroke="#5EA5FF" fill="#101A28"/>'+
   '<rect x="76" y="438" width="8" height="8" fill="#5EA5FF"/>'+
   '<text x="48" y="416" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">PLANT</text></g>'+
 '<path d="M112 72H124V256H112M112 162H124V256H112M112 352H124V256H112M112 442H124V256H112M112 256H152" stroke="#2E5F9E"/>'+
 '<g class="z" id="n-range">'+
   '<rect x="152" y="76" width="478" height="12" fill="url(#hz)"/><rect x="152" y="420" width="478" height="12" fill="url(#hz)"/>'+
   '<rect x="638" y="76" width="30" height="356" fill="url(#hz)"/>'+
   '<path d="M152 76V432M630 76V432" stroke="#5EA5FF"/>'+
   '<path d="M152 104H630M152 164H630M152 224H630M152 284H630M152 344H630M152 404H630" stroke="#2B323A"/>'+
   '<g fill="#5EA5FF"><rect x="149" y="101" width="6" height="6"/><rect x="149" y="161" width="6" height="6"/>'+
   '<rect x="149" y="221" width="6" height="6"/><rect x="149" y="281" width="6" height="6"/>'+
   '<rect x="149" y="341" width="6" height="6"/><rect x="149" y="401" width="6" height="6"/></g>'+
   '<g stroke="#3C444D"><path d="M614 98h12M620 98v12M614 158h12M620 158v12M614 218h12M620 218v12'+
     'M614 278h12M620 278v12M614 338h12M620 338v12M614 398h12M620 398v12"/></g>'+
   '<text x="152" y="68" fill="#5EA5FF" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">FIRING LINE</text>'+
   '<text x="630" y="68" text-anchor="end" fill="#7C868C" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1.2">TARGET LINE</text>'+
 '</g>'+
 '<g stroke="#3C444D"><path d="M560 470h120M560 465v10M600 467v6M640 467v6M680 465v10"/></g>'+
 '<text x="560" y="462" fill="#7C868C" font-family="IBM Plex Mono, monospace" font-size="8">0</text>'+
 '<text x="680" y="462" text-anchor="end" fill="#7C868C" font-family="IBM Plex Mono, monospace" font-size="8">100 m</text>'+
 '</svg>';

function sysById(id){ return PRODUCTS.filter(function(p){return p.id===id;})[0]; }

/* ---------- build ---------- */
document.getElementById('main').innerHTML =

/* hero */
'<section class="vhero">'+
  '<div class="vhero__bed">'+media({id:"home-control-room",kind:"Video",ratio:"",
    label:"Hero film",
    brief:"Range control room before a serial. Wide, low light, operators at consoles against a wall of lane displays. No faces, no insignia, no weapons. Twelve seconds, one slow push in, no cuts."})+'</div>'+
  '<div class="vhero__veil"></div>'+
  '<div class="ticks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'+
  '<div class="shell">'+
    '<h1>The systems a live-firing range runs on</h1>'+
    '<p class="lead">From the gate to the last round, every step is held by a system rather than by someone remembering.</p>'+
    '<div class="btns"><a class="btn btn--p" href="index.html#/products">See the systems</a>'+
    '<a class="btn btn--g" href="#zones">Where they run</a></div>'+
  '</div>'+
'</section>'+

/* statement over footage */
'<section class="stmt">'+
  '<div class="stmt__bed">'+media({id:"home-range-dawn",kind:"Image",ratio:"",
    label:"Range plate",
    brief:"Indoor range before dawn, lanes receding to the target line, lights low. Nobody present, no weapons in frame. Wide enough to crop at any viewport."})+'</div>'+
  '<div class="stmt__veil"></div>'+
  '<div class="shell"><span class="label" style="display:block;margin-bottom:var(--s5)">What actually breaks</span>'+
  '<h2>Accountability is lost between systems, not inside them</h2>'+
  '<p>A weapon leaves the armskote in one system and appears in the session in another. What connects them is a form, and someone remembering to complete it while sixty people wait.</p></div>'+
'</section>'+

/* zone switcher */
'<section class="band zone" id="zones"><div class="shell">'+
  '<div class="head rv"><h2>Every system has an address in the building</h2>'+
  '<p>Select a place. The plan shows where it sits and the caption names which software is running there.</p></div>'+
  '<div class="zone__pills rv" id="pills" role="group" aria-label="Facility zones"></div>'+
  '<div class="zone__body">'+
    '<div class="zone__plan rv">'+PLAN+'</div>'+
    '<div class="zone__cap rv" id="zcap" data-d="1"></div>'+
  '</div>'+
'</div></section>'+

/* large type register */
'<section class="band band--deep"><div class="shell">'+
  '<div class="head rv"><h2>Built as one chain, delivered as parts</h2>'+
  '<p>Each is deliverable on its own. Each is worth more when the step before it and the step after it are held by the same design.</p></div>'+
  '<div class="big rv">'+PRODUCTS.map(function(p,i){
    return '<a href="index.html#/products/'+p.id+'">'+
      '<span class="big__i">'+('0'+(i+1)).slice(-2)+'</span>'+
      '<span class="big__t"><span class="big__a">'+p.acr+'</span><span class="big__n">'+p.name+'</span></span>'+
      '<span class="big__r">'+p.role+'</span></a>';
  }).join('')+'</div>'+
'</div></section>'+

/* measures */
'<section class="band band--tight"><div class="shell">'+
  '<div class="head rv"><h2>What the design is held to</h2></div></div>'+
  '<div class="measure rv">'+
    '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
    '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
    '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
    '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
  '</div>'+
'</section>'+

/* close */
'<section class="close"><div class="shell rv">'+
  '<h2>Talk to the people who build it</h2>'+
  '<p class="lead">Procurement, technical integration, or anything else. Three routes reach three different inboxes, so the question lands with someone who can answer it.</p>'+
  '<div class="btns"><a class="btn btn--p" href="index.html#/contact">Send an enquiry</a>'+
  '<a class="btn btn--g" href="index.html#/assurance">How it is protected</a></div>'+
'</div></section>';

/* ---------- zone behaviour ---------- */
var pills=document.getElementById('pills'), zcap=document.getElementById('zcap');
pills.innerHTML=ZONES.map(function(z,i){
  return '<button type="button" data-z="'+i+'" aria-pressed="'+(i===0)+'">'+z.k+'</button>';
}).join('');

function paintZone(i){
  var z=ZONES[i];
  zcap.innerHTML='<h3>'+z.t+'</h3><p>'+z.b+'</p>'+
    '<div class="zone__sys">'+z.sys.map(function(s){var p=sysById(s);
      return '<a href="index.html#/products/'+p.id+'">'+p.acr+'</a>';}).join('')+'</div>';
  document.querySelectorAll('.zone__plan .z').forEach(function(g){
    g.classList.toggle('dim', g.id!==z.node);
  });
  pills.querySelectorAll('button').forEach(function(b){
    b.setAttribute('aria-pressed', String(+b.dataset.z===i));
  });
}
pills.addEventListener('click',function(e){
  var b=e.target.closest('button'); if(b) paintZone(+b.dataset.z);
});
paintZone(0);

/* ---------- utility bar ---------- */
var bar=document.querySelector('.bar');
if(bar){
  document.body.classList.add('has-bar');
  bar.querySelector('button').addEventListener('click',function(){
    bar.remove(); document.body.classList.remove('has-bar');
  });
}

/* ---------- nav shadow + reveal ---------- */
(function(){
  var nav=document.getElementById('nav'), s=document.createElement('div');
  s.style.cssText='position:absolute;top:0;height:1px;width:1px';
  document.body.prepend(s);
  new IntersectionObserver(function(es){ nav.classList.toggle('is-stuck',!es[0].isIntersecting); },
    {rootMargin:'-40px 0px 0px 0px'}).observe(s);

  var els=document.querySelectorAll('.rv');
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    els.forEach(function(e){e.classList.add('in');}); return;
  }
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  },{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e);});
})();
