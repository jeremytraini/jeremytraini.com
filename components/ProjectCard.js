'use client';
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { TbBrandReact } from "react-icons/tb";
import BrandChip from "./BrandChip";


export default function ProjectCard({ project, ...props }) {
  return (
    <Card
      className="py-4"
      {...props}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{project.title}</h4>
        <small className="text-default-500">{project.subtitle}</small>
        {/* <h4 className="font-bold text-large">Frontend Radio</h4> */}
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
              <div className="overflow-hidden max-w-full">
                <div className="whitespace-nowrap w-500 inline-block animate-marquee hover:pause">
                  {project.technologies?.map((tech) => (
                    <div className="inline-block pl-2">
                      <BrandChip
                        key={tech}
                        brand={tech}
                      />
                    </div>
                  ))}
                  {project.technologies?.map((tech) => (
                    <div className="inline-block pl-2">
                      <BrandChip
                        key={tech}
                        brand={tech}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          }
        </div>
        {/* Technologies */}
        
      </CardFooter>
    </Card>
  );
}
