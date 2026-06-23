// Shared nav + footer injected on every page
// Usage: <script src="components.js"></script>

(function () {
  // Add favicon globally
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="icon" type="image/png" href="images/alleman-apiary-logo.png">' +
    '<link rel="apple-touch-icon" href="images/alleman-apiary-logo.png">');

  const NAV_LINKS = [
    { href: 'honey.html',               label: 'Local Honey' },
    { href: 'honey-stand.html',         label: 'Honey Stand' },
    { href: 'swarm-collection.html',    label: 'Swarm Collection' },
    { href: 'nucs-queens.html',         label: 'Nucs &amp; Queens' },
    { href: 'bee-removal.html',         label: 'Bee Removal' },
    { href: 'apiary-services.html',     label: 'Apiary Services' },
    { href: 'pollination-services.html',label: 'Pollination' },
    { href: 'faq.html',                 label: 'FAQ' },
    { href: 'about.html',               label: 'About' },
    { href: 'contact.html',             label: 'Contact' },
  ];

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  const navHtml = NAV_LINKS.map(function (l) {
    var active = currentFile === l.href ? ' active' : '';
    return '<a href="' + l.href + '"' + (active ? ' class="active"' : '') + '>' + l.label + '</a>';
  }).join('');

  const header = '<header class="site"><div class="nav">' +
    '<a href="index.html" class="brand">The Alleman Apiary<small>Raw Local Honey &middot; Harrisburg, PA</small></a>' +
    '<button class="menutoggle" aria-label="Menu" onclick="document.getElementById(\'nav\').classList.toggle(\'open\')">&#9776;</button>' +
    '<nav class="navlinks" id="nav">' + navHtml +
    '<a href="tel:7173793248" class="callbtn">Call or Text 717-379-3248</a>' +
    '</nav></div></header>';

  const footer =
'<footer class="site"><div class="wrap"><div class="fgrid">' +
'<div><div class="fbrand">The Alleman Apiary</div>' +
'<p style="margin-top:12px;max-width:36ch">Family-run apiary in Harrisburg, PA. 10+ years of working bees. Raw local honey, PA-bred nucs &amp; queens, swarm collection, live honey bee removal, mentorship, and pollination. Bees relocated, never exterminated.</p>' +
'<p style="margin-top:14px"><b style="color:var(--gold)">Honey stand:</b><br>3502 High St., Harrisburg, PA 17109</p>' +
'<p style="margin-top:12px"><a href="tel:7173793248" style="color:var(--gold);font-weight:700">Call or text 717-379-3248</a><br><a href="mailto:TheAllemanApiary@gmail.com" style="color:rgba(255,255,255,.8)">TheAllemanApiary@gmail.com</a></p></div>' +
'<div><h4>Apiary</h4>' +
'<a href="honey.html">Local Honey</a>' +
'<a href="honey-stand.html">Honey Stand</a>' +
'<a href="swarm-collection.html">Swarm Collection</a>' +
'<a href="nucs-queens.html">Nucs &amp; Queens</a>' +
'<a href="bee-removal.html">Bee Removal</a></div>' +
'<div><h4>More</h4>' +
'<a href="apiary-services.html">Apiary Services</a>' +
'<a href="pollination-services.html">Pollination Services</a>' +
'<a href="faq.html">FAQ</a>' +
'<a href="about.html">About the Apiary</a>' +
'<a href="contact.html">Contact</a>' +
'<a href="articles.html">Articles</a>' +
'<a href="privacy.html">Privacy</a></div>' +
'<div><h4>Follow &amp; review</h4>' +
'<a href="https://www.facebook.com/AllemanApiary/" target="_blank" rel="noopener">Facebook</a>' +
'<a href="https://www.instagram.com/allemanapiary/" target="_blank" rel="noopener">Instagram</a>' +
'<a href="https://g.page/r/Cdl7J32tudSyEBM/review" target="_blank" rel="noopener">Leave a Google review</a>' +
'<a href="https://www.lawnsplantspests.com">Lawns Plants &amp; Pests</a></div>' +
'</div>' +
'<div class="fnote"><span>&copy;2026 The Alleman Apiary, Harrisburg, PA.</span><span>3502 High St., Harrisburg, PA 17109 &middot; 717-379-3248</span></div>' +
'</div></footer>';

  function injectChrome() {
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectChrome);
  } else {
    injectChrome();
  }
})();
