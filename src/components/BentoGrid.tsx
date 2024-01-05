import { cn } from "@/lib/utils";
import { SortableContainer } from "react-sortable-hoc";

export const BentoGrid = SortableContainer(
  ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default BentoGrid;
