# SonarWave sales path

## Positioning

**Get more useful AI from your GPU investment.**

The primary buyer is an organization buying or operating GPU infrastructure. Hardware vendors and resellers have a separate path to sales training. Both paths connect business requirements to models, inference engines and GPU systems.

## The website journey

| Buyer situation | Relevant service | Deliverable to sell | Intended outcome |
| --- | --- | --- | --- |
| Buying GPU servers or workstations | GPU Procurement & System Design | Requirements, recommended specifications, vendor comparison and validation plan | A defensible purchase with fewer compatibility and capacity surprises |
| AI is slow, costly or difficult to operate | Production Inference & Optimization | Model–engine–GPU benchmark, tuned serving configuration and deployment/recovery procedures | More usable capacity within quality and response-time targets |
| Operators or buyers need skills | Technical Training | Role-specific courses, practical scenarios and agreed learning goals | Staff who can make better decisions and operate the system |
| Hardware salespeople need to advise customers | Hardware Sales Training | Business-to-software requirements training, discovery practice and configuration tradeoffs | Better-fit recommendations and relevant expansion opportunities |

The hero routes visitors to the relevant service. A service action selects the corresponding inquiry type in the contact section. The contact action opens an email with service-specific prompts. It does not submit a form, send an email automatically or book a calendar appointment.

## Clear path forward

1. **Review the page and confirm offer boundaries.** Confirm which deliverables are included in each engagement and how optional implementation or ongoing support is sold.
2. **Add one strong case study.** For the existing 200× result, provide the workload, original baseline, changed model/engine/hardware configuration, measurement conditions and client impact. Confirm what can be published. Use attributable evidence for performance claims.
3. **Choose the live inquiry channel.** Email drafting works now. A hosted scheduling link or a connected inquiry form is the next step if visitors should book or submit without opening an email app. Set its owner and response process before launch.
4. **Publish the reviewed site through the normal hosting workflow.** The local development preview and screenshots do not update the public website.
5. **Drive targeted traffic to the matching service.** Use procurement content and referrals for buyers; inference performance/continuity topics for operators; and the dedicated sales-training path for GPU vendors and resellers. Use campaign tags to distinguish sources where analytics is configured.
6. **Run a consistent discovery conversation.** Establish the business goal, current stack, decision timeline, budget constraints and success measures. Finish with an agreed next step: a scoped proposal, a request for missing technical evidence, or a clear no-fit decision.
7. **Turn delivery evidence into the next sale.** Review the agreed measures after delivery. Propose further capacity, training or support only when the findings identify a relevant need.

## Discovery prompts

- Procurement: What must the client run? What hardware or quote is being considered? What are the facility, budget and timeline constraints?
- Inference: Which models, engine versions and GPUs are in use? What quality, latency, throughput or reliability problem matters to the business?
- Technical training: Which roles need which skills? What should participants be able to demonstrate afterward?
- Hardware sales training: Who are the customers? Which software-compatibility or capacity questions prevent the team from making a sound recommendation?

## Measure the funnel

Track **service interest → contact intent → received inquiry → qualified opportunity → proposal → won engagement**.

The website emits `service_selected` and `contact_click` through its existing analytics integration when analytics is configured. Labels distinguish the selected service. A contact click is intent, not a received lead or booked call. Received inquiries, qualification, proposals and wins must be recorded in the inbox/CRM process.

Review qualified inquiries by service and source, time to response, proposal rate and win rate. For delivery, use the measures agreed for that engagement: capacity, quality, cost, recovery targets or practical learning outcomes. Establish baselines before setting numerical growth targets.

## Content ownership

Keep business facts and scope in `src/config/homepage.json`; use `CONTENT_GUIDE.md` for editing instructions. Keep the executive promise short, place technical evidence beside the relevant service, and update the offer, FAQ and inquiry prompts together when a service changes.
