import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Github } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  selected: string;
  options: string[];
  handleChange: (status: string) => void;
}

const MenuNavigation = ({ selected, options, handleChange }: Props) => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  console.log(locale);

  return (
    <MaxWidthWrapper className="flex flex-col items-center py-6 sm:flex-row">
      <div className="relative">
        <h2 className="text-bold mb-2 animate-gradient bg-[linear-gradient(to_right,theme(colors.pallet-blue.1),theme(colors.pallet-blue.2),theme(colors.sky.400),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1),theme(colors.sky.400),theme(colors.pallet-blue.2),theme(colors.pallet-blue.1))] bg-[length:200%_auto] bg-clip-text font-mochi text-2xl text-transparent sm:mb-0">
          adit.
        </h2>
      </div>
      <div className="mx-auto flex w-fit flex-wrap gap-2 rounded-full bg-slate-200 p-1.5 dark:border dark:border-white/[0.2] dark:bg-card">
        {options.map((option) => (
          <Chip
            text={t(option)}
            option={option}
            selected={selected === option}
            setSelected={handleChange}
            key={option}
          />
        ))}
        <div className="flex items-center justify-center rounded-full bg-slate-300 p-2 shadow-md">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={`${locale}/repository`}>
                  <Github width={18} height={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Repository Selected</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

const Chip = ({
  text,
  option,
  selected,
  setSelected,
}: {
  text: string;
  option: string;
  selected: boolean;
  setSelected: (status: string) => void;
}) => {
  return (
    <button
      onClick={() => setSelected(option)}
      className={`${
        selected
          ? 'text-gray-900'
          : 'text-gray-500 hover:bg-slate-700 hover:text-slate-200'
      } relative rounded-md px-3.5 py-1 text-sm transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-white to-slate-50 shadow-md dark:from-slate-500 dark:to-slate-300 dark:shadow-gray-700"
        ></motion.span>
      )}
    </button>
  );
};

export default MenuNavigation;
