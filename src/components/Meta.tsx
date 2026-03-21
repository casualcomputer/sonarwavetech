import Head from 'next/head';

import { AppConfig } from '../utils/AppConfig';

const Meta = () => {
  const {
    title,
    description,
    site_name: siteName,
    site_url: siteUrl,
    og_image: ogImage,
  } = AppConfig;

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:locale" content={AppConfig.locale} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
};

export default Meta;
