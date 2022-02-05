import React from 'react'
import Head from 'next/head'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import 'styles/css/main.css'
import theme from 'styles/theme'

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect
}

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Head>
        <title>Simple UI ::..</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/site/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/site/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/site/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/site/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/site/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#5398ff" />
        <meta name="theme-color" content="#5398ff"></meta>
        <link rel="icon" href="/site/favicon.ico" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
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
