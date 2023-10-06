import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";
import Carousel from './Carousel';

export default function ProjectCard({ project, ...props }) {
  return (
    <Card className="py-4" {...props}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{project.title}</h4>
        <small className="text-default-500">{project.subtitle}</small>
      </CardHeader>
      <CardBody className="overflow-hidden py-2">
        <Image
          alt="Project Thumbnail"
          className="object-cover rounded-xl"
          src={project.imageUrl}
          fill
          isZoomed
        />
      </CardBody>
      <CardFooter>
        <div className="w-full">
          <small className="text-default-500">{project.description}</small>
          {project.technologies && (
            <>
              <h5 className="font-bold text-medium py-2">Tech used</h5>
              <div className="max-h-[28px]">
                <Carousel technologies={project.technologies} />
              </div>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
