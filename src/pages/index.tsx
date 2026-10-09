import { useEffect, useState } from 'react';

import {
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

import Brand from '../components/Brand';
import content from '../config/homepage.json';
import * as gtag from '../lib/gtag';

const ReviewLink = () => (
  <a className="button button-red" href="#contact">
    {content.hero.action}
    <ArrowUpIcon className="diagonal-arrow" aria-hidden="true" />
  </a>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileAction, setShowMobileAction] = useState(false);
  const contactHref = `mailto:${
    content.contact.email
  }?subject=${encodeURIComponent(
    content.contact.emailSubject
  )}&body=${encodeURIComponent(content.contact.emailBody)}`;

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const contact = document.querySelector('#contact');
    let pastHero = false;
    let contactVisible = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) {
          pastHero =
            !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        }
        if (entry.target === contact) contactVisible = entry.isIntersecting;
      });
      setShowMobileAction(pastHero && !contactVisible);
    });
    if (hero) observer.observe(hero);
    if (contact) observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const trackContact = (channel: string) =>
    gtag.event({
      action: 'contact_click',
      category: 'engagement',
      label: `gpu-purchase-review:${channel}`,
    });

  return (
    <div className="sonar-site simplified-site" id="top">
      <a className="skip-link" href="#main">
        {content.navigation.skip}
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
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={menuOpen ? 'nav-links is-open' : 'nav-links'}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setMenuOpen(false);
            }}
          >
            <a href="#infrastructure" onClick={() => setMenuOpen(false)}>
              {content.navigation.review}
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              {content.navigation.process}
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              {content.navigation.faq}
            </a>
            <a
              className="button button-small button-dark"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              {content.navigation.contact}
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" />
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {content.hero.title}
              <br />
              <em>{content.hero.titleEmphasis}</em>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <ReviewLink />
              <Link className="text-link" href="/sample-deliverable/">
                {content.hero.secondaryAction}
              </Link>
            </div>
            <p className="hero-note">{content.hero.note}</p>
          </div>
          <aside
            className="review-summary"
            aria-labelledby="review-summary-title"
          >
            <p className="eyebrow">{content.hero.offerEyebrow}</p>
            <h2 id="review-summary-title">{content.hero.offerTitle}</h2>
            <p>{content.hero.offerDescription}</p>
            <ul>
              {content.hero.offerPoints.map((point) => (
                <li key={point}>
                  <CheckIcon aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="review-summary-note">{content.hero.offerNote}</p>
          </aside>
        </section>

        <section className="section container risk-section" id="decisions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.pains.eyebrow}</p>
              <h2>{content.pains.title}</h2>
            </div>
            <p>{content.pains.description}</p>
          </div>
          <div className="pain-grid">
            {content.pains.items.map((item) => (
              <article key={item.pain}>
                <h3>{item.pain}</h3>
                <p>{item.impact}</p>
                <div className="pain-solution">
                  <span className="eyebrow">HOW WE HELP</span>
                  <p>{item.solution}</p>
                </div>
                <strong>{item.outcome}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="pilot-section" id="infrastructure">
          <div className="container pilot-layout">
            <div className="pilot-copy">
              <p className="eyebrow">{content.review.eyebrow}</p>
              <h2>
                {content.review.title}
                <br />
                <em>{content.review.titleEmphasis}</em>
              </h2>
              <p>{content.review.description}</p>
              <Link
                className="text-link review-example"
                href="/sample-deliverable/"
              >
                {content.review.sampleAction}
              </Link>
            </div>
            <article className="offer-card infrastructure-offer">
              <p className="eyebrow">{content.review.audience}</p>
              <h3>{content.review.name}</h3>
              <ul className="deliverables">
                {content.review.deliverables.map((item) => (
                  <li key={item}>
                    <CheckIcon aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="assessment-price">{content.review.outcome}</p>
              <ReviewLink />
              <p className="offer-footnote">{content.review.scope}</p>
            </article>
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
            {content.delivery.stages.map((stage, index) => (
              <article key={stage.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <strong className="step-detail">{stage.deliverable}</strong>
              </article>
            ))}
          </div>
          <p className="risk-takeaway">{content.delivery.accountability}</p>
          <div className="section-action">
            <ReviewLink />
          </div>
        </section>

        <section className="section container faq-layout" id="faq">
          <div>
            <p className="eyebrow">{content.faq.eyebrow}</p>
            <h2>{content.faq.title}</h2>
          </div>
          <div className="faq-list">
            {content.faq.items.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDownIcon aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">{content.contact.eyebrow}</p>
              <h2>
                {content.contact.title}
                <br />
                <em>{content.contact.titleEmphasis}</em>
              </h2>
              <p>{content.contact.description}</p>
            </div>
            <div className="contact-card">
              <h3>{content.contact.callTitle}</h3>
              <ul>
                {content.contact.points.map((point) => (
                  <li key={point}>
                    <CheckIcon aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                className="button button-red"
                href={contactHref}
                onClick={() => trackContact('email-draft')}
              >
                {content.contact.action}
                <ArrowUpIcon className="diagonal-arrow" aria-hidden="true" />
              </a>
              <p className="contact-note">{content.contact.note}</p>
              <div className="contact-direct">
                <a
                  className="contact-email"
                  href={content.contact.phoneHref}
                  onClick={() => trackContact('phone')}
                >
                  {content.footer.phoneAction} {content.contact.phone}
                </a>
                <a
                  className="contact-email"
                  href={`mailto:${content.contact.email}`}
                  onClick={() => trackContact('email')}
                >
                  {content.contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container site-footer">
        <Brand />
        <p>
          © {new Date().getFullYear()} {content.brand.legalName}
        </p>
        <a href="#top">{content.navigation.backToTop}</a>
      </footer>
      {showMobileAction && !menuOpen && (
        <div className="mobile-review-action">
          <ReviewLink />
        </div>
      )}
    </div>
  );
};

export default App;
