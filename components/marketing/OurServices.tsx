import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Asterisk } from "lucide-react";
import React, { useEffect, useState } from "react";

const TheServices = [
  {
    title: "Design Branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis dolore architecto id placeat. Voluptatem ",
    image:
      "https://cdn.dribbble.com/userupload/14268810/file/original-ef9f8d46b7b9bcfde66cbd54b2dab0af.png?resize=1024x768",
  },
  {
    title: "Software Developpment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis dolore architecto id placeat. Voluptatem temporibus sit odit impedi omnis mollitia cupiditate animi delectus nobis maxime sequi, alias illodignissimos!",
    image:
      "https://cdn.dribbble.com/userupload/8883323/file/original-cfffac4464698497bdc3dfafb37c76cc.png?resize=1024x768&vertical=center",
  },
  {
    title: "Marketing ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis dolore architecto id placeat. Voluptatem temporibus sit odit impedi omnis mollitia cupiditate animi delectus nobis maxime sequi, alias illodignissimos!",
    image:
      "https://cdn.dribbble.com/userupload/12435974/file/original-9fe26fad6f8760efa0a8ffd46a85fe25.jpg?resize=1024x774",
  },
];

const OurServices = () => {
  return (
    <div className=" max-w-5xl mx-auto mt-10">
      <div className="text-9xl font-DM flex items-center gap-2 font-bold">
        <div>
          <Asterisk size={50} absoluteStrokeWidth />
        </div>{" "}
        <div>Services</div>
      </div>
      <div className="  opacity-75 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis
        dolore architecto id placeat. Voluptatem temporibus sit odit impedit
        omnis mollitia cupiditate animi delectus nobis maxime sequi, alias illo
        dignissimos!
      </div>
      <div className="mt-5   divide-y ">
        {TheServices.map((item, i) => (
          <div key={i}>
            <Service title={item.title} desc={item.desc} image={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Service = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      ref={ref}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      className="py-4  relative cursor-none  hover:bg-neutral-100  transition-all group flex justify-between items-center"
    >
      <div className="text-2xl  font-DM w-[10%]">{title}</div>
      <div className="w-[50%] text-sm">{desc}</div>
      <div>
        <div className="p-2 text-text/50 group-hover:bg-[#2e4b46] border group-hover:text-background rounded-full  transi">
          <ArrowRight className=" group-hover:-rotate-45 transition-all" />
        </div>
      </div>
      <div>{isInside && <FloatingImage x={x} y={y} image={image} />}</div>
    </div>
  );
};

const FloatingImage = ({ x, y, image }: { x: any; y: any; image?: string }) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full absolute z-50 shadow-lg"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <motion.div
        className={
          "px-2 py-2  text-white whitespace-nowrap min-w-max text-xs rounded-lg"
        }
      >
        <img
          src={image}
          className=" h-64 aspect-video object-cover  rounded-lg -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </motion.div>
  );
};

export default OurServices;
