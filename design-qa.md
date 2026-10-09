# SonarWave redesign QA

Final result: **passed** for the implemented review-branch scope.

Reviewed October 9, 2026. This is an intentional redesign of the existing simplified homepage, guided by `DESIGN.md`, the supplied messaging brief and the Product Design workflow. It is not a pixel clone of the previous page. The branch remains separate from production.

## Reference and rendered evidence

Evidence directory in the task workspace: `/workspace/shared/sonarwave-design/`.

| Evidence                                   | Viewport / purpose                                      |
| ------------------------------------------ | ------------------------------------------------------- |
| `before-desktop.png` / `desktop.png`       | Before and after, 1440 × 900, initial homepage state    |
| `before-mobile.png` / `mobile.png`         | Before and after, 390 × 900, initial homepage state     |
| `mobile-comparison.png`                    | Same-size source and redesigned screenshots together    |
| `desktop-full.png` / `mobile-full.png`     | Whole-page hierarchy at 1440 / 390 CSS pixels           |
| `mobile-review-clean.png`                  | Default Workload tab and document layout                |
| `mobile-inquiry-clean.png`                 | Empty project inquiry, initial selected stage           |
| `desktop-sample.png` / `mobile-sample.png` | Full example page at 1440 / 390 CSS pixels              |
| `checks.json`                              | Responsive measurements and interaction-check inventory |
| `accessibility.json`                       | Final axe results on both routes at 390 and 1440 pixels |

Screenshots use local production builds in Chromium, device scale factor 1. Baseline and final hero captures use the same viewport dimensions. The final heading-semantic correction preserves the captured layout. Generated conceptual hardware artwork and its provenance are recorded in `DESIGN.md`.

## Visual assessment and corrections

- **Hierarchy and typography:** replaced the text-heavy hero with an explicit GPU buying promise, visible action and hardware subject. Self-hosted DM Sans, proportional mobile headings and readable paragraph spacing establish a consistent hierarchy. Balanced title wrapping fixes the isolated “system.” line found in the first pass.
- **Spacing and layout:** open pain/solution rows lead into the navy review section, then delivery, objections and inquiry. Mobile stacks follow reading order; the primary action ends between 460 and 487 pixels from the top at tested phone widths.
- **Tokens and contrast:** restrained paper, ink, navy and SonarWave red palette; consistent buttons, dividers and keyboard focus. Automated contrast checks found no violations in tested states.
- **Imagery and affordances:** the GPU server/workstation illustration is explicitly conceptual. Removed a decorative arrow that implied the image caption was clickable. No customer logos, invented credentials or performance claims were added.
- **Deliverables and copy:** review rows were enlarged after visual inspection. The document has usable tabs and an illustrative disclaimer. Removed a redundant link from the standalone example to itself. The inquiry explicitly prepares an email and provides a copy fallback.
- **Semantic correction:** the first axe run found a skipped heading level on the standalone example. The reusable review now accepts a heading level; the final run reports zero violations on both routes at both sizes.

These intentional changes are the approved implementation direction from the design brief. No actionable high- or medium-priority visual defects remain in the tested scope.

## Verification

- Production build, TypeScript compilation, targeted ESLint and formatting checks passed.
- Home and example reflow checked at widths 320, 375, 390, 430, 768, 834, 1024 and 1440. No horizontal overflow. Primary CTA visible within the initial 667-pixel phone viewport. Mobile textareas use 16-pixel text.
- Mobile menu opens, closes on navigation and Escape, and restores toggle focus after Escape.
- Radix tabs respond to arrow keys and End with matching selected panels.
- Sticky mobile action appears after the hero and hides at contact or when the navigation is open.
- Inquiry stage and text produce the expected email draft. Clipboard success and denied-permission fallback checked; editing clears stale feedback.
- FAQ disclosure, example navigation, text-file download and print styles checked. No messages were sent by tests.
- Reduced-motion settings disable smooth scrolling and panel animation. Core content and email contact remain available without JavaScript.
- No browser console errors, page errors or failed requests in the responsive/interaction run.
- Final axe scan: zero automated violations across the home and example routes at 390 and 1440 pixels. Automated checks do not establish complete accessibility conformance.

## Practical limits

Chromium emulation was used; physical iOS/Safari and assistive-technology user testing were not performed. Email sending depends on the visitor's email application; no backend lead submission or calendar booking is configured. Conversion uplift is unmeasured. A public founder profile, publishable customer proof and final canonical-domain choice remain business inputs documented in `SIMPLIFIED_MESSAGING.md`.

## Positioning follow-up — October 9, 2026

Final result: **passed** for the updated copy and founder-experience section. The existing design is retained. The hero now states purchase advice and ongoing improvements; the new founder section pairs personally attributed experience with buyer relevance. Vendor coordination and post-deployment scope are explicit. No “first chatbot,” company-client relationship, vendor-independence or uptime claim was added.

