"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = ({ className, sequence }) => {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={30}
      wrapper="div"
      className={className}
    />
  )
}

export default TypingEffect