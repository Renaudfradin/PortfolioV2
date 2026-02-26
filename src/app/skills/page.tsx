import type { Metadata } from "next";
import SkillsComponent from "@/components/Skills/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills Renaud Fradin - Développeur Full-Stack - Renaud Fradin",
  keywords: [
    "Renaud Fradin",
    "Développeur Full-Stack",
    "Portfolio",
    "Skills Renaud Fradin",
  ],
  icons: {
    icon: "/logo.ico",
  },
};

export default function SkillsPage() {
  return <SkillsComponent />;
}
