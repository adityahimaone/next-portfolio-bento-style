import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactSortable } from "react-sortablejs";

export const BentoGrid = ({
  className,
  children,
  list,
  setList,
}: {
  className?: string;
  children?: React.ReactNode;
  list: any;
  setList: any;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
    >
      <ReactSortable
        group="groupName"
        animation={200}
        setList={setList}
        delayOnTouchOnly={true}
        delay={200}
        list={list}
        draggable=".group-draggable"
        fallbackOnBody={true}
        ghostClass="drag-ghost"
        chosenClass="drag-chosen"
        className={cn(
          "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
          className
        )}
      >
        {children}
      </ReactSortable>
    </motion.div>
  );
};

export default BentoGrid;
