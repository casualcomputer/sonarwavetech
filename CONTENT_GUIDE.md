# Editing the simplified homepage

This branch tests one buying journey: **GPU Purchase Review → system setup → testing and handover**. All copy lives in `src/config/homepage.json`; page structure lives in `src/pages/index.tsx`. Main retains the broader service-led homepage until this alternative is selected.

| Content | JSON key |
| --- | --- |
| Executive promise and entry offer | `hero` |
| Pain, consequence, solution and outcome | `pains.items` |
| Purchase review scope and deliverables | `review` |
| Setup and handover stages | `delivery` |
| Objections | `faq.items` |
| Call request, email draft and phone | `contact` |
| Illustrative review format | `sample` |
| Search/social metadata | `metadata` |

The example page is `/sample-deliverable/`. It is explicitly illustrative and is not a client report or a technical recommendation. Update the `sample` fields to change it.

Keep one next step: a call about the GPU Purchase Review. Setup can follow; it is not assumed to be included in the review fee. The email action requests a time; it does not book a calendar appointment. Replace it with a real scheduling destination when one is provided, and describe the resulting action accurately.

Keep each pain directly beside the service and outcome. Use plain language in the hero and business consequences in the cards; keep software, workload and hardware details in the deliverables.

Before publishing, review the remaining business facts in `SIMPLIFIED_MESSAGING.md`. Scope, pricing, credentials and relationships must come from SonarWave. Do not add placeholders or unsupported claims to public copy. Keep `contact.phone` and `contact.phoneHref` consistent.

Verify changes with `npm run build`, inspect desktop and mobile, and check both the example link and contact draft. Publishing this branch for review does not replace main.
