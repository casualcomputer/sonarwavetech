import { AppProps } from 'next/app';

import Analytics from '../components/Analytics';
import Meta from '../components/Meta';
import '@fontsource-variable/dm-sans';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Meta />
    <Analytics />
    <Component {...pageProps} />
  </>
);

export default MyApp;
