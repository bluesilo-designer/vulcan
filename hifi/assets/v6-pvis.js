/* ============================================================
   VISUAL PRODUCT PAGE. Image led, light on text.

   A product gets this template when V6PVIS has an entry for it;
   every other product keeps the text template in v6-products.js.
   Images: media/p/<id>-<slot>-<set>.jpg, set chosen in the
   content control panel (V6CTL.pset). Motion is bound to scroll
   position with CSS scroll timelines, no scroll listener; where
   timelines are unsupported the page is simply static.
   ============================================================ */
var V6PSETS=[{id:"steel",k:"Set 1",d:"Graphite, steel and amber"},{id:"sage",k:"Set 2",d:"Sage, bone and oak"},
  {id:"day",k:"Set 3",d:"Daylight, earlier shoot"},{id:"dusk",k:"Set 4",d:"Dusk, earlier shoot"}];
/* Sets 1 and 2 were shot for the earlier TRMS structure. Their files
   stand in for the new slots until those sets are reshot. */
var V6PALIAS={day:{weapon:"ppl",crew:"cal",command:"flow",assets:"res"},dusk:{weapon:"ppl",crew:"cal",command:"flow",assets:"res"}};
function v6psrc(key,set){
  var k=key.split('-'), id=k[0], slot=k.slice(1).join('-'), a=V6PALIAS[set];
  return 'media/p/'+id+'-'+((a&&a[slot])||slot)+'-'+set+'.jpg';
}

var V6PVIS={
  trms:{
    short:"Turns a training calendar into resourced days. Every booking carries its people, instructors, equipment and ammunition.",
    chips:[["ph-calendar-check","Plan"],["ph-users-three","Resource"],["ph-gauge","Readiness"]],
    probIcons:["ph-calendar-x","ph-package","ph-hourglass-low","ph-clipboard-text","ph-chart-line-down"],
    mods:["cal","res","ppl","rep"],
    flowIcons:["ph-calendar-plus","ph-warning-diamond","ph-stack","ph-arrow-square-out","ph-archive"]
  }
};

function v6pimg(id,slot){
  var set=(typeof V6CTL!=='undefined'&&V6CTL.pset)||'steel';
  return '<img data-pimg="'+id+'-'+slot+'" src="'+v6psrc(id+'-'+slot,set)+'" alt="" decoding="async">';
}

