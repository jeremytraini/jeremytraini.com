"use client";
import React, { useEffect } from "react";
import NextImage from "next/image";

const ProjectCard = ({ project, ...props }) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll("img").forEach(function (img) {
        img.addEventListener("load", function () {
          img.classList.add("pageloaded");
        });
        if (img.complete) img.classList.add("pageloaded");
      });
    });
  }, []);

    return (
      <div
        className="mx-4 h-64 flex justify-center items-center relative overflow-hidden rounded-2xl"
        {...props}
      >
        <NextImage
          src={project.imageUrl}
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

export default ProjectCard;