"use client";

import { IconCloudDownload } from "@tabler/icons-react";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const controls = useAnimation();
  const controlsIcon = useAnimation();

  const [memoji, setMemoji] = useState("/memoji-2.png");

  const hoverAnimation = {
    scale: 1.1,
    transition: { duration: 0.5 },
  };

  const unhoverAnimation = {
    scale: 1,
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-1 flex-col gap-y-3">
      <div className="flex flex-row justify-between">
        <motion.div animate={controls} aria-hidden="true">
          <Image src={memoji} alt="memoji" width={150} height={150} />
        </motion.div>
        <motion.button
          onHoverStart={() => {
            controls.start(hoverAnimation);
            controlsIcon.start({
              scale: 1,
              display: "block",
              transition: { duration: 0.5 },
            });
            setMemoji("/memoji-3.png");
          }}
          onHoverEnd={() => {
            controls.start(unhoverAnimation);
            controlsIcon.start({
              scale: 0,
              display: "none",
              transition: { duration: 0.5 },
            });
            setMemoji("/memoji-2.png");
          }}
          type="button"
          className="relative cursor-pointer inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3F37C9,#7209B7,#B5179E)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-3 py-1 text-sm text-gray-900 dark:text-white backdrop-blur-3xl">
            Resume
            <motion.span initial={{ display: "none" }} animate={controlsIcon}>
              <IconCloudDownload
                className="ml-2 font-semibold"
                size={18}
                strokeWidth={1.5}
              />
            </motion.span>
          </span>
        </motion.button>
      </div>
      <h1 className="leading-relaxed text-base">
        I&apos;m <span className="font-bold text-2xl font-mochi">adit</span>, a
        dedicated Frontend Developer with a journey spanning two vibrant years
        in the dynamic realm of web development.
      </h1>
    </div>
  );
};

export default About;