var pProductTextV6=pProduct;
pProduct=function(id){
  var v=V6PVIS[id];
  if(!v) return pProductTextV6(id);
  var p=v6p(id), b=V6BRAND[id], c=V6PRODUCT[id];
  var n2=function(i){return ('0'+(i+1)).slice(-2);};
  var rel=(p.rel||[]).map(function(r){
    var q=v6p(r), qb=V6BRAND[r]; if(!q||!qb) return '';
    return '<a href="#/products/'+r+'"><span class="reg__a">'+(qb.brand||qb.acr)+'</span><span class="reg__n">'+qb.sys+'</span>'+
      '<span class="reg__r">'+q.role+'</span><span class="reg__g">'+qb.acr+'</span></a>';}).join('');

  return ''+
  /* 1. hero */
  '<section class="pv-hero">'+
    '<div class="pv-hero__bed pv-par">'+v6pimg(id,'hero')+'</div><div class="pv-hero__veil"></div>'+
    '<div class="shell pv-hero__in">'+
      '<div class="v6pbrand">'+(b.brand?'<span class="v6pbrand__b">'+b.brand+'</span>':'')+'<span class="v6pbrand__s">'+b.acr+'</span></div>'+
      '<h1>'+b.sys+'</h1><p class="pv-hero__lead">'+v.short+'</p>'+
      '<ul class="pv-chips">'+v.chips.map(function(x){return '<li><i class="ph '+x[0]+'" aria-hidden="true"></i>'+x[1]+'</li>';}).join('')+'</ul>'+
    '</div>'+
    '<span class="pv-cue" aria-hidden="true"><i class="ph ph-arrow-down"></i></span>'+
  '</section>'+

  /* 2. what goes wrong, icon grid */
  '<section class="band band--deep"><div class="shell">'+
    '<div class="head"><h2>What goes wrong without it</h2></div>'+
    '<ul class="pv-prob">'+c.problem.map(function(x,i){
      return '<li class="pv-up"><i class="ph '+(v.probIcons[i]||'ph-warning')+'" aria-hidden="true"></i><span>'+x+'</span></li>';}).join('')+'</ul>'+
  '</div></section>'+

  /* 3. modules, alternating media rows */
  '<section class="band"><div class="shell">'+
    '<div class="head"><h2>Modules</h2></div>'+
    c.mods.map(function(m,i){
      return '<div class="pv-mod'+(i%2?' pv-mod--r':'')+'">'+
        '<figure class="pv-mod__img"><div class="pv-par">'+v6pimg(id,v.mods[i])+'</div></figure>'+
        '<div class="pv-mod__txt pv-up"><span class="pv-mod__n">'+n2(i)+'</span>'+
          '<h3><i class="ph '+m.i+'" aria-hidden="true"></i>'+m.k+'</h3>'+
          '<ul>'+m.m.map(function(x){return '<li><i class="ph ph-check" aria-hidden="true"></i>'+x+'</li>';}).join('')+'</ul></div>'+
      '</div>';}).join('')+
  '</div></section>'+

  /* 4. how it runs, steps over a parallax aerial */
  '<section class="pv-flow">'+
    '<div class="pv-flow__bed pv-par">'+v6pimg(id,'flow')+'</div><div class="pv-flow__veil"></div>'+
    '<div class="shell pv-flow__in"><h2>How it runs</h2>'+
      '<ol class="pv-steps">'+c.flow.map(function(f,i){
        return '<li class="pv-up"><span class="pv-steps__ic"><i class="ph '+(v.flowIcons[i]||'ph-circle')+'" aria-hidden="true"></i></span>'+
          '<span class="pv-steps__n">'+n2(i)+'</span><b>'+f[0]+'</b><p>'+f[1]+'</p></li>';}).join('')+'</ol>'+
    '</div></section>'+

  /* 5. outcomes */
  '<section class="band band--deep"><div class="shell">'+
    '<div class="head"><h2>What changes</h2></div>'+
    '<div class="pv-out">'+c.out.map(function(x,i){
      return '<p class="pv-up"><span>'+n2(i)+'</span>'+x+'</p>';}).join('')+'</div>'+
  '</div></section>'+

  /* 6. detail on demand, over a calm parallax bed */
  '<section class="pv-more">'+
    '<div class="pv-more__bed pv-par">'+v6pimg(id,'close')+'</div><div class="pv-more__veil"></div>'+
    '<div class="shell pv-more__in"><h2>The detail, when you need it</h2>'+
      '<details class="pv-acc"><summary><i class="ph ph-seal-check" aria-hidden="true"></i>Standards we design to<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        '<p class="pv-acc__note">Stated as alignment. Blue Silo does not claim certification against these.</p>'+tbl(["Reference","What it governs here"],c.std)+'</details>'+
      '<details class="pv-acc"><summary><i class="ph ph-plugs-connected" aria-hidden="true"></i>What it talks to<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        tbl(["Counterpart class","Direction","Trigger"],p.ifc.map(function(r){return [r[0],'<span class="arrow">'+r[1]+'</span>',r[2]];}))+'</details>'+
      '<details class="pv-acc"><summary><i class="ph ph-link" aria-hidden="true"></i>Dependencies and assumptions<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        '<p>'+v6acr(p.dep||'Requires the personnel master record and the range calendar owner to be agreed before go-live.')+'</p></details>'+
    '</div></section>'+

  (rel?band({tight:true,title:"Works with",body:'<div class="reg rv">'+rel+'</div>'}):'')+
  closer();
};

function v6applyPset(){
  var set=(typeof V6CTL!=='undefined'&&V6CTL.pset)||'steel';
  document.querySelectorAll('img[data-pimg]').forEach(function(img){
    var src=v6psrc(img.dataset.pimg,set);
    if(img.getAttribute('src')!==src) img.setAttribute('src',src);
  });
}

/* ============================================================
   TRMS, restructured from the product summary (20 Oct 2026).
   TRMS plans, runs and closes out simulator-based training across
   three programmes on one platform. The summary asks that it is
   described as a working prototype, that no live customer link is
   claimed, and that capacity figures are checked before publishing,
   so this page states mechanisms, not numbers.
   ============================================================ */
