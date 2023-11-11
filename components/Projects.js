"use client";

import React, { useState } from "react";

import AccessModal from './AccessModal';
import { useDisclosure } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

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