/* ============================================================
   VERSION 5, ALTERNATIVE HOME. Scrollcraft.

   Standalone. It does not load app.js, so it does not inherit
   the hash router, the IntersectionObserver reveal, or the
   section helpers. That is deliberate: the reveal is exactly
   the delay this page is supposed to remove.

   There is no scroll listener and no animation loop in this
   file. Every motion lives in CSS, bound to scroll position.
   The only JavaScript here builds markup and starts the video.
   ============================================================ */

/* The day, in six acts. Each act is one stage. */
var ACTS=[
  {id:"s-gate",     n:"01 / Access",
   h:"Nobody is inside who was not expected",
   p:"Identity, booking and vehicle clearance are settled at the boundary, before the gate opens. The first queue of the day is also the first control."},
  {id:"s-foyer",    n:"02 / Register", side:"r",
   h:"Arrival is a record, not a formality",
   p:"Each person is checked in against the booking they hold and issued the tracking device that binds identity to position for the rest of the day."},
  {id:"s-armskote", n:"03 / Draw",
   h:"A weapon is a serialised asset that comes back whole",
   p:"Release is checked against the person, the booking and the fit for firing certification. Defects, cleaning and repairs follow the serial number, not the session."},
  {id:"s-firingline",n:"04 / Conduct", side:"r",
   h:"The range is hot, and one state governs everything",
   p:"Targetry, effects, lighting and ventilation are held in step with range state. Anyone who sees a hazard can call a stop, and the stop path does not depend on our software running."},
  {id:"s-targetline",n:"05 / Review",
   h:"What happened is retrieved, not remembered",
   p:"Shot placement, timing and the marked video timeline are available before anyone has walked back from the firing point."},
  {id:"s-plant",    n:"06 / Sustain", side:"r",
   h:"The account closes, and the building is already being read",
   p:"Weapons and ammunition reconcile before personnel are released. Health and usage keep accruing against work actually done, so maintenance is planned on evidence."}
];

/* The rail. Eight systems, one card each, in the order they are met. */
var RAIL=[
  ["s-approach",  "AS",    "Centrix",  "Gets people in",
   "Identity, booking and vehicle clearance verified at the gate."],
  ["s-foyer",     "PWATS", "Tracking", "Knows where everything is",
   "Personnel, weapons and ammunition on one layout map, sub metre, refreshed every second."],
  ["s-armskote",  "EWMS",  "Weapons",  "Holds the weapons",
   "Serialised assets with defects, cleaning and certification tracked for the whole service life."],
  ["s-gate",      "EAMS",  "Ammunition","Holds the ammunition",
   "Issued against a package, verified at the counter, reconciled daily and weekly."],
  ["s-firingline","RCS",   "Vulcan",   "Runs the range",
   "Prepares the session, drives targetry and effects, holds the stop, files the record."],
  ["s-corridor",  "VMS",   "Excel",    "Sees and remembers",
   "Recording that follows what the range is doing, synchronised playback across cameras."],
  ["s-aerial",    "EVA",   "Excel",    "Watches the perimeter",
   "Computer vision at the edge, turning a record reviewed after into an alert received during."],
  ["s-plant",     "HUMS",  "Sustain",  "Predicts what will break",
   "Readings kept beside the operational context, so wear is judged against work done."]
];

function stageBed(id,isVideo){
  return '<div class="sc-bed">'+(isVideo
    ? '<video src="media/'+id+'.mp4" poster="media/'+id+'.jpg" muted loop playsinline preload="auto" autoplay></video>'
    : '<img src="media/'+id+'.jpg" alt="" loading="lazy" decoding="async">')+'</div>';
}

