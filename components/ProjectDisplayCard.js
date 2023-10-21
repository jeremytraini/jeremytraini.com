import React from 'react';
import { Card, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ProjectCard({ project, ...props }) {
  return (
    <a
      href={"#"+project.id}
      className="cursor-default w-full px-4 rounded-xl h-64 flex justify-center items-center"
      {...props}
    >
      <Image
        alt="Project Thumbnail"
        className="object-cover h-64"
        src={project.imageUrl || "https://via.placeholder.com/450x350"}
        isZoomed
      />
    </a>
  );
}
