# Managing SonarWave website content

The homepage copy lives in **`src/config/homepage.json`**. Edit this file for content changes. The page layout lives in `src/pages/index.tsx`; routine copy changes do not require editing JSX.

`src/config/offer.ts` and `src/utils/AppConfig.ts` read from the same JSON file. The older template file `src/config/index.json` is not the content source for this homepage.

## How we work on messaging

You own the business facts, service scope and evidence. You can send updates in plain language; the agent can turn them into copy, update the content file and check the page.

Use this brief for a new service or a material change:

```text
Audience: Who buys this, and who uses it?
Business problem: What is difficult or costly today?
Impact of leaving it unresolved: What happens to cost, capacity, continuity or staff time?
Service: What do we actually do?
Deliverables: What does the client receive?
Outcome: What should improve?
Evidence: What baseline, benchmark or customer result supports the claim?
Scope: What is included, optional or a separate engagement?
Next step: What should the visitor do?
```

For example: “Hardware salespeople need to connect a client's business workload to model and inference-engine requirements. Our training helps them explain how GPU architecture, memory and networking constrain the client's software stack. The outcome is a better-fit quote and fewer avoidable compatibility surprises.”

## Where to edit

| Content | JSON location |
| --- | --- |
| Main executive promise and service summaries | `hero` |
| Business risks and the reason to act | `businessCase` |
| Procurement audience, offer and deliverables | `services.procurement` |
| Inference delivery steps, engine optimization and continuity | `services.inference` |
| Technical staff and hardware sales training | `services.training` |
| Experience, results and their qualifications | `experience`, `experienceStrip` |
| Questions and answers | `faq.items` |
| Call to action, email prompts and contact details | `contact` |
| Search and social metadata | `metadata` |
| Brand and menu wording | `brand`, `navigation` |

`titleSecondLine` and `titleEmphasis` are the second lines of headings. Keep them short enough for a phone screen. Text is rendered as plain text; do not add HTML tags.

The `deliverables`, `stages`, `points`, `outcomes` and FAQ lists are rendered from arrays. You can add or remove entries, keeping each entry's existing field structure. Keep list titles/questions distinct. Existing section anchors (`#infrastructure`, `#process`, `#training`, `#contact`) should stay intact unless the page layout changes too.

Update `contact.phoneHref` along with `contact.phone`. The former is the dialable `tel:` link. Update both the hero service summary and the relevant service/FAQ sections when an offering changes.

`contact.inquiryOptions` controls the service selector and the prompts in the email draft. Keep its `id` values stable because service buttons use them to select an inquiry. `contact.defaultInquiry` must match one of those IDs. Edit `label` and `prompt` for wording changes. The draft is composed from `emailGreeting`, the selected service and prompt, and `emailClosing`.

See `SALES_PATH.md` for the buyer journey, discovery process, launch steps and funnel measurement. The contact action currently opens an email draft; a scheduling service or form backend must be connected separately if needed.

## Keep the executive story clear

Lead with the business result, then explain the service, deliverables and measurement. Keep detailed engine choices and tuning methods in the inference section; the hero should remain understandable to an executive.

Explain procurement as a connected decision:

**Business workload → model requirements → inference engine → GPU system → usable capacity and operating cost.**

For inference optimization, describe the model, engine version, GPU and workload being evaluated. Higher throughput should be assessed alongside response time, output quality, memory use and cost. A newer engine or a larger GPU is not automatically the right fit for every model.

For performance claims, retain the baseline and scope with the result. Keep the existing case-study result, comparison and qualification together. Describe continuity through tested releases, rollback, redundancy and fallback procedures, with availability targets tied to an agreed delivery scope.

## Review and publish

1. Change the content file, or send a business brief for the agent to apply.
2. Check headings, service scope, FAQs, contact prompts and metadata for consistency.
3. Run the build and review the rendered page, including a narrow screen and the contact links.
4. Commit the reviewed content and publish through the site's normal deployment process. Editing the file changes the development site; it does not publish the live website.

In this cloud workspace, the development runtime is `/workspace/onboarding-runtime/sonarwavetech`, with source linked to `/workspace/sonarwavetech`. Content changes appear through that source link. Use the saved environment startup instructions to start it. For a production check, stop the development server you started, then run:

```bash
cd /workspace/onboarding-runtime/sonarwavetech
NEXT_TELEMETRY_DISABLED=1 /workspace/onboarding-tools/node_modules/.bin/yarn build --webpack
```

A visual CMS can be added later if nontechnical editors need independent access, drafts and approval workflows. The JSON file is the current editing interface.
