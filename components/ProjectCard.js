import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";

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

export default ProjectCard;