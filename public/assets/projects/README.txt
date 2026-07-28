Optional: use your own homepage screenshots instead of the live capture service.

1. Drop a JPG in this folder, e.g.  cybex.jpg
2. In components/Portfolio.js add a `shot` field to that project:

     {
       id: "cybex",
       name: "Cybex",
       shot: "/assets/projects/cybex.jpg",
       ...
     }

Recommended: 1200 x 750px JPG.

Without a `shot` field the card renders a live screenshot of the site,
falling back to a generated SVG store mockup if that fails.
