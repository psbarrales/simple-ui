import React from 'react'
import Head from 'next/head'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect
}

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Head>
        <title>Wordle ::..</title>
      </Head>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp