import { cn } from "@/lib/utils";
import { SortableContainer } from "react-sortable-hoc";
import { motion } from "framer-motion";

export const BentoGrid = SortableContainer(
  ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }
);

export default BentoGrid;
