import type { Metadata } from "next";
import ProjectsComponent from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <ProjectsComponent />
    </div>
  );
}
