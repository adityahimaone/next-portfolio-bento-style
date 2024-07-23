'use client';

import React, { useEffect, useState } from 'react';
import { experienceData } from '@/lib/data';
import { IExperienceData } from '@/lib/types';
import { ScrollArea } from './ui/scroll-area';
import { useTranslations } from 'next-intl';

type Props = {};

const Experience = (props: Props) => {
  const t = useTranslations('experience');

  const [experienceList, setExperienceList] =
    useState<IExperienceData[]>(experienceData);

  useEffect(() => {
    const reversed = [...experienceData].reverse();
    setExperienceList(reversed);
  }, []);

  return (
    <ScrollArea>
      {experienceList?.map((item, i) => (
        <div key={item.id} className="group relative py-2 pl-6">
          <div className="text-primary-ext-500 mb-1 text-sm font-medium sm:mb-0">
            <span>{item.subtitle}</span>
            <span>
              {item.work_schema && (
                <span className="text-xs font-light text-slate-400">
                  {` - ${item.work_schema}`}
                </span>
              )}
            </span>
          </div>
          <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-100 after:bg-pallet-blue-5 group-last:before:hidden">
            <time className="left-0 mb-1 inline-flex h-5 w-36 translate-y-0.5 items-center justify-center rounded-full bg-pallet-blue-4 text-[10px] font-semibold uppercase text-white">
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
