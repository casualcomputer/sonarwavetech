import { ArrowLeft, ArrowUpRight, Download, Printer } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

import Brand from '../components/Brand';
import content from '../config/homepage.json';

const SampleDeliverable = () => (
  <div className="sonar-site">
    <Head>
      <title>How We Evaluate a GPU Purchase | SonarWave Technologies</title>
      <meta name="description" content={content.sample.description} />
    </Head>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <Link className="text-link sample-back" href="/#example-review">
          <ArrowLeft aria-hidden="true" /> Back
        </Link>
      </div>
    </header>
    <main className="container section sample-review" id="main">
      <p className="eyebrow">{content.sample.eyebrow}</p>
      <h1>{content.sample.title}</h1>
      <p className="sample-intro">{content.sample.description}</p>
      <p className="sample-disclaimer">{content.sample.disclaimer}</p>
      <div className="sample-layout">
        <aside className="sample-decision" aria-labelledby="decision-title">
          <p className="eyebrow">{content.sample.decision.eyebrow}</p>
          <h2 id="decision-title">{content.sample.decision.title}</h2>
          <p>{content.sample.decision.description}</p>
          <dl className="decision-conditions">
            {content.sample.decision.conditions.map((condition) => (
              <div key={condition.title}>
                <dt>{condition.title}</dt>
                <dd>{condition.description}</dd>
              </div>
            ))}
          </dl>
          <Link className="button button-red" href="/#contact">
            {content.hero.action}
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </aside>
        <div className="sample-sections">
          {content.sample.sections.map((section, index) => (
            <section key={section.title}>
              <span className="row-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </section>
          ))}
        </div>
      </div>
      <div className="sample-next-step">
        <p className="sample-closing">{content.sample.closing}</p>
        <Link className="button button-red" href="/#contact">
          {content.hero.action}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <div className="sample-actions">
        <a
          className="text-link"
          href="/assets/sonarwave-review-example.txt"
          download
        >
          <Download aria-hidden="true" />
          {content.sample.downloadAction}
        </a>
        <button
          type="button"
          className="text-link"
          onClick={() => window.print()}
        >
          <Printer aria-hidden="true" />
          {content.sample.printAction}
        </button>
      </div>
    </main>
  </div>
);

export default SampleDeliverable;
