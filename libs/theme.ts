import {mode, StyleFunctionProps} from "@chakra-ui/theme-tools";
import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true
  },
  styles: {
    global: {
      body: {
        bg: mode("#ffffff", "#202023")
      }
    }
  },
  components: {
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("blue.300", "blue.500")(props),
        textUnderlineOffset: 3
      })
    },
    Heading: {
      variants: {
        sectionTitle: (props: StyleFunctionProps) => ({
          textDecoration: "underline",
          fontSize: "24px",
          textUnderlineOffset: "6px",
          textDecorationColor: mode("#525252", "#ffffff")(props),
          textDecorationThickness: "4px",
          marginTop: "3px",
          marginBottom: "20px",
          color: mode("#202023", "#ffffff")(props)
        })
      }
    }
  },
  colors: {
    glassTeal: "#88ccca"
  },
  fonts: {
    headings: "'Bellota'"
  }
});

export default theme;
