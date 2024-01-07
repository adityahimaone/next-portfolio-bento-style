import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../public/animations/animation-cat.json";
import { motion } from "framer-motion";
import {
  DiJqueryLogo,
  DiJsBadge,
  DiReact,
  DiCss3,
  DiSass,
  DiNodejsSmall,
  DiGit,
  DiNpm,
  DiGo,
  DiSwift,
} from "react-icons/di";
import { cn } from "@/lib/utils";

const techStackData = [
  {
    id: 1,
    title: "React JS",
    icons: <DiReact className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-2",
  },
  {
    id: 2,
    title: "Javascript",
    icons: <DiJsBadge className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-1",
  },
  {
    id: 3,
    title: "jQuery",
    icons: <DiJqueryLogo className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-pink-1",
  },
  {
    id: 4,
    title: "CSS 3",
    icons: <DiCss3 className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-3",
  },
  {
    id: 5,
    title: "SASS",
    icons: <DiSass className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-5",
  },
  {
    id: 6,
    title: "GIT",
    icons: <DiGit className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-pink-2",
  },
  {
    id: 7,
    title: "Node JS",
    icons: <DiNodejsSmall className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-4",
  },
  {
    id: 8,
    title: "Go",
    icons: <DiGo className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-blue-1",
  },
  {
    id: 8,
    title: "Swift",
    icons: <DiSwift className="group-hover:opacity-0" />,
    color: "text-white",
    background: "bg-pallet-purple-2",
  },
];

const TechStack = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row h-full">
      <div className="grid grid-cols-4 sm:grid-cols-3 sm:grid-rows-3 gap-2 flex-1">
        {isMounted &&
          techStackData.map((item, i) => (
            <div
              key={item.id}
              className="flex justify-center items-center hover:scale-105 group transition-all ease-in-out duration-200"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-5 rounded-md flex justify-center items-center cursor-default group-hover:bg-opacity-25 group-hover:shadow-xl group-hover:[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
                  item.background,
                  item.color
                )}
              >
                <div className="text-4xl">{item.icons}</div>
              </motion.div>
              <span
                className={`absolute text-white px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              >
                {item.title}
              </span>
            </div>
          ))}
      </div>
      <div className="h-full flex-1">
        <div
          className="flex items-center justify-center h-full"
          aria-hidden="true"
        >
          {isMounted && (
            <Player autoplay loop src={Animation} className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
