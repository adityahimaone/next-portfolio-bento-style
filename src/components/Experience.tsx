"use client";

import React, { useEffect, useState } from "react";
import { experienceData } from "@/lib/data";
import { IExperienceData } from "@/lib/types";
import { ScrollArea } from "./ui/scroll-area";
import { useTranslations } from "next-intl";

type Props = {};

const Experience = (props: Props) => {
  const t = useTranslations("experience");

  const [experienceList, setExperienceList] =
    useState<IExperienceData[]>(experienceData);

  useEffect(() => {
    const reversed = [...experienceData].reverse();
    setExperienceList(reversed);
  }, []);

  return (
    <ScrollArea>
      {experienceList?.map((item, i) => (
        <div key={item.id} className="relative py-2 pl-6 group">
          <div className="mb-1 text-sm font-medium text-primary-ext-500 sm:mb-0">
            {item.subtitle}
          </div>
          <div className="group-last:before:hidden before:absolute after:absolute before:left-2 after:left-2 mb-1 after:box-content flex after:h-2 before:h-full after:w-2 before:-translate-x-1/2 after:-translate-x-1/2 before:translate-y-3 flex-col items-start before:self-start after:rounded-full after:border-4 after:border-slate-100 before:bg-slate-300 before:px-px after:bg-pallet-blue-5 after:translate-y-1.5">
            <time className="left-0 mb-1 inline-flex h-5 w-36 items-center justify-center rounded-full font-semibold uppercase text-white translate-y-0.5 text-[10px] bg-pallet-blue-4">
              {t(`${i}.time`)}
            </time>
            <div className="text-xs font-light text-pallet-blue-3">
              {item.title}
            </div>
          </div>
          <p className="text-xs text-slate-400">{t(`${i}.desc`)}</p>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Experience;
