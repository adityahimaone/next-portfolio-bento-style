"use client";

import { IBentoGridItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  idx,
  value,
  active,
}: IBentoGridItem) => {
  return (
    <motion.div
      {...value}
      transition={{ delay: idx * 0.3 }}
      initial={{ opacity: 0 }}
      animate={active ? { opacity: 1 } : { opacity: 0.3 }}
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
};

export default BentoGridItem;
