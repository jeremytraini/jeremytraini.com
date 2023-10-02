import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Flickity from 'react-flickity-component';
import BrandChip from "./BrandChip";

import "flickity/css/flickity.css";

const flickityOptions = {
  initialIndex: 3,
  wrapAround: true,
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  // selectedAttraction: 1,
  // friction: 1,
  // freeScrollFriction: 0.05,
  // autoPlay: true,
  // autoPlay: 3000,
  // pauseAutoPlayOnHover: true,
}

const Carousel = ({ technologies }) => {
  return (
    <Flickity
      elementType="div"
      options={flickityOptions}
      // disableImagesLoaded={false}
      // reloadOnUpdate
    >
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="mr-2"
        >
          <BrandChip brand={tech} />
        </div>
      ))}
    </Flickity>
  );
}

export default function ProjectCard({ project, ...props }) {
  return (
    <Card className="py-4" {...props}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{project.title}</h4>
        <small className="text-default-500">{project.subtitle}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Project Thumbnail"
          className="object-cover rounded-xl"
          src={project.imageUrl}
          width={'100%'}
          height={300}
        />
      </CardBody>
      <CardFooter>
        <div className="max-w-full">
          <small className="text-default-500">{project.description}</small>
          {project.technologies && (
            <>
              <h5 className="font-bold text-medium py-2">Tech used</h5>
              <div
                className="max-h-16 overflow-y-hidden"
              >
                <Carousel technologies={project.technologies} />
              </div>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
