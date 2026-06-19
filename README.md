# The Alleman Apiary — Static Website

Deploy-ready static site. Plain HTML/CSS, no build step.

## What's inside (6 pages)
- index.html, honey.html, nucs-queens.html, swarm-removal.html,
  pollination-mentorship.html, contact.html
- style.css, sitemap.xml, robots.txt, _redirects

## Deploy to Netlify
Same as the LPP site: app.netlify.com -> Add new site -> Deploy manually ->
drag the apiary folder onto the drop zone. Then point allemanapiary.com at it.
The _redirects file sends the bare domain to www.

(Heads up: this also happens to sidestep the www/robots.txt DNS headache you've
been fighting on allemanapiary.com in Google Sites — a Netlify deploy serves a
clean robots.txt and sitemap by default.)

## Before it's customer-ready — add:
1. PHOTOS — 7 "PHOTO: ..." placeholders (honey jars, the stand, the bee yard,
   a swarm collection, a nuc frame, mentorship). Real photos matter a lot for a
   honey/bee brand.
2. The honey-stand address (3502 High St., Harrisburg, PA 17109) is shown
   publicly throughout, per your okay. LocalBusiness schema with the address is
   in index.html <head> — replace the "REPLACE-..." social URLs.

## Notes
- Distinct identity from LPP on purpose: honey-amber palette, honeycomb motif,
  Fraunces display type.
- Swarm removal here = live honey-bee collection. Structural/in-wall removal and
  wasps/hornets cross-link to the licensed LPP site, matching your setup.
- Relative links — double-click index.html to preview before deploying.
