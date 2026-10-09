import { useEffect, useRef, useState } from 'react';

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Cpu,
  FileCheck2,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react';

import Brand from '../components/Brand';
import ProjectInquiry from '../components/ProjectInquiry';
import ReviewPreview from '../components/ReviewPreview';
import content from '../config/homepage.json';
import * as gtag from '../lib/gtag';

const ReviewLink = () => (
  <a className="button button-red" href="#contact">
    {content.hero.action}
    <ArrowUpRight aria-hidden="true" />
  </a>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileAction, setShowMobileAction] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const contact = document.querySelector('#contact');
    let pastHero = false;
    let contactVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero)
          pastHero =
            !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        if (entry.target === contact) contactVisible = entry.isIntersecting;
      });
      setShowMobileAction(pastHero && !contactVisible);
    });
    if (hero) observer.observe(hero);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !navigation.current?.contains(target) &&
        !menuButton.current?.contains(target)
      )
        setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [menuOpen]);

  const trackContact = (channel: string) =>
    gtag.event({
      action: 'contact_click',
      category: 'engagement',
      label: `gpu-purchase-review:${channel}`,
    });
  const stageIcons = [ClipboardCheck, Server, FileCheck2];

  return (
    <div className="sonar-site" id="top">
      <a className="skip-link" href="#main">
        {content.navigation.skip}
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            ref={navigation}
            id="main-nav"
            aria-label="Main navigation"
            className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          >
            <a href="#infrastructure" onClick={() => setMenuOpen(false)}>
              {content.navigation.review}
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              {content.navigation.process}
            </a>
            <a href="#example-review" onClick={() => setMenuOpen(false)}>
              {content.navigation.example}
            </a>
            <a
              className="button button-small button-dark"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              {content.navigation.contact} <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span aria-hidden="true" />
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              <span className="hero-title-main">{content.hero.title}</span>
              <span className="hero-title-accent">
                {content.hero.titleEmphasis}
              </span>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <ReviewLink />
              <a className="text-link" href="#example-review">
                {content.hero.secondaryAction}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">
              <span className="note-line" aria-hidden="true" />
              {content.hero.note}
            </p>
          </div>
          <figure className="hardware-visual">
            <div className="hardware-heading">
              <span className="eyebrow">{content.hero.visual.eyebrow}</span>
              <span className="hardware-mark" aria-hidden="true">
                <Cpu />
              </span>
            </div>
            <img
              className="hardware-image"
              src="/assets/images/gpu-systems.webp"
              alt="Conceptual illustration of a GPU server and an AI workstation"
              width="1400"
              height="933"
              fetchPriority="high"
            />
            <div className="hardware-bottom">
              <div>
                <strong>{content.hero.visual.title}</strong>
                <span>{content.hero.visual.description}</span>
              </div>
            </div>
            <figcaption>{content.hero.visual.caption}</figcaption>
          </figure>
        </section>
        <div className="commitment-strip">
          <div className="container commitment-inner">
            {content.commitments.map((item) => (
              <span key={item}>
                <Check aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <section className="section container" id="decisions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.pains.eyebrow}</p>
              <h2>{content.pains.title}</h2>
            </div>
            <p>{content.pains.description}</p>
          </div>
          <div className="pain-rows">
            {content.pains.items.map((item, index) => (
              <article key={item.pain}>
                <span className="row-number">0{index + 1}</span>
                <div className="pain-problem">
                  <h3>{item.pain}</h3>
                  <p>{item.impact}</p>
                </div>
                <div className="pain-solution">
                  <p>{item.solution}</p>
                  <strong>
                    <ArrowRight aria-hidden="true" />
                    {item.outcome}
                  </strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="experience-section"
          id="why-sonarwave"
          aria-labelledby="experience-title"
        >
          <div className="section container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{content.experience.eyebrow}</p>
                <h2 id="experience-title">{content.experience.title}</h2>
              </div>
              <p>{content.experience.description}</p>
            </div>
            <div className="process-grid experience-grid">
              {content.experience.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.experience}</p>
                  <div className="experience-relevance">
                    <span>WHAT THIS MEANS FOR YOU</span>
                    <p>{item.relevance}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="review-section" id="infrastructure">
          <div className="container review-layout">
            <div className="review-copy">
              <p className="eyebrow">
                <span className="section-dot" aria-hidden="true" />
                {content.review.eyebrow}
              </p>
              <h2>
                {content.review.title}
                <br />
                <span>{content.review.titleEmphasis}</span>
              </h2>
              <p>{content.review.description}</p>
              <ul className="review-deliverables">
                {content.review.deliverables.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <ReviewLink />
              <p className="scope-note">{content.review.scope}</p>
            </div>
            <ReviewPreview />
          </div>
        </section>

        <section className="section container" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.delivery.eyebrow}</p>
              <h2>
                {content.delivery.title}
                <br />
                {content.delivery.titleSecondLine}
              </h2>
            </div>
            <p>{content.delivery.description}</p>
          </div>
          <div className="process-grid">
            {content.delivery.stages.map((stage, index) => {
              const Icon = stageIcons[index];
              return (
                <article key={stage.title}>
                  <div className="process-top">
                    <span>0{index + 1}</span>
                    {Icon && <Icon aria-hidden="true" />}
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <strong className="process-output">
                    <span>YOU RECEIVE</span>
                    {stage.deliverable}
                  </strong>
                </article>
              );
            })}
          </div>
          <div className="delivery-promise">
            <ShieldCheck aria-hidden="true" />
            <p>{content.delivery.accountability}</p>
            <a className="text-link" href="#contact">
              Talk through your project
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="faq-section">
          <div className="section container faq-layout" id="faq">
            <div>
              <p className="eyebrow">{content.faq.eyebrow}</p>
              <h2>
                {content.faq.title}
                <br />
                {content.faq.titleSecondLine}
              </h2>
              <p className="faq-aside">{content.faq.description}</p>
              <a className="text-link" href="#contact">
                Ask us something else
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="faq-list">
              {content.faq.items.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <ArrowDown aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section container contact-layout" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">{content.contact.eyebrow}</p>
            <h2>
              {content.contact.title}
              <br />
              <span>{content.contact.titleEmphasis}</span>
            </h2>
            <p>{content.contact.description}</p>
            <ol className="call-agenda">
              {content.contact.points.map((item, index) => (
                <li key={item}>
                  <span>0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
            <div className="contact-direct">
              <a
                href={`mailto:${content.contact.email}`}
                onClick={() => trackContact('email')}
              >
                {content.contact.email}
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={content.contact.phoneHref}
                onClick={() => trackContact('phone')}
              >
                <Phone aria-hidden="true" />
                {content.contact.phone}
              </a>
            </div>
          </div>
          <ProjectInquiry />
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-main">
          <Brand />
          <p>
            {content.footer.statement[0]}
            <br />
            {content.footer.statement[1]}
          </p>
          <a className="text-link" href="#example-review">
            {content.footer.sampleAction}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} {content.brand.legalName}
          </p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      {showMobileAction && !menuOpen && (
        <aside className="mobile-review-action" aria-label="Project inquiry">
          <ReviewLink />
        </aside>
      )}
    </div>
  );
};

export default App;
