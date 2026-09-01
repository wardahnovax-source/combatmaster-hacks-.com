# Combat Master Hacks

Official SEO marketing site for **Combat Master Hacks** at [combatmasterhacks.com](https://combatmasterhacks.com).

Built on the locked SEO template (Astro + React + Tailwind + i18n).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321/](http://localhost:4321/)

## Brand config

Edit `src/data/brand.ts` (or use Brand Studio at `/brand-studio/` during dev), then:

```bash
npm run sync:brand
```

## Deploy

```bash
npm run build
npm run pages:deploy
```

- Domain: `combatmasterhacks.com`
- Checkout URL: Zadeyo Combat Master product (`siteConfig.checkoutUrl` in `src/data/brand.ts`)
