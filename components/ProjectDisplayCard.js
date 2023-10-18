import React from 'react';
import { Card, Image } from "@nextui-org/react";

export default function ProjectCard({ project, ...props }) {
  return (
    <div className="px-4 m-4 w-full" {...props}>
      <a
        href={"#"+project.id}
        className="cursor-default"
      >
        <Image
          alt="Project Thumbnail"
          className="object-cover rounded-xl h-64 w-full"
          src={project.imageUrl}
          isZoomed
        />
      </a>
    </div>
  );
}
