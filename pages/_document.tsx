// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>         
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://app.kontent.ai/js-api/custom-element/v1/custom-element.min.js" strategy="beforeInteractive"></Script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
