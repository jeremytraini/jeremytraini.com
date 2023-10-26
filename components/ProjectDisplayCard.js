import React from 'react';
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProjectCard({ project, ...props }) {
  return (
    <a
      href={"#"+project.id}
      className="cursor-default h-64 flex justify-center items-center relative overflow-hidden rounded-2xl"
      {...props}
    >
      <Image
        as={NextImage}
        fill
        alt="Project Thumbnail"
        objectFit="cover"
        src={project.imageUrl || "/images/thumbnails/placeholder.png"}
        isZoomed
        removeWrapper
      />
    </a>
  );
}
