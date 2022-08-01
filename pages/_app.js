import { ChakraProvider } from '@chakra-ui/react';
import Main from '../components/layouts/main';
import theme from '../libs/theme';
import Fonts from '../libs/fonts';
import { AnimatePresence } from 'framer-motion';
import Head from "next/head"

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg"/>
      </Head>
      <Fonts />
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
};

export default Website;
