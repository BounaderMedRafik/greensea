"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const socials = [
  {
    name: <Instagram size={14} />,
    link: "#yeh",
  },
  {
    name: <Facebook size={14} />,
    link: "#yeh",
  },
  {
    name: <Youtube size={14} />,
    link: "#yeh",
  },
];

const Navigation = () => {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.5,
        }}
        className="wrapper flex items-center justify-between bg-background z-50 fixed w-full top-0 left-1/2 -translate-x-1/2"
      >
        <div className="text-xl">GreenSea</div>
        <div className="flex items-center gap-2">
          {links.map((item, i) => (
            <div key={i}>
              <Link href={item.link}>
                <Button variant={"link"}>{item.name}</Button>
              </Link>
            </div>
          ))}
          <div className="flex items-center">
            {socials.map((item, i) => (
              <div key={i}>
                <a target="_blank" href={item.link}>
                  <Button variant={"link"} size={"icon"}>
                    {item.name}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
