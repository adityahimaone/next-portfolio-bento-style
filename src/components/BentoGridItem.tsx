"use client";

import { IBentoGridItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index,
  active,
}: IBentoGridItem) => {
  return (
    <motion.div
      transition={{ delay: index * 0.2 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        active
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.3, y: 0, scale: 1 }
      }
      className={cn(
        "group-draggable row-span-1 rounded-[32px] overflow-hidden group/bento hover:shadow-xl transition-all ease-in-out duration-200 shadow-input dark:shadow-none dark:bg-card dark:border-white/[0.5] bg-white border border-transparent justify-between flex flex-col space-y-4 cursor-grab",
        className
      )}
    >
      {header}
      {icon || title || description ? (
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          {title && (
            <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          )}
        </div>
      ) : null}
    </motion.div>
  );
};

export default BentoGridItem;
