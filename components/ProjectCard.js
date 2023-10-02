import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import BrandChip from "./BrandChip";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

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
          {project.technologies &&
            <>
              <h5 className="font-bold text-medium py-2">Tech used</h5>
              <Swiper
                // scrollbar={{
                //   hide: true,
                // }}
                slidesPerView='auto'
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                loopedSlides={4}
                freeMode={true}
                modules={[FreeMode, Pagination]}
              >
                <SwiperSlide><BrandChip brand="React.js" /></SwiperSlide>
                <SwiperSlide><BrandChip brand="React.js2" /></SwiperSlide>
                <SwiperSlide><BrandChip brand="React.js3" /></SwiperSlide>
                <SwiperSlide><BrandChip brand="React.js4" /></SwiperSlide>
                {/* {project.technologies.map((tech, index) => (
                  <SwiperSlide key={index}>
                    <BrandChip brand={tech} />
                  </SwiperSlide>
                ))} */}
              </Swiper>
            </>
          }
        </div>
      </CardFooter>
    </Card>
  );
}
