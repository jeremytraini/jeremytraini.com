import React from "react";
import NextImage from "next/image";

const ProjectImage = ({ title, src, height, width }) => {
  return (
    <div className="w-full md:w-[50%] lg:w-[60%] h-[250px] md:h-[280px] lg:h-[450px] rounded-xl overflow-hidden relative">
      <div
        className="relative w-full h-full"
      >
        <NextImage
          src={src || "/images/thumbnails/placeholder.png"}
          alt={"Project thumbnail for " + title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>
    </div>
  );
}

export default ProjectImage;