"use client";

import { TbBrandGithub, TbBrandFigma, TbExternalLink, TbLockCode } from "react-icons/tb";
import { FaApple } from "react-icons/fa";
import ProjectButton from "./ProjectButton";

const githubBaseUrl = "https://github.com/jeremytraini/";

const ProjectActionLinks = ({ project, openModal, surface = "unknown" }) => {
  const repositoryName = project.repository?.name || project.githubRepo;
  const isPrivateRepository = project.repository?.private ?? project.isPrivate;
  const liveLink = project.links?.live ?? project.liveLink;
  const figmaLink = project.links?.figma ?? project.figmaLink;
  const appStoreLink = project.links?.appStore ?? project.appStoreUrl;
  const getAnalyticsProps = (intent, destinationType, destinationLabel, destinationUrl) =>
    JSON.stringify({
      intent,
      destination_type: destinationType,
      destination_label: destinationLabel,
      destination_url: destinationUrl,
      project_id: project.id,
      project_title: project.title,
      surface,
    });

  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {repositoryName &&
        (!isPrivateRepository ? (
          <ProjectButton
            tooltip="View this project on github.com"
            className="bg-gray-900 border-gray-600 hover:bg-gray-800 text-white"
            href={githubBaseUrl + repositoryName}
            isExternal
            shortText="GitHub"
            longText="View on GitHub"
            endIcon={<TbBrandGithub size={22} />}
            data-analytics-click="project_action_click"
            data-analytics-props={getAnalyticsProps(
              "view_source_code",
              "external_repository",
              "github",
              githubBaseUrl + repositoryName
            )}
          />
        ) : (
          <ProjectButton
            tooltip="Request access to the source code of this project"
            onPress={() => openModal?.(project)}
            shortText="GitHub"
            longText="View on GitHub"
            endIcon={<TbLockCode color="gray" size={22} />}
            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
            data-analytics-click="project_action_click"
            data-analytics-props={getAnalyticsProps(
              "request_private_repo_access",
              "modal",
              "request_access",
              "mailto"
            )}
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
          data-analytics-click="project_action_click"
          data-analytics-props={getAnalyticsProps(
            "view_design",
            "external_design",
            "figma",
            figmaLink
          )}
        />
      )}
      {appStoreLink && (
        <ProjectButton
          tooltip={`View ${project.title} on the App Store`}
          className="bg-gray-900 border-gray-600 hover:bg-gray-800 text-white"
          href={appStoreLink}
          isExternal
          shortText="App Store"
          longText="View on the App Store"
          endIcon={<FaApple size={22} />}
          data-analytics-click="project_action_click"
          data-analytics-props={getAnalyticsProps(
            "view_app_listing",
            "external_store",
            "app_store",
            appStoreLink
          )}
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
          data-analytics-click="project_action_click"
          data-analytics-props={getAnalyticsProps(
            "view_live_project",
            liveLink === "#" ? "placeholder" : "external_live_site",
            "live_site",
            liveLink
          )}
        />
      )}
    </div>
  );
};

export default ProjectActionLinks;
