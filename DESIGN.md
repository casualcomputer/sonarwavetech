# SonarWave design direction

## Intent

A premium engineering consultancy for executive and technical buyers of GPU systems. Help a visitor identify their purchasing or setup problem, inspect the review deliverable, and start a qualified conversation. Build on the existing simplified-sales-messaging branch and its factual scope.

## Visual system

- Warm paper background, deep ink typography, a single SonarWave red action color, restrained dark navy offer section.
- Clear sans-serif display type, comfortable 16–18px body copy, 13–14px supporting text. Mobile heading sizes stay proportional to the viewport.
- A real subject in the hero: GPU server and workstation, shown as a clearly labelled conceptual illustration.
- Open layouts and dividers establish hierarchy. Reserve a paper treatment for the example deliverable and a contained surface for the inquiry form.
- Repeated primary CTA: Discuss your AI project. Secondary action: inspect the illustrative review.
- Useful interactions: keyboard-accessible review tabs, FAQ disclosure, project-stage selection, editable inquiry and clipboard fallback. Motion is short and supports state; reduced-motion settings disable it.

## Composition

1. Compact brand/navigation header.
2. Two-column hero: concrete buying promise and CTA beside hardware illustration. Phone layout puts the promise and action first.
3. Three concise delivery commitments without unsupported client logos or metrics.
4. Pain → solution rows connecting product delivery risk, performance on target GPUs and evolving AI needs to outcomes.
5. Founder experience with explicit relevance to buying and deployment decisions.
6. Dark purchase-review section with scope and a paper-like, interactive example report.
7. Three service stages: advise and coordinate, deploy and optimize, support and evolve.
8. FAQ and final project inquiry.
9. Legal name, consistent contact details and useful footer links.

## Implementation choices

Use Radix Tabs for keyboard navigation and selection semantics, with a small source-owned component wrapper and local design tokens. Use Lucide icons consistently. Keep the existing framework and avoid a Tailwind migration solely for cosmetic changes. Use CSS for short transitions; no additional motion engine is required.

## Evidence and assets

The hardware image was generated for this site with Image Gen on 2026-10-09. It is conceptual imagery, not a real client installation, a vendor product specification or an endorsement. Original: `/workspace/generated_images/exec-b4e4051c-09fb-4344-8355-5b6bdd522a31.png`. Website asset: `public/assets/images/gpu-systems.webp` (1400 × 933, optimized WebP).

Existing SonarWave logo is retained. No founder identity, client proof, prices, delivery promises or booking provider may be invented. The example report is labelled illustrative. Email actions prepare a message; they do not submit an inquiry or book an appointment.
