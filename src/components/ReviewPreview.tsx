import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

import content from '../config/homepage.json';

const ReviewPreview = () => (
  <div
    className="review-document"
    id="example-review"
    tabIndex={-1}
    role="region"
    aria-labelledby="example-review-title"
  >
    <div className="document-masthead">
      <span>
        <FileText aria-hidden="true" /> SONARWAVE / ADVISORY
      </span>
      <span>Illustrative example</span>
    </div>
    <div className="document-heading">
      <h3 className="document-title" id="example-review-title">
        {content.sample.preview.title}
      </h3>
      <p>{content.sample.preview.scenario}</p>
    </div>
    <div className="document-decision">
      <div>
        <h4>{content.sample.preview.riskLabel}</h4>
        <p>{content.sample.preview.risk}</p>
      </div>
      <div>
        <p className="eyebrow">{content.sample.preview.decisionLabel}</p>
        <h4 className="document-verdict">{content.sample.preview.decision}</h4>
        <p>{content.sample.preview.nextStep}</p>
      </div>
    </div>
    <Link className="document-link" href="/sample-deliverable/">
      {content.review.sampleAction} <ArrowRight aria-hidden="true" />
    </Link>
    <p className="document-disclaimer">{content.sample.disclaimer}</p>
  </div>
);

export default ReviewPreview;
