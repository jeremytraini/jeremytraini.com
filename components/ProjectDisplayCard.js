import React from 'react';
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProjectCard({ project, ...props }) {
  return (
    <a
      href={"#"+project.id}
      className="cursor-default mx-4 h-64 flex justify-center items-center border-2"
      {...props}
    >
      {/* <div
        className="w-full h-full m-4 p-4 overflow-hidden"
      > */}
        <Image
          as={NextImage}
          fill
          alt="Project Thumbnail"
          objectFit="cover"
          src={project.imageUrl || "/images/thumbnails/placeholder.png"}
          isZoomed
          removeWrapper
        />
      {/* </div> */}
    </a>
  );
}
