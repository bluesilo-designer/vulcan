/* ============================================================
   CONTENT CONTROL. A review tool, not a feature.

   One registry says which slots on the page can vary and which
   files each variant set puts in them. A floating panel picks the
   set and the hero cut. The choice survives reloads (localStorage)
   and can be shared as a link: v6.html?look=dusk&hero=hero-c#/

   Adding a set: drop media/<slot>-<set>.jpg for each slot, add one
   row to V6LOOKS. Adding a slot: tag the <img> with data-slot and
   add it to V6SLOTS. Remove the panel before go-live.
   ============================================================ */
var V6SLOTS={
  ops:      {k:"Where we operate, bed", base:"home-range-dawn.jpg", sel:'figure[data-id="home-range-dawn"] img'},
  aerial:   {k:"Modernising defence", base:"s-aerial.jpg"},
  command:  {k:"Simulate",         base:"sim-command-4k.jpg"},
  partners: {k:"Partners",         base:"partners.jpg"},
  assurance:{k:"Assurance",        base:"assurance.jpg"}
};
var V6LOOKS=[
  {id:"original", k:"Original", d:"Cold blue, the first set",            sw:["#08090B","#1E3A5F","#5EA5FF"]},
  {id:"golden",   k:"Golden",   d:"Late sun, amber and sage",            sw:["#2A2118","#B9863F","#8C9A6B"]},
  {id:"daylight", k:"Daylight", d:"Overcast, olive, sand and terracotta",sw:["#3B4031","#A8916A","#B4694A"]},
  {id:"dusk",     k:"Dusk",     d:"Blue hour outside, tungsten inside",  sw:["#10262A","#C2672E","#E3A94B"]}
];

var V6CTL=(function(){
  var q=new URLSearchParams(location.search), st={};
  try{ st=JSON.parse(localStorage.getItem('v6ctl')||'{}')||{}; }catch(e){}
  if(q.get('look')) st.look=q.get('look');
  if(q.get('hero')) st.hero=q.get('hero');
  if(q.get('pset')) st.pset=q.get('pset');
  st.look=st.look||'original';
  return st;
})();
function v6ctlSave(){ try{ localStorage.setItem('v6ctl',JSON.stringify(V6CTL)); }catch(e){} }

function v6slotSrc(slot,look){
  var s=V6SLOTS[slot]; if(!s) return '';
  return 'media/'+(look==='original'?s.base:'look/'+slot+'-'+look+'.jpg');
}
function v6applyLook(){
  Object.keys(V6SLOTS).forEach(function(k){
    var sel=V6SLOTS[k].sel; if(!sel) return;
    document.querySelectorAll(sel).forEach(function(img){ img.dataset.slot=k; });
  });
  document.querySelectorAll('img[data-slot]').forEach(function(img){
    var src=v6slotSrc(img.dataset.slot,V6CTL.look);
    if(src && img.getAttribute('src')!==src){ img.loading='eager'; img.setAttribute('src',src); }
  });
}
function v6applyHero(){
  if(!V6CTL.hero) return;
  var v=document.querySelector('.v6hero__bed .media video');
  if(v && v.getAttribute('src')!=='media/'+V6CTL.hero+'.mp4'){
    v.src='media/'+V6CTL.hero+'.mp4'; v.play().catch(function(){});
  }
}

