import React from 'react';
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProjectCard({ project, ...props }) {
  return (
    <div
      className="mx-4 px-4 h-64 w-[100%-4px] flex justify-center items-center relative overflow-hidden rounded-2xl"
      {...props}
    >
      <Image
        as={NextImage}
        fill
        alt="Project Thumbnail"
        className="object-cover"
        src={project.imageUrl || "/images/thumbnails/placeholder.png"}
        isZoomed
        removeWrapper
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(project.id).scrollIntoView({
            block: "center",
            inline: "center"
          });
        }}
        priority
      />
    </div>
  );
}
