import React, { useState, useRef, useEffect } from "react";
import Carousel from './Carousel';
import {
  TbBrandGithub,
  TbBrandFigma,
  TbLockCode,
  TbExternalLink
} from "react-icons/tb";
import AccessModal from './AccessModal';
import { Tooltip, Button, useDisclosure } from "@nextui-org/react";

const ProjectCard = ({ project, index, openModal }) => {
  const isOdd = index % 2 == 0;

  return (
    <div id={project.id}>
      <div className="flex flex-col md:hidden mb-10 items-center shadow-md rounded-xl">
        <ProjectImage src={project.imageUrl} />
        <ProjectDetails project={project} openModal={openModal} />
      </div>
      <div className="hidden md:flex md:flex-row mb-10 shadow-md rounded-xl">
        {isOdd ? (
          <>
            <ProjectImage src={project.imageUrl} />
            <ProjectDetails project={project} openModal={openModal} />
          </>
        ) : (
          <>
            <ProjectDetails project={project} openModal={openModal} />
            <ProjectImage src={project.imageUrl} />
          </>
        )}
      </div>
    </div>
    
  );
}

const ProjectImage = ({ src }) => {
  return (
    <div className="flex-shrink">
      <img src={src} alt="Project Image" className="rounded-lg md:shadow-lg w-full object-cover" />
    </div>
  );
}

const ProjectDetails = ({ project, openModal }) => {
  return (
    <div className="p-6 flex flex-col w-full">
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <h3 className="text-md text-gray-600 mb-2">{project.subtitle}</h3>
        <p className="text-sm text-gray-800 mb-2">{project.description}</p>
        <p className="text-sm text-gray-600 mb-2">Technologies I used:</p>
        <div className="max-h-[28px] overflow-hidden mb-4">
          <Carousel technologies={project.technologies} />
        </div>
      </div>
      <div className="flex flex-row justify-end">
        {project.githubRepo && 
          (!project.isPrivate ? (
            <Tooltip showArrow={true} content="View this project on Github.com">
              <Button
                className="ml-2 bg-black border-black hover:bg-gray-800 text-white"
                size="small"
                onPress={() => window.open("https://github.com/jeremytraini/" + project.githubRepo)}
                endContent={<TbBrandGithub size={22} />}
              >
                View on Github
              </Button>
            </Tooltip>
          ) : (
            <Tooltip showArrow={true} content="Request access to the source code of this project">
              <Button
                className="ml-2"
                size="small"
                variant="ghost"
                onPress={() => openModal(project)}
                endContent={<TbLockCode color="gray" size={22} />}
              >
                Request Access
              </Button>
            </Tooltip>
          ))
        }
        {project.figmaLink && 
          <Button
            className="ml-2 border-[#9747ff] bg-[#9747ff] text-white"
            size="small"
            onPress={() => window.open(project.figmaLink)}
            endContent={<TbBrandFigma size={22} />}
          >
            View on Figma
          </Button>
        }
        {project.liveLink && 
          <Button
            className="ml-2"
            size="small"
            color="primary"
            onPress={() => window.open(project.liveLink)}
            endContent={<TbExternalLink size={22} />}
          >
            Live
          </Button>
        }
      </div>
    </div>
  );
}

const Projects = ({ projects }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    onOpen();
  }

  return (
    <div className="py-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} openModal={openModal} />
      ))}
      <AccessModal project={currentProject} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default Projects;