import React from 'react';
import Image from 'next/image';

const TimelineLogo = ({ src, organisation, scale }) => {
  return (
    <Image
      src={src}
      style={{ objectFit: "contain", transform: `scale(${scale})` }}
      alt={organisation + " logo"}
      fill={true}
      sizes="160px"
    />
  )
}

export default TimelineLogo