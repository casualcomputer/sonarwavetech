import { ArrowUpRight, Download, Printer } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

import Brand from '../components/Brand';
import ReviewPreview from '../components/ReviewPreview';
import content from '../config/homepage.json';

const SampleDeliverable = () => (
  <div className="sonar-site">
    <Head>
      <title>Example GPU Purchase Review | SonarWave Technologies</title>
      <meta name="description" content={content.sample.description} />
    </Head>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <Link className="text-link" href="/">
          Home <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </header>
    <main className="container section sample-review" id="main">
      <p className="eyebrow">{content.sample.eyebrow}</p>
      <h1>{content.sample.title}</h1>
      <p className="sample-intro">{content.sample.description}</p>
      <div className="sample-actions">
        <a
          className="button button-outline"
          href="/assets/sonarwave-review-example.txt"
          download
        >
          Download example <Download aria-hidden="true" />
        </a>
        <button
          type="button"
          className="button button-outline"
          onClick={() => window.print()}
        >
          Print this page <Printer aria-hidden="true" />
        </button>
      </div>
      <p className="sample-scenario">{content.sample.scenario}</p>
      <ReviewPreview showLink={false} headingLevel={2} />
      <div className="sample-sections">
        {content.sample.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        ))}
      </div>
      <p className="sample-intro">{content.sample.closing}</p>
      <Link className="button button-red" href="/#contact">
        {content.hero.action}
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </main>
  </div>
);

export default SampleDeliverable;
