# Repository Guidelines

## Project Context
- Site: Master Kev Enterprise — construction and related services based in Cape Town.
- Static site deployed to GitHub Pages (same flow as jeanbean/philness); custom domain `masterkev.com` will be set via CNAME.

## Project Structure & Module Organization
- Static marketing site layout: root HTML entry points (`index.html`, `about.html`, `contact.html`, etc.).
- Shared styles in `css/`, scripts in `js/`, images/icons in `img/`, vendor bundles in `lib/` (copied from `node_modules`; never edit vendored code).
- Deployment-ready copies may live in `build/`; treat it as an artifact directory and make changes in the source locations.

## Build, Test, and Development Commands
- `npm install` — install front-end dependencies (Bootstrap/Animate.css/Owl Carousel/jQuery) once `package.json` exists.
- `npm run build` — copy/minify vendor CSS/JS from `node_modules` into `lib/` or `build/`; rerun after dependency changes.
- Local preview: `python -m http.server 8000` or `npx http-server .` from the repo root to sidestep CORS issues.

## Coding Style & Naming Conventions
- HTML: semantic sections + Bootstrap utilities, 4-space indentation, descriptive IDs/classes tied to page sections.
- CSS: kebab-case class names, group related rules in main stylesheet, avoid touching vendor assets.
- JavaScript: strict mode, `camelCase` identifiers, guard DOM queries so pages without a selector do not throw; keep plugin init near related selectors.
- Compress images before committing; keep favicon variants under `img/favicon/` when used.

## Testing Guidelines
- No automated tests are configured; rely on manual QA. Load each page locally, exercise navigation, carousels/animations, and forms, and check the console for errors.
- When fixing regressions, note the pages and viewport sizes you verified. If adding JS, include guards to prevent runtime errors when elements are missing.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (e.g., “Add hero CTA”, “Tweak nav spacing”); keep each commit focused.
- Avoid committing generated assets in `build/` unless the change requires new vendor copies; note when `npm run build` was executed.
- PRs should include a clear purpose, linked issue (if any), screenshots/GIFs for visual changes, and a short list of manual test steps and environments.

## Security & Configuration Tips
- Do not commit secrets or API keys; keep any endpoints in a separate config and inject them at deploy time.
- If third-party forms or analytics are added, note the required environment variables and confirm that production URLs are correct before release.
