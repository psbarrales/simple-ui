import React from 'react'
import Head from 'next/head'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import 'css/main.css'
import theme from 'css/theme'

if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect
}

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider>
      <Head>
        <title>Simple UI ::..</title>
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
