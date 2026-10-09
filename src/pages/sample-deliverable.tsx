import Head from 'next/head';
import Link from 'next/link';

import Brand from '../components/Brand';
import content from '../config/homepage.json';

const SampleDeliverable = () => (
  <div className="sonar-site simplified-site">
    <Head>
      <title>Example GPU Purchase Review | SonarWave Technologies</title>
      <meta name="description" content={content.sample.description} />
    </Head>
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <Link className="text-link" href="/">
          Home
        </Link>
      </div>
    </header>
    <main className="container section sample-review">
      <p className="eyebrow">{content.sample.eyebrow}</p>
      <h1>{content.sample.title}</h1>
      <p className="sample-intro">{content.sample.description}</p>
      <p className="risk-takeaway">{content.sample.scenario}</p>
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
      </Link>
    </main>
  </div>
);

export default SampleDeliverable;
