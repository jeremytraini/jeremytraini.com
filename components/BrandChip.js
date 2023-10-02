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
  TbBrandPostgresql,
  TbBrandMongodb,
  TbBrandGit,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandBitbucket,
  TbBrandFigma,
  TbBrandAdobephotoshop,
  TbBrandFirebase,
  TbBrandHeroku,
  TbBrandNetlify,
  TbBrandVercel,
  TbBrandAws,
  TbBrandGooglecloud,
  TbBrandDocker,
  TbBrandStripe,
} from "react-icons/tb";
import { LiaDigitalOcean } from "react-icons/lia";

const BrandChip = ({ brand }) => {
  const brands = {
    'React.js': {
      color: "#00d8ff",
      icon: <TbBrandReact size={18} />,
    },
    'Next.js': {
      color: "#000000",
      icon: <TbBrandNextjs size={18} />,
    },
    'Node.js': {
      color: "#215732",
      icon: <TbBrandNodejs size={18} />,
    },
    'React Native': {
      color: "#00d8ff",
      icon: <TbBrandReactNative size={18} />,
    },
    'TypeScript': {
      color: "#007acc",
      icon: <TbBrandTypescript size={18} />,
    },
    'JavaScript': {
      color: "#f0db4f",
      icon: <TbBrandJavascript size={18} />,
    },
    'HTML5': {
      color: "#e34f26",
      icon: <TbBrandHtml5 size={18} />,
    },
    'CSS3': {
      color: "primary",
      icon: <TbBrandCss3 size={18} />,
    },
    'Tailwind CSS': {
      color: "#38bdf8",
      icon: <TbBrandTailwind size={18} />,
    },
    'PostgreSQL': {
      color: "#336791",
      icon: <TbBrandPostgresql size={18} />,
    },
    'MongoDB': {
      color: "#4db33d",
      icon: <TbBrandMongodb size={18} />,
    },
    'Git': {
      color: "primary",
      icon: <TbBrandGit size={18} />,
    },
    'GitHub': {
      color: "#4078c0",
      icon: <TbBrandGithub size={18} />,
    },
    'GitLab': {
      color: "primary",
      icon: <TbBrandGitlab size={18} />,
    },
    'Bitbucket': {
      color: "#205081",
      icon: <TbBrandBitbucket size={18} />,
    },
    'Figma': {
      color: "#9747ff",
      icon: <TbBrandFigma size={18} />,
    },
    'Adobe Photoshop': {
      color: "primary",
      icon: <TbBrandAdobephotoshop size={18} />,
    },
    'Firebase': {
      color: "#FFCA28",
      icon: <TbBrandFirebase size={18} />,
    },
    'Heroku': {
      color: "#79589f",
      icon: <TbBrandHeroku size={18} />,
    },
    'Netlify': {
      color: "#00ad9f",
      icon: <TbBrandNetlify size={18} />,
    },
    'Vercel': {
      color: "#000000",
      icon: <TbBrandVercel size={18} />,
    },
    'Digital Ocean': {
      color: "#008bcf",
      icon: <LiaDigitalOcean size={18} />,
    },
    'AWS': {
      color: "#ff9900",
      icon: <TbBrandAws size={18} />,
    },
    'Google Cloud': {
      color: "#4285f4",
      icon: <TbBrandGooglecloud size={18} />,
    },
    'Docker': {
      color: "primary",
      icon: <TbBrandDocker size={18} />,
    },
    'Stripe': {
      color: "#00afe1",
      icon: <TbBrandStripe size={18} />,
    },
  };

  const { color, icon } = brands[brand] || {
    color: "default",
    icon: <TbDeviceDesktop size={18} />,
  };

  return (
    <Chip
      // style={{ borderColor: color }}
      style={{ backgroundColor: color }}
      size="mini"
      startContent={icon}
      // variant="bordered"
    >
      {brand}
    </Chip>
  );
};

export default BrandChip;
