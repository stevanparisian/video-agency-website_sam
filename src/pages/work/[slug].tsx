import { GetStaticPaths, GetStaticProps } from 'next';
import projects from '../../../data/projects.json';

interface Project {
  slug: string;
  title: string;
  description: string;
  mediaType: 'video' | 'image';
  mediaUrl: string;
}

interface ProjectProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectProps) {
  return (
    <div>
      <h1>{project.title}</h1>
      {project.mediaType === 'video' ? (
        <video src={project.mediaUrl} controls width="100%" />
      ) : (
        <img src={project.mediaUrl} alt={project.title} />
      )}
      <p>{project.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project: Project) => ({ params: { slug: project.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p: Project) => p.slug === params?.slug);
  return { props: { project } };
};
