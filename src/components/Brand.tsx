import Link from 'next/link';

import content from '../config/homepage.json';

const Brand = () => (
  <Link className="brand" href="/#top" aria-label="SonarWave home">
    <span className="brand-mark" aria-hidden="true">
      <img src="/assets/images/logo.png" alt="" width="200" height="200" />
    </span>
    <span className="brand-type">
      <span className="brand-name">{content.brand.name}</span>
      <span className="brand-sub">{content.brand.suffix}</span>
    </span>
  </Link>
);

export default Brand;
