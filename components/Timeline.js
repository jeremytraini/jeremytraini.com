"use client";
import React, { useEffect, useRef } from 'react';
import TimelineItem from './TimelineItem';
import { motion, useInView, useAnimation } from "framer-motion";
import experiences from "../data/experiences.yaml";

function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView, itemControls]);

  return (
    <motion.div
      ref={ref}
      className="px-6 pb-8 flex flex-col md:flex-row justify-center"
    >
      <div className="border-l-3 md:border-b-3 border-blue-500 md:rounded-bl-lg flex-1">
        <motion.div>
          {experiences.slice(0,2).map((experience, index) => (
            <motion.div
              key={index}
              animate={itemControls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              initial="hidden"
            >
              <TimelineItem key={index} data={experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="hidden w-20 md:flex md:flex-row md:align-self mr-[-3px]">
        <div className="hidden md:block border-b-3 border-r-3 border-blue-500 rounded-br-lg h-1/2 w-1/2 self-end mr-[-3px]" />
        <div className="hidden md:block border-l-3 border-t-3 border-blue-500 rounded-tl-lg h-1/2 w-1/2" />
      </div>
      <div className="hidden md:block border-t-3 border-r-3 border-blue-500 rounded-tr-lg w-10" />
      <div className="flex-1 border-l-3 border-blue-500 md:border-none mt-[-32px] md:mt-0">
        <div>
          {experiences.slice(2).map((experience, index) => (
            <motion.div
              key={index}
              animate={itemControls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 2) }}
              initial="hidden"
            >
              <TimelineItem key={index} data={experience} />
            </motion.div>
          ))}
        </div>
        {/* Arrow at the end of the timeline line */}
        <div className="h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-blue-500 ml-[-7.5px] -mb-[5px]"></div>
      </div>
    </motion.div>
  );
}

export default Timeline;