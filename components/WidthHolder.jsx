import {Container} from "@chakra-ui/react"
import * as React from "react"

// WidthHolder
export function WidthHolder({background, border, children, main, maxWidth = "3xl", position}) {
  return <>
    <Container
      background={background}
      border={border}
      height="100%"
      maxWidth={maxWidth}
      position={position}
      paddingX={["1.5rem", "2rem", "3rem", "4rem"]}
      paddingTop={main ? "2rem" : "2rem"}
      paddingBottom={main ? "2.5rem" : "2rem"}
    >
      {children}
    </Container>
  </>
}
