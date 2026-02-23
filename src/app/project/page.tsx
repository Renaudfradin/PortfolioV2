import type { Metadata } from "next";
import Link from "next/link";
import { callApi } from "@/lib/api";
import { Project } from "@/types";
import './project.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects Renaud Fradin - Développeur Full-Stack - Renaud Fradin',
  keywords: [
    'Renaud Fradin',
    'Développeur Full-Stack',
    'Portfolio',
    'Projects Renaud Fradin',
  ],
  icons: {
    icon: '/logo.ico',
  },
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    const data = await callApi<Project[] | Record<string, unknown>>('/api/projects');
    if (Array.isArray(data)) {
      projects = data;
    } else if (data && typeof data === 'object') {
      const arrayField = Object.values(data).find(Array.isArray);
      if (arrayField) {
        projects = arrayField as Project[];
      }
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div>
      <div className="worksWrapper">
        {projects.map((projet, index) => (
          <div key={index} className="workCard">
            <Link href={`/project/${(projet.slug)}`}>
              <img src={projet.image} className="workImg" alt={projet.name} />
            </Link>
            <div className="workCards">
              <div className="workInformation">
                <h5 className="workTitle">{projet.name}</h5>
                <p className="workDescription">{projet.description}</p>
              </div>
              <div className="workInformation">
                <div className="workStack">
                  <p className="stack">{projet.stack}</p>
                </div>
                <div className="workBlock">
                  {projet.url_github && (
                    <a href={projet.url_github} className="btnStyle" target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {projet.url && (
                    <a href={projet.url} className="btnStyle" target="_blank" rel="noopener noreferrer">Visiter</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <div className="nullResult">
            <p>Aucun projet trouvé.</p>
          </div>
        )}
      </div>
    </div>
  );
}
