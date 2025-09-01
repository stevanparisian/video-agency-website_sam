import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getProjects() {
  const entries = await client.getEntries({ content_type: 'project' });
  return entries.items;
}

export async function getTeamMembers() {
  const entries = await client.getEntries({ content_type: 'teamMember' });
  return entries.items;
}

export async function getPageBySlug(slug: string) {
  const entries = await client.getEntries({ content_type: 'page', 'fields.slug': slug, limit: 1 });
  return entries.items[0] || null;
}
