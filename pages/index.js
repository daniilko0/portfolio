import {Box, Container, Heading, Image, useColorModeValue} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Даниил Голубев
          </Heading>
          <p>Бэкенд-разработчик, фанат Jetbrains</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align={'center'}
        >
          <Image
            borderColor={'whiteAlpha.800'}
            borderWidth={2}
            borderStyle={'solid'}
            width={100}
            height={100}
            display={'inline-block'}
            borderRadius={'full'}
            src={'/images/avatar.jpg'}
            marginTop={3}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
