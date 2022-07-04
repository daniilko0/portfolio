import { Box, Container, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="blackAlpha.900"
        color="white"
        p={3}
        mb={6}
        align="center"
      >
        Привет, я Даниил, бэкенд-разработчик из Владимира.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Даниил Голубев
          </Heading>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
