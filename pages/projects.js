import { Box, Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectsGridItem } from '../components/grid-item';
import SectionTitle from '../components/section-title';
import Layout from '../components/layouts/article';

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Проекты
        </Heading>

        <Section>
          <SectionTitle>Личные</SectionTitle>
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
              >
                <p>
                  Система работы с клиентами и остатками в интернет-магазине
                </p>
              </ProjectsGridItem>
            </Section>
          </SimpleGrid>
        </Section>
        <Section>
          <SectionTitle>Работа в команде</SectionTitle>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectsGridItem
                id={'star'}
                title={'Student Archive'}
                labels={['Java', 'Spark framework', 'JDBC', 'PostgreSQL']}
              >
                <p>
                  Приложение для архивирования учебных материалов, полезных
                  студентам
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
