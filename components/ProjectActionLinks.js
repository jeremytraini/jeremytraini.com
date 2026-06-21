"use client";

import { TbBrandGithub, TbBrandFigma, TbExternalLink, TbLockCode } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import ProjectButton from "./ProjectButton";

const githubBaseUrl = "https://github.com/jeremytraini/";

const ProjectActionLinks = ({ project, openModal }) => {
  const repositoryName = project.repository?.name || project.githubRepo;
  const isPrivateRepository = project.repository?.private ?? project.isPrivate;
  const liveLink = project.links?.live ?? project.liveLink;
  const figmaLink = project.links?.figma ?? project.figmaLink;
  const appStoreLink = project.links?.appStore ?? project.appStoreUrl;

  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {repositoryName &&
        (!isPrivateRepository ? (
          <ProjectButton
            tooltip="View this project on github.com"
            className="bg-black border-black hover:bg-gray-800 text-white"
            href={githubBaseUrl + repositoryName}
            isExternal
            shortText="GitHub"
            longText="View on GitHub"
            endIcon={<TbBrandGithub size={22} />}
          />
        ) : (
          <ProjectButton
            tooltip="Request access to the source code of this project"
            onPress={() => openModal?.(project)}
            shortText="GitHub"
            longText="View on GitHub"
            endIcon={<TbLockCode color="gray" size={22} />}
            variant="ghost"
          />
        ))}
      {figmaLink && (
        <ProjectButton
          tooltip="View the prototype on figma.com"
          className="border-[#9747ff] bg-[#9747ff] text-white"
          href={figmaLink}
          isExternal
          shortText="Figma"
          longText="View on Figma"
          endIcon={<TbBrandFigma size={22} />}
        />
      )}
      {appStoreLink && (
        <ProjectButton
          tooltip={`View ${project.title} on the App Store`}
          className="bg-black border-black hover:bg-gray-800 text-white"
          href={appStoreLink}
          isExternal
          shortText="App Store"
          longText="View on the App Store"
          endIcon={<FaApple size={22} />}
        />
      )}
      {liveLink && (
        <ProjectButton
          tooltip={`Go to ${liveLink}`}
          href={liveLink}
          isExternal={liveLink !== "#"}
          shortText="Live"
          longText="View Live"
          endIcon={<TbExternalLink size={22} />}
          color="primary"
        />
      )}
    </div>
  );
};

export default ProjectActionLinks;
