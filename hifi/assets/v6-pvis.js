/* ============================================================
   VISUAL PRODUCT PAGE. Image led, light on text.

   A product gets this template when V6PVIS has an entry for it;
   every other product keeps the text template in v6-products.js.
   Images: media/p/<id>-<slot>-<set>.jpg, set chosen in the
   content control panel (V6CTL.pset). Motion is bound to scroll
   position with CSS scroll timelines, no scroll listener; where
   timelines are unsupported the page is simply static.
   ============================================================ */
var V6PSETS=[{id:"day",k:"Set 1",d:"Daylight, olive and sand"},{id:"dusk",k:"Set 2",d:"Dusk, tungsten and teal"}];

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
  var set=(typeof V6CTL!=='undefined'&&V6CTL.pset)||'day';
  return '<img data-pimg="'+id+'-'+slot+'" src="media/p/'+id+'-'+slot+'-'+set+'.jpg" alt="" decoding="async">';
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
  var set=(typeof V6CTL!=='undefined'&&V6CTL.pset)||'day';
  document.querySelectorAll('img[data-pimg]').forEach(function(img){
    var src='media/p/'+img.dataset.pimg+'-'+set+'.jpg';
    if(img.getAttribute('src')!==src) img.setAttribute('src',src);
  });
}
