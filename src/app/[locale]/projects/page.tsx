import { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Mes Projets | Portfolio",
  description:
    "Découvrez mes projets de développement web, applications mobiles et solutions blockchain.",
};

export default function ProjectsPage() {
  return (
    <div className="">
      <Projects />
    </div>
  );
}
