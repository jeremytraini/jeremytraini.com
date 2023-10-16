import React from 'react';
import { Image } from "@nextui-org/react";
// import Flickity from 'react-flickity-component';
// import "flickity/css/flickity.css";
import projects from '@/data/projects';
import ProjectCard from './ProjectCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProjectCarousel = ({ ...props }) => {
  return (
    <Swiper
      // spaceBetween={10}
      slidesPerView={4}
      centeredSlides={true}
      loop
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={index}
        >
          <ProjectCard
            project={project}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectCarousel