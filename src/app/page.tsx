"use client";

import React, { useState } from "react";
import BentoGrid from "@/components/BentoGrid";
import BentoGridItem from "@/components/BentoGridItem";
import { IconTableColumn } from "@tabler/icons-react";
import { IListItem } from "@/lib/types";
import ItemTwo from "@/components/ItemTwo";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";
import Experience from "@/components/Experience";
import MenuNavigation from "@/components/MenuNavigation";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
import SkeletonMask from "@/components/SkeletonMask";
import { options } from "@/lib/data";

const Page = () => {
  const [items, setItems] = useState<IListItem[]>(initialItem); // Replace with your actual items
  const [selected, setSelected] = useState<string>("all");

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const onSortAll = () => {
    setSelected("all");
    setItems(initialItem);
  };

  const onSortAbout = () => {
    setSelected("about");
    const first = [
      { ...initialItem[0], active: true },
      { ...initialItem[2], active: true },
      { ...initialItem[3], active: true },
      { ...initialItem[4], active: true },
    ];
    const rest = [
      { ...initialItem[6], active: false },
      { ...initialItem[5], active: false },
      { ...initialItem[7], active: false },
      { ...initialItem[8], active: false },
      { ...initialItem[1], active: false },
    ];
    setItems([...first, ...rest]);
  };

  const onSortProject = () => {
    setSelected("projects");
    const first = [
      { ...initialItem[5], active: true },
      { ...initialItem[6], active: true },
      { ...initialItem[7], active: true },
      { ...initialItem[8], active: true },
    ];
    const rest = [
      { ...initialItem[0], active: false },
      { ...initialItem[1], active: false },
      { ...initialItem[2], active: false },
      { ...initialItem[4], active: false },
      { ...initialItem[3], active: false },
    ];
    setItems([...first, ...rest]);
  };

  const handleChange = (status: string) => {
    setSelected(status);
    if (status === "all") {
      onSortAll();
    } else if (status === "projects") {
      onSortProject();
    } else {
      onSortAbout();
    }
  };

  return (
    <>
      <main className="py-3 px-6 sm:px-3 md:px-0">
        <MenuNavigation
          selected={selected}
          options={options}
          handleChange={handleChange}
        />
        {/* @ts-ignore */}
        <BentoGrid
          list={items}
          setList={setItems}
          className="max-w-4xl mx-auto md:auto-rows-[20rem]"
        >
          {items.map((item, index) => (
            // @ts-ignore
            <BentoGridItem
              key={`item-${index}-${item.title}`}
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
      <Footer />
    </>
  );
};

export default Page;

const initialItem: IListItem[] = [
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
    header: <TechStack />,
    className: "md:col-span-2 px-7 py-8",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    header: <Experience />,
    className: "md:col-span-1 md:row-span-2 p-4",
    active: true,
  },
  {
    title: "Project 1",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <SkeletonMask />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 2",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <SkeletonMask />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },

  {
    title: "Project 3",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <SkeletonMask />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
  {
    title: "Project 4",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <SkeletonMask />,
    className: "md:col-span-1 p-4",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    active: true,
  },
];
