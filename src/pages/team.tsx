import { GetStaticProps } from 'next';
import { getTeamMembers } from '@/lib/contentful';

type TeamMember = { sys: { id: string }; fields: { name: string } };

export default function Team({ members }: { members: TeamMember[] }) {
  return (
    <main>
      <h1>Team</h1>
      <ul>
        {members.map((member) => (
          <li key={member.sys.id}>{member.fields.name}</li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const members = await getTeamMembers();
  return {
    props: {
      members,
    },
  };
};
