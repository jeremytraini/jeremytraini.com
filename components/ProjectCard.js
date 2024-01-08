"use client";
import React, { useEffect, useRef } from 'react';
import ProjectDetails from "./ProjectDetails";
import ProjectImage from "./ProjectImage";
import { motion, useInView, useAnimation } from "framer-motion";

const ProjectCard = ({ project, index, openModal }) => {
  const isOdd = index % 2 == 0;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      id={project.id}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.20, ease: "easeOut" }}
    >
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
    </motion.div>
    
  );
}

export default ProjectCard;