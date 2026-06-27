# Global Advocates & Allies

Production-ready Next.js scaffold for Global Advocates & Allies.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS design system
- Framer Motion and GSAP animation primitives
- React Three Fiber and Three.js placeholder scene
- MDX-ready content structure
- ESLint and Prettier
- Netlify deployment configuration

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` starts local development.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.
- `npm run typecheck` runs TypeScript validation.
- `npm run format` formats the project with Prettier.

## Architecture

- `app/` contains App Router routes, SEO endpoints, and the root layout.
- `components/` contains reusable layout, navigation, hero, card, form, section, UI, animation, and 3D components.
- `data/` contains structured placeholder content ready to replace with approved organizational data.
- `content/` is reserved for future MDX content.
- `public/` is organized for images, videos, icons, and 3D models.
- `docs/` contains phase notes and implementation decisions.

## Design System

Phase 5 added a cohesive design system with production primitives for typography, spacing,
color, buttons, forms, cards, iconography, navigation, footer, motion, and editorial surfaces.
See `docs/phase-5-design-system.md`.

## Build Phases

- Phase 4 scaffold: `docs/phase-4-scaffold.md`
- Phase 5 design system: `docs/phase-5-design-system.md`
- Phase 6 public pages: `docs/phase-6-public-pages.md`
- Phase 7 motion system: `docs/phase-7-motion-system.md`
- Phase 8 conversion funnels: `docs/phase-8-conversion-funnels.md`
- Phase 9 admin architecture: `docs/phase-9-admin-architecture.md`
- Phase 10 optimization and QA: `docs/phase-10-optimization-qa.md`

## Deployment

Netlify is configured with `netlify.toml` and `@netlify/plugin-nextjs`. Set production environment variables in Netlify when integrations are added.
