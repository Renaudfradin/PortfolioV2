import type { Metadata } from "next";
import { callApi } from "@/lib/api";
import { Project } from "@/types";
import ImageCarousel from "@/components/ImageCarousel";
import "../project.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const response = await callApi<Project | { data: Project }>(
      `/api/project/${slug}`,
    );
    const project = "data" in response ? response.data : response;

    return {
      title: `${project.name} - Projects Renaud Fradin - Développeur Full-Stack`,
      description: project.description,
      icons: { icon: "/logo.ico" },
    };
  } catch {
    return {
      title: "Projet non trouvé",
    };
  }
}

export default async function Projects({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: Project | null = null;
  try {
    const response: Project | { data: Project } = await callApi(
      `/api/project/${slug}`,
    );
    if ("data" in response) {
      project = response.data;

      console.log(project.image);
    } else {
      project = response;
    }
  } catch (e) {
    console.error(e);
    project = null;
  }

  if (!project) {
    return <div>project non trouvée</div>;
  }

  return (
    <div className="project-page">
      <h1 className="project-title">{project.name}</h1>

      {(() => {
        const images = Array.isArray(project.image) ? project.image : [project.image];
        return (
          <ImageCarousel
            images={images}
            alt={project.name}
          />
        );
      })()}

      <p className="project-description">{project.description}</p>

      <p className="project-stack">
        {(Array.isArray(project.stack)
          ? project.stack
          : (project.stack ?? "").split(",")
        )
          .map((s: string) => s.trim())
          .filter(Boolean)
          .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" · ")}
      </p>

      <div className="project-buttons">
        {project.url_github && (
          <a
            href={project.url_github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            GitHub
          </a>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Visiter
          </a>
        )}
      </div>
    </div>
  );
}
