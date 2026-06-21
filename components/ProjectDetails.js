import React from "react";
import Carousel from './Carousel';
import ProjectActionLinks from "./ProjectActionLinks";

const ProjectDetails = ({ project, openModal }) => {
  return (
    <div className="md:w-[50%] lg:w-[40%] p-6 flex flex-col justify-between">
      <div className="flex-grow flex flex-col justify-start">
        <h2 className="text-xl font-bold">{project.title}</h2>
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
