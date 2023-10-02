'use client';
import { Card, CardHeader, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { TbBrandReact } from "react-icons/tb";
import BrandChip from "./BrandChip";


export default function ProjectCard({ project }) {
  return (
    <Card className="py-4">
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
          width={270}
        />
      </CardBody>
      <CardFooter>
        <div>
          <small className="text-default-500">{project.description}</small>
          <div className="flex gap-2 flex-wrap py-2">
            {project.technologies?.map((tech) => (
              <BrandChip key={tech} brand={tech} />
            ))}
          </div>
        </div>
        {/* Technologies */}
        
      </CardFooter>
    </Card>
    // <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    //   <Image
    //     src={project.imageUrl}
    //     alt={project.title}
    //     className="w-full h-48 object-cover"
    //     width={400}
    //     height={200}
    //   />
    //   <div className="p-4">
    //     <h2 className="text-xl mb-2">{project.title}</h2>
    //     <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
    //     <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Project</a>
    //   </div>
    // </div>
  );
}
