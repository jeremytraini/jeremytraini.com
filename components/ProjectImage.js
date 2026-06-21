import React from "react";
import NextImage from "next/image";

const ProjectImage = ({ project, priority = false }) => {
  return (
    <div className="w-full md:w-[50%] lg:w-[60%] h-[250px] md:h-[280px] lg:h-[450px] rounded-xl overflow-hidden relative">
      <div className="relative block h-full w-full">
        <NextImage
          src={project.imageUrl || "/images/thumbnails/placeholder.png"}
          alt={"Project thumbnail for " + project.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw"
          priority={priority}
        />
      </div>
    </div>
  );
}

export default ProjectImage;
