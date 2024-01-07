"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #480CA8, #F72585, #4361EE, #4CC9F0)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-[32px]">
        <div className="flex justify-center items-center h-full">
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkeletonThree;
