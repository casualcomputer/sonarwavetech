# Editing the simplified homepage

This branch tests one buying journey: **GPU Purchase Review → deployment and optimization → ongoing improvement**. Marketing copy lives in `src/config/homepage.json`; page structure lives in `src/pages/index.tsx`. Main retains the broader service-led homepage until this alternative is selected.

| Content                                    | JSON key                |
| ------------------------------------------ | ----------------------- |
| Executive promise and entry offer          | `hero`                  |
| Hero illustration labels                   | `hero.visual`           |
| Delivery commitments                       | `commitments`           |
| Pain, consequence, solution and outcome    | `pains.items`           |
| Founder experience and relevance to buyers | `experience`            |
| Purchase review scope and deliverables     | `review`                |
| Interactive review tabs                    | `review.preview`        |
| Setup and handover stages                  | `delivery`              |
| Objections                                 | `faq.items`             |
| Call request, email draft and phone        | `contact`               |
| Inquiry stage choices                      | `contact.projectStages` |
| Illustrative review format                 | `sample`                |
| Search/social metadata                     | `metadata`              |

The example page is `/sample-deliverable/`. It is explicitly illustrative and is not a client report or a technical recommendation. Update the `sample` fields and `review.preview` to change it. Keep the downloadable `public/assets/sonarwave-review-example.txt` aligned with the example. The print view uses the full static sections.

Keep one next step: discuss the AI project. The GPU Purchase Review is the entry offer for buyers; existing-hardware and software-improvement inquiries are also welcome. Vendor coordination, deployment and ongoing help have separate agreed scopes. The email action requests a time; it does not book a calendar appointment. Replace it with a real scheduling destination when one is provided, and describe the resulting action accurately.

Keep each pain directly beside the service and outcome. Use plain language in the hero and business consequences in the pain/solution rows; keep software, workload and hardware details in the deliverables.

Before publishing, review the remaining business facts in `SIMPLIFIED_MESSAGING.md`. Scope, pricing, credentials and relationships must come from SonarWave. Attribute the supplied procurement and GenAI experience to the founder personally; do not turn prior work into SonarWave client claims. Do not add placeholders or unsupported claims to public copy. Keep `contact.phone` and `contact.phoneHref` consistent.

Verify changes with `npm run build`, inspect desktop and mobile, and check both the example link and contact draft. Publishing this branch for review does not replace main.

## Design and interaction ownership

`DESIGN.md` documents the visual direction and illustration provenance. `src/styles/main.css` contains the responsive design tokens and styling; `src/components/ReviewPreview.tsx` uses accessible Radix tabs. `src/components/ProjectInquiry.tsx` manages stage selection, the email draft and copy fallback. These components contain short interface labels alongside the JSON marketing content.

The form prepares an email; it does not submit data to a backend. Keep that distinction clear if editing its actions. The current hero is a conceptual hardware illustration, not a vendor product or client installation. The design QA evidence is in `design-qa.md`.

Keep cloud-provider names and proprietary implementation details out of public copy. Describe pre-purchase validation and buyer outcomes at a high level; experience shared in conversation is not permission to disclose the providers or tools used.
