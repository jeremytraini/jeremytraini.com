import React from 'react';
import { Tooltip, Button } from "@nextui-org/react";

const ProjectButton = ({ tooltip, className, onPress, shortText, longText, endIcon, ...props }) => {
  return (
    <Tooltip className="ml-1" showArrow={true} content={tooltip}>
      <Button
        className={className}
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