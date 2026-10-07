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

import content from '../config/homepage.json';
import { faqs, infrastructure } from '../config/offer';
import * as gtag from '../lib/gtag';

const Brand = () => (
  <a className="brand" href="#top" aria-label="SonarWave home">
    <span className="brand-mark" aria-hidden="true">
      <img src="/assets/images/logo.png" alt="" width="200" height="200" />
    </span>
    <span className="brand-type">
      <span className="brand-name">{content.brand.name}</span>
      <span className="brand-sub">{content.brand.suffix}</span>
    </span>
  </a>
);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryId, setInquiryId] = useState(content.contact.defaultInquiry);
  const inquiry = content.contact.inquiryOptions.find(
    (option) => option.id === inquiryId
  );
  const contactHref = `mailto:${
    infrastructure.email
  }?subject=${encodeURIComponent(
    `${content.contact.emailSubject}: ${inquiry?.label || ''}`
  )}&body=${encodeURIComponent(
    `${content.contact.emailGreeting}\n\nService: ${inquiry?.label || ''}\n\n${
      inquiry?.prompt || ''
    }\n\n${content.contact.emailClosing}`
  )}`;

  const selectInquiry = (id: string) => {
    setInquiryId(id);
    gtag.event({
      action: 'service_selected',
      category: 'engagement',
      label: id,
    });
  };

  const trackContact = () =>
    gtag.event({
      action: 'contact_click',
      category: 'engagement',
      label: inquiryId,
    });

  return (
    <div className="sonar-site" id="top">
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
              {content.navigation.procurement}
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              {content.navigation.inference}
            </a>
            <a href="#training" onClick={() => setMenuOpen(false)}>
              {content.navigation.training}
            </a>
            <a
              className="button button-small button-dark"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              {content.navigation.contact}{' '}
              <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {content.hero.title}
              <br />
              <em>{content.hero.titleEmphasis}</em>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-red" href="#contact">
                {content.hero.primaryAction}{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <a className="text-link" href="#infrastructure">
                {content.hero.secondaryAction}
                <FiArrowDown aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">{content.hero.note}</p>
            <p className="partner-path">
              {content.hero.partnerPrompt}{' '}
              <a href="#sales-training">{content.hero.partnerAction}</a>
            </p>
          </div>
          <div
            className="delivery-map"
            aria-label="Our services and the outcomes they support"
          >
            <div className="delivery-map-heading">
              <ServerIcon aria-hidden="true" />
              <span className="eyebrow">{content.hero.outcomesHeading}</span>
            </div>
            <ol>
              {content.hero.outcomes.map(({ title, detail, href }, i) => (
                <li key={title}>
                  <span className="delivery-index">0{i + 1}</span>
                  <div>
                    <h2>
                      <a href={href}>{title}</a>
                    </h2>
                    <p>{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="delivery-map-footer">
              <FiCheckCircle aria-hidden="true" />
              {content.hero.outcomesFooter}
            </div>
          </div>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <span className="eyebrow">{content.experienceStrip.eyebrow}</span>
            <span>
              <FiCheck aria-hidden="true" />
              {content.experienceStrip.publicSector}
            </span>
            <span>
              <FiCheck aria-hidden="true" />
              {content.experienceStrip.aerospace}
            </span>
            <span>
              <FiCheck aria-hidden="true" />
              {content.experienceStrip.vendors}
            </span>
          </div>
        </div>

        <section className="section container risk-section" id="decisions">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.businessCase.eyebrow}</p>
              <h2>
                {content.businessCase.title}
                <br />
                {content.businessCase.titleSecondLine}
              </h2>
            </div>
            <p>{content.businessCase.description}</p>
          </div>
          <div className="risk-grid">
            <article>
              <span className="eyebrow">
                {content.businessCase.investment.eyebrow}
              </span>
              <h3>{content.businessCase.investment.title}</h3>
              <p>{content.businessCase.investment.description}</p>
              <strong>{content.businessCase.investment.outcome}</strong>
            </article>
            <article>
              <span className="eyebrow">
                {content.businessCase.focus.eyebrow}
              </span>
              <h3>{content.businessCase.focus.title}</h3>
              <p>{content.businessCase.focus.description}</p>
              <strong>{content.businessCase.focus.outcome}</strong>
            </article>
            <article>
              <span className="eyebrow">
                {content.businessCase.continuity.eyebrow}
              </span>
              <h3>{content.businessCase.continuity.title}</h3>
              <p>{content.businessCase.continuity.description}</p>
              <strong>{content.businessCase.continuity.outcome}</strong>
            </article>
          </div>
          <p className="risk-takeaway">{content.businessCase.takeaway}</p>
        </section>

        <section className="pilot-section" id="infrastructure">
          <div className="container pilot-layout">
            <div className="pilot-copy">
              <p className="eyebrow">{content.services.procurement.eyebrow}</p>
              <h2>
                {content.services.procurement.title}
                <br />
                <em>{content.services.procurement.titleEmphasis}</em>
              </h2>
              <p>{content.services.procurement.description}</p>
              <div className="pilot-principle">
                <FiCheckCircle aria-hidden="true" />
                <div>
                  <strong>
                    {content.services.procurement.principle.title}
                  </strong>
                  <p>{content.services.procurement.principle.description}</p>
                </div>
              </div>
            </div>
            <article className="offer-card infrastructure-offer">
              <div className="offer-topline">
                <span className="eyebrow">
                  {content.services.procurement.audience}
                </span>
                <span className="scope-badge">
                  {content.services.procurement.scopeBadge}
                </span>
              </div>
              <h3>{infrastructure.entryName}</h3>
              <p className="assessment-intro">
                {content.services.procurement.offerDescription}
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
                {content.services.procurement.engagement}
              </p>
              <a
                className="button button-red"
                href="#contact"
                onClick={() => selectInquiry('procurement')}
              >
                {content.services.procurement.action}{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <p className="offer-footnote">
                {content.services.procurement.nextSteps}
              </p>
            </article>
          </div>
        </section>
        <section className="section container" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.services.inference.eyebrow}</p>
              <h2>
                {content.services.inference.title}
                <br />
                {content.services.inference.titleSecondLine}
              </h2>
            </div>
            <p>{content.services.inference.description}</p>
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
          <p className="risk-takeaway">
            {content.services.inference.successMeasures}
          </p>
          <div className="service-action">
            <a
              className="button button-red"
              href="#contact"
              onClick={() => selectInquiry('inference')}
            >
              {content.services.inference.action}{' '}
              <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
            </a>
          </div>
          <div className="delivery-capabilities">
            <article>
              <p className="eyebrow">
                {content.services.inference.models.eyebrow}
              </p>
              <h3>
                {content.services.inference.models.title}
                <br />
                {content.services.inference.models.titleSecondLine}
              </h3>
              <p>{content.services.inference.models.description}</p>
              <ul>
                {content.services.inference.models.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
            <article>
              <p className="eyebrow">
                {content.services.inference.continuity.eyebrow}
              </p>
              <h3>
                {content.services.inference.continuity.title}
                <br />
                {content.services.inference.continuity.titleSecondLine}
              </h3>
              <p>{content.services.inference.continuity.description}</p>
              <ul>
                {content.services.inference.continuity.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section container" id="training">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.services.training.eyebrow}</p>
              <h2>
                {content.services.training.title}
                <br />
                {content.services.training.titleSecondLine}
              </h2>
            </div>
            <p>{content.services.training.description}</p>
          </div>
          <div className="delivery-capabilities">
            <article>
              <p className="eyebrow">
                {content.services.training.technical.audience}
              </p>
              <h3>{content.services.training.technical.title}</h3>
              <p>{content.services.training.technical.description}</p>
              <ul>
                {content.services.training.technical.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="text-link service-action"
                href="#contact"
                onClick={() => selectInquiry('technical-training')}
              >
                {content.services.training.technical.action}{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
            </article>
            <article id="sales-training">
              <p className="eyebrow">
                {content.services.training.sales.audience}
              </p>
              <h3>{content.services.training.sales.title}</h3>
              <p>{content.services.training.sales.description}</p>
              <ul>
                {content.services.training.sales.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a
                className="text-link service-action"
                href="#contact"
                onClick={() => selectInquiry('sales-training')}
              >
                {content.services.training.sales.action}{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
            </article>
          </div>
          <p className="risk-takeaway">{content.services.training.takeaway}</p>
        </section>

        <section className="about-section" id="about">
          <div className="container about-layout">
            <div>
              <p className="eyebrow">{content.experience.eyebrow}</p>
              <h2>
                {content.experience.title}
                <br />
                {content.experience.titleSecondLine}
              </h2>
              <p>{content.experience.description}</p>
              <p>{content.experience.delivery}</p>
              <div className="performance-experience">
                <p className="eyebrow">
                  {content.experience.performance.eyebrow}
                </p>
                <h3>{content.experience.performance.title}</h3>
                <p className="performance-result">
                  <strong>{content.experience.performance.result}</strong>
                  <span>{content.experience.performance.comparison}</span>
                </p>
                <p>{content.experience.performance.description}</p>
                <span className="experience-note">
                  {content.experience.performance.context}
                </span>
              </div>
            </div>
            <div className="experience-cards">
              <article>
                <span className="eyebrow">
                  {content.experience.procurement.eyebrow}
                </span>
                <h3>{content.experience.procurement.title}</h3>
                <p>{content.experience.procurement.description}</p>
                <span className="experience-note">
                  {content.experience.procurement.context}
                </span>
              </article>
              <article>
                <span className="eyebrow">
                  {content.experience.aerospace.eyebrow}
                </span>
                <h3>{content.experience.aerospace.title}</h3>
                <p>{content.experience.aerospace.description}</p>
                <p>{content.experience.aerospace.context}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section container faq-layout" id="faq">
          <div>
            <p className="eyebrow">{content.faq.eyebrow}</p>
            <h2>
              {content.faq.title}
              <br />
              {content.faq.titleSecondLine}
            </h2>
            <p>
              {content.faq.contactPrompt}
              <br />
              <a
                className="text-link"
                href={`mailto:${infrastructure.email}`}
                onClick={trackContact}
              >
                {content.faq.contactAction}{' '}
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
              <p className="eyebrow">{content.contact.eyebrow}</p>
              <h2>
                {content.contact.title}
                <br />
                <em>{content.contact.titleEmphasis}</em>
              </h2>
              <p>{content.contact.description}</p>
            </div>
            <div className="contact-card">
              <span className="eyebrow">{content.contact.call.eyebrow}</span>
              <h3>
                {content.contact.call.title}
                <br />
                {content.contact.call.titleSecondLine}
              </h3>
              <ul>
                {content.contact.call.points.map((point) => (
                  <li key={point}>
                    <FiCheck aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <label className="inquiry-label" htmlFor="inquiry-service">
                {content.contact.inquiryLabel}
              </label>
              <select
                className="inquiry-select"
                id="inquiry-service"
                value={inquiryId}
                onChange={(event) => selectInquiry(event.target.value)}
              >
                {content.contact.inquiryOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <a
                className="button button-red"
                href={contactHref}
                onClick={trackContact}
              >
                {content.contact.call.action}{' '}
                <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
              </a>
              <p className="contact-note">{content.contact.call.note}</p>
              <div className="contact-direct">
                <a
                  className="contact-email"
                  href={infrastructure.phoneHref}
                  onClick={trackContact}
                >
                  {content.contact.phoneAction} {infrastructure.phone}
                </a>
                <a
                  className="contact-email"
                  href={`mailto:${infrastructure.email}`}
                  onClick={trackContact}
                >
                  {infrastructure.email}
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
        <a href="#top">
          {content.navigation.backToTop}{' '}
          <FiArrowUpRight className="diagonal-arrow" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
};

export default App;
