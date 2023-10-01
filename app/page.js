'use client';
import { Divider } from "@nextui-org/react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description: "Description for project 1.",
    imageUrl: "https://placehold.co/600x100/png",
    projectLink: "https://example.com/project1"
  },
  
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center">
        <div>
          <h1>Hi, I&apos;m Jeremy Traini. More to come.</h1>
        </div>
      </div>
      <Divider />
      <div className="inline-block max-w-lg text-left">
        <h2>Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
