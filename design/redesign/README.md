# Portfolio redesign (Design A, "Order receipt")

Approved design to implement in this Next.js site.

- Live design canvas: https://claude.ai/artifact/TpfvRW7kk7oNTdQDQWaz5N
- `pages/`: the five page designs (Home = `Main.dc.html`, About, Work, Services, Contact). The markup and inline styles are the spec; the `<script data-dc-script>` block at the bottom of each holds the content lists.
- `project-data.md`: all project and service copy (titles, descriptions, tags, tools, results).
- `assets/logos/`: store logos, shown small on white or black plates (see the LOGOS map in `pages/A-Work.dc.html` for which background each uses).
- `assets/projects/`: AI and automation workflow covers, the Caledonia preview, and the anonymised WordPress and Meta ads examples. In the pages these appear as `/_blob/...` urls; swap them for these files.
- Your photo is the existing `public/assets/profile.png`.

## Decisions to keep

- Role line: "Digital marketing expert · Shopify, AI & automation". Never "4 years on Shopify".
- Orange (`#FF6A3D`) is for buttons and small accents only, never a section background.
- Website projects show logos only, no banners or photos. Only AI and automation projects show images.
- Caledonia is the featured project on Home and Work, using its preview image.
- Header: your photo in a circle next to "Tayyab Naeem". The home hero is two columns: content on the left; on the right a laptop showing a clinic website with online booking (not e-commerce) and a phone showing a WhatsApp-style AI assistant booking a consultation (not e-commerce). Hero stats count up from 0 on load (final values shown with reduced motion). No photo.
- Services page uses the expandable list: six numbered rows, one open at a time.
- No prices anywhere. Every service ends in "Get a quote", and copy says "custom quote", never "fixed price" or "starts at".
- Fonts: Bricolage Grotesque (headings), Geist (body), Geist Mono (labels).

## Still placeholders

Review quotes, booking link, payment terms in the FAQs, About timeline years and a personal line on About.
