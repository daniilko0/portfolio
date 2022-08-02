import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  Tag,
  TagLeftIcon,
  TagLabel
} from '@chakra-ui/react';

import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon, Icon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import { IoLogoGithub, IoLogoVk } from 'react-icons/io5';
import { BsTelegram } from 'react-icons/bs';
import { DiDotnet, DiPython } from 'react-icons/di';
import { SiNim, SiGnubash } from 'react-icons/si';

const Page = () => {
  return (
    <Layout title={'Главная'}>
      <Container my={5}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Даниил Голубев
            </Heading>
            <p>Бэкенд-разработчик, фанат Jetbrains, Linux-энтузиаст</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align={'center'}
          >
            <Image
              alt={'avatar'}
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle={'solid'}
              width={100}
              height={100}
              display={'inline-block'}
              borderRadius={'full'}
              src={'/images/avatar.jpeg'}
              marginTop={3}
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading variant={'sectionTitle'} as={'h3'}>
            Образование и опыт
          </Heading>
          <BioSection>
            <BioYear>2020 &ndash; н. в.</BioYear>Учусь в ВлГУ, Информационные
            системы и технологии, бакалавр
          </BioSection>
          <BioSection>
            <BioYear>июн &ndash; сен 2021</BioYear>Преподаватель детских
            IT-курсов в академии &quot;top&quot;
          </BioSection>
        </Section>

        <Section delay={0.2} my={4}>
          <Heading variant={'sectionTitle'} as={'h3'}>
            Работа
          </Heading>
          <Paragraph>
            Начинающий бэкенд-разработчик и тех-лид, изучаю .NET.
          </Paragraph>
          <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'} my={3}>
            <NextLink href={'/projects'}>Проекты</NextLink>
          </Button>
        </Section>

        <Section>
          <Heading variant={'sectionTitle'} as={'h3'}>
            Навыки
          </Heading>
          <List>
            <ListItem m={1}>
              <Tag
                size={'lg'}
                key={'dotnet'}
                variant={'subtle'}
                colorScheme={'teal'}
              >
                <TagLeftIcon boxSize={'20px'} as={DiDotnet} />
                <TagLabel>dotnet</TagLabel>
              </Tag>
            </ListItem>
            <ListItem m={1}>
              <Tag
                size={'lg'}
                key={'python'}
                variant={'subtle'}
                colorScheme={'teal'}
              >
                <TagLeftIcon boxSize={'20px'} as={DiPython} />
                <TagLabel>python</TagLabel>
              </Tag>
            </ListItem>
            <ListItem m={1}>
              <Tag
                size={'lg'}
                key={'nim'}
                variant={'subtle'}
                colorScheme={'teal'}
              >
                <TagLeftIcon boxSize={'20px'} as={SiNim} />
                <TagLabel>nim</TagLabel>
              </Tag>
            </ListItem>
            <ListItem m={1}>
              <Tag
                size={'lg'}
                key={'bash'}
                variant={'subtle'}
                colorScheme={'teal'}
              >
                <TagLeftIcon boxSize={'20px'} as={SiGnubash} />
                <TagLabel>bash</TagLabel>
              </Tag>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3} my={4}>
          <Heading variant={'sectionTitle'} as={'h3'}>
            Я в интернете
          </Heading>
          <List>
            <ListItem>
              <Link href={'https://github.com/dadyarri'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://vk.com/dadyarri'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={IoLogoVk} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://t.me/dadyarri'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  @dadyarri
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={'https://t.me/yadevblog'} target={'_blank'}>
                <Button
                  variant={'ghost'}
                  colorScheme={'teal'}
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  @yadevblog
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
