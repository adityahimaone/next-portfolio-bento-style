"use client";

import React, { useEffect, useState } from "react";
import { experienceData } from "@/lib/data";
import { IExperienceData } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";

type Props = {};

const Experience = (props: Props) => {
  const [experienceList, setExperienceList] =
    useState<IExperienceData[]>(experienceData);

  useEffect(() => {
    const reversed = [...experienceData].reverse();
    setExperienceList(reversed);
  }, []);

  return (
    <ScrollArea>
      {experienceList?.map((item) => (
        <div key={item.id} className="relative pl-6 py-2 group">
          <div className="font-medium text-sm text-primary-ext-500 mb-1 sm:mb-0">
            {item.subtitle}
          </div>
          <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 after:w-2 after:h-2 after:bg-pallet-blue-5 after:border-4 after:box-content after:border-slate-100 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
            <time className="left-0 translate-y-0.5 inline-flex items-center justify-center text-[10px] font-semibold uppercase w-36 h-5 mb-1 text-white bg-pallet-blue-4 rounded-full">
              {item.time}
            </time>
            <div className="text-xs font-bold text-pallet-blue-3">
              {item.title}
            </div>
          </div>
          <p className="text-slate-400 text-xs">{item.desc}</p>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Experience;
