import React from 'react';
import { Image } from "@nextui-org/react";
import Flickity from 'react-flickity-component';
import "flickity/css/flickity.css";
import projects from '@/data/projects';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ ...props }) => {
  return (
    <Flickity
      static
      options={{
        wrapAround: true,
        prevNextButtons: false,
      }}
      className="pb-6"
      {...props}
    >
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </Flickity>
  )
}

export default ProjectCarousel