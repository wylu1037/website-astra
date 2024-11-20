"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  delay = 0.2,
  reverse,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay, ease: "easeInOut" }}
      className={cn("h-full w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default Container;
