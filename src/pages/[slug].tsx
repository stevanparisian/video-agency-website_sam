import { GetServerSideProps } from 'next';
import { getPageBySlug } from '@/lib/contentful';

type PageType = { fields: { title: string; content: string } } | null;

export default function Page({ page }: { page: PageType }) {
  if (!page) {
    return <div>Page not found</div>;
  }
  return (
    <main>
      <h1>{page.fields.title}</h1>
      <div>{page.fields.content}</div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string;
  const page = await getPageBySlug(slug);
  return {
    props: {
      page,
    },
  };
};
