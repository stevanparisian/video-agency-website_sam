import { GetStaticProps } from 'next';
import { getProjects } from '@/lib/contentful';

type Project = { sys: { id: string }; fields: { title: string } };

export default function Home({ projects }: { projects: Project[] }) {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.sys.id}>{project.fields.title}</li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
  };
};
