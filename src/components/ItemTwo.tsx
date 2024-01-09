"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex h-full w-full flex-1 flex-col rounded-lg min-h-[6rem] bg-dot-black/[0.2] space-y-2 dark:bg-dot-white/[0.2]"
      style={{
        background:
          "linear-gradient(-45deg, #480CA8, #F72585, #4361EE, #4CC9F0)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-[32px]">
        <div className="flex flex-col py-6 sm:py-0 gap-y-3 h-full items-center justify-center">
          <ThemeToggle />
          <LangToggle />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonThree;