var V6TRMS={
  short:"One place to plan, run and close out simulator-based training. Every booking follows one rule-checked record, from the first request to the last piece of equipment returned.",
  status:"Working prototype, in active design and build",
  why:[
    ["ph-calendar-x","No double booking","Station, lane and room conflicts are checked by the system, which refuses or reassigns instead of relying on someone remembering."],
    ["ph-database","One digital record","Every field of a booking lives in the system, from the unit contact to the trainee list, with no paper running alongside."],
    ["ph-list-checks","Rules built in","Each training programme has its own booking logic, and the right rules apply automatically."]
  ],
  progs:[
    {k:"Weapon",n:"Weapon simulator training",slot:"weapon",i:"ph-crosshair-simple",
     trains:"Weapon proficiency for individuals and groups, in marksmanship, collective and judgemental modes.",
     books:"Simulator stations, flat screen and C-shaped, divided into lanes.",
     steps:[["ph-calendar-plus","Create booking"],["ph-hourglass","Wait for the day"],["ph-scan","Issue assets"],["ph-user-check","Onboarding"],["ph-play-circle","Live session"],["ph-chart-bar","Results"],["ph-arrow-u-down-left","Return assets"]],
     pts:["One courseware is one session","Trainees queue per station in details","Reshoot and lane changes mid-session","Equipment scanned out and back against the booking"]},
    {k:"Crew",n:"Crew simulator training",slot:"crew",i:"ph-steering-wheel",
     trains:"Vehicle crew tactical training in an armoured vehicle simulator: driving, gunnery, vehicle and standalone.",
     books:"Cabins, each with a platform type, crew roles and a call sign.",
     steps:[["ph-calendar-plus","Create booking"],["ph-note-pencil","Review details"],["ph-user-check","Onboarding"],["ph-play-circle","Live training"]],
     pts:["Cabins switched on up to the number booked, the rest lock","Control stations set friendly or opposing, one master","Nominal roll per control station","No equipment step, so the lifecycle is shorter"]},
    {k:"Command",n:"Command team training",slot:"command",i:"ph-users-four",
     trains:"The same idea at command-team scale: many crews training together across several vehicle types.",
     books:"Clusters of workstations, grouped into zones.",
     steps:[["ph-calendar-plus","Create booking"],["ph-squares-four","Configure clusters"],["ph-users","Nominal roll"],["ph-check-circle","Confirm"],["ph-user-check","Onboarding"]],
     pts:["One tab per zone, listing only its clusters","Vehicle variant, weapon variant and roles per cluster","Roll limit shown on screen as trainees are added","Summary review before the booking is saved"]}
  ],
  assets:{h:"Equipment that checks itself out",
    pts:[["ph-scan","Scanned out against the booking","Tagged assets are issued by scan, and an item that does not belong to the booking is rejected."],
         ["ph-broadcast","RFID readers and antennas","Readers, antennas and assignments are managed in the platform, so every issue is a record, not a note."],
         ["ph-arrow-u-down-left","A clear return path","Equipment is scanned back after the session, with a defined route for anything missing."]]},
  platform:[["ph-squares-four","Dashboard","Day, week and month views of training activity"],["ph-broadcast","Equipment and RFID","Assets, types, assignments, readers and tracking"],
    ["ph-map-trifold","Site management","Stations, lanes, blackout dates, zones and clusters"],["ph-gear-six","Settings","Briefing rooms, locations, notifications and rules"],
    ["ph-users-three","Users and permissions","Users, roles, permissions and ranks"],["ph-arrows-down-up","Data management","Import and export of bookings, trainees and results"],
    ["ph-chart-line-up","Results and planning","Results per training, resource planning and availability"],["ph-pulse","Activity and health","Who did what, and whether the hardware is running"]],
  gloss:[["Booking","A reservation of training resources for a unit on a date"],["Courseware","The training content. For weapon simulator training, one courseware is one session"],
    ["Nominal roll","The list of trainees expected for a booking"],["Onboarding","Check-in on training day, before the session starts"],
    ["Detail","A group of trainees training together in one turn at a station"],["Lane, cabin, cluster","The unit of simulator capacity for weapon, crew and command team training"],
    ["Zone","A group of command team clusters"],["Assignment","The record of equipment issued to a booking"]]
};

