import { Box, Button, Container, Heading, Image } from '@chakra-ui/react';

import Section from './section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { BioSection, BioYear } from './bio';
import SectionTitle from '../components/section-title';

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
      <Section delay={0.1}>
        <SectionTitle>Биография</SectionTitle>
        <BioSection>
          <BioYear>2001</BioYear>Родился в Фурманове, Россия
        </BioSection>
        <BioSection>
          <BioYear>2020 &ndash; н. в.</BioYear>Учусь в ВлГУ, Информационные
          системы и технологии, бакалавр
        </BioSection>
        <BioSection>
          <BioYear>июн &ndash; сен 2021</BioYear>Работал преподавателем детских
          IT-курсов в академии "top"
        </BioSection>
      </Section>

      <Section delay={0.2} my={4}>
        <SectionTitle>Работа</SectionTitle>
        <Paragraph>
          Начинающий бэкенд-разработчик, изучаю .NET, пытаюсь в руководство
          разработкой.
        </Paragraph>
        <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'} my={3}>
          <NextLink href={'/projects'}>Проекты</NextLink>
        </Button>
      </Section>
    </Container>
  );
};

export default Page;
