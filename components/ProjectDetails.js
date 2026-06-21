import React from "react";
import Link from "next/link";
import Carousel from './Carousel';
import ProjectActionLinks from "./ProjectActionLinks";
import { getProjectUrl } from "@/lib/projects";

const ProjectDetails = ({ project, openModal }) => {
  return (
    <div className="md:w-[50%] lg:w-[40%] p-6 flex flex-col justify-between">
      <div className="flex-grow flex flex-col justify-start">
        <h2 className="text-xl font-bold">
          <Link href={getProjectUrl(project.id)} className="transition hover:text-blue-700">
            {project.title}
          </Link>
        </h2>
        <h3 className="text-md text-gray-600 mb-2">{project.subtitle}</h3>
        <p className="text-sm text-gray-800 mb-2">{project.description}</p>
        <p className="text-sm text-gray-600 mb-2">Technologies I used:</p>
        <div className="max-h-[28px] overflow-hidden mb-4">
          <Carousel technologies={project.technologies} />
        </div>
      </div>
      <ProjectActionLinks project={project} openModal={openModal} />
    </div>
  );
}

export default ProjectDetails;
