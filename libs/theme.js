import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  styles: {
    global: {
      body: {
        bg: mode('#f0e7db', '#202023')
      }
    }
  },
  components: {
    Link: {
      baseStyle: {
        color: mode('#3d7aed', '#ff63c3'),
        textUnderlineOffset: 3
      }
    },
    Heading: {
      variants: {
        sectionTitle: {
          textDecoration: "underline",
          fontSize: "24px",
          textUnderlineOffset: "6px",
          textDecorationColor: "#525252",
          textDecorationThickness: "4px",
          marginTop: "3px",
          marginBottom: "10px",
        }
      }
    }
  },
  colors: {
    glassTeal: '#88ccca'
  },
  fonts: {
    headings: "'Bellota'"
  }
});

export default theme;
