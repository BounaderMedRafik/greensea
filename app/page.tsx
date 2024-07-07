"use client";
import GoUpBTN from "@/components/layout/GoUpBTN";
import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/marketing/Hero";

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
      <div>
        <Navigation />
      </div>
      <div>
        <Hero />
      </div>
    </main>
  );
}
