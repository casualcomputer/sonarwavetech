# Editing the simplified homepage

This branch tests one buying journey: **GPU Purchase Review → deployment and optimization → ongoing improvement**. Marketing copy lives in `src/config/homepage.json`; page structure lives in `src/pages/index.tsx`. The user selected this homepage and merged it into main.

| Content                                    | JSON key                |
| ------------------------------------------ | ----------------------- |
| Executive promise and entry offer          | `hero`                  |
| Hero illustration labels                   | `hero.visual`           |
| Delivery commitments                       | `commitments`           |
| Pain, consequence, solution and outcome    | `pains.items`           |
| Founder experience and relevance to buyers | `experience`            |
| Purchase review scope and deliverables     | `review`                |
| Inline decision example                    | `sample.preview`        |
| Setup and handover stages                  | `delivery`              |
| Objections                                 | `faq.items`             |
| Call request, email draft and phone        | `contact`               |
| Inquiry stage choices                      | `contact.projectStages` |
| Illustrative decision walkthrough          | `sample`                |
| Search/social metadata                     | `metadata`              |

The example page is `/sample-deliverable/`. It presents an explicitly illustrative buying decision, not a client case or measured benchmark. The homepage summary at `#example-review` reveals the scenario, risk and recommendation without tabs or a page change. Update `sample.preview`, `sample.sections` and `sample.decision` together so the summary and walkthrough agree. Keep the downloadable `public/assets/sonarwave-review-example.txt` aligned with the example. The print view uses the full static sections.

Keep one next step: discuss the AI project. The GPU Purchase Review is the entry offer for buyers; existing-hardware and software-improvement inquiries are also welcome. Vendor coordination, deployment and ongoing help have separate agreed scopes. The email action requests a time; it does not book a calendar appointment. Replace it with a real scheduling destination when one is provided, and describe the resulting action accurately.

Keep each pain directly beside the service and outcome. Use plain language in the hero and business consequences in the pain/solution rows; keep software, workload and hardware details in the deliverables.

Before publishing, review the remaining business facts in `SIMPLIFIED_MESSAGING.md`. Scope, pricing, credentials and relationships must come from SonarWave. Use natural founder attribution for the supplied procurement and GenAI experience; do not add a separate prior-work disclaimer or turn it into company client claims. Do not add placeholders or unsupported claims to public copy. Keep `contact.phone` and `contact.phoneHref` consistent.

Verify changes with `npm run build`, inspect desktop and mobile, and check both the example link and contact draft. The current authorized publishing target is main.

## Design and interaction ownership

`DESIGN.md` documents the visual direction and illustration provenance. `src/styles/main.css` contains the responsive design tokens and styling; `src/components/ReviewPreview.tsx` renders a static, keyboard-reachable decision summary. `src/components/ProjectInquiry.tsx` manages stage selection, the email draft and copy fallback. It retains the stage and optional text in this browser tab’s session storage so browsing the example does not discard a draft; blocked or corrupt storage must not prevent composing an inquiry. These components contain short interface labels alongside the JSON marketing content.

The form prepares an email; it does not submit data to a backend. Keep that distinction clear if editing its actions. The current hero is a conceptual hardware illustration, not a vendor product or client installation. The design QA evidence is in `design-qa.md`.

Keep cloud-provider names and proprietary implementation details out of public copy. Describe pre-purchase validation and buyer outcomes at a high level; experience shared in conversation is not permission to disclose the providers or tools used.
