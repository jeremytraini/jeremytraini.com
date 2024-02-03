import React from 'react';
import { HiRocketLaunch } from "react-icons/hi2";
import BarkerLogo from '../public/images/timeline/barker_logo.png';
import UnswLogo from '../public/images/timeline/unsw_logo.png';
import InfotrackLogo from '../public/images/timeline/infotrack_logo.png';
import CreditorWatchLogo from '../public/images/timeline/creditorwatch_logo.png';
import TimelineLogo from './TimelineLogo';
import { Link } from "@nextui-org/react";

const icons = {
  "barker": <TimelineLogo src={BarkerLogo} organisation="Barker College" scale={0.8} />,
  "unsw": <TimelineLogo src={UnswLogo} organisation="UNSW" scale={0.7} />,
  "infotrack": <TimelineLogo src={InfotrackLogo} organisation="InfoTrack" scale={0.8} />,
  "creditorwatch": <TimelineLogo src={CreditorWatchLogo} organisation="CreditorWatch" scale={0.8} />,
  "rocket": <HiRocketLaunch color="white" className="w-12 h-12" />
};

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item flex space-x-4 my-8">
      <div className="-ml-2 mt-8 w-4 h-4 bg-default-600 rounded shadow-xl" />
      <Link
        href={data.website}
        isExternal
        isBlock
        color="foreground"
        className="w-20 h-20 rounded-xl relative shadow-xl flex justify-center items-center"
        style={{ backgroundColor: data.backgroundColor }}
      >
        {icons[data.icon]}
      </Link>
      <div className="flex-1">
        <div>
          <h2 className="text-xl mb-2">{data.type}</h2>
          <h3 className="text-l font-bold mb-2" style={{ whiteSpace: "nowrap" }}>{data.name}</h3>
          <p className="text-gray-500">{data.duration}</p>
          <p className="mt-2 text-gray-700">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem