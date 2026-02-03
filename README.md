# Master Kev Enterprise

Static marketing site for Master Kev Enterprise (construction and related services, Cape Town), deployed via GitHub Pages with custom domain `masterkev.com`.

## Overview
- Single-page layout: hero, services, sectors, featured projects (placeholder imagery), delivery approach, CTA, about, and contact/intake form.
- Palette aligned to company logo (green/blue on a deep background). Logo lives at `img/logo.png`.
- Form is a placeholder; wire to your email/CRM provider before launch

## Structure
- `index.html` — main entry point.
- `css/style.css` — custom styling (no preprocessors).
- `js/main.js` — nav toggle, smooth scrolling, simple submit acknowledgment.
- `img/` — logo and future assets.
- `.github/workflows/static.yml` — GitHub Pages deployment workflow.
- `CNAME` — custom domain declaration for GitHub Pages.

## Local Preview
```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deployment
- Push to `master` triggers `.github/workflows/static.yml` to deploy to GitHub Pages.
- Keep `CNAME` at repo root with `masterkev.com`.
- Ensure DNS points to GitHub Pages; enable Pages in repo settings (source: GitHub Actions).

## Assets & Content
- Replace placeholder project blocks with real photography when available.
- Update contact details and form integration per your chosen mail/CRM service.
- Compress images before adding to `img/` for faster loads.
