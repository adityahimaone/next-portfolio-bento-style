import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { motion } from "framer-motion";

interface Props {
  selected: string;
  options: string[];
  handleChange: (status: string) => void;
}

const MenuNavigation = ({ selected, options, handleChange }: Props) => {
  return (
    <MaxWidthWrapper className="py-6 flex items-center flex-col sm:flex-row">
      <div className="relative">
        <h2 className="text-bold mb-2 sm:mb-0 font-mochi text-2xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.pallet-blue.1),theme(colors.pallet-blue.2),theme(colors.sky.400),theme(colors.pallet-purple.1),theme(colors.pallet-pink.1),theme(colors.sky.400),theme(colors.pallet-blue.2),theme(colors.pallet-blue.1))] bg-[length:200%_auto] animate-gradient">
          adit.
        </h2>
      </div>
      <div className="mx-auto w-fit p-1.5 bg-slate-200 dark:bg-card dark:border dark:border-white/[0.2] rounded-full flex flex-wrap gap-2">
        {options.map((option) => (
          <Chip
            text={option}
            selected={selected === option}
            setSelected={handleChange}
            key={option}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: (status: string) => void;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-gray-900"
          : "text-gray-500 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-3.5 py-1 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-white dark:from-slate-500 to-slate-50 dark:to-slate-300 shadow-md dark:shadow-gray-700 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default MenuNavigation;
