import {ColorModeScript} from "@chakra-ui/react"
import createEmotionServer from "@emotion/server/create-instance"
import * as React from "react"
import NextDocument, {DocumentContext, Head, Html, Main, NextScript} from "next/document"
import {cache} from "lib/emotion-cache"
import {theme} from "lib/theme"

const {extractCritical} = createEmotionServer(cache)

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{__html: styles.css}}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    }
  }

  render() {
    return <>
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript/>
        </body>
      </Html>
    </>
  }
}

// Ref: https://griko.id/blog/prevent-fouc-on-next-js-chakra-ui (above)
//      https://griko.medium.com/prevent-fouc-on-next-js-chakra-ui-68df8b1b63ab (not read yet)
