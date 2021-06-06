import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import '../styles.css'
import '../i18n.ts'


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
)

export default MyApp
