// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Case filters (casos.html)
  var filterBtns = document.querySelectorAll('.filter-btn');
  var fichas = document.querySelectorAll('.ficha-grid > *');
  if (filterBtns.length && fichas.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.getAttribute('data-filter');
        fichas.forEach(function (card) {
          var mechs = (card.getAttribute('data-mecanismo') || '').split(/\s+/);
          var decade = card.getAttribute('data-decada') || '';
          var show = f === 'todos' || mechs.indexOf(f) !== -1 || decade === f;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Rotating quote (index.html)
  var band = document.querySelector('[data-quotes]');
  if (band) {
    try {
      var quotes = JSON.parse(band.getAttribute('data-quotes'));
      if (quotes.length > 1) {
        var i = 0;
        setInterval(function () {
          i = (i + 1) % quotes.length;
          var q = band.querySelector('blockquote p');
          var f = band.querySelector('blockquote footer');
          if (q && f) {
            q.textContent = '“' + quotes[i].text + '”';
            f.textContent = quotes[i].author || '';
          }
        }, 9000);
      }
    } catch (e) { /* quotes stay static */ }
  }
});