V6TRMS.journey=[["ph-calendar-plus","Create booking","Mode, courseware, date and session, then lanes and the trainee roll"],
  ["ph-hourglass","Hold","The booking waits, conflict checked, until training day"],
  ["ph-scan","Issue equipment","Tagged assets scanned out; anything not on the booking is refused"],
  ["ph-user-check","Onboard","Who is present, confirmed by list upload or ID scan"],
  ["ph-play-circle","Run live","Details queue per station; move, reshoot or change lanes"],
  ["ph-chart-bar","Results","Results arrive during the session, not after it"],
  ["ph-arrow-u-down-left","Return","Equipment scanned back, with a route for anything missing"]];
V6TRMS.rules=[["ph-stack","One courseware, one session","A session is never half of one programme and half of another."],
  ["ph-prohibit","No shared slot","Two groups cannot hold the same station in the same slot."],
  ["ph-calendar-x","No mixed day","A group and an individual cannot share a day on the same station."],
  ["ph-rows","One row, one status","Each booking is one row whose status rolls up everything inside it."]];
V6TRMS.live=[["ph-timer","Running timer","The session clock everyone works to"],["ph-users-three","Details per station","Who is on, who is next, per station"],
  ["ph-arrow-bend-up-right","Move a detail forward","When a station frees early"],["ph-arrow-counter-clockwise","Reshoot","Without losing the first result"],
  ["ph-arrows-left-right","Change lanes mid-session","When a lane goes down"],["ph-chart-bar","Results as they land","Passed, failed and qualified counts"]];

function v6trmsMock(){
  var st=[["Station 1","Detail 3","On lane",72],["Station 2","Detail 4","On lane",45],["Station 3","Detail 2","Reshoot",88],["Station 4","Detail 5","Queued",0]];
  return '<div class="pv-ui" role="img" aria-label="Illustration of a live session screen: a timer, result counters and four stations with their details">'+
    '<div class="pv-ui__bar"><span class="pv-ui__dot"></span><span class="pv-ui__dot"></span><span class="pv-ui__dot"></span><b>Live session</b><em>Illustrative</em></div>'+
    '<div class="pv-ui__top"><div class="pv-ui__timer"><i class="ph ph-timer" aria-hidden="true"></i><b>01:42:16</b></div>'+
      '<div class="pv-ui__kpi"><span><b>18</b>Qualified</span><span><b>41</b>Passed</span><span><b>6</b>Failed</span></div></div>'+
    '<div class="pv-ui__st">'+st.map(function(x){
      return '<div class="pv-ui__row"><b>'+x[0]+'</b><span>'+x[1]+'</span><i class="pv-ui__s pv-ui__s--'+x[2].toLowerCase().replace(' ','')+'">'+x[2]+'</i>'+
        '<span class="pv-ui__bar2"><span style="width:'+x[3]+'%"></span></span></div>';}).join('')+'</div>'+
  '</div>';
}

