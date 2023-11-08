import React, { useState } from "react";
import Carousel from './Carousel';
import {
  TbBrandGithub,
  TbBrandFigma,
  TbLockCode,
  TbExternalLink
} from "react-icons/tb";
import AccessModal from './AccessModal';
import { Tooltip, Button, useDisclosure, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { motion, useAnimation } from 'framer-motion';

const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const staggeredContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const ProjectCard = ({ project, index, openModal }) => {
  const isOdd = index % 2 == 0;

  return (
    <div id={project.id} >
      <div className="flex flex-col md:hidden mb-10 items-center shadow-md rounded-xl">
        <ProjectImage
          title={project.title}
          src={project.imageUrl}
          height={project.imageHeight}
          width={project.imageWidth}
        />
        <ProjectDetails project={project} openModal={openModal} />
      </div>
      <div className="hidden md:flex md:flex-row justify-center items-center mb-10 shadow-md rounded-xl relative">
        {isOdd ? (
          <>
            <ProjectImage
              title={project.title}
              src={project.imageUrl}
              height={project.imageHeight}
              width={project.imageWidth}
            />
            <ProjectDetails project={project} openModal={openModal} />
          </>
        ) : (
          <>
            <ProjectDetails project={project} openModal={openModal} />
            <ProjectImage
              title={project.title}
              src={project.imageUrl}
              height={project.imageHeight}
              width={project.imageWidth}
            />
          </>
        )}
      </div>
    </div>
    
  );
}

const ProjectImage = ({ title, src, height, width }) => {
  return (
    <div className="w-full md:w-[50%] lg:w-[60%] h-[250px] md:h-[280px] lg:h-[450px] rounded-xl overflow-hidden relative">
      <div
        className="relative w-full h-full"
      >
        <NextImage
          src={src || "/images/thumbnails/placeholder.png"}
          alt={"Project thumbnail for " + title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>
    </div>
  );
}

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
                <div className="hidden md:inline-block">View on Github</div>
                <div className="inline-block md:hidden">Github</div>
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
                <div className="hidden md:inline-block">Request Access</div>
                <div className="inline-block md:hidden">Github</div>
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
            <div className="hidden md:inline-block">View on Figma</div>
            <div className="inline-block md:hidden">Figma</div>
          </Button>
        }
        {project.liveLink && 
          <Tooltip showArrow={true} content={`Go to ${project.liveLink}`}>
            <Button
              className="ml-2"
              size="small"
              color="primary"
              onPress={() => window.open(project.liveLink)}
              endContent={<TbExternalLink size={22} />}
            >
              Live
            </Button>
          </Tooltip>
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
      <div
        // variants={staggeredContainer(0.1, 0.1)}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
      >
        {projects
          .filter((project) => !project.hidden)
          .map((project, index) => (
            <div
              key={index}
              // variants={fadeIn('left', 'tween', 0.2, 1)}
            >
              <ProjectCard project={project} index={index} openModal={openModal} />
            </div>
          ))}
      </div>
      <AccessModal project={currentProject} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default Projects;