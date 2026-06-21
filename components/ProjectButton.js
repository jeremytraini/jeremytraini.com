"use client";

import React from 'react';
import { Tooltip, Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

const ProjectButton = ({ tooltip, className, href, isExternal, onPress, shortText, longText, endIcon, ...props }) => {
  return (
    <Tooltip className="ml-1" showArrow={true} content={tooltip}>
      <Button
        as={href ? Link : undefined}
        className={className}
        href={href}
        isExternal={isExternal}
        size="small"
        onPress={onPress}
        endContent={endIcon}
        {...props}
      >
        <div className="hidden md:inline-block">{longText}</div>
        <div className="inline-block md:hidden">{shortText}</div>
      </Button>
    </Tooltip>
  )
}

export default ProjectButton
