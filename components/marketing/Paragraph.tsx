"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Paragraph = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div
      ref={ref}
      className="wrapper h-[30vh] flex items-center justify-center"
    >
      <motion.div
        style={{
          opacity: opacity,
        }}
        className=" w-full font-LT md:w-2/3  mx-auto text-4xl text-center"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Paragraph;
