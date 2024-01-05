import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-4xl px-2.5", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