function v6ctlPanel(){
  var cuts=(typeof V6HEROCUTS!=='undefined'?V6HEROCUTS:[]);
  return '<div class="v6ctl" id="v6ctl">'+
    '<button type="button" class="v6ctl__fab" aria-expanded="false" aria-controls="v6ctlBody"><i class="ph ph-sliders" aria-hidden="true"></i><span>Content</span></button>'+
    '<div class="v6ctl__body" id="v6ctlBody" hidden>'+
      '<div class="v6ctl__h"><b>Content control</b><span>Review only</span></div>'+
      '<fieldset><legend>Image set</legend>'+V6LOOKS.map(function(l){
        return '<label class="v6ctl__opt"><input type="radio" name="v6look" value="'+l.id+'"'+(V6CTL.look===l.id?' checked':'')+'>'+
          '<span class="v6ctl__sw">'+l.sw.map(function(c){return '<i style="background:'+c+'"></i>';}).join('')+'</span>'+
          '<span><b>'+l.k+'</b><em>'+l.d+'</em></span></label>';}).join('')+'</fieldset>'+
      (typeof V6PSETS!=='undefined'?'<fieldset><legend>Product page imagery</legend>'+V6PSETS.map(function(l){
        return '<label class="v6ctl__opt"><input type="radio" name="v6pset" value="'+l.id+'"'+((V6CTL.pset||'steel')===l.id?' checked':'')+'>'+
          '<span><b>'+l.k+'</b><em>'+l.d+'</em></span></label>';}).join('')+'</fieldset>':'')+
      (cuts.length?'<fieldset><legend>Hero film</legend><div class="v6ctl__cuts">'+cuts.map(function(c){
        var ok=MEDIA_READY.indexOf(c.id)>-1, on=(V6CTL.hero||cuts[0].id)===c.id;
        return '<button type="button" data-cut="'+c.id+'" class="'+(on?'is-on':'')+'"'+(ok?'':' disabled')+' title="'+c.d+'">'+c.k+'</button>';}).join('')+'</div></fieldset>':'')+
      '<div class="v6ctl__foot"><button type="button" data-act="copy">Copy link</button><button type="button" data-act="reset">Reset</button></div>'+
    '</div></div>';
}
function v6ctlLink(){
  var u=new URL(location.href);
  u.searchParams.set('look',V6CTL.look);
  if(V6CTL.hero) u.searchParams.set('hero',V6CTL.hero); else u.searchParams.delete('hero');
  if(V6CTL.pset) u.searchParams.set('pset',V6CTL.pset);
  return u.toString();
}
function v6ctlMount(){
  if(document.getElementById('v6ctl')) return;
  document.body.insertAdjacentHTML('beforeend',v6ctlPanel());
  var root=document.getElementById('v6ctl'), fab=root.querySelector('.v6ctl__fab'), body=root.querySelector('.v6ctl__body');
  fab.addEventListener('click',function(){
    var open=body.hidden; body.hidden=!open; fab.setAttribute('aria-expanded',String(open));
  });
  root.addEventListener('change',function(e){
    if(e.target.name==='v6look'){ V6CTL.look=e.target.value; v6ctlSave(); v6applyLook(); }
    if(e.target.name==='v6pset'){ V6CTL.pset=e.target.value; v6ctlSave(); if(typeof v6applyPset==='function') v6applyPset(); }
  });
  root.addEventListener('click',function(e){
    var c=e.target.closest('[data-cut]');
    if(c && !c.disabled){
      V6CTL.hero=c.dataset.cut; v6ctlSave(); v6applyHero();
      root.querySelectorAll('[data-cut]').forEach(function(x){ x.classList.toggle('is-on',x===c); });
      document.querySelectorAll('.v6sw__b').forEach(function(x){ x.classList.toggle('is-on',x.dataset.cut===c.dataset.cut); });
    }
    var a=e.target.closest('[data-act]'); if(!a) return;
    if(a.dataset.act==='copy'){
      var t=v6ctlLink();
      (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){ a.textContent='Copied'; },function(){ prompt('Link',t); });
      setTimeout(function(){ a.textContent='Copy link'; },1600);
    }
    if(a.dataset.act==='reset'){
      V6CTL.look='original'; delete V6CTL.hero; delete V6CTL.pset; v6ctlSave();
      root.remove(); v6ctlMount(); v6applyLook(); location.reload();
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !body.hidden){ body.hidden=true; fab.setAttribute('aria-expanded','false'); fab.focus(); }
  });
}
function v6ctlRun(){ v6ctlMount(); v6applyLook(); v6applyHero(); if(typeof v6applyPset==='function') v6applyPset(); }
window.addEventListener('hashchange',function(){ setTimeout(v6ctlRun,0); });
/* v6.js boots the router before v6-products and v6-pvis have loaded,
   so a product page opened directly would show the older template.
   Render once more now that every override is in place. */
render(); v6after();
v6ctlRun();
