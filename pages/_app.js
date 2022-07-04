import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layouts/main';
import theme from '../libs/theme';
import Fonts from '../libs/fonts';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default Website;
