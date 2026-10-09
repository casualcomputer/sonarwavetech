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
