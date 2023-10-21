import React from 'react';
import { Image } from "@nextui-org/react";
// import Flickity from 'react-flickity-component';
// import "flickity/css/flickity.css";
import projects from '@/data/projects';
import ProjectCard from './ProjectDisplayCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ProjectCarousel = ({ projects, ...props }) => {
  function wrapAroundList(list) {
    const wrapLength = 20;

    // If the list has more than 20 items, leave it
    if (list.length > wrapLength) {
      return list;
    }

    // If the list has fewer than 20 items, repeat it until it reaches 20 items
    let result = [];
    while (result.length < wrapLength) {
      result = result.concat(list);
    }
    
    return result;
  }

  const content = wrapAroundList(projects);

  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      loop
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="h-full"
    >
      {content
        .filter(project => !project.hidden)
        .map((project, index) => (
          <SwiperSlide
            key={index}
            // className="h-full"
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