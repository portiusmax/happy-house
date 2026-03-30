# Happy House — SEO for Home Services Contractors

Marketing website for Happy House, a specialist SEO agency serving home services contractors.

## Tech Stack

- **Astro 5** — Static site generator
- **Tailwind CSS 4** — Styling via Vite plugin
- **Keystatic** — Local-mode CMS (content stored as files)
- **Formspree** — Contact form backend
- **Inter** — Typography (via @fontsource)

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```
PUBLIC_FORMSPREE_ENDPOINT=your_formspree_form_id
```

## Pages

| Page | Path |
|------|------|
| Homepage | `/` |
| How it works | `/how-it-works` |
| About | `/about` |
| Free audit | `/audit` |
| Insights | `/insights` |
| Article | `/insights/[slug]` |
| Roofing | `/roofing` |
| HVAC | `/hvac` |
| Plumbing | `/plumbing` |
| Water Damage Restoration | `/water-damage-restoration` |
| Electrical | `/electrical` |
| Foundation Repair | `/foundation-repair` |
| Mold Remediation | `/mold-remediation` |
| Pest Control | `/pest-control` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |

## Content Management

Niche page content: `src/data/niches.ts`
Insights/articles: `src/data/insights.ts`
Keystatic config: `keystatic.config.ts`

To use the Keystatic admin UI locally, add the Keystatic integration back to `astro.config.mjs` and run with `output: 'server'` or use the Keystatic GitHub app for cloud editing.

## Build & Deploy

```bash
npm run build    # Output in dist/
npm run preview  # Preview production build
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## SEO Features

- JSON-LD LocalBusiness schema (homepage)
- JSON-LD Service schema (niche pages)
- JSON-LD Article schema (insights)
- FAQPage schema on all FAQ sections
- Open Graph & Twitter meta tags
- Auto-generated sitemap.xml
- robots.txt
- Canonical URLs
