/* 커서를 따라 살짝 기우는 마스코트 — 모든 페이지 공통 */
(function(){
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canHover || reduce) return;

  var units = [];
  document.querySelectorAll('.lumi').forEach(function(wrap){
    var img = wrap.querySelector('.lumi__img');
    if (img) units.push({ wrap: wrap, img: img });
  });
  if (!units.length) return;

  var raf = null, mx = 0, my = 0;
  function clamp(v, lim){ return Math.max(-lim, Math.min(lim, v)); }

  function apply(){
    raf = null;
    units.forEach(function(u){
      var r = u.wrap.getBoundingClientRect();
      if (!r.width) return;
      var dx = (mx - (r.left + r.width / 2)) / (window.innerWidth / 2);
      var dy = (my - (r.top + r.height / 2)) / (window.innerHeight / 2);
      u.img.style.transform =
        'translate(' + clamp(dx * 16, 13).toFixed(1) + 'px,' + clamp(dy * 11, 9).toFixed(1) + 'px) ' +
        'rotate(' + clamp(dx * 14, 11).toFixed(2) + 'deg)';
    });
  }

  window.addEventListener('mousemove', function(e){
    mx = e.clientX; my = e.clientY;
    if (!raf) raf = requestAnimationFrame(apply);
  });
  document.addEventListener('mouseleave', function(){
    units.forEach(function(u){ u.img.style.transform = ''; });
  });
})();
