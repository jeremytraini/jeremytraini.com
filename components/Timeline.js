import React from 'react';
import Image from 'next/image';
import { HiRocketLaunch } from "react-icons/hi2";
import BarkerLogo from '../public/images/timeline/barker_logo.png';
import UnswLogo from '../public/images/timeline/unsw_logo.png';
import InfotrackLogo from '../public/images/timeline/infotrack_logo.png';

const experiences = [
  {
    type: 'High School',
    name: 'Barker College',
    duration: '2013 - 2020',
    image: BarkerLogo,
    backgroundColor: '#e02725',
    scale: 0.8
  },
  {
    type: 'University',
    name: 'UNSW Sydney',
    duration: '2021 - Present',
    image: UnswLogo,
    backgroundColor: '#fee600',
    scale: 0.7
  },
  {
    type: 'Internship',
    name: 'InfoTrack',
    duration: '2022 - 2023',
    image: InfotrackLogo,
    backgroundColor: '#ffffff',
    scale: 0.8
  },
  {
    type: 'Next',
    name: 'Your Company?',
    duration: '2023',
    icon: <HiRocketLaunch color="white" className="w-12 h-12" />,
    backgroundColor: '#ffa500',
    scale: 0.8
  }
];

function TimelineItem({ data }) {
  return (
    <div className="timeline-item flex space-x-4 my-8">
      <div className="-ml-2 mt-8 w-4 h-4 bg-default-600 rounded shadow-xl" />
      <div
        className="w-20 h-20 rounded-xl relative shadow-xl flex justify-center items-center"
        style={{ backgroundColor: data.backgroundColor }}
      >
        {data.image && (
          <Image
            src={data.image}
            style={{ objectFit: "contain", transform: `scale(${data.scale})` }}
            fill={true}
            alt={"Logo for " + data.name}
            sizes="80px"
            quality={75}
          />
        )}
        {data.icon}
      </div>
      <div className="flex-1">
        <div>
          <h3 className="text-xl mb-2">{data.type}</h3>
          <h3 className="text-xl font-bold mb-2">{data.name}</h3>
          <p className="text-gray-500">{data.duration}</p>
          <p className="mt-2 text-gray-700">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="px-6 pb-8 flex flex-col md:flex-row justify-center">
      <div className="border-l-3 md:border-b-3 border-default-400 md:rounded-bl-lg flex-1">
        {experiences.slice(0,2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
      <div className="hidden w-20 md:flex md:flex-row md:align-self mr-[-3px]">
        <div className="hidden md:block border-b-3 border-r-3 border-default-400 rounded-br-lg h-1/2 w-1/2 self-end mr-[-3px]" />
        <div className="hidden md:block border-l-3 border-t-3 border-default-400 rounded-tl-lg h-1/2 w-1/2" />
      </div>
      <div className="hidden md:block border-t-3 border-r-3 border-default-400 rounded-tr-lg w-10" />
      <div className="flex-1 border-l-3 border-default-400 md:border-none">
        {experiences.slice(2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;