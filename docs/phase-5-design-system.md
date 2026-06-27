# Phase 5 Design System

## Design Language

Global Advocates & Allies uses a premium editorial nonprofit language: grounded colors, restrained motion, clear information hierarchy, and tactile but quiet surfaces. The system should feel human, durable, and specific to care coordination rather than like a generic campaign template.

## Foundations

- Typography uses a named step scale in `tailwind.config.ts` for headings, body copy, captions, and editorial display moments.
- Spacing uses named section tokens: `section-sm`, `section`, and `section-lg`, exposed through the `editorial-section` utility.
- Colors include moss, coral, gold, sky, plum, ink, canvas, and paper roles. Accents are assigned by purpose, not decoration.
- Surfaces use 8px card radii, soft borders, inset highlights, and lift shadows for true interactive elements.
- Focus states are visible, warm, and consistent across buttons, inputs, links, accordions, and navigation.
- Reduced motion is respected globally and in animation/Three.js primitives.

## Components Added

- `Badge`
- `Card`
- `FormField`, `TextInput`, and `Textarea`
- `IconFrame`
- `LogoMark`
- `DesignSystemShowcase`

## Components Upgraded

- Header and navigation
- Footer
- Button variants
- Section headings
- Program, event, and story cards
- Impact stats
- Newsletter and contact forms
- Donation, volunteer, and assistance CTAs
- Cinematic homepage hero
- Standard page spacing and page headers

## Motion Principles

Motion should be subtle, purposeful, and interruptible. Use Framer Motion for viewport reveals and GSAP only for specialized choreographed interface moments. Avoid ornamental motion, looping attention grabs, and animations that are required to understand content.

## Usage Notes

- Prefer `Card`, `Badge`, `IconFrame`, and `SectionHeading` before writing one-off surface styles.
- Use `FieldLabel`, `TextInput`, and `Textarea` for all form fields.
- Keep cards as individual repeated items, CTAs, or framed tools. Do not nest cards inside cards.
- Use icons to clarify actions or categories, not as filler.
- Keep page sections full-width and composed through `Container`.
