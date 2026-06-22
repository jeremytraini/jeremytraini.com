"use client";
import React, { useState } from "react";
import AccessModal from './EmailAccessModal';
import { useDisclosure } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import { trackEvent } from "@/lib/analytics";

const Projects = ({ projects }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    trackEvent("request_access_open", {
      project_id: project?.id,
      project_title: project?.title,
      source: "project_card",
      intent: "request_private_repo_access",
      destination_type: "modal",
      destination_label: "request_access",
    });
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
