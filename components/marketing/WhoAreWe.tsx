"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import pic1 from "@/public/placeholding/pic1.jpg";

const WhoAreWe = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <div ref={ref} className="wrapper">
      <motion.div
        style={{
          scaleX: scaleX,
        }}
        className="w-full h-px bg-text/50"
      ></motion.div>
      <div>
        <Details />
      </div>
    </div>
  );
};

const Details = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div ref={ref} className="py-10 relative">
        <div className="px-10">
          <div className="text-5xl font-LT ">Who are we?</div>
          <div className=" font-light mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus neque excepturi consequuntur, aliquam deserunt
            soluta, incidunt amet dolorem, expedita et consequatur facere
            perferendis officiis laudantium commodi ea quaerat. Voluptatibus
            pariatur est delectus alias cum porro aliquid quis, architecto
            debitis odit at adipisci aspernatur iste sunt, asperiores impedit
            eveniet rem nobis.
          </div>
          <div className="mt-4">
            <div className=" grid grid-cols-3 grid-rows-3 gap-1">
              <div className=" w-full h-40 col-span-2 bg-white/10 border border-white"></div>
              <div className=" w-full h-40 col-span-1 bg-white/10 border border-white"></div>
              <div className=" w-full h-full col-span-1 row-span-2 bg-white/10 border border-white"></div>
              <div className=" w-full h-40 col-span-1  bg-white/10 border border-white"></div>
            </div>
          </div>
        </div>
        <motion.div
          style={{
            scaleY: scaleY,
            transformOrigin: "top",
          }}
          className="absolute top-0 left-0 h-full w-px  bg-gradient-to-t to-white/50 from-transparent"
        ></motion.div>
        <motion.div
          style={{
            scaleY: scaleY,
            transformOrigin: "top",
          }}
          className="absolute top-0 right-0 h-full w-px  bg-gradient-to-t to-white/50 from-transparent"
        ></motion.div>
      </div>
    </>
  );
};

export default WhoAreWe;
