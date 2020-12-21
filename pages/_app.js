import '../styles/globals.css'
import '../styles/index.css'
import '../styles/react-tabs.css'
// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RP Textile</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp