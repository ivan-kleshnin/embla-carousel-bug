import {ChakraProvider} from "@chakra-ui/react"
import {CacheProvider} from "@emotion/react"
import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-serif-pro/400.css"
import "@fontsource/source-serif-pro/400-italic.css"
import "@fontsource/source-serif-pro/600.css"
import "@fontsource/source-code-pro/400.css"
import Head from "next/head"
import {theme} from "lib/theme"
import "styles/reset.css"
import "styles/prisma.css"
import {cache} from "lib/emotion-cache"
import {Layout} from "layout"

export default function MyApp({Component, pageProps}) {
  return <>
    <ChakraProvider theme={theme}>
      <CacheProvider value={cache}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </CacheProvider>
    </ChakraProvider>
  </>
}
