import React from 'react';
import { Chip } from "@nextui-org/react";
import {
  TbDeviceDesktop,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReactNative,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandGit,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandBitbucket,
  TbBrandFigma,
  TbBrandFirebase,
  TbBrandVercel,
  TbBrandAws,
  TbBrandDocker,
  TbBrandStripe,
  TbBrandPython,
} from "react-icons/tb";
import {
  SiDigitalocean,
  SiPostgresql,
  SiFastapi,
  SiJira,
  SiConfluence,
} from "react-icons/si";

const BrandChip = ({ brand, ...props }) => {
  const brands = {
    'React.js': {
      color: "hover:bg-[#00d8ff]",
      icon: <TbBrandReact size={18} />,
    },
    'Next.js': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandNextjs size={18} />,
    },
    'Node.js': {
      color: "hover:bg-[#215732]",
      icon: <TbBrandNodejs size={18} />,
    },
    'React Native': {
      color: "hover:bg-[#00d8ff]",
      icon: <TbBrandReactNative size={18} />,
    },
    'TypeScript': {
      color: "hover:bg-[#007acc]",
      icon: <TbBrandTypescript size={18} />,
    },
    'JavaScript': {
      color: "hover:bg-[#f0db4f]",
      icon: <TbBrandJavascript size={18} />,
    },
    'HTML5': {
      color: "hover:bg-[#e34f26]",
      icon: <TbBrandHtml5 size={18} />,
    },
    'CSS3': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandCss3 size={18} />,
    },
    'Tailwind CSS': {
      color: "hover:bg-[#38bdf8]",
      icon: <TbBrandTailwind size={18} />,
    },
    'PostgreSQL': {
      color: "hover:bg-[#336791]",
      icon: <SiPostgresql size={18} />,
    },
    'MongoDB': {
      color: "hover:bg-[#4db33d]",
      icon: <TbBrandMongodb size={18} />,
    },
    'Git': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandGit size={18} />,
    },
    'GitHub': {
      color: "hover:bg-[#4078c0]",
      icon: <TbBrandGithub size={18} />,
    },
    'GitLab': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandGitlab size={18} />,
    },
    'Bitbucket': {
      color: "hover:bg-[#205081]",
      icon: <TbBrandBitbucket size={18} />,
    },
    'Figma': {
      color: "hover:bg-[#9747ff]",
      icon: <TbBrandFigma size={18} />,
    },
    'Firebase': {
      color: "hover:bg-[#FFCA28]",
      icon: <TbBrandFirebase size={18} />,
    },
    'Vercel': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandVercel size={18} />,
    },
    'Digital Ocean': {
      color: "hover:bg-[#008bcf]",
      icon: <SiDigitalocean size={18} />,
    },
    'AWS': {
      color: "hover:bg-[#ff9900]",
      icon: <TbBrandAws size={18} />,
    },
    'Docker': {
      color: "hover:bg-[#000000]",
      icon: <TbBrandDocker size={18} />,
    },
    'Stripe': {
      color: "hover:bg-[#00afe1]",
      icon: <TbBrandStripe size={18} />,
    },
    'Python': {
      color: "hover:bg-[#ffde57]",
      icon: <TbBrandPython size={18} />,
    },
    'FastAPI': {
      color: "hover:bg-[#ffde57]",
      icon: <SiFastapi size={18} />,
    },
    'Jira': {
      color: "hover:bg-[#003366]",
      icon: <SiJira size={18} />,
    },
    'Confluence': {
      color: "hover:bg-[#003366]",
      icon: <SiConfluence size={18} />,
    },
  };

  let { color, icon } = brands[brand] || {
    color: "hover:bg-[#000000]",
    icon: <TbDeviceDesktop size={18} />,
  };

  return (
    <Chip
      classNames={{
        base: color+" transition shadow-black-500/30 select-none hover:text-white",
        content: "drop-shadow shadow-black"
      }}
      // size="mini"
      startContent={icon}
      variant='shadow'
      {...props}
    >
      {brand}
    </Chip>
  );
};

export default BrandChip;
