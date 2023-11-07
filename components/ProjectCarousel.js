import React from 'react';
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

  // Function to make it so that the projects alternate to the left and right of 
  // the centre one.
  // e.g. [1, 2, 3, 4, 5] -> [1, 2, 5, 4, 3]

  function alternateList(projects) {
    let result = [];
    let addToStart = true;

    for (let i = 0; i < projects.length; i++) {
      if (addToStart) {
        result.unshift(projects[i]);
      } else {
        result.push(projects[i]);
      }
      addToStart = !addToStart;
    }

    // Rotate the array to the right by half its length
    // This will put the main project first
    const halfLength = Math.floor(result.length / 2);
    for (let i = 0; i <= halfLength; i++) {
      result.unshift(result.pop());
    }

    console.log(projects);
    console.log(result);
    return result;
  }

  const content = wrapAroundList(alternateList(projects));

  return (
    <Swiper
      slidesPerView={4}
      // spaceBetween={30}
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
            className="cursor-grab"
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