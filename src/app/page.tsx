"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import BentoGrid from "@/components/BentoGrid";
import BentoGridItem from "@/components/BentoGridItem";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ItemTwo from "@/components/ItemTwo";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";
import { arrayMove, SortableHandle } from "react-sortable-hoc";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type Props = {};

const Page = (props: Props) => {
  const [items, setItems] = useState(initialItem); // Replace with your actual items
  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const onSortAll = () => {
    setItems(initialItem);
  };

  const onSortAbout = () => {
    const first = [
      { ...initialItem[0], active: true },
      { ...initialItem[2], active: true },
      { ...initialItem[3], active: true },
      { ...initialItem[6], active: true },
    ];
    const rest = [
      { ...initialItem[4], active: false },
      { ...initialItem[5], active: false },
      { ...initialItem[7], active: false },
      { ...initialItem[8], active: false },
      { ...initialItem[1], active: false },
    ];
    setItems([...first, ...rest]);
  };

  // sort the first is index 5, 6, 8 ,9 and rest is 0,1,2,3,4,7
  const onSortProject = () => {
    const first = initialItem.slice(4, 9).map((item, index) => {
      if (index === 2) {
        return { ...item, active: false };
      }
      return { ...item, active: true };
    });
    const rest = initialItem
      .slice(0, 4)
      .map((item) => ({ ...item, active: false }));
    setItems([...first, ...rest]);
  };

  return (
    <>
      {/* Add button sort  */}
      <main className="bg-gray-100 py-3 px-6 sm:px-3 md:px-0 ">
        <MaxWidthWrapper className="py-2">
          <div className="flex space-x-4">
            <div className="flex justify-start">
              <Button onClick={onSortAll}>All</Button>
            </div>
            <div className="flex justify-start">
              <Button onClick={onSortProject}>Projects</Button>
            </div>
            <div className="flex justify-start">
              <Button onClick={onSortAbout}>About</Button>
            </div>
          </div>
        </MaxWidthWrapper>
        {/* $ts-expect-error */}
        <BentoGrid
          onSortEnd={onSortEnd}
          axis="xy"
          helperClass="sortableHelper"
          distance={1}
          className="max-w-4xl mx-auto md:auto-rows-[20rem]"
        >
          {items.map((item, index) => (
            <BentoGridItem
              key={`item-${index}`}
              index={index}
              value={item}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              active={item.active}
            />
          ))}
        </BentoGrid>
      </main>
    </>
  );
};

export default Page;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-300 dark:bg-black"></div>
);

const initialItem = [
  {
    header: <About />,
    className: "md:col-span-2 px-7 py-8",
    active: true,
  },
  {
    header: <ItemTwo />,
    className: "md:col-span-1",
    active: true,
  },
  {
    header: <SocialMedia />,
    className: "md:col-span-1 px-7 py-8",
    active: true,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 1",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 2",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Timeline Experience",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-2 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 3",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 4",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
];
