import { IconClipboardCopy } from "@tabler/icons-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <div className="flex flex-row justify-between">
        <div>
          <Image src="/memoji-1.png" alt="memoji" width={120} height={120} />
        </div>
        <Button variant="outline" className="">
          <IconClipboardCopy className="h-4 w-4 " />
          <span className="ml-2">Copy Email</span>
        </Button>
      </div>
      <h1 className="leading-relaxed text-lg">
        I&apos;m <span className="font-bold text-3xl font-mochi">Adit</span>, a
        dedicated Frontend Developer with a journey spanning two vibrant years
        in the dynamic realm of web development.
      </h1>
    </div>
  );
};

export default About;
