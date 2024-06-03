"use client";
import GoUpBTN from "@/components/layout/GoUpBTN";
import ContactUs from "@/components/marketing/ContactUs";
import Hero from "@/components/marketing/Hero";
import Paragraph from "@/components/marketing/Paragraph";
import WhoAreWe from "@/components/marketing/WhoAreWe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "start center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  return (
    <main ref={ref} className=" relative">
      <Hero />
      <Paragraph text="We craft unique digital experiences for businesses, bringing your ideas to life with creativity and innovation. Explore the possibilities with us." />
      <WhoAreWe />
      <Paragraph text="Now let's take a step further and start our journy into making you business have a social & digital presence" />
      <div className=" w-full wrapper py-0 px-0 mb-10 bg-text/20 h-px"></div>
      <ContactUs />
      <motion.div
        style={{
          opacity: opacity,
        }}
      >
        <GoUpBTN />
      </motion.div>
    </main>
  );
}
