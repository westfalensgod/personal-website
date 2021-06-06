import Head from 'next/head';
import type { AppProps } from 'next/app'
import '../styles.css';


const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
