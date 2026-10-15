# Five boro deals — catalog site

A cinematic, catalog-only storefront for brand-new Moen bathroom fixtures.
No cart, no checkout, no payment integration — every "Buy on eBay" button
deep-links to the product's live eBay listing, where payment, buyer
protection, and shipping are handled by eBay.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
deployed on Vercel (free `*.vercel.app` subdomain, no custom domain).

## Run it

```bash
cd ~/workspace/storefront
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass with zero TS errors)
npm start        # serve the production build
```

No environment variables are required. `.env.example` documents the single
optional `NEXT_PUBLIC_SITE_URL`.

## Add or edit products

Everything lives in one file: `src/data/products.ts`.

1. Copy an existing entry, give it a unique `id` and `slug`.
2. Drop the product photo into `public/images/` (WebP preferred).
3. Point `images` at the local path, e.g. `/images/my-fixture.webp`.
4. Set `ebayUrl` to the product's eBay listing URL.
5. Keep `blurb`/`description` factual — only what the listing states. Never
   invent specs, model numbers, or "was" prices.

Categories and finishes are typed unions — extend them in the same file and
the catalog filters pick them up automatically.

## Machine-readable layer (for AI agents)

| Endpoint | What it returns |
|---|---|
| `GET /api/products` | Full catalog as JSON (9 products, prices, `ebayUrl` per item) |
| `GET /api/products/[id]` | Single product as JSON (404 + `product_not_found` when unknown) |
| `GET /.well-known/ucp` | Capability manifest (served via rewrite → `/api/ucp`): discovery endpoints only, `checkout: null`, purchase = off-site eBay deep link |
| `GET /llms.txt` | Plain-text brief for LLM shoppers: what the store is, how buying works |

There is deliberately **no** agent checkout endpoint — agents discover here
and complete purchase through the eBay links, same as humans.

## Design language

Researched from standout AI-built and award-winning sites (Muzli's Claude
Opus 5.5 builds, Awwwards 2026 Site-of-the-Day winners, Muzli product-page
roundups, SitePoint luxury e-commerce patterns, 2026 UX trend reports).
The patterns adopted, and where they live:

1. **One orchestrated page load** — a signature preloader (`Preloader.tsx`):
   the wordmark assembles letter-by-letter while a counter runs, then the
   curtain lifts. No generic fade-up-on-every-section.
2. **Monumental typography** — Fraunces (black weight, tight tracking) for
   display, Space Grotesk for UI. Hero type at 13–17vw; outlined
   `.text-stroke` numerals as background texture (`Spotlight`, catalog).
3. **Scroll-driven storytelling** — `useScroll`/`useTransform` parallax in
   `Hero` and `FinishStory`; sections numbered like gallery rooms
   (01 The lot → 02 Finishes → 03 Centerpiece → 04 How it works).
4. **Cinematic dark + warm metal** — near-black ink `#0A0908`, bone
   `#F2EDE4`, brass `#C9A24B`; ambient radial washes in bronze/brass/nickel
   echoing the actual fixture finishes.
5. **Museum-pedestal product staging** — products float on luminous bone
   panels against the dark page (`ProductCard`, `Hero`, `Spotlight`),
   with a sheen sweep on hover (`.pedestal::before`).
6. **Heavy, tactile motion** — one easing system everywhere:
   `cubic-bezier(0.16, 1, 0.3, 1)`; magnetic buttons with spring physics
   (`Magnetic.tsx`); letter-spacing grows on luxury CTA hovers.
7. **Micro-interactions as jewelry** — cursor-drifting hero product, magnetic
   pills, underline-draw nav links, animated scroll cue. All gated behind
   `prefers-reduced-motion`.
8. **Film grain** — animated SVG-noise overlay (`.grain`) for texture.
9. **Editorial pacing** — max 1600px canvas, generous whitespace, zigzag
   finish scenes with deliberate offsets, progressive disclosure
   (spec lists, staggered reveals) instead of walls of text.
10. **Performance as prestige** — local WebP images, `next/image`,
    GPU-only transforms, static pre-rendering of all product pages.

## Deploy (Vercel, free)

1. Push this folder to the GitHub repo (created with the dedicated email).
2. In Vercel, import the repo → framework preset "Next.js" → deploy.
   Accept the free `*.vercel.app` subdomain; no custom domain is configured.
3. No env vars needed. The `/.well-known/ucp` rewrite is in
   `next.config.mjs` and works on Vercel unchanged.

## Project structure

```
src/
  app/
    page.tsx                 # home: hero, marquee, lot, finishes, spotlight, how-it-works
    catalog/page.tsx         # filterable catalog (category + finish)
    product/[slug]/page.tsx  # detail page, static-pre-rendered per product
    api/products/route.ts    # JSON catalog
    api/products/[id]/route.ts
    api/ucp/route.ts         # served at /.well-known/ucp via rewrite
    layout.tsx / globals.css
  components/
    chrome/   # Preloader, Header, Footer
    home/     # Hero, Marquee, FinishStory, Spotlight
    catalog/  # ProductCard, CatalogGrid (filters)
    product/  # BuyOnEbay (the single conversion element)
    motion/   # Reveal, Stagger, Magnetic primitives
  config/site.ts             # store name, currency, location, agent endpoints
  data/products.ts           # THE catalog — edit products here
  lib/money.ts               # price formatting
public/
  images/*.webp              # local product photos (never hotlink eBay CDN)
  llms.txt                   # agent brief
```
