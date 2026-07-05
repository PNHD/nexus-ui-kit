# Nexus UI Kit — React Edition

A polished **admin dashboard + SaaS landing** built with **React 18 + Vite**.
Instant light/dark, three accent skins, themed ApexCharts, fully responsive —
and no framework lock-in beyond React itself.

> This is the **React (Pro) edition**. A plain HTML/CSS edition is also
> available. Both share the exact same design language and token system.

---

## Quick start

```bash
npm install
npm run dev      # → http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

Requires **Node 18+**.

---

## What's inside

| Route | File | Description |
| --- | --- | --- |
| `/` | `src/pages/Landing.jsx` | SaaS marketing page: hero, logos, bento features, pricing, CTA |
| `/app` | `src/pages/Dashboard.jsx` | Analytics dashboard: KPIs, area/donut/bar charts, activity, table |

```
nexus-react/
├─ index.html
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.jsx                 App entry (Router + ThemeProvider)
   ├─ App.jsx                  Routes + global ThemeControl
   ├─ styles/global.css        ★ all design tokens live here
   ├─ theme/
   │  └─ ThemeProvider.jsx     light/dark + accent context (localStorage)
   ├─ components/
   │  ├─ Icon.jsx              inline-SVG icon set
   │  └─ ThemeControl.jsx      floating theme switcher
   ├─ layouts/
   │  └─ DashboardLayout.jsx   sidebar + topbar shell
   ├─ pages/
   │  ├─ Landing.jsx
   │  └─ Dashboard.jsx
   └─ data/
      └─ dashboard.js          demo data — swap for your API
```

---

## Theming

Theme and accent are React context, persisted to `localStorage` and written to
`<html data-theme data-accent>`.

```jsx
import { useTheme } from './theme/ThemeProvider';

const { theme, accent, toggleTheme, setAccent } = useTheme();
toggleTheme();           // dark ⇄ light
setAccent('emerald');    // 'violet' | 'emerald' | 'orange'
```

**Rebrand the whole kit** by editing the CSS variables in
`src/styles/global.css` — `--a1/--a2/--a3` (accent ramp), `--bg*` (surfaces)
and the `--tx-*` text scale. Add a new accent by copying a `[data-accent='…']`
block.

Charts read the resolved accent at runtime via `cssVar('--a1')` and re-theme
themselves whenever the theme or accent changes (see `Dashboard.jsx`).

---

## Tech

- **React 18** + **Vite 5**
- **react-router-dom 6** — routing
- **react-apexcharts** / **apexcharts** — charts
- Google Fonts: Space Grotesk, Sora, JetBrains Mono
- Zero CSS framework — inline styles + a single tokens stylesheet

---

## Customizing

- **Content/data:** edit `src/data/dashboard.js` and the arrays at the top of
  each page file.
- **Add a page:** create `src/pages/MyPage.jsx`, add a `<Route>` in `App.jsx`.
- **Add a dashboard screen:** add a nested `<Route>` under `/app` and a nav
  item in `data/dashboard.js`.

---

## License

See `LICENSE.md`. One purchase covers one end product. Lifetime free updates.
Support: support@nexus-ui.kit
