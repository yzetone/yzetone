// Yuval Zetone portfolio, shared script.
// 1. Shows today's date and the time in New York in the footer.
// 2. Keeps links to projects without a page yet from jumping to the top.
// 3. Stops looping videos for visitors who ask for less motion.

(function () {
  // 1. Date and time
  var zone = { timeZone: 'America/New_York' };
  var dateEl = document.getElementById('date');
  var clockEl = document.getElementById('clock');

  function tick() {
    var now = new Date();
    if (dateEl) dateEl.textContent = now.toLocaleDateString('en-US', Object.assign({ month: 'long', day: '2-digit', year: 'numeric' }, zone));
    if (clockEl) clockEl.textContent = now.toLocaleTimeString('en-US', Object.assign({ hour: 'numeric', minute: '2-digit' }, zone));
  }
  tick();
  setInterval(tick, 20000);

  // 2. Projects without a page yet
  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // 3. Reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video[autoplay]').forEach(function (v) {
      v.removeAttribute('autoplay');
      v.pause();
    });
  }
})();
