"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

export const BentoGrid = SortableContainer(
  ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export const BentoGridItem = SortableElement(
  ({
    className,
    title,
    description,
    header,
    icon,
    idx,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    idx: number;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: idx * 0.3 }}
        className={cn(
          "row-span-1 rounded-[32px] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        {icon || title || description ? (
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            {title && (
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                {title}
              </div>
            )}
            {description && (
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                {description}
              </div>
            )}
          </div>
        ) : null}
      </motion.div>
    );
  }
);
