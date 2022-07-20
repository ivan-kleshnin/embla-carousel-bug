import {Grid} from "@chakra-ui/react"
import Head from "next/head"
import * as React from "react"
import {MainMenu} from "./MainMenu"
import {Footer} from "./Footer"

// Layout
export function Layout({children}) {
  return <>
    <Grid templateRows="auto 1fr auto" minHeight="100vh">
      {/*<MainMenu/>*/}
      <div>Menu</div>
      {children}
      {/*<Footer/>*/}
      <div>Footer</div>
    </Grid>
  </>
}
