import React from 'react';
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProjectCard({ project, ...props }) {
  return (
    <div
      className="mx-4 px-4 h-64 w-[100%-4px] flex justify-center items-center relative overflow-hidden rounded-2xl"
      {...props}
    >
      <NextImage
        src={project.imageUrl || "/images/thumbnails/placeholder.png"}
        alt={"Project thumbnail for " + project.title}
        className="object-cover"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(project.id).scrollIntoView({
            block: "center",
            inline: "center"
          });
        }}
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
        priority
      />
    </div>
  );
}