Updated evidence: `/workspace/shared/sonarwave-positioning/`. `desktop.png`, `mobile.png` and their `-full` versions capture the revised page. `why-1440.png` and `why-390.png` show the founder section; the mobile detail uses a 390 × 1700 viewport to fit the section without sticky navigation obscuring its content. The final screenshots were inspected for wrapping, spacing and legibility. `checks.json` and `accessibility.json` contain the latest measurements and automated scan results.

Production build and targeted ESLint passed. The full sales-journey check passed at widths 320, 375, 390, 430, 768, 834, 1024 and 1440: no horizontal overflow, no console errors or failed requests, working navigation, tabs, inquiry composition, clipboard fallback, FAQ, download, print, reduced-motion and no-JavaScript core content. The primary phone CTA ends between 468 and 514 pixels from the top. Final axe scans report zero violations on both routes at 390 and 1440 pixels. The browser and business-evidence limitations above still apply.

## Executive product-vision copy — October 9, 2026

The updated hero and pain/solution rows connect hardware choices to developer rework, roadmap delivery and business workflows. The review and example now describe tests on specific target GPUs. The founder's clarified first-production-chatbot wording is included as supplied; the separate prior-work disclaimer and unused styling were removed. No provider identities or proprietary methods are present in the rendered copy.

Validation: production build, targeted ESLint, formatting and whitespace checks passed. Both routes reflow at 320, 390, 834 and 1440 pixels without horizontal overflow or page errors. The phone hero CTA remains within the initial 667 pixels. The new compatibility FAQ, target-GPU example heading, founder copy and disclaimer removal were verified. Desktop pain/solution and mobile founder-section screenshots were visually inspected. Evidence: `/workspace/shared/sonarwave-product-vision/`, including `checks.json`, `1440-decisions.png`, `390-why-sonarwave.png` and full-page home/example screenshots. No new accessibility-conformance claim or live-deployment verification is made by this copy check.

## Buying-decision walkthrough and lower-friction navigation — October 9, 2026

Final result: **passed** for this update. The visual system is preserved. The former tabbed outline is replaced by a static inline scenario, risk and conditional recommendation. Hero, navigation and footer links reach it on the same page. The optional walkthrough shows the product goal, compatibility risk, evidence needed and proceed/change/hold conditions; download and print follow the explanation. Mobile readers have a contact action both at the decision and at the end. Inquiry drafts survive navigation and reload within the same tab, without making storage availability a requirement.

Source reference: the preceding implementation and `/workspace/shared/sonarwave-product-vision/390-example.png`. Final evidence: `/workspace/shared/sonarwave-smooth-example/`, including `390-inline.png`, `1440-inline.png`, `390-example.png`, `1440-example.png` and `checks.json`. Desktop and mobile captures were inspected. At 390 pixels wide, the example page decreased from 2822 to 2188 pixels tall while making the decision and next action explicit. It contains no fabricated benchmark results or provider names.

The first browser pass revealed that the existing floating mobile CTA sat outside an accessibility landmark. It now uses a labelled complementary landmark. Final axe scans report zero violations on both routes at 390 and 1440 pixels, including the scrolled homepage state with the floating CTA visible.

Production build, targeted ESLint, formatting and whitespace checks passed. Browser checks passed at 320, 375, 390, 430, 768, 834, 1024 and 1440 pixels: no overflow or page errors; hero action within the initial phone viewport; inline anchor clears the sticky header and receives focus; Tab reaches the walkthrough link; Back returns to the example; drafts restore after page navigation and reload; blocked or corrupt storage does not stop inquiry composition. Download matches the JSON example. Print retains the decision and reasoning while hiding controls. Core example navigation works without JavaScript, and reduced-motion settings are respected.

Tests used local Chromium. Live deployment and automatic lead delivery are not verified; the contact action still prepares an email for the visitor to send.

## Remove fictional examples — October 9, 2026

Final result: **passed**. At the user's request, the inline scenario, walkthrough page, downloadable example and related calls to action were removed. The purchase-review section now presents its actual scope and written deliverables in open columns. The hero has one contact action; navigation points to real founder experience. The generated hardware image retains its honest conceptual-image caption and is not presented as client proof.

The retired page (with or without trailing slash) and text-download URL redirect to `/#infrastructure`. Checks passed at 320, 390, 834 and 1440 pixels: no overflow, no scenario/example language in rendered content, no missing fragment targets, working mobile navigation, redirects, email draft and draft restoration. Axe reported zero violations at 390 and 1440 pixels in the scrolled review state. Production build, targeted ESLint, formatting and whitespace checks passed. Desktop and mobile review-section captures were visually inspected; evidence is in `/workspace/shared/sonarwave-direct-services/`. Live deployment remains unverified.
