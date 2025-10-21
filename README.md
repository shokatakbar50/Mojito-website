# Mojito – Animated Cocktail Website

A modern, single‑page cocktail site built with React + Vite and Tailwind CSS. It features rich GSAP animations (SplitText, ScrollTrigger), a pinned hero video scrub, animated section reveals, and responsive layout.

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- GSAP (SplitText, ScrollTrigger)
- `react-responsive` for breakpoints

## Features
- Animated Hero: split‑text title, subtitle reveal, parallax leaves, pinned video scrub.
- Cocktails: "Popular" and "Loved" lists with staggered GSAP reveals.
- The Art: masked image zoom and staged text fade‑outs.
- Navbar: smooth scroll anchors with blurred background on scroll.

## Getting Started
Prerequisites: Node.js 18+ and npm.

1. Install dependencies
```
npm install
```
2. Start the dev server
```
npm run dev
```
Vite will print a local URL (typically `http://localhost:5173`).

3. Build for production
```
npm run build
```
4. Preview the production build
```
npm run preview
```

## Scripts
- `npm run dev` – launch local dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – serve `dist/` locally
- `npm run lint` – run ESLint

## Project Structure
- `src/Components/` – UI components (`Hero.jsx`, `Cocktails.jsx`, `ArtSection.jsx`, `navbar.jsx`)
- `src/Constant/index.js` – content and lists (nav, drinks, features, store info)
- `src/index.css` – Tailwind import, theme tokens, utilities, component styles
- `public/images/` – images used across sections (leaves, drinks, profiles, etc.)
- `public/videos/` – video assets (e.g. `output.mp4`)
- `vite.config.js` – Vite configuration

## Editing Content
Update `src/Constant/index.js`:
- Navigation: `navLinks`
- Cocktail menus: `cocktailLists`, `mockTailLists`
- Hero/profile carousel: `sliderLists`, `profileLists`
- About/Art copy: `featureLists`, `goodLists`
- Store details: `storeInfo`, `openingHours`
- Socials: `socials`

Assets:
- Images: add to `public/images/` and reference by path (e.g. `/images/drink1.png`).
- Video: place in `public/videos/` (e.g. `/videos/output.mp4`).

## Deployment
Any static host (Netlify, Vercel, GitHub Pages) can serve the `dist/` folder.
- Build locally: `npm run build`
- Deploy the `dist/` output per your host’s guide.

## Notes
- Tailwind v4 is enabled via `@import "tailwindcss";` in `src/index.css` and Vite plugin `@tailwindcss/vite`.
- GSAP `SplitText` and `ScrollTrigger` are loaded from `gsap/all`.

## License
No license specified. Add one if you plan to distribute.
