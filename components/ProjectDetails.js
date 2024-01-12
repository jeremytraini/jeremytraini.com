import React from "react";
import Carousel from './Carousel';
import {
  TbBrandGithub,
  TbBrandFigma,
  TbLockCode,
  TbExternalLink,
} from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import ProjectButton from "./ProjectButton";

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
      <div className="flex flex-wrap gap-2 justify-end">
        {project.githubRepo && 
          (!project.isPrivate ? (
            <ProjectButton
              tooltip="View this project on github.com"
              className="bg-black border-black hover:bg-gray-800 text-white"
              onPress={() => window.open("https://github.com/jeremytraini/" + project.githubRepo)}
              shortText="GitHub"
              longText="View on GitHub"
              endIcon={<TbBrandGithub size={22} />}
            />
          ) : (
            <ProjectButton
              tooltip="Request access to the source code of this project"
              onPress={() => openModal(project)}
              shortText="GitHub"
              longText="Request Access"
              endIcon={<TbLockCode color="gray" size={22} />}
              variant="ghost"
            />
          ))
        }
        {project.figmaLink && 
          <ProjectButton
            tooltip="View the prototype on figma.com"
            className="border-[#9747ff] bg-[#9747ff] text-white"
            onPress={() => window.open(project.figmaLink)}
            shortText="Figma"
            longText="View on Figma"
            endIcon={<TbBrandFigma size={22} />}
          />
        }
        {project.appStoreUrl && 
          <ProjectButton
            tooltip={`View ${project.title} on the App Store`}
            className="bg-black border-black hover:bg-gray-800 text-white"
            onPress={() => window.open(project.appStoreUrl)}
            shortText="App Store"
            longText="View on the App Store"
            endIcon={<FaApple size={22} />}
          />
        }
        {project.liveLink && 
          <ProjectButton
            tooltip={`Go to ${project.liveLink}`}
            onPress={() => window.open(project.liveLink)}
            shortText="Live"
            longText="View Live"
            endIcon={<TbExternalLink size={22} />}
            color="primary"
          />
        }
      </div>
    </div>
  );
}

export default ProjectDetails;