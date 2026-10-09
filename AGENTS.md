# SonarWave project guidance

## Design skills

The user prefers [MengTo's skills](https://github.com/MengTo/skills) when they fit the task. A pinned, project-local selection lives in `.agents/skills/`; provenance is in `.agents/skills/mengto-source.json` and the upstream MIT license is in `.agents/skills/MENGTO_LICENSE`.

Read the narrowest applicable `SKILL.md` and its required references before using it:

- `.agents/skills/landing-page/SKILL.md`: a new or substantially revised sales landing page; focus on the buyer, offer, outcome and next action.
- `.agents/skills/design-first-ui-prompting/SKILL.md`: visual concepts or design briefs; define hierarchy, typography, spacing and constraints before implementation.
- `.agents/skills/no-ai-design-slop/SKILL.md`: a passive quality check during visual implementation; preserve the established direction and fix concrete readability, hierarchy and interaction problems.
- `.agents/skills/audit-ai-design-slop/SKILL.md`: a requested design critique; ground findings in rendered evidence and keep review separate from implementation unless the user requests both.

For other needs, inspect the relevant upstream skill before applying it. Add another pinned skill only when it helps the authorized task. Motion-heavy, 3D and cinematic workflows are optional; select them when the requested direction benefits from them.

The user's scope and established preferences take precedence over skill defaults. Reuse known buyer context rather than asking the same questions again. Missing business proof is not permission to invent metrics, logos, testimonials, guarantees, identities, prices or delivery dates. Omit unsupported proof and document facts still needed. Do not expand a narrow edit into a redesign or add decorative dependencies without a clear purpose.

## SonarWave design context

The audience is executive and technical buyers of GPU servers, workstations and on-premises AI systems. Prioritize clear pain-to-solution messaging, specific deliverables and a visible next step. Use the existing restrained paper, navy and red palette unless a new direction is requested. Keep mobile type readable, touch targets usable and primary actions easy to find. Validate rendered changes at relevant desktop and phone widths, including keyboard focus and reduced motion when applicable.

The user selected and merged the simplified homepage into `main`. It uses one entry offer: GPU Purchase Review, followed by optional vendor coordination, deployment, testing, handover and ongoing software improvement. The founder has supplied personal experience in aerospace data-center procurement, government AI procurement and GenAI product development; keep it personally attributed. Copy is in `src/config/homepage.json`; see `CONTENT_GUIDE.md`, `SALES_PATH.md` and `SIMPLIFIED_MESSAGING.md` for messaging context. The current authorized publishing target is `main`. The existing contact action opens an email draft; it does not book a calendar appointment.

## Commercial confidentiality

Do not name cloud providers used for inference testing in public copy. Keep provider identities, sourcing channels and proprietary testing or tuning methods private unless the user explicitly approves disclosure. Explain buyer outcomes and high-level validation without exposing the tools behind the service.

## Executive messaging

Lead with product delivery: avoidable engineering work, roadmap delays and developer fit. Explain that GPU memory alone does not establish model/software compatibility. Emphasize workload tests on specific target GPUs before procurement and ongoing optimization that frees teams to focus on business workflows. Keep experience attributed naturally to “our founder”; the user requested removal of the separate prior-work disclaimer. The founder states they contributed to the first federal-government GenAI chatbot to reach production; do not add an unsupported country, date, project name, budget amount or performance figure.
