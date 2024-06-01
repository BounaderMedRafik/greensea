"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import TeamCard from "./TeamCard";

const TeamMem = [
  {
    name: "Bounader Med Rafik",
    role: "Web Developper",
    age: 19,
    instaLink: "https://www.instagram.com/bounaderrafik/",
    twitterLink: "https://twitter.com/bwnadrrr",
    linkedInLink: "https://www.linkedin.com/in/bounader-med-rafik/",
    portfolioLink: "https://bounaderrafik-personal-blog.vercel.app/",
    picture: "/placeholding/pic1.jpg",
    MainPicture: "/Mainpictures/rafik.png",
    Message: "lowkey?",
  },
];

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
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "anticipate",
          }}
          className="px-10"
        >
          <div className="text-5xl font-LT ">Who are we?</div>
          <div className="text-xs md:text-base font-light mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus neque excepturi consequuntur, aliquam deserunt
            soluta, incidunt amet dolorem, expedita et consequatur facere
            perferendis officiis laudantium commodi ea quaerat. Voluptatibus
            pariatur est delectus alias cum porro aliquid quis, architecto
            debitis odit at adipisci aspernatur iste sunt, asperiores impedit
            eveniet rem nobis.
          </div>
          <div className="mt-4">
            <div className=" flex flex-col md:grid grid-cols-3 grid-rows-3 gap-1">
              <motion.div
                style={{ filter: "grayscale(100%)" }}
                whileHover={{
                  scale: 1.05,
                  rotate: "2deg",
                  filter: "grayscale(0%)",
                }}
                className=" w-full h-40   md:col-span-2 bg-white/10 border border-white/20 rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/placeholding/pic1.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                style={{ filter: "grayscale(100%)" }}
                whileHover={{
                  scale: 1.05,
                  rotate: "-2deg",
                  filter: "grayscale(0%)",
                }}
                className=" w-full h-40 col-span-1 bg-white/10 border border-white/20 rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/placeholding/pic2.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                style={{ filter: "grayscale(100%)" }}
                whileHover={{
                  scale: 1.05,
                  rotate: "-2deg",
                  filter: "grayscale(0%)",
                }}
                className=" w-full h-full col-span-1 row-span-2 bg-white/10 border border-white/20 rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/placeholding/pic2.jpg"
                  alt=""
                />
              </motion.div>
              <motion.div
                style={{ filter: "grayscale(100%)" }}
                whileHover={{
                  scale: 1.05,
                  rotate: "2deg",
                  filter: "grayscale(0%)",
                }}
                className=" w-full h-40 col-span-1  bg-white/10 border border-white/20 rounded-lg overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src="/placeholding/pic2.jpg"
                  alt=""
                />
              </motion.div>
            </div>
            {/* TeamMembers */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-24"
            >
              <div className="text-5xl font-LT ">GreenSea Team</div>
              <div className="mt-2">
                {TeamMem.map((item, i) => (
                  <div className="mt-4" key={i}>
                    <TeamCard
                      MessageForFun={item.Message}
                      Mainpic={item.MainPicture}
                      pic={item.picture}
                      name={item.name}
                      age={item.age}
                      role={item.role}
                      twitterLink={item.twitterLink}
                      InstaLink={item.instaLink}
                      LinkedinLink={item.linkedInLink}
                      Portfolio={item.portfolioLink}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
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
