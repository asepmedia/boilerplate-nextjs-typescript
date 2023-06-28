import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  motionContentVariants,
  motionVariants,
} from "./CardCollapsible.framer";
import CardCollapsibleHeader from "./CardCollapsibleHeader";

interface ICardCollapsible {
  headerClassName?: string;
  title?: string | React.ReactNode | undefined;
  children?: React.ReactNode;
  initial?: "open" | "collapsed";
}

function CardCollapsible(props: ICardCollapsible) {
  const { children, headerClassName, initial, title } = props;
  const [isCollapse, setIsCollapse] = useState(initial === "open");

  const toggleCollapse = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <>
      <div className="border rounded-lg select-none">
        <CardCollapsibleHeader
          isCollapse={isCollapse}
          onClick={toggleCollapse}
          title={title}
          className={headerClassName}
        />
        <AnimatePresence initial={false}>
          {isCollapse && (
            <motion.div
              initial={"collapsed"}
              animate={"open"}
              variants={motionVariants}
              exit="collapsed"
              className="bg-white rounded-b-lg"
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div
                variants={motionContentVariants}
                transition={{ duration: 0.5 }}
                className="p-3"
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default React.memo(CardCollapsible);
