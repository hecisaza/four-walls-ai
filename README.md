# Four Walls AI (working name) — website

Static, dependency-free site (HTML/CSS/JS). English with a Spanish toggle (`?lang=es` also works).

- `index.html` — page content (English text lives here)
- `script.js` — Spanish translations, hero animation control, illustrative demo, contact form (opens the visitor's email app; no third-party form service)
- `styles.css` — styles

To change the contact email, edit `CONTACT_EMAIL` in `script.js` and the `mailLink` in `index.html`.
To rename the brand, search/replace "Four Walls AI".

Deploy anywhere static: GitHub Pages, Netlify drag-and-drop, Cloudflare Pages.
