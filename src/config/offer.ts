import content from './homepage.json';

// Compatibility exports; edit homepage.json to change the live page content.
export const infrastructure = {
  name: content.services.name,
  entryName: content.services.procurement.name,
  email: content.contact.email,
  phone: content.contact.phone,
  phoneHref: content.contact.phoneHref,
  stages: content.services.inference.stages,
  deliverables: content.services.procurement.deliverables,
};

export const faqs = content.faq.items;
