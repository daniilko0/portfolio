import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectsGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';

const Projects = () => {
  return (
    <Layout title={'Проекты'}>
      <Container my={5}>
        <Heading as={'h2'} fontSize={26} mb={4}>
          Проекты
        </Heading>

        <Section>
          <Heading as={'h3'} variant={'sectionTitle'}>
            Личные
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectsGridItem
                id={'choco'}
                title={'ChocoManager'}
                labels={[
                  'Python',
                  'FastAPI',
                  'C#',
                  'ASP.NET',
                  'EF Core',
                  'Docker Compose',
                  'PostgreSQL',
                  'VK API',
                  'Telegram API'
                ]}
                thumbnail={'/images/choco_manager.png'}
              >
                <p>
                  Система работы с клиентами и остатками в интернет-магазине
                </p>
              </ProjectsGridItem>
            </Section>
            <Section>
              <ProjectsGridItem
                id={'cv'}
                title={'Сайт-резюме'}
                labels={['React', 'Next.js']}
              >
                <p>Этот сайт с резюме и перечнем реализованных проектов</p>
              </ProjectsGridItem>
            </Section>
          </SimpleGrid>
        </Section>
        <Section>
          <Heading as={'h3'} variant={'sectionTitle'}>
            Работа в команде
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectsGridItem
                id={'star'}
                title={'Student Archive'}
                labels={['Java', 'Spark framework', 'JDBC', 'PostgreSQL']}
              >
                <p>
                  Приложение для архивирования полезных учебных материалов
                  (лабораторные работы, методические материалы и пр.)
                </p>
              </ProjectsGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Projects;
