import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";
import { IconBrandBehance } from "@tabler/icons-react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

const SocialMedia = (props: Props) => {
  const listItem = [
    {
      icon: <Github size={16} className="text-gray-900" />,
      link: "https://github.com",
      text: "Github",
      color: "gray-900",
    },
    {
      icon: <Linkedin size={16} className="text-blue-800" />,
      link: "https://linkedin.com",
      text: "Linkedin",
      color: "blue-800",
    },
    {
      icon: <FaXTwitter size={16} className="text-gray-950" />,
      link: "https://twitter.com",
      text: "Twitter / X",
      color: "gray-950",
    },
    {
      icon: <Instagram size={16} className="text-pink-600" />,
      link: "https://instagram.com",
      text: "Instagram",
      color: "pink-600",
    },
    {
      icon: <IconBrandBehance size={16} className="text-blue-500" />,
      link: "https://behance.com",
      text: "Behance",
      color: "blue-500",
    },
  ];
  return (
    <div className="flex items-center h-full w-full">
      <ul className="space-y-3 w-full">
        {listItem.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >
            <Button
              className={cn(
                "w-full border bg-white hover:bg-transparent hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-200",
                `border-${item.color}`,
                `hover:shadow-${item.color}`
              )}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start w-full"
              >
                {item.icon}
                <span className={cn("ml-2", `text-${item.color}`)}>
                  {item.text}
                </span>
              </a>
            </Button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
