import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const wladHomti = [
  {
    name: "Siradj Lamri",
    pic: "/Mainpictures/siradj.jpg",
    link: "https://www.linkedin.com/in/siradj-lamri/",
  },
  {
    name: "RBHDEV",
    pic: "/Mainpictures/ramzi.jpg",
    link: "https://github.com/RBHDEV",
  },
  {
    name: "Aymen Melouah",
    pic: "/Mainpictures/aymen.jpg",
    link: "https://www.linkedin.com/in/aymen-melouah-5bb6882b6/",
  },
  {
    name: "BounaderMedRafik",
    pic: "/Mainpictures/MyLogo.png",
    link: "https://www.linkedin.com/in/bounader-med-rafik/",
  },
];

const HeroMobile = () => {
  return (
    <div className="p-5">
      <div>
        <div className=" max-w-xl font-DM text-center">
          <TextGenerateEffect
            words={`Remake what has already been built, but in a <digital aspect/>`}
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-xs  opacity-75 text-center mt-5"
          >
            At Green Sea, we specialize in revitalizing existing concepts by
            leveraging the latest in digital technology. Our mission is to
            enhance your brand&apos;s potential through exceptional web design,
            graphic design, logo creation, and mobile app development. Embrace
            the future with us as we digitize and modernize your business.
          </motion.div>
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 2.5, ease: "anticipate" }}
              className="mt-5 flex items-center justify-center gap-2  w-full  max-w-xl"
            >
              <Button>
                <div className="flex items-center gap-2">
                  <div>Start Now</div>
                  <div>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Button>
              <Button
                variant={"link"}
                className=" hover:ml-2 group transition-all"
              >
                <div className="flex items-center gap-2">
                  <div>Check Services</div>
                  <div className=" opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1, delay: 3.5 }}
            className=" flex items-center justify-center w-full mt-5  gap-0.5"
          >
            {wladHomti.map((item, i) => {
              return (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 3,
                    duration: 1 * i,
                    ease: "anticipate",
                  }}
                  key={i}
                >
                  <Chabiba
                    chab={{
                      name: item.name,
                      picture: item.pic,
                      link: item.link,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full rounded-xl overflow-hidden mt-3 block   h-full"
        >
          <Image
            src={"/illustrations/pattern.svg"}
            alt="hehe"
            width={1920}
            height={1080}
            className=" w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-5xl font-DM">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const Chabiba = ({
  chab,
}: {
  chab: {
    name: string;
    picture: string;
    link: string;
  };
}) => {
  return (
    <a href={chab.link} target="_blank">
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <div className="size-20 relative rounded-xl   overflow-hidden border-4 border-text transition-all group">
              <img
                src={chab.picture}
                className=" h-full w-full object-cover "
              />
              <div className=" absolute opacity-0 group-hover:opacity-100 transition-all z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-text/80 backdrop-blur-sm rounded-lg text-background">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>{chab.name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </a>
  );
};

export default HeroMobile;