function pTrmsV6(){
  var id='trms', p=v6p(id), b=V6BRAND[id], c=V6PRODUCT[id], t=V6TRMS;
  var n2=function(i){return ('0'+(i+1)).slice(-2);};
  var rel=(p.rel||[]).map(function(r){
    var q=v6p(r), qb=V6BRAND[r]; if(!q||!qb) return '';
    return '<a href="#/products/'+r+'"><span class="reg__a">'+(qb.brand||qb.acr)+'</span><span class="reg__n">'+qb.sys+'</span>'+
      '<span class="reg__r">'+q.role+'</span><span class="reg__g">'+qb.acr+'</span></a>';}).join('');
  return ''+
  /* 1 hero */
  '<section class="pv-hero">'+
    '<div class="pv-hero__bed pv-par">'+v6pimg(id,'hero')+'</div><div class="pv-hero__veil"></div>'+
    '<div class="shell pv-hero__in">'+
      '<div class="v6pbrand"><span class="v6pbrand__s">'+b.acr+'</span><span class="pv-status"><i class="ph ph-flask" aria-hidden="true"></i>'+t.status+'</span></div>'+
      '<h1>'+b.sys+'</h1><p class="pv-hero__lead">'+t.short+'</p>'+
      '<div class="pv-cta"><a class="btn btn--p" href="#/contact">Request a walkthrough</a><a class="btn btn--g" href="#trms-journey" data-anchor>See how a booking flows</a></div>'+
    '</div><span class="pv-cue" aria-hidden="true"><i class="ph ph-arrow-down"></i></span>'+
  '</section>'+

  /* 2 why */
  '<section class="band band--deep"><div class="shell">'+
    '<div class="head"><h2>Why it exists</h2><p>A training day needs a free station, the right equipment out and back, a roll of trainees who turn up, and results as they happen. TRMS follows one booking through all of it.</p></div>'+
    '<ul class="pv-prob pv-prob--3">'+t.why.map(function(w){
      return '<li class="pv-up"><i class="ph '+w[0]+'" aria-hidden="true"></i><b>'+w[1]+'</b><span>'+w[2]+'</span></li>';}).join('')+'</ul>'+
  '</div></section>'+

  /* 3 journey */
  '<section class="band" id="trms-journey"><div class="shell">'+
    '<div class="head"><h2>One booking, from request to returned equipment</h2><p>Each step has to finish before the next can begin, so nothing is skipped and nothing is left open.</p></div>'+
    '<ol class="pv-jour">'+t.journey.map(function(s,i){
      return '<li class="pv-up"><span class="pv-jour__ic"><i class="ph '+s[0]+'" aria-hidden="true"></i></span>'+
        '<span class="pv-jour__n">'+n2(i)+'</span><b>'+s[1]+'</b><p>'+s[2]+'</p></li>';}).join('')+'</ol>'+
  '</div></section>'+

  /* 4 live session */
  '<section class="band band--deep"><div class="shell"><div class="pv-live">'+
    '<div class="pv-live__txt pv-up"><h2>Run the day from one screen</h2><p>Trainees are split into details that queue per station. The administrator watches the session and steers it as it runs.</p>'+
      '<ul class="pv-live__list">'+t.live.map(function(x){return '<li><i class="ph '+x[0]+'" aria-hidden="true"></i><span><b>'+x[1]+'</b>'+x[2]+'</span></li>';}).join('')+'</ul></div>'+
    '<div class="pv-live__ui pv-up">'+v6trmsMock()+'</div>'+
  '</div></div></section>'+

  /* 5 rules */
  '<section class="band"><div class="shell">'+
    '<div class="head"><h2>Rules the system enforces, so nobody has to remember them</h2></div>'+
    '<ul class="pv-rules">'+t.rules.map(function(r){
      return '<li class="pv-up"><i class="ph '+r[0]+'" aria-hidden="true"></i><b>'+r[1]+'</b><span>'+r[2]+'</span></li>';}).join('')+'</ul>'+
  '</div></section>'+

  /* 6 three kinds, tabbed */
  '<section class="band band--deep"><div class="shell">'+
    '<div class="head"><h2>Three kinds of simulator training, one platform</h2><p>Each has its own booking logic. The platform underneath is shared.</p></div>'+
    '<div class="pv-tabs" role="tablist" aria-label="Kinds of training">'+t.progs.map(function(g,i){
      return '<button type="button" role="tab" id="pvt-'+i+'" aria-controls="pvp-'+i+'" aria-selected="'+(i===0)+'" tabindex="'+(i?-1:0)+'"><i class="ph '+g.i+'" aria-hidden="true"></i>'+g.n+'</button>';}).join('')+'</div>'+
    t.progs.map(function(g,i){
      return '<div class="pv-tabp" role="tabpanel" id="pvp-'+i+'" aria-labelledby="pvt-'+i+'"'+(i?' hidden':'')+'>'+
        '<figure class="pv-tabp__img"><div class="pv-par">'+v6pimg(id,g.slot)+'</div></figure>'+
        '<div class="pv-tabp__txt">'+
          '<dl class="pv-dl"><div><dt>Trains</dt><dd>'+g.trains+'</dd></div><div><dt>Books</dt><dd>'+g.books+'</dd></div></dl>'+
          '<ol class="pv-life" aria-label="'+g.n+' lifecycle">'+g.steps.map(function(s){
            return '<li><i class="ph '+s[0]+'" aria-hidden="true"></i><span>'+s[1]+'</span></li>';}).join('')+'</ol>'+
          '<ul class="pv-ticks">'+g.pts.map(function(x){return '<li><i class="ph ph-check" aria-hidden="true"></i>'+x+'</li>';}).join('')+'</ul>'+
        '</div></div>';}).join('')+
  '</div></section>'+

  /* 7 equipment */
  '<section class="pv-flow">'+
    '<div class="pv-flow__bed pv-par">'+v6pimg(id,'assets')+'</div><div class="pv-flow__veil"></div>'+
    '<div class="shell pv-flow__in"><h2>'+t.assets.h+'</h2>'+
      '<ol class="pv-steps pv-steps--3">'+t.assets.pts.map(function(f,i){
        return '<li class="pv-up"><span class="pv-steps__ic"><i class="ph '+f[0]+'" aria-hidden="true"></i></span>'+
          '<span class="pv-steps__n">'+n2(i)+'</span><b>'+f[1]+'</b><p>'+f[2]+'</p></li>';}).join('')+'</ol>'+
    '</div></section>'+

  /* 8 platform */
  '<section class="band band--deep"><div class="shell">'+
    '<div class="head"><h2>One platform behind all three</h2></div>'+
    '<ul class="pv-plat">'+t.platform.map(function(m){
      return '<li class="pv-up"><i class="ph '+m[0]+'" aria-hidden="true"></i><b>'+m[1]+'</b><span>'+m[2]+'</span></li>';}).join('')+'</ul>'+
  '</div></section>'+

  /* 9 detail */
  '<section class="pv-more">'+
    '<div class="pv-more__bed pv-par">'+v6pimg(id,'close')+'</div><div class="pv-more__veil"></div>'+
    '<div class="shell pv-more__in"><h2>The detail, when you need it</h2>'+
      '<details class="pv-acc"><summary><i class="ph ph-flask" aria-hidden="true"></i>Where the product stands<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        tbl(["Area","State today"],[["Weapon simulator training","Most complete. Booking, equipment, onboarding and the live session path are built; some end states are still being completed."],
          ["Crew simulator training","Booking, cabin set-up, trainee list, booking detail and onboarding exist as a working prototype."],
          ["Command team training","Booking, zone by zone cluster set-up, trainee list, saved bookings and onboarding start exist as a working prototype."],
          ["Platform","Shared modules reviewed against the design, with remaining differences being closed in batches."]])+
        '<p class="pv-acc__note">A prototype used to present and refine features, not yet a released product.</p></details>'+
      '<details class="pv-acc"><summary><i class="ph ph-book-open" aria-hidden="true"></i>Glossary<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        tbl(["Term","Meaning"],t.gloss)+'</details>'+
      '<details class="pv-acc"><summary><i class="ph ph-seal-check" aria-hidden="true"></i>Standards we design to<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        '<p class="pv-acc__note">Stated as alignment. Blue Silo does not claim certification against these.</p>'+tbl(["Reference","What it governs here"],c.std)+'</details>'+
      '<details class="pv-acc"><summary><i class="ph ph-plugs-connected" aria-hidden="true"></i>What it talks to<i class="ph ph-plus pv-acc__x" aria-hidden="true"></i></summary>'+
        '<p class="pv-acc__note">Planned interfaces. Bookings are published for a customer training management system to pull; no live customer connection is built yet.</p>'+
        tbl(["Counterpart class","Direction","Trigger"],p.ifc.map(function(r){return [r[0],'<span class="arrow">'+r[1]+'</span>',r[2]];}))+'</details>'+
    '</div></section>'+
  (rel?band({tight:true,title:"Works with",body:'<div class="reg rv">'+rel+'</div>'}):'')+
  closer('Request a walkthrough','See the booking flow, the live session screen and the equipment path on a working prototype.');
}

