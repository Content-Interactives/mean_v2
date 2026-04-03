# Mean (v2)

React SPA for exploring the arithmetic mean of a data set. Vite + Tailwind; static export to GitHub Pages.

**Live:** https://content-interactives.github.io/mean_v2/

**Curriculum and standards:** [Standards.md](Standards.md)

## Stack

- React 19, Vite 7, JavaScript (JSX)
- Tailwind CSS 3

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Build → `dist/` |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |
| `npm run deploy` | Build + `gh-pages -d dist` |

## Configuration

`vite.config.js`: `base: '/mean_v2/'`.

## Layout

`src/main.jsx` entry; interactive UI under `src/`.
