import React from 'react';
import Image from 'next/image';

const experiences = [
  {
    type: 'High School',
    name: 'Barker College',
    duration: '2016 - 2020',
    // description: 'Description about my time at school',
    imageUrl: 'barker_logo.png',
    backgroundColor: '#e02725',
    scale: 0.8
  },
  {
    type: 'University',
    name: 'UNSW Sydney',
    duration: '2021 - Present',
    // description: 'Description about your time at university',
    imageUrl: 'unsw_logo.png',
    backgroundColor: '#fee600',
    scale: 0.7
  },
  {
    type: 'Internship',
    name: 'InfoTrack',
    duration: '2022 - 2023',
    // description: 'Description about my work experience',
    imageUrl: 'infotrack_logo.png',
    backgroundColor: '#ffffff',
    scale: 0.8
  },
  {
    type: 'Next',
    name: 'Your Company?',
    duration: '2023',
    // description: 'Description about my work experience',
    imageUrl: 'infotrack_logo.png',
    backgroundColor: '#ffffff',
    scale: 0.8
  }
];

function TimelineItem({ data }) {
  return (
    <div className="timeline-item flex space-x-4 my-8">
      <div className="-ml-2 mt-8 w-4 h-4 bg-default-600 rounded shadow-xl"></div>
      <div
        className="flex-none w-20 h-20 rounded-xl relative shadow-xl"
        style={{ backgroundColor: data.backgroundColor }}
      >
        <Image
          src={"/images/" + data.imageUrl}
          alt={data.type}
          style={{ objectFit: "contain", transform: `scale(${data.scale})` }}
          fill={true}
        />
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
    <div className="pb-8 w-full h-full flex flex-row items-center">
      <div className="border-l-3 border-b-3 border-default-400 rounded-b-lg h-full flex-1">
        {experiences.slice(0,2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
      <div className="border-l-3 border-t-3 border-default-400 rounded-b-lg h-full flex-1" />
      <div className="h-full flex-1">
        {experiences.slice(2).map((experience, index) => (
          <TimelineItem key={index} data={experience} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;