function build(){
  var h='';

  /* ---- opening ---- */
  h+='<section class="sc-stage sc-open">'+
    '<div class="sc-pin">'+
      stageBed('s-approach',true)+
      '<div class="sc-veil"></div>'+
      '<div class="sc-fore">'+
        '<span class="sc-kicker">Defence and security technology</span>'+
        '<h1>One day on a range, held together by eight systems</h1>'+
        '<p class="lead">Blue Silo builds range control, vision AI, security and accountability systems. Each is sold on its own. Scroll through the day they have to survive.</p>'+
        '<div class="sc-btns">'+
          '<a class="btn btn--p" href="v5.html#/products">Explore the systems</a>'+
          '<a class="btn btn--g" href="v5.html#/contact">Request the capability statement</a>'+
        '</div>'+
      '</div>'+
      '<div class="sc-rule"><i></i></div>'+
    '</div>'+
  '</section>';

  /* ---- six acts ---- */
  ACTS.forEach(function(a){
    h+='<section class="sc-stage sc-act'+(a.side==='r'?' sc-act--r':'')+'">'+
      '<div class="sc-pin">'+
        stageBed(a.id,false)+
        '<div class="sc-veil"></div>'+
        '<div class="sc-fore"><div class="sc-act__in">'+
          '<span class="sc-act__n">'+a.n+'</span>'+
          '<h2>'+a.h+'</h2>'+
          '<p>'+a.p+'</p>'+
        '</div></div>'+
      '</div>'+
    '</section>';
  });

  /* ---- the rail ---- */
  h+='<section class="sc-stage sc-rail">'+
    '<div class="sc-pin">'+
      '<div class="sc-rail__head"><h2>Eight systems, bought one at a time or together</h2></div>'+
      '<div class="sc-rail__track">'+RAIL.map(function(r,i){
        return '<article class="sc-card">'+
          '<img src="media/'+r[0]+'.jpg" alt="" loading="lazy" decoding="async">'+
          '<div class="sc-card__v"></div>'+
          '<div class="sc-card__t">'+
            '<span class="sc-card__n">'+('0'+(i+1)).slice(-2)+' / '+r[1]+'</span>'+
            '<span class="sc-card__h">'+r[2]+'</span>'+
            '<span class="sc-card__d">'+r[4]+'</span>'+
          '</div>'+
        '</article>';
      }).join('')+'</div>'+
    '</div>'+
  '</section>';

  /* ---- measures ---- */
  h+='<section class="sc-block">'+
    '<h2>What the day is actually measured against</h2>'+
    '<div class="sc-grid">'+
      '<div><b>Sub metre</b><span>Position accuracy</span><i>Personnel, weapons, magazines and equipment on one layout map.</i></div>'+
      '<div><b>Every second</b><span>Track refresh</span><i>Position and movement updated at least once per second.</i></div>'+
      '<div><b>No route out</b><span>Network posture</span><i>Licensing, validation and operation designed for an isolated site.</i></div>'+
      '<div><b>Independent</b><span>Stop path</span><i>Emergency stop does not depend on our software running.</i></div>'+
    '</div>'+
  '</section>';

  /* ---- close ---- */
  h+='<section class="sc-end">'+
    '<h2>Talk to the people who build it</h2>'+
    '<p>Capability statement, assurance summary and the interface control pack are released on request. Three routes reach three different inboxes, so it lands with someone who can answer it.</p>'+
    '<div class="sc-btns">'+
      '<a class="btn btn--p" href="v5.html#/contact">Send an enquiry</a>'+
      '<a class="btn btn--g" href="v5.html">See the standard home page</a>'+
    '</div>'+
  '</section>';

  return h;
}

document.getElementById('main').innerHTML=build();

/* Read progress rail. */
(function(){
  var p=document.createElement('div');
  p.className='sc-prog'; p.setAttribute('aria-hidden','true');
  document.body.appendChild(p);
})();

/* Start the hero video. autoplay covers most cases; this covers the
   rest, and stays quiet when the viewer has asked for less motion. */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.sc-bed video').forEach(function(v){
    v.muted=true; v.playsInline=true;
    var go=function(){ v.play().catch(function(){}); };
    if(v.readyState>=2) go(); else v.addEventListener('loadeddata',go,{once:true});
  });
})();
