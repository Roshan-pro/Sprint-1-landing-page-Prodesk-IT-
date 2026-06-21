# Prodesk IT — Landing Page (Sprint 01)

A fully responsive landing page for Prodesk IT's digital marketing wing, built with raw HTML/CSS/JS (no frameworks) per Sprint 01 architecture constraints.

**Live URL:** _add your deployed Vercel/Netlify link here after deploying_

![Screenshot](screenshot.png)
_(replace with an actual screenshot of your deployed site before submitting)_

## Design concept

"Blueprint" — a drafting-table aesthetic that mirrors the brief's own language ("pixel perfection," "architecture," "responsive design"). Sections are framed like spec sheets: mono-type spec labels (`SPEC 001 / HERO MODULE`), dimension-line dividers, and corner registration marks tie the whole page to one consistent idea — content built to spec, not guessed at.

- **Color:** deep blueprint navy (`#0B3D5C`) hero/footer, warm paper background (`#F7F5EF`), signal amber (`#FF8A3D`) for every CTA and interactive accent.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (spec labels / utility).
- **Dark mode:** toggled via the navbar icon, persisted in `localStorage`, also respects system `prefers-color-scheme` on first visit.

## What's implemented

**Phase 1 — Base MVP**
- Responsive navbar (logo left, links right, hamburger menu on mobile)
- Hero section with headline, sub-headline, primary CTA
- Services module — 3 cards in a CSS Grid
- Footer with copyright + social icons
- Built entirely in raw CSS (Flexbox + Grid, no UI frameworks)

**Phase 2 — Enhancements**
- Dark/Light theme toggle (vanilla JS, toggles a class on `<body>`)
- Hover micro-interactions on all CTAs and service cards (lift + scale)
- Sticky navbar with a glassmorphism (`backdrop-filter: blur()`) effect once the page is scrolled

**Phase 3 — partial**
- Glassmorphism applied to the sticky navbar (see above)
- Full Tailwind migration and the Lighthouse 100/100 pass are left as a follow-up — run `npx lighthouse <your-deployed-url> --view` locally and tune as needed once deployed

## File structure

```
prodesk-landing/
├── index.html      # markup
├── style.css        # all styling (raw CSS, custom properties, no framework)
├── script.js        # theme toggle, mobile menu, sticky-nav scroll listener
├── Prompts.md        # AI prompt log (required by Sprint 01 AI policy)
└── README.md
```

## Running locally

No build step. Either:

```bash
# open directly
open index.html

# or serve locally
npx serve .
```

## Deploying (Netlify or Vercel)

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

Drag-and-drop also works on both platforms' dashboards if you'd rather not use the CLI.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Sprint 01: Prodesk IT landing page"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Remember to:
1. Replace the screenshot above with one of your actual deployed site.
2. Fill in the **Live URL** at the top of this README.
3. Record a 2-minute QA video (desktop view, mobile/resized view, brief code walkthrough).