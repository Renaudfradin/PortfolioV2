import type { Metadata } from "next";
import NotFoundComponent from "@/components/NotFound/NotFound";

export const metadata: Metadata = {
  title: "404",
  description: "404 Renaud Fradin - Développeur Full-Stack - Renaud Fradin",
  keywords: [
    "Renaud Fradin",
    "Développeur Full-Stack",
    "Portfolio",
    "404 Renaud Fradin",
  ],
  icons: {
    icon: "/logo.ico",
  },
};

export default function NotFound() {
  return <NotFoundComponent />;
}
