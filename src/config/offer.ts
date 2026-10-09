import content from './homepage.json';

// Compatibility exports; edit homepage.json to change this branch's copy.
export const infrastructure = {
  name: content.review.name,
  entryName: content.review.name,
  email: content.contact.email,
  phone: content.contact.phone,
  phoneHref: content.contact.phoneHref,
  stages: content.delivery.stages,
  deliverables: content.review.deliverables,
};

export const faqs = content.faq.items;
