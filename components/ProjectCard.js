import React from 'react';
import { Card, Image } from "@nextui-org/react";

export default function ProjectCard({ project, ...props }) {
  return (
    <div className="py-4 px-4 m-4" {...props}>
      <Image
        alt="Project Thumbnail"
        className="object-cover rounded-xl h-64 w-full"
        src={project.imageUrl}
        isZoomed
      />
    </div>
  );
}
