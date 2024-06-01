import { motion } from "framer-motion";
import {
  AppWindowIcon,
  ArrowRight,
  InstagramIcon,
  LinkedinIcon,
  Smile,
  StickerIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const TeamCard = ({
  name,
  age,
  role,
  pic,
  Mainpic,
  twitterLink,
  InstaLink,
  LinkedinLink,
  Portfolio,
}: {
  name: string;
  age: number;
  role: string;
  pic: string;
  Mainpic: string;
  twitterLink: string;
  InstaLink: string;
  LinkedinLink: string;
  Portfolio?: string;
}) => {
  const socials = [
    {
      name: "Twitter",
      icon: <TwitterIcon fill="white" />,
      link: twitterLink,
    },
    {
      name: "Instagram",
      icon: <InstagramIcon fill="transparent" />,
      link: InstaLink,
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon fill="white" />,
      link: LinkedinLink,
    },
  ];

  if (Portfolio) {
    socials.push({
      name: "Portfolio",
      icon: <Smile />,
      link: Portfolio,
    });
  }

  return (
    <div className="w-full group overflow-hidden h-96 p-5 bg-text/10 border border-text/20 rounded-xl relative">
      <img
        className=" size-60 opacity-0 group-hover:opacity-100 duration-500 hover:scale-105 transition-all hidden md:block z-20 object-cover absolute top-1/2 -translate-y-1/2 right-24 rounded-full border-text/20 shadow-xl shadow-white/10 border"
        src={Mainpic}
      />
      <img
        className="absolute grayscale group-hover:grayscale-0 group-hover:scale-105  transition-all  h-full w-full top-0 left-0 object-cover"
        src={pic}
      />
      <div className=" bg-gradient-to-t from-background from-10% via-transparent to-background absolute z-10 w-full h-full top-0 left-0"></div>
      <div className="absolute z-20 top-5 left-5 ">
        <div className="text-2xl md:text-4xl font-LT">
          {name} <span className="text-sm">{age}</span>
        </div>
        <div className=" w-fit text-xs mt-2 bg-white text-background px-2 py-1 rounded-full flex items-center justify-center gap-2">
          <div>
            <ArrowRight size={12} />
          </div>
          <div>{role}</div>
        </div>
      </div>
      <div className="absolute z-20 bottom-5 left-5 flex items-center gap-2 ">
        {socials.map((item, i) => (
          <div key={i}>
            <TooltipProvider delayDuration={0.2}>
              <Tooltip>
                <TooltipTrigger>
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      rotate: "-5deg",
                      transformOrigin: "center",
                      background: "rgba(255,255,255,0.3)",
                    }}
                    href={item.link}
                    target="_blank"
                    className="p-2 rounded-full  flex justify-center items-center"
                    key={i}
                  >
                    {item.icon}
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>{item.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
