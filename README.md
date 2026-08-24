# Nimbus — Simple React Frontend

A small 4-page marketing site built with React + Vite and plain custom CSS. No API, no UI library.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Pages

| Route       | Page     |
| ----------- | -------- |
| `/`         | Home     |
| `/about`    | About    |
| `/services` | Services |
| `/contact`  | Contact  |

## Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout shell
│   └── ui/            # Button, Card, Input (reusable presentational bits)
├── data/              # static content (services, team)
├── hooks/             # useContactForm — local form state + validation
├── pages/             # one folder per page: Component + its CSS + index barrel
│   ├── Home/
│   ├── About/
│   ├── Services/
│   └── Contact/
├── routes/            # paths.js (single source of truth) + AppRoutes.jsx
├── styles/            # variables.css (design tokens) + index.css (reset/base)
├── App.jsx
└── main.jsx
```

**Conventions**

- Each component owns a CSS file next to it; class names follow BEM-ish `block__element--modifier`.
- Colors, spacing, radii and shadows live as CSS custom properties in `src/styles/variables.css` — change the theme there.
- Routes and nav links come from `src/routes/paths.js`, so adding a page means editing one file plus `AppRoutes.jsx`.
- `@` is aliased to `src/` in `vite.config.js` if you prefer absolute imports.
