import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, useColorModeValue } from '@chakra-ui/react';
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  },
  styles: {
    global: {
      body: {
        bg: mode('#ffffff', '#202023')
      }
    }
  },
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('teal.300', 'teal.500')(props),
        textUnderlineOffset: 3
      })
    },
    Heading: {
      variants: {
        sectionTitle: (props) => ({
          textDecoration: 'underline',
          fontSize: '24px',
          textUnderlineOffset: '6px',
          textDecorationColor: mode('#525252', '#ffffff')(props),
          textDecorationThickness: '4px',
          marginTop: '3px',
          marginBottom: '10px',
          color: mode('#202023', '#ffffff')(props)
        })
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
