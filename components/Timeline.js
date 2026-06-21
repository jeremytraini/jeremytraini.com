"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "@nextui-org/react";
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import experiences from "../data/experiences.yaml";
import clsx from "clsx";
import { fontGabarito } from "@/config/fonts";

import InfotrackLogo from '../public/images/timeline/infotrack_logo.png';
import PSALogo from '../public/images/timeline/psa_logo.png';
import SunswiftLogo from '../public/images/timeline/sunswift_logo.png';
import CommbankLogo from '../public/images/timeline/commbank_logo.png';
import PearlerLogo from '../public/images/timeline/pearler_logo.png';

const logoMap = {
  infotrack: InfotrackLogo,
  psa:       PSALogo,
  sunswift:  SunswiftLogo,
  commbank:  CommbankLogo,
  pearler:   PearlerLogo,
};

const roleColor = {
  "Internship":      "text-blue-700",
  "Freelance":       "text-violet-600",
  "Department Lead": "text-amber-600",
  "Honours Thesis":  "text-emerald-600",
};

function parseRole(type) {
  const m = type.match(/^([^(]+?)(?:\s*\(([^)]+)\))?$/);
  return { main: m?.[1]?.trim() ?? type, sub: m?.[2]?.trim() ?? null };
}

function ExperienceCard({ data, index, controls }) {
  const logo = logoMap[data.icon];
  const { main, sub } = parseRole(data.type);
  const color = roleColor[main] ?? "text-blue-700";

  return (
    <motion.div
      className="flex items-start gap-3"
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {/* Node dot — blue pulse for active roles */}
      <div className={clsx(
        "-ml-[9px] mt-5 flex-shrink-0 w-4 h-4 rounded-full border-[3px] border-gray-100 shadow z-10",
        data.duration.toString().includes("Present") ? "bg-blue-500" : "bg-gray-300"
      )} />

      {/* Whole card is the link */}
      <Link
        href={data.website}
        isExternal
        isBlock
        color="foreground"
        className="flex-1 no-underline bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
      >
        <div className="p-3 w-full">
          <div className="flex items-start gap-2.5">
            {/* Logo */}
            <div className="relative w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden flex-shrink-0">
              {logo && (
                <Image
                  src={logo}
                  alt={data.name + " logo"}
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                />
              )}
            </div>

            {/* Name + role + duration */}
            <div className="flex-1 min-w-0 pt-0.5">
              <p className={clsx(fontGabarito.className, "text-gray-900 text-base leading-tight truncate")}>{data.name}</p>
              <p className="text-xs text-gray-600 mt-0.5">{main}</p>
              {sub && <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">{sub}</p>}
              <p className="text-gray-500 text-[11px] font-mono mt-1">{data.duration}</p>
            </div>

            {/* Icon — top-right, same row as logo and name */}
            <HiArrowTopRightOnSquare className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // Keep the single-column layout through medium widths.
  // The two-column snake switches on at large screens, where there is enough
  // room for the centre connectors and card widths to stay aligned.
  const leftItems  = experiences.slice(0, 3);
  const rightItems = experiences.slice(3);

  return (
    <motion.div ref={ref} className="w-full px-6 pb-8">
      <div className="md:hidden">
        <div className="flex flex-col gap-6 border-l-3 border-gray-300 py-6">
          {leftItems.map((exp, i) => (
            <ExperienceCard key={i} data={exp} index={i} controls={controls} />
          ))}
        </div>

        <div className="mt-[-24px] flex flex-col gap-6 border-l-3 border-blue-300 py-6">
          {rightItems.map((exp, i) => (
            <ExperienceCard key={i} data={exp} index={i + leftItems.length} controls={controls} />
          ))}

          <div className="self-start h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-blue-300 ml-[-7.5px]" />
        </div>
      </div>

      <div className="hidden w-full justify-center md:flex">
        {/* ── Left column: 3 items, natural top-to-bottom flow ── */}
        <div className={clsx(
          "min-w-0 flex-1 border-l-3 border-gray-300",
          "md:border-b-3 md:rounded-bl-[44px]",
          "flex flex-col gap-6 py-6"
        )}>
          {leftItems.map((exp, i) => (
            <ExperienceCard key={i} data={exp} index={i} controls={controls} />
          ))}
        </div>

        {/* ── U-turn (desktop only): first half gray, second half blue ── */}
        <div className="relative mr-[-3px] flex w-12 flex-row lg:w-20">
          <div className="border-b-3 border-r-3 border-gray-300 rounded-br-[44px] h-1/2 w-1/2 self-end mr-[-3px]" />
          <div className="border-l-3 border-t-3 border-blue-300 rounded-tl-[44px] h-1/2 w-1/2" />
          {/* Arrow at the color-change point — midpoint where gray meets blue */}
          <div className="absolute top-1/2 -translate-y-1/2 h-0 w-0 border-x-[5px] border-x-transparent border-b-[7px] border-b-blue-300" style={{left: 'calc(50% - 1.5px)', transform: 'translate(-50%, -50%)'}} />
        </div>

        {/* ── Top-right connector — blue, carries into the active column ── */}
        <div className="w-6 rounded-tr-[44px] border-t-3 border-r-3 border-blue-300 lg:w-10" />

        {/* ── Right column: 2 items + arrow ── */}
        <div className="mt-0 flex min-w-0 flex-1 flex-col justify-between gap-0 py-6">
          {rightItems.map((exp, i) => (
            <ExperienceCard key={i} data={exp} index={i + leftItems.length} controls={controls} />
          ))}
          {/* Arrow anchored at the bottom of the snake */}
          <div className="self-start h-0 w-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-blue-300 ml-[-7.5px]" />
        </div>
      </div>
    </motion.div>
  );
}
