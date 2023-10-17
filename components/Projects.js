import React from 'react';
import Carousel from './Carousel';
import { Button } from '@nextui-org/react';
import { TbBrandGithub } from "react-icons/tb";

const ProjectCard = ({ project, index }) => {
  const isOdd = index % 2 == 0;

  return (
    <>
      <div className="flex flex-col md:hidden mb-4 items-center shadow-md rounded-xl">
        <ProjectImage src={project.imageUrl} />
        <ProjectDetails project={project} />
      </div>
      <div className="hidden md:flex md:flex-row mb-4 items-center shadow-md rounded-xl">
        {isOdd ? (
          <>
            <ProjectImage src={project.imageUrl} />
            <ProjectDetails project={project} />
          </>
        ) : (
          <>
            <ProjectDetails project={project} />
            <ProjectImage src={project.imageUrl} />
          </>
        )}
      </div>
    </>
    
  );
}

const ProjectImage = ({ src }) => {
  return (
    <div className="flex-shrink">
      <img src={src} alt="Project Image" className="rounded-lg md:shadow-lg w-full object-cover" />
    </div>
  );
}

const ProjectDetails = ({ project }) => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <h3 className="text-md text-gray-600 mb-2">{project.subtitle}</h3>
      <p className="text-sm text-gray-800 mb-2">{project.description}</p>
      <p className="text-sm text-gray-600 mb-2">Technologies I used:</p>
      <div className="max-h-[28px] overflow-hidden mb-4">
        <Carousel technologies={project.technologies} />
      </div>
      <div className="flex flex-row justify-end">
        <Button
          className="ml-2"
          size="small"
          variant="ghost"
          onPress={() => window.open(project.githubLink)}
          endContent={<TbBrandGithub size={24} />}
        >
          Github
        </Button>
        <Button
          className="ml-2"
          auto size="small"
          variant="ghost"
          color="primary"
          onPress={() => window.open(project.demoLink)}>
          View Demo
        </Button>
      </div>
    </div>
  );
}

const Projects = ({ projects }) => {
  return (
    <div className="p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

export default Projects;