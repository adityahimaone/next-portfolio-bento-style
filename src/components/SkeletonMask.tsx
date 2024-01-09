import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image?: string | StaticImageData;
}

const SkeletonMask = ({ image }: Props) => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] border border-slate-100 rounded-[28px] bg-black/[0.2] border-black/[0.2] bg-neutral-300">
      {image && (
        <Image
          src={image}
          alt="placeholder"
          width={300}
          height={300}
          objectFit="cover"
          className="rounded-[26px]"
        />
      )}
    </div>
  );
};

export default SkeletonMask;
