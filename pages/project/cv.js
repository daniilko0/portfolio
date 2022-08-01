import Layout from '../../components/layouts/article';
import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { Meta, Project, ProjectImage } from '../../components/project/project';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Paragraph from '../../components/paragraph';

const Cv = () => (
  <Layout title={'CV'}>
    <Container my={5}>
      <Project>
        Сайт-резюме <Meta>2022</Meta>
      </Project>
      <Paragraph>
        Этот сайт с резюме и перечнем реализованных проектов
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem my={2}>
          <Meta>Исходный код</Meta>
          <Link href={'https://github.com/dadyarri/cv'}>
            https://github.com/dadyarri/cv <ExternalLinkIcon mx={1} />
          </Link>
        </ListItem>
        <ListItem my={2}>
          <Meta>Ссылка на сайт</Meta>
          <Link href={'http://dadyarri.ru'}>https://dadyarri.ru</Link>
        </ListItem>
      </List>
      <ProjectImage src={'/images/cv-home-page.png'} alt={'cv home page'} />
    </Container>
  </Layout>
);

export default Cv;
