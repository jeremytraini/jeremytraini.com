import React from "react";
import Carousel from './Carousel';
import {
  TbBrandGithub,
  TbBrandFigma,
  TbLockCode,
  TbExternalLink,
} from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import { Tooltip, Button } from "@nextui-org/react";


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
            <Tooltip showArrow={true} content="View this project on github.com">
              <Button
                className="ml-1 bg-black border-black hover:bg-gray-800 text-white"
                size="small"
                onPress={() => window.open("https://github.com/jeremytraini/" + project.githubRepo)}
                endContent={<TbBrandGithub size={22} />}
              >
                <div className="hidden md:inline-block">View on GitHub</div>
                <div className="inline-block md:hidden">GitHub</div>
              </Button>
            </Tooltip>
          ) : (
            <Tooltip showArrow={true} content="Request access to the source code of this project">
              <Button
                className="ml-1"
                size="small"
                variant="ghost"
                onPress={() => openModal(project)}
                endContent={<TbLockCode color="gray" size={22} />}
              >
                <div className="hidden md:inline-block">View on GitHub</div>
                <div className="inline-block md:hidden">GitHub</div>
              </Button>
            </Tooltip>
          ))
        }
        {project.figmaLink && 
          <Button
            className="ml-1 border-[#9747ff] bg-[#9747ff] text-white"
            size="small"
            onPress={() => window.open(project.figmaLink)}
            endContent={<TbBrandFigma size={22} />}
          >
            <div className="hidden md:inline-block">View on Figma</div>
            <div className="inline-block md:hidden">Figma</div>
          </Button>
        }
        {project.appStoreUrl && 
          <Button
            className="ml-1 bg-black border-black hover:bg-gray-800 text-white"
            size="small"
            // variant="ghost"
            onPress={() => window.open(project.appStoreUrl)}
            endContent={<FaApple size={22} />}
          >
            <div className="hidden md:inline-block">View on the App Store</div>
            <div className="inline-block md:hidden">App Store</div>
          </Button>
        }
        {project.liveLink && 
          <Tooltip showArrow={true} content={`Go to ${project.liveLink}`}>
            <Button
              className="ml-1"
              size="small"
              color="primary"
              onPress={() => window.open(project.liveLink)}
              endContent={<TbExternalLink size={22} />}
            >
              <div className="hidden md:inline-block">View Live</div>
              <div className="inline-block md:hidden">Live</div>
            </Button>
          </Tooltip>
        }
      </div>
    </div>
  );
}

export default ProjectDetails;