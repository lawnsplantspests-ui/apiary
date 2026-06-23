// Shared nav + footer injected on every page
// Usage: <script src="components.js"></script>

(function () {
  // Add favicon globally
  document.head.insertAdjacentHTML('beforeend',
    '<link rel="icon" type="image/png" href="/images/alleman-apiary-logo.png">' +
    '<link rel="apple-touch-icon" href="/images/alleman-apiary-logo.png">');

  const NAV_LINKS = [
    { href: '/honey.html',               label: 'Local Honey' },
    { href: '/honey-stand.html',         label: 'Honey Stand' },
    { href: '/swarm-collection.html',    label: 'Swarm Collection' },
    { href: '/nucs-queens.html',         label: 'Nucs &amp; Queens' },
    { href: '/bee-removal.html',         label: 'Bee Removal' },
    { href: '/apiary-services.html',     label: 'Apiary Services' },
    { href: '/pollination-services.html',label: 'Pollination' },
    { href: '/faq.html',                 label: 'FAQ' },
    { href: '/about.html',               label: 'About' },
    { href: '/contact.html',             label: 'Contact' },
  ];

  const currentFile = '/' + (window.location.pathname.split('/').pop() || 'index.html');

  const navHtml = NAV_LINKS.map(function (l) {
    var active = currentFile === l.href ? ' active' : '';
    return '<a href="' + l.href + '"' + (active ? ' class="active"' : '') + '>' + l.label + '</a>';
  }).join('');

  const header = '<header class="site"><div class="nav">' +
    '<a href="/" class="brand">The Alleman Apiary<small>Raw Local Honey &middot; Harrisburg, PA</small></a>' +
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
'<a href="/honey.html">Local Honey</a>' +
'<a href="/honey-stand.html">Honey Stand</a>' +
'<a href="/swarm-collection.html">Swarm Collection</a>' +
'<a href="/nucs-queens.html">Nucs &amp; Queens</a>' +
'<a href="/bee-removal.html">Bee Removal</a></div>' +
'<div><h4>More</h4>' +
'<a href="/apiary-services.html">Apiary Services</a>' +
'<a href="/pollination-services.html">Pollination Services</a>' +
'<a href="/faq.html">FAQ</a>' +
'<a href="/about.html">About the Apiary</a>' +
'<a href="/contact.html">Contact</a>' +
'<a href="/articles.html">Articles</a>' +
'<a href="/privacy.html">Privacy</a></div>' +
'<div><h4>Follow &amp; review</h4>' +
'<div class="social-icons">' +
'<a href="https://www.facebook.com/AllemanApiary/" class="social-icon social-fb" aria-label="The Alleman Apiary on Facebook" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg></a>' +
'<a href="https://www.instagram.com/allemanapiary/" class="social-icon social-ig" aria-label="The Alleman Apiary on Instagram" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38-.66.67-1.07 1.34-1.38 2.13-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13-.67-.66-1.34-1.07-2.13-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/></svg></a>' +
'</div>' +
'<a href="https://g.page/r/Cdl7J32tudSyEBM/review" target="_blank" rel="noopener">Leave a Google review</a>' +
'<a href="https://www.lawnsplantspests.com" target="_blank" rel="noopener">Lawns Plants &amp; Pests</a></div>' +
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
