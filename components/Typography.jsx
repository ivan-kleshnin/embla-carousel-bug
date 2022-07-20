import {Box, useTheme} from "@chakra-ui/react"
import * as React from "react"

// Typography
export function Typography({children, ...rest}) {
  const theme = useTheme()
  const {Blockquote, Code, Heading, Link, List} = theme.components

  return <Box
    className="typography"
    {...rest}
    sx={{
      // a
      "*:where(&) a": {
        ...Link.baseStyle,
        ...Link.variants[Link.defaultProps.variant]({theme, colorScheme: Link.defaultProps.colorScheme}),
      },

      // pre, code
       "*:where(&) code": {
        ...Code.baseStyle,
        ...Code.variants[Code.defaultProps.variant]({theme, colorScheme: Code.defaultProps.colorScheme}),
        display: "inline-block",
      },

      "*:where(&) pre": {
         // MDX generates pre > code combinations so the assumption here is to support only such combinations (for now)
         //   ...Code.baseStyle,
         //   ...Code.variants[Code.defaultProps.variant]({theme, colorScheme: Code.defaultProps.colorScheme}),
         my: "1rem",
       },

       "*:where(&) pre > code": {
         padding: "1rem", // TODO hack
       },

      // headings
       "*:where(&) h1": {
        ...Heading.baseStyle,
        fontSize: Heading.sizes.lg.fontSize,
        lineHeight: Heading.sizes.lg.lineHeight,
        marginTop: "1em",
        marginBottom: "1rem",
      },
       "*:where(&) h2": {
        ...Heading.baseStyle,
        fontSize: Heading.sizes.md.fontSize,
        lineHeight: Heading.sizes.md.lineHeight,
        marginTop: "1em",
        marginBottom: "1rem",
      },
       "*:where(&) h3": {
        ...Heading.baseStyle,
        fontSize: Heading.sizes.sm.fontSize,
        lineHeight: Heading.sizes.sm.lineHeight,
        marginTop: "1em",
        marginBottom: "1rem",
      },
       "*:where(&) h4": {
        ...Heading.baseStyle,
        fontSize: Heading.sizes.xs.fontSize,
        lineHeight: Heading.sizes.xs.lineHeight,
        marginTop: "1em",
        marginBottom: "1rem",
      },

      "*:where(&) h1:after": {
        content: "''",
        marginBottom: "-.2em",
        display: "table",
      },

      "*:where(&) h2:after": {
        content: "''",
        marginBottom: "-.2em",
        display: "table",
      },

      "*:where(&) h3:after": {
        content: "''",
        marginBottom: "-.2em",
        display: "table",
      },

      "*:where(&) h4:after": {
        content: "''",
        marginBottom: "-.2em",
        display: "table",
      },

      // p
      "*:where(&) p": {
        hyphens: "auto",
        textAlign: "justify",
        my: "1rem",
      },

      // blockquote
      "*:where(&) blockquote": {
        ...Blockquote.baseStyle,
        my: "1rem",
        "cite": {
          display: "block",
          fontSize: "sm",
          marginTop: ".5rem",
          textAlign: "right",
        },
      },

      // ul
      "*:where(&) ul": {
        listStyle: "none",
        my: "1rem",
        ...List.baseStyle.container,
        "li": {
          ...List.baseStyle.item,
        },
      },
      "*:where(&) ul li::before": {
        fontSize: "1em",
        verticalAlign: "center",
        content: '"•"',
        display: "inline-block",
        width: "0.75em",
      },

      // ol
      "*:where(&) ol": {
        ...List.baseStyle.container,
        my: "1rem",
        "li": {
          ...List.baseStyle.item,
        },
      },

      // corrections
      "*:where(&) > :first-child": {
        marginTop: 0,
      },
      "*:where(&) > :last-child": {
        marginBottom: 0,
      }
    }}
  >
    {children}
  </Box>
}
