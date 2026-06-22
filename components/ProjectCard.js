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
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      id={project.id}
      data-scroll-anchor="center"
      data-analytics-view="project_view"
      data-analytics-key={`project-card-${project.id}`}
      data-analytics-threshold="0.55"
      data-analytics-props={JSON.stringify({
        project_id: project.id,
        project_title: project.title,
        project_index: index,
        source: "home_work_section",
      })}
      data-analytics-engaged="project_engaged"
      data-analytics-engaged-duration="2500"
      data-analytics-engaged-threshold="0.6"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col md:hidden mb-10 items-center shadow-md rounded-xl">
        <ProjectImage
          project={project}
          priority={index === 0}
        />
        <ProjectDetails project={project} openModal={openModal} />
      </div>
      <div className="hidden md:flex md:flex-row justify-center items-center mb-10 shadow-md rounded-xl relative">
        {isOdd ? (
          <>
            <ProjectImage
              project={project}
              priority={index === 0}
            />
            <ProjectDetails project={project} openModal={openModal} />
          </>
        ) : (
          <>
            <ProjectDetails project={project} openModal={openModal} />
            <ProjectImage
              project={project}
              priority={index === 0}
            />
          </>
        )}
      </div>
    </motion.div>
    
  );
}

export default ProjectCard;
