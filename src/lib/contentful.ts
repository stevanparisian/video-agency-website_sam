const SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;

export async function cfFetch<T>(path: string) {
  if (!SPACE || !TOKEN) {
    return { items: [] } as unknown as T;
  }
  const url = `https://cdn.contentful.com/spaces/${SPACE}/environments/master/${path}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error(`Contentful ${res.status}`);
  return (await res.json()) as T;
}

export type Project = {
  sys: { id: string };
  fields: {
    title: string;
    thumbnail?: { fields: { file: { url: string } } };
  };
};

export async function getProjects() {
  const { items } = await cfFetch<{ items: Project[] }>(
    "entries?content_type=project&include=1"
  );
  return items;
}
