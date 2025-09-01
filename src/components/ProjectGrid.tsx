import { Project } from "@/lib/contentful";

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {projects.map((p) => (
        <div key={p.sys.id}>
          {p.fields.thumbnail && (
            <img
              src={`https:${p.fields.thumbnail.fields.file.url}`}
              alt={p.fields.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          )}
          <h3>{p.fields.title}</h3>
        </div>
      ))}
    </div>
  );
}
