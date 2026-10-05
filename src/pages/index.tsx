import { useState } from 'react';

import {
  ArrowDownIcon as FiArrowDown,
  ArrowUpIcon as FiArrowUpRight,
  CheckIcon as FiCheck,
  CheckCircleIcon as FiCheckCircle,
  ChevronDownIcon as FiChevronDown,
  ServerIcon,
  MenuIcon as FiMenu,
  XIcon as FiX,
} from '@heroicons/react/outline';

import { faqs, infrastructure } from '../config/offer';
import * as gtag from '../lib/gtag';

const contactHref = `mailto:${
  infrastructure.email
}?subject=${encodeURIComponent(
  'AI infrastructure — planned build review'
)}&body=${encodeURIComponent(
  'Hello SonarWave,\n\nWe have an AI infrastructure decision coming up.\n\nA short description of the project:\nWhat we need to decide:\nOur decision deadline, if known:\n\nPlease suggest a time for a 20-minute fit call.\n\nThanks!'
)}`;

const trackContact = () =>
  gtag.event({
    action: 'contact_click',
    category: 'engagement',
    label: infrastructure.name,
  });

const Brand = () => (
  <a className="brand" href="#top" aria-label="SonarWave home">
    <span className="brand-mark" aria-hidden="true">
      <img src="/assets/images/logo.png" alt="" width="200" height="200" />
    </span>
    <span className="brand-type">
      <span className="brand-name">SonarWave</span>
      <span className="brand-sub">Technologies</span>
    </span>
  </a>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sonar-site" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={menuOpen ? 'nav-links is-open' : 'nav-links'}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setMenuOpen(false);
            }}
          >
            <a href="#infrastructure" onClick={() => setMenuOpen(false)}>
              Infrastructure
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              Delivery
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a
              className="button button-small button-dark"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk{' '}
              <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> FOR ENGINEERING & IT TEAMS
            </p>
            <h1 id="hero-title">
              Know what to buy.
              <br />
              <em>Before you commit.</em>
            </h1>
            <p className="hero-description">
              Plan an AI rollout with hardware that supports your software,
              workloads and growth. Get a tested specification, comparable
              vendor quotes and a clear buying recommendation.
            </p>
            <div className="hero-actions">
              <a className="button button-red" href="#contact">
                Review your planned build{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <a className="text-link" href="#infrastructure">
                See what you receive <FiArrowDown aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">
              Start with a defined plan. Continue through procurement and
              deployment.
            </p>
          </div>
          <div
            className="delivery-map"
            aria-label="Your infrastructure decision package"
          >
            <div className="delivery-map-heading">
              <ServerIcon aria-hidden="true" />
              <span className="eyebrow">
                YOUR INFRASTRUCTURE DECISION PACKAGE
              </span>
            </div>
            <ol>
              {[
                [
                  'What should we buy?',
                  'Recommended specifications, alternatives and tradeoffs',
                ],
                [
                  'Will it meet our workload?',
                  'Benchmark evidence against performance and user targets',
                ],
                [
                  'What will it cost?',
                  'Purchase, operating and engineering costs over the system’s life',
                ],
                [
                  'When can we get it running?',
                  'Vendor allocation, delivery milestones and deployment planning',
                ],
              ].map(([title, detail], i) => (
                <li key={title}>
                  <span className="delivery-index">0{i + 1}</span>
                  <div>
                    <h2>{title}</h2>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="delivery-map-footer">
              <FiCheckCircle aria-hidden="true" /> A recommendation to proceed,
              revise or rule out a configuration.
            </div>
          </div>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span className="eyebrow">PRIOR PROFESSIONAL EXPERIENCE</span>
            <span>
              <FiCheck aria-hidden="true" /> Government & public-sector systems
            </span>
            <span>
              <FiCheck aria-hidden="true" /> Aerospace & technical programs
            </span>
            <span>
              <FiCheck aria-hidden="true" /> OEMs, resellers & custom builders
            </span>
          </div>
        </div>

        <section className="section container risk-section" id="decisions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COST OF GETTING IT WRONG</p>
              <h2>
                Infrastructure decisions
                <br />
                become product constraints.
              </h2>
            </div>
            <p>
              An unsuitable purchase can cost more than replacement hardware. It
              can delay features, limit the users you can serve and leave
              developers building workarounds.
            </p>
          </div>
          <div className="risk-grid">
            <article>
              <span className="eyebrow">CAPABILITY</span>
              <h3>Hardware that limits your software.</h3>
              <p>
                Powerful hardware can still be the wrong fit for the AI training
                or inference software your team needs. A mismatch can restrict
                usable tools, block features and force changes to the software
                stack.
              </p>
              <strong>
                Protect your software options before committing to hardware.
              </strong>
            </article>
            <article>
              <span className="eyebrow">PERFORMANCE</span>
              <h3>Capacity you can’t reach.</h3>
              <p>
                The GPU is one part of the system. Serving software, CPU,
                memory, storage and networking must work together to meet your
                response-time and concurrent-user targets.
              </p>
              <strong>
                Benchmark the full system against realistic demand.
              </strong>
            </article>
            <article>
              <span className="eyebrow">REWORK</span>
              <h3>Engineering time lost to workarounds.</h3>
              <p>
                Incompatible hardware can pull developers into low-level
                programming and debugging just to make their AI software run.
                Repeated workarounds consume engineering time and compute budget
                while product development and scaling wait.
              </p>
              <strong>
                Buy for the full cost of ownership, including engineering
                effort.
              </strong>
            </article>
          </div>
          <p className="risk-takeaway">
            Keep your engineers focused on building and scaling, with hardware
            decisions grounded in the software they need to use.
          </p>
        </section>

        <section className="pilot-section" id="infrastructure">
          <div className="container pilot-layout">
            <div className="pilot-copy">
              <p className="eyebrow">01 / YOUR FIRST ENGAGEMENT</p>
              <h2>
                One workload.
                <br />
                One clear
                <br />
                <em>buying decision.</em>
              </h2>
              <p>
                Give your engineering, IT and procurement teams a common basis
                for the decision. We bring the requirements, benchmark evidence
                and vendor options into one plan they can review and approve.
              </p>
              <div className="pilot-principle">
                <FiCheckCircle aria-hidden="true" />
                <div>
                  <strong>We do the technical coordination.</strong>
                  <p>
                    Bring the workload, constraints and any existing quotes. We
                    work with your technical contacts and vendors to develop the
                    specification, compare options and document the gaps.
                  </p>
                </div>
              </div>
            </div>
            <article className="offer-card infrastructure-offer">
              <div className="offer-topline">
                <span className="eyebrow">START WITH ONE WORKLOAD</span>
                <span className="scope-badge">AGREED SCOPE</span>
              </div>
              <h3>{infrastructure.entryName}</h3>
              <p className="assessment-intro">
                A decision package that explains what to buy, what to change,
                and what to validate before you place an order.
              </p>
              <ul className="deliverables">
                {infrastructure.deliverables.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="assessment-price">
                Agreed scope. Fixed fee. No deployment commitment.
              </p>
              <a className="button button-red" href="#contact">
                Discuss your infrastructure plan{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <p className="offer-footnote">
                Test environments, configurations, quote availability and
                schedule are agreed in the proposal. Hardware, software and
                cloud usage are separate. Implementation is a separately scoped
                phase.
              </p>
            </article>
          </div>
        </section>
        <section className="section container" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / THE FULL PATH TO DELIVERY</p>
              <h2>
                From requirements
                <br />
                to production operations.
              </h2>
            </div>
            <p>
              When you are ready to proceed, we can coordinate the build, deploy
              the environment and verify it against your requirements.
              Implementation and ongoing support are scoped as separate phases.
            </p>
          </div>
          <div className="process-grid infrastructure-process">
            {infrastructure.stages.map((stage, i) => (
              <article key={stage.title}>
                <span className="step-number">0{i + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <span className="step-detail">{stage.deliverable}</span>
              </article>
            ))}
          </div>
          <div className="delivery-capabilities">
            <article>
              <p className="eyebrow">HARDWARE SOURCING & BUILD COORDINATION</p>
              <h3>
                Hardware chosen for
                <br />
                the software you need.
              </h3>
              <p>
                We bring AI software engineering knowledge into hardware
                procurement, connecting your training, inference and deployment
                needs to the buying decision. We work across OEMs, resellers and
                custom builders to help secure hardware allocation and
                coordinate delivery with your project schedule.
              </p>
              <ul>
                <li>CPU, GPU, memory, storage and network configuration</li>
                <li>
                  AI software compatibility, expansion and support options
                </li>
                <li>Vendor allocation, lead times and delivery milestones</li>
              </ul>
            </article>
            <article>
              <p className="eyebrow">PRODUCTION OPERATING REQUIREMENTS</p>
              <h3>
                Plan for the environment
                <br />
                the system has to run in.
              </h3>
              <p>
                Operating controls belong in the architecture and acceptance
                plan. Define how environments are separated, software is
                checked, and AI activity is recorded before the rollout.
              </p>
              <ul>
                <li>Network isolation and environment separation</li>
                <li>
                  Package vulnerability scanning, including daily checks where
                  required
                </li>
                <li>AI audit trails, logging and performance monitoring</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div>
              <p className="eyebrow">03 / EXPERIENCE & DELIVERY</p>
              <h2>
                Technical depth.
                <br />
                Accountable delivery.
              </h2>
              <p>
                SonarWave Technologies Inc. brings together infrastructure
                engineering, hardware procurement and application delivery. We
                turn requirements into a defined scope, measurable acceptance
                criteria and a practical path to production.
              </p>
              <p>
                Engagements are organized around deliverables: validated
                specifications, vendor comparisons, tested deployments and
                documented handover. Responsibilities, milestones and changes
                are agreed as part of the project.
              </p>
              <div className="performance-experience">
                <p className="eyebrow">AI INFERENCE PERFORMANCE</p>
                <h3>Get more from the infrastructure you have.</h3>
                <p className="performance-result">
                  <strong>200×</strong>
                  <span>the throughput of the previous setup</span>
                </p>
                <p>
                  In one implementation, inference optimization achieved 200×
                  the throughput of the previous setup. We use measured
                  performance to guide decisions about optimization and
                  additional capacity.
                </p>
                <span className="experience-note">
                  Result from one implementation. Performance varies with
                  workload, hardware and configuration.
                </span>
              </div>
            </div>
            <div className="experience-cards">
              <article>
                <span className="eyebrow">MISSION-CRITICAL ENVIRONMENTS</span>
                <h3>Leadership in procurement and AI engineering.</h3>
                <p>
                  Our experience includes leading major hardware procurements
                  and AI engineering projects in government and aerospace,
                  drafting technical requirements and procurement proposals, and
                  coordinating with resellers on government procurement lists.
                </p>
                <span className="experience-note">
                  Sector experience includes work undertaken in prior
                  professional roles.
                </span>
              </article>
              <article>
                <span className="eyebrow">AEROSPACE AI INFRASTRUCTURE</span>
                <h3>Trusted with AI infrastructure decisions.</h3>
                <p>
                  In prior professional roles, our leadership was entrusted by
                  major aerospace organizations to assess, benchmark and procure
                  AI infrastructure.
                </p>
                <p>
                  This experience includes working alongside government
                  data-centre professionals to translate AI software and
                  workload needs into hardware specifications and infrastructure
                  requirements.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section container faq-layout" id="faq">
          <div>
            <p className="eyebrow">THE PRACTICAL DETAILS</p>
            <h2>
              Before we
              <br />
              get started.
            </h2>
            <p>
              Have a different question?
              <br />
              <a
                className="text-link"
                href={`mailto:${infrastructure.email}`}
                onClick={trackContact}
              >
                Contact SonarWave{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <FiChevronDown aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">START WITH THE DECISION AHEAD</p>
              <h2>
                Have a planned
                <br />
                AI build
                <br />
                <em>or vendor quote?</em>
              </h2>
              <p>
                Start with a short description of the project, the decision you
                need to make and your deadline. You do not need a finished
                specification to get in touch.
              </p>
            </div>
            <div className="contact-card">
              <span className="eyebrow">YOUR FIRST STEP</span>
              <h3>
                A 20-minute fit call.
                <br />A defined next step.
              </h3>
              <ul>
                <li>
                  <FiCheck aria-hidden="true" /> Identify the buying or
                  deployment decision
                </li>
                <li>
                  <FiCheck aria-hidden="true" /> Establish the workload and key
                  constraints
                </li>
                <li>
                  <FiCheck aria-hidden="true" /> Confirm fit and scope the first
                  paid engagement
                </li>
              </ul>
              <a
                className="button button-red"
                href={contactHref}
                onClick={trackContact}
              >
                Request a fit call{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <p className="contact-note">
                Opens an email to SonarWave with three short prompts. Scope, fee
                and schedule are agreed before paid work begins.
              </p>
              <a
                className="contact-email"
                href={`mailto:${infrastructure.email}`}
                onClick={trackContact}
              >
                {infrastructure.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <Brand />
        <p>© {new Date().getFullYear()} SonarWave Technologies Inc.</p>
        <a href="#top">
          Back to top{' '}
          <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
};

export default App;
