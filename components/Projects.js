"use client";
import React, { useState } from "react";
import AccessModal from './EmailAccessModal';
import { useDisclosure } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    onOpen();
  }

  return (
    <div className="py-4">
      <div>
        {projects
          .filter((project) => !project.hidden)
          .map((project, index) => (
            <div key={index} >
              <ProjectCard project={project} index={index} openModal={openModal} />
            </div>
          ))}
      </div>
      <AccessModal project={currentProject} isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default Projects;