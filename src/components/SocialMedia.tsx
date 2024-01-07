"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { IListSocialMedia } from "@/lib/types";

const socialMediaList: IListSocialMedia[] = [
  {
    icon: <Github className="text-white" />,
    link: "https://github.com",
    text: "Github",
    color: "black dark:text-white",
    borderColor: "border-black dark:border-white",
    shadow: "shadow-black",
  },
  {
    icon: <Linkedin />,
    link: "https://linkedin.com",
    text: "Linkedin",
    color: "pallet-blue-4",
    borderColor: "border-pallet-blue-3",
    shadow: "shadow-blue-700",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com",
    text: "Twitter / X",
    color: "pallet-blue-1",
    borderColor: "border-pallet-blue-1",
    shadow: "shadow-blue-500",
  },
  {
    icon: <Instagram />,
    link: "https://instagram.com",
    text: "Instagram",
    color: "pallet-pink-2",
    borderColor: "border-pallet-pink-2",
    shadow: "shadow-pink-500",
  },
  {
    icon: <Mail />,
    link: "https://mail.com",
    text: "Email",
    color: "pallet-purple-1",
    borderColor: "border-pallet-purple-1",
    shadow: "shadow-purple-500",
  },
];

const SocialMedia = () => {
  const [listItem, setListItem] = useState<IListSocialMedia[]>(socialMediaList);

  useEffect(() => {
    setListItem(socialMediaList);
  }, []);

  return (
    <div className="flex items-center h-full w-full">
      <ul className="space-y-3 w-full">
        {listItem.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            onLoadStart={() => console.log("load")}
          >
            <button
              type="button"
              className={cn(
                "w-full px-2 py-1.5 border rounded-md bg-white dark:bg-card hover:bg-transparent hover:shadow-gray-800 dark:hover:shadow-accent dark:hover:bg-accent hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-[4px_4px_0px_0px] transition-all cursor-pointer",
                item.borderColor
              )}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start w-full cursor-pointer"
              >
                <div
                  className={cn(
                    "p-2 rounded-[10px] flex justify-center items-center text-white w-8 h-8",
                    `bg-${item.color}`,
                    {
                      "bg-black": i === 0,
                    }
                  )}
                >
                  {item.icon}
                </div>
                <span className={cn("ml-2", `text-${item.color}`)}>
                  {item.text}
                </span>
              </a>
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
