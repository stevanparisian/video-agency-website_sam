import Head from "next/head";
import ProjectGrid from "@/components/ProjectGrid";
import { getProjects, type Project } from "@/lib/contentful";

interface HomeProps {
  projects: Project[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>Studio vidéo — Démo</title>
        <meta name="description" content="Plateforme vidéo & pub" />
      </Head>
      <main style={{ padding: "2rem" }}>
        <ProjectGrid projects={projects} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}
