import React from 'react';
import Image from 'next/image';

function TimelineItem({ data }) {
  return (
    <div className="timeline-item flex space-x-4 my-8" >
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
            sizes="160px"
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

export default TimelineItem