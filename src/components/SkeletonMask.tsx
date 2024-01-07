import React from "react";

const SkeletonMask = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-[28px] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-300 dark:bg-black"></div>
  );
};

export default SkeletonMask;
