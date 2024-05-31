"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight, PanelBottom } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const op = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="wrapper rounded-t-xl min-h-[80vh] overflow-hidden  relative"
    >
      <motion.div
        style={{
          opacity: op,
        }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className=" relative z-20  font-semibold"
      >
        <div className="md:text-8xl text-3xl font-LT ">THE RIGHT PLACE</div>
        <div className="md:text-8xl text-3xl font-LT ">TO DEGITALIZE</div>
        <div className="md:text-8xl text-3xl font-LT ">YOUR BUSINESS</div>
        <div className="mt-5 flex items-center gap-1">
          <Button size={"wide"}>
            <div className="flex items-center gap-1">
              <div>Check Projects</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Button>
          <Button variant={"white"}>
            <div className="flex items-center gap-2">
              <div>Contact us</div>
              <div>
                <PanelBottom size={15} />
              </div>
            </div>
          </Button>
        </div>
      </motion.div>
      <motion.div
        style={{
          scale: scale,
        }}
        animate={{
          y: [100, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "anticipate",
        }}
        className="w-full h-full absolute top-0 md:-top-2/3 left-0"
      >
        <img src="/chabiba.jpg" alt="" />
      </motion.div>
      <div className="w-full h-full z-10 absolute top-0 left-0  bg-gradient-to-t from-background to-transparent from-10%"></div>
    </div>
  );
};

export default Hero;
