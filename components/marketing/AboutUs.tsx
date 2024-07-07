"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk } from "lucide-react";
import React, { useRef } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const goingToLeft = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const goingToRight = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const goingToUp = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <div ref={ref} className=" max-w-5xl mx-auto mt-10">
      <div className="text-9xl font-DM flex items-center gap-2 font-bold">
        <div>
          <Asterisk size={50} absoluteStrokeWidth />
        </div>{" "}
        <div>About Us</div>
      </div>
      <div className="  opacity-75 max-w-3xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        deleniti ex id quis tempore saepe, a debitis accusantium. Quisquam,
        expedita nostrum? Doloremque voluptatum officiis earum fuga eligendi
        architecto culpa minima.
      </div>
      <div className="border-y border-text mt-3 flex ">
        <motion.div
          style={{
            x: goingToLeft,
          }}
          transition={{
            duration: 1,
          }}
          className="w-[40%] p-5 border-r border-r-text"
        >
          <img src="/placeholding/pic1.jpg" alt="" />
        </motion.div>
        <div className="w-[60%] p-5 text-xl ">
          <div className="text-3xl font-bold font-DM">Who Are We?</div>
          <div className="  opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nobis
            aliquid magni aliquam, dolorem error cum optio laboriosam sapiente,
            inventore laudantium libero obcaecati voluptate dolore deserunt vero
            quisquam. Dicta, saepe?
          </div>
        </div>
      </div>
      <div className="border-b border-text flex ">
        <div className="w-[70%] p-5 text-xl ">
          <div className="text-3xl font-bold font-DM">What we do?</div>
          <div className="  opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nobis
            aliquid magni aliquam, dolorem error cum optio laboriosam sapiente,
            inventore laudantium libero obcaecati voluptate dolore deserunt vero
            quisquam. Dicta, saepe?
          </div>
        </div>
        <motion.div
          style={{
            x: goingToRight,
          }}
          className="w-[30%] p-5 border-l border-l-text"
        >
          <img src="/placeholding/pic1.jpg" alt="" />
        </motion.div>
      </div>
      <motion.div
        style={{
          y: goingToUp,
        }}
        className="h-96 overflow-hidden relative mt-2"
      >
        <img src="/placeholding/pic1.jpg" alt="" />
      </motion.div>
    </div>
  );
};

export default AboutUs;
