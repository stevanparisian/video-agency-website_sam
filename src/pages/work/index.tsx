import Link from 'next/link';
import projects from '../../../data/projects.json';

interface Project {
  slug: string;
  title: string;
  thumbnail: string;
}

export default function WorkIndex() {
  return (
    <div>
      <h1>Our Work</h1>
      <div className="grid">
        {projects.map((project: Project) => (
          <Link key={project.slug} href={`/work/${project.slug}`}
            className="card">
            <img src={project.thumbnail} alt={project.title} />
            <h2>{project.title}</h2>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        .card {
          display: block;
          border: 1px solid #ccc;
          border-radius: 4px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
        }
        .card img {
          width: 100%;
          height: auto;
          display: block;
        }
        .card h2 {
          padding: 0.5rem;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
