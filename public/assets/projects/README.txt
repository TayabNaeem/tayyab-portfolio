PROJECT SCREENSHOTS
===================

Screenshots are served from the public Backblaze B2 bucket, not from this
folder. The base URL lives in .env.local as NEXT_PUBLIC_ASSET_BASE:

    https://f005.backblazeb2.com/file/SKillmentor

To add a screenshot, upload it to the bucket under this exact path:

    portfolio/shots/soundskins.jpg   ->  soundskinsglobal.com
    portfolio/shots/cybex.jpg        ->  cybex.shopping
    portfolio/shots/elite.jpg        ->  eliteautogear.com
    portfolio/shots/rela.jpg         ->  liverela.com

Recommended: 1200 x 750px JPG.

No code changes are needed — the cards already point at these paths. Until a
file exists the request 404s and the card falls back to the generated SVG
store mockup, so nothing breaks.

Client logos currently load from each store's own Shopify CDN. To host them
here instead, upload to portfolio/logos/<id>.png and change the `logo` field
in components/Portfolio.js to "/portfolio/logos/<id>.png".

SECURITY
--------
Never put a Backblaze application key in this project. The site only needs
public read URLs. Anything in a NEXT_PUBLIC_* variable is bundled into the
browser build and visible to every visitor.
