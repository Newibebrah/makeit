# MakeIt — Premium Web Development

Company profile + service landing page for **MakeIt**, a premium website
development service targeting international businesses (especially Japan).

![Stack](https://img.shields.io/badge/Next.js%2014-TypeScript-blue)
![Stack](https://img.shields.io/badge/Tailwind%20CSS-3-purple)
![Stack](https://img.shields.io/badge/Framer%20Motion-11-pink)

## Tech Stack

- **Next.js 14** (App Router) — static site generation
- **TypeScript**
- **Tailwind CSS 3** — design system in `tailwind.config.ts`
- **Framer Motion 11** — scroll reveal & micro-interactions
- **Google Fonts** — Inter (headings) + DM Sans (body)

## Pages

| Route        | Description                                   |
| ------------ | --------------------------------------------- |
| `/`          | Home — hero, trust bar, services, portfolio, testimonials |
| `/services`  | Detailed service cards + add-on pricing       |
| `/portfolio` | Project grid with All / Static / CMS / Custom filter |
| `/about`     | Story, founder, values, process               |
| `/pricing`   | 3 plans with USD ↔ JPY currency toggle        |
| `/contact`   | Inquiry form + contact info                   |

## Mobile Experience (`/m`)

A dedicated, compact mobile view lives under `/m`:

- `/m`, `/m/services`, `/m/portfolio`, `/m/pricing`, `/m/about`, `/m/contact`
- Compact single-column layout, sticky bottom tab navigation, safe-area aware
- `src/middleware.ts` redirects phone/tablet users to the mobile routes and
  desktop users away from them (mobile routes are `noindex`)
- Use the footer **"View mobile site" / "Switch to full website"** links (or
  the `view` cookie) to override the automatic device detection
- Device detection is best-effort via User-Agent; the `view` cookie set by
  `/api/view?to=full|mobile` takes precedence

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # production build + static export check
npm run start      # serve the production build
npm run lint       # ESLint
```

## Contact Form

The contact form submits to **Web3Forms** (no backend required).

1. Create a free access key at https://web3forms.com
2. Copy `.env.example` to `.env.local` and set your key:

   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key
   ```

Form submissions are delivered to the email you configure in your Web3Forms
dashboard.

## How to Update Content

Most site content lives in a single data file:

**`src/data/site.ts`** — services, prices, add-ons, portfolio projects,
testimonials, client logos.

- Change prices → update `price: { usd, jpy }`
- Add a portfolio project → append to `portfolioProjects`
- Swap testimonials → edit `testimonials`
- Edit brand copy → update the arrays in this file

Page layouts live under **`src/app/`** and reusable components under
**`src/components/`**.

## Design System

Brand colors (defined in `tailwind.config.ts` + `globals.css`):

- **Ink** `#0A0A0A` — backgrounds
- **Brand** `#6C2BD9` — primary purple
- **Accent** `#FF2D78` — playful pink highlights
- **Surface** `#F8FAFC` — text on dark

Useful utility classes: `text-gradient`, `bg-gradient-brand`, `border-gradient`,
`glass`, `bg-grid`.

## SEO

- Per-page metadata (`metadata` export in each page)
- Open Graph / Twitter tags in `src/app/layout.tsx`
- `sitemap.xml` (`src/app/sitemap.ts`) & `robots.txt` (`src/app/robots.ts`)
- Organization + Offer JSON-LD in `src/app/layout.tsx`

Update the `metadataBase` / base URL in `src/app/layout.tsx` and the URLs in
`src/app/sitemap.ts` + `src/app/robots.ts` to your production domain.

## Deployment

Deploy to Vercel or Netlify:

```bash
# Vercel
vercel

# Netlify
netlify deploy
```

No server environment variables are required at runtime besides
`NEXT_PUBLIC_WEB3FORMS_KEY` (only needed for the contact form).