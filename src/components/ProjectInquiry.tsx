import { useEffect, useState } from 'react';

import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';

import content from '../config/homepage.json';
import * as gtag from '../lib/gtag';

const draftKey = 'sonarwave-project-inquiry';

const ProjectInquiry = () => {
  const [stage, setStage] = useState(content.contact.projectStages[0]);
  const [project, setProject] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [manualCopy, setManualCopy] = useState(false);
  const [draftReady, setDraftReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(draftKey) || 'null');
      if (saved && typeof saved === 'object') {
        if (content.contact.projectStages.includes(saved.stage))
          setStage(saved.stage);
        if (typeof saved.project === 'string')
          setProject(saved.project.slice(0, 1500));
      }
    } catch {
      // The inquiry remains usable when browser storage is unavailable.
    }
    setDraftReady(true);
  }, []);

  useEffect(() => {
    if (!draftReady) return;
    try {
      sessionStorage.setItem(draftKey, JSON.stringify({ stage, project }));
    } catch {
      // Keeping a draft is optional; it never blocks composing an inquiry.
    }
  }, [draftReady, stage, project]);

  const body = `Hello SonarWave,\n\nI would like to arrange a 20-minute call.\n\nProject stage: ${stage}\n\n${
    project.trim() ||
    'What we want to run:\nOur quote or existing hardware:\nOur timeline:'
  }\n\nPlease suggest a time to talk.\n\nThanks!`;
  const href = `mailto:${content.contact.email}?subject=${encodeURIComponent(
    content.contact.emailSubject
  )}&body=${encodeURIComponent(body)}`;
  const track = (channel: string) =>
    gtag.event({
      action: 'contact_click',
      category: 'engagement',
      label: `gpu-purchase-review:${channel}`,
    });
  const copyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopyStatus(
        `Inquiry copied. Paste it into an email to ${content.contact.email}.`
      );
      setManualCopy(false);
      track('copy-inquiry');
    } catch {
      setManualCopy(true);
      setCopyStatus(
        `Select and copy the message below, then email it to ${content.contact.email}.`
      );
    }
  };

  return (
    <div className="inquiry-card">
      <div className="inquiry-heading">
        <Mail aria-hidden="true" />
        <h3>{content.contact.callTitle}</h3>
      </div>
      <fieldset className="project-stages">
        <legend>Where are you today?</legend>
        {content.contact.projectStages.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="project-stage"
              value={option}
              checked={stage === option}
              onChange={() => {
                setStage(option);
                setCopyStatus('');
                setManualCopy(false);
              }}
            />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>
      <label className="field-label" htmlFor="project-details">
        What would you like to achieve? <span>(optional)</span>
      </label>
      <textarea
        id="project-details"
        value={project}
        maxLength={1500}
        rows={4}
        placeholder="Tell us about your workloads, the hardware you’re considering, or what’s getting in the way."
        onChange={(event) => {
          setProject(event.target.value);
          setCopyStatus('');
          setManualCopy(false);
        }}
      />
      <a
        className="button button-red inquiry-send"
        href={href}
        onClick={() => track('email-draft')}
      >
        {content.contact.action} <ArrowUpRight aria-hidden="true" />
      </a>
      <p className="inquiry-note">{content.contact.note}</p>
      <div className="inquiry-copy">
        <span>Use webmail?</span>
        <button type="button" onClick={copyInquiry}>
          {copyStatus && !manualCopy ? (
            <Check aria-hidden="true" />
          ) : (
            <Copy aria-hidden="true" />
          )}
          Copy inquiry
        </button>
      </div>
      <p className="copy-status" role="status">
        {copyStatus}
      </p>
      {manualCopy && (
        <textarea
          className="manual-copy"
          aria-label="Inquiry to copy"
          readOnly
          value={body}
          rows={8}
          onFocus={(event) => event.target.select()}
        />
      )}
    </div>
  );
};

export default ProjectInquiry;