/* tabs and in-page anchor, bound once by delegation */
document.addEventListener('click',function(e){
  var tab=e.target.closest('.pv-tabs [role=tab]');
  if(tab){
    var list=tab.parentNode;
    list.querySelectorAll('[role=tab]').forEach(function(x){
      var on=x===tab; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1;
      var pn=document.getElementById(x.getAttribute('aria-controls')); if(pn) pn.hidden=!on;
    });
    return;
  }
  var a=e.target.closest('a[data-anchor]');
  if(a){ e.preventDefault(); var t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'}); }
});
document.addEventListener('keydown',function(e){
  var tab=e.target.closest&&e.target.closest('.pv-tabs [role=tab]'); if(!tab) return;
  var tabs=[].slice.call(tab.parentNode.querySelectorAll('[role=tab]')), i=tabs.indexOf(tab), n=null;
  if(e.key==='ArrowRight') n=tabs[(i+1)%tabs.length];
  if(e.key==='ArrowLeft') n=tabs[(i-1+tabs.length)%tabs.length];
  if(n){ e.preventDefault(); n.focus(); n.click(); }
});

var pProductPvBase=pProduct;
pProduct=function(id){ return id==='trms'?pTrmsV6():pProductPvBase(id); };

/* ============================================================
   ASSURANCE, image led. Six controls from the review, each with
   its own picture; the safety posture over the stop image. The
   availability and build bands from the base page are kept.
   ============================================================ */
var V6ASSUREIMG=["c1","c2","c3","c4","c5","c6"];
pAssurance=function(){
  var base=pAssuranceBase();
  base=base.replace(/^<div class="shell page-head[\s\S]*?<\/div>/,'');
  base=v6dropBand(base,'Five controls, asked in order');
  base=v6dropBand(base,'Safety posture on the range');
  var n2=function(i){return ('0'+(i+1)).slice(-2);};
  return ''+
  '<section class="pv-hero pv-hero--short">'+
    '<div class="pv-hero__bed pv-par"><img src="media/a/hero.jpg" alt="" decoding="async"></div><div class="pv-hero__veil"></div>'+
    '<div class="shell pv-hero__in"><span class="label">Assurance</span>'+
      '<h1>Secure by design, from the node to the enterprise</h1>'+
      '<p class="pv-hero__lead">Security, reliability and compliance built into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.</p>'+
    '</div></section>'+

  '<section class="band"><div class="shell">'+
    '<div class="head"><h2>Six controls</h2></div>'+
    '<div class="pv-ctl">'+V6ASSURE.map(function(c,i){
      return '<article class="pv-ctl__i pv-up">'+
        '<figure class="pv-ctl__img"><div class="pv-par"><img src="media/a/'+V6ASSUREIMG[i]+'.jpg" alt="" loading="lazy" decoding="async"></div></figure>'+
        '<span class="pv-mod__n">'+n2(i)+'</span>'+
        '<h3><i class="ph '+c[0]+'" aria-hidden="true"></i>'+c[1]+'</h3><p>'+c[2]+'</p></article>';}).join('')+
    '</div></div></section>'+

  '<section class="pv-flow">'+
    '<div class="pv-flow__bed pv-par"><img src="media/a/estop.jpg" alt="" decoding="async"></div><div class="pv-flow__veil"></div>'+
    '<div class="shell pv-flow__in"><h2>Safety posture on the range</h2>'+
      '<ol class="pv-steps pv-steps--3">'+[
        ["ph-hand-palm","An independent emergency stop","The stop path does not depend on our control software being healthy, reachable or running. It halts targetry and effects immediately."],
        ["ph-person-simple-walk","Interlock on a detected hazard","A person detected forward of the firing line inhibits firing and pauses targetry until the area is confirmed clear."],
        ["ph-plugs","Defined fail safe behaviour","Loss of communication, power or network each has a specified safe state, written down and tested in advance."]
      ].map(function(f,i){
        return '<li class="pv-up"><span class="pv-steps__ic"><i class="ph '+f[0]+'" aria-hidden="true"></i></span>'+
          '<span class="pv-steps__n">'+n2(i)+'</span><b>'+f[1]+'</b><p>'+f[2]+'</p></li>';}).join('')+'</ol>'+
    '</div></section>'+
  base;
};
ROUTES['/assurance']=pAssurance;
