"use client";
import React, { useEffect } from "react";
import NextImage from "next/image";
import Link from "next/link";

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
      <Link
        href={`/#${project.id}`}
        className="mx-4 h-64 flex justify-center items-center relative overflow-hidden rounded-2xl"
        aria-label={`View ${project.title}`}
        data-analytics-click="project_open"
        data-analytics-props={JSON.stringify({
          project_id: project.id,
          project_title: project.title,
          source: "home_carousel",
          intent: "jump_to_project_section",
          destination_type: "in_page_anchor",
          destination_label: project.id,
          destination_url: `/#${project.id}`,
        })}
        {...props}
      >
        <NextImage
          src={project.imageUrl || "/images/thumbnails/placeholder.png"}
          alt={"Project thumbnail for " + project.title}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
          priority={false}
        />
      </Link>
    );
  }

export default ProjectCard;
