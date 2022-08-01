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
