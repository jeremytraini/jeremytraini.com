import React from 'react';
import { Image } from "@nextui-org/react";
import NextImage from "next/image";


export default function ProjectCard({ project, ...props }) {
  return (
    <a
      // href={"#"+project.id}
      className="cursor-default w-full h-full px-4 rounded-xl"
      {...props}
    >
      <Image
        as={NextImage}
        fill
        alt="Project Thumbnail"
        className="object-cover h-full"
        src={project.imageUrl || "/images/thumbnails/placeholder.png"}
        isZoomed />
    </a>
  );
}
