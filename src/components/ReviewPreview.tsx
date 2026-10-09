import { ArrowUpRight, Check, FileText } from 'lucide-react';
import Link from 'next/link';

import content from '../config/homepage.json';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ReviewPreview = ({
  showLink = true,
  headingLevel = 3,
}: {
  showLink?: boolean;
  headingLevel?: 2 | 3;
}) => {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const PanelHeading = headingLevel === 2 ? 'h3' : 'h4';
  return (
    <div className="review-document">
      <div className="document-masthead">
        <span>
          <FileText aria-hidden="true" /> SONARWAVE / ADVISORY
        </span>
        <span>Example format</span>
      </div>
      <div className="document-heading">
        <span className="eyebrow">YOUR DECISION, DOCUMENTED</span>
        <Heading className="document-title">GPU Purchase Review</Heading>
        <p>An illustrative look at what your review covers.</p>
      </div>
      <Tabs defaultValue="workload" className="review-tabs">
        <TabsList aria-label="Explore the purchase review">
          {content.review.preview.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {content.review.preview.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <PanelHeading className="document-panel-title">
              {tab.title}
            </PanelHeading>
            <dl className="review-rows">
              {tab.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="document-outcome">
              <Check aria-hidden="true" />
              {tab.outcome}
            </p>
          </TabsContent>
        ))}
      </Tabs>
      {showLink && (
        <Link className="document-link" href="/sample-deliverable/">
          Explore the full example <ArrowUpRight aria-hidden="true" />
        </Link>
      )}
      <p className="document-disclaimer">
        Illustrative format. Your review reflects your workloads and agreed
        scope.
      </p>
    </div>
  );
};

export default ReviewPreview;
