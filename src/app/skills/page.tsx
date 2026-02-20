import type { Metadata } from "next";
import SkillsComponent from "@/components/Skills/Skills";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return <SkillsComponent />;
}
