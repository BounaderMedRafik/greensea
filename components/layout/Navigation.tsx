import React from "react";
import OurLogo from "../brand/OurLogo";
import { Button, buttonVariants } from "../ui/button";
import { ArrowUpRight, ListStartIcon } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  {
    name: "About",
    linkto: "/#services",
  },
  {
    name: "services",
    linkto: "/#services",
  },
  {
    name: "contacts",
    linkto: "/#contacts",
  },
];
const Navigation = () => {
  return (
    <motion.div className=" fixed  z-50 w-full left-1/2 -translate-x-1/2  max-w-5xl p-3 rounded-2xl border border-slate-300 bg-background flex items-center justify-between mt-10 shadow-2xl shadow-black/10">
      <div>
        <OurLogo variant={"black"} />
      </div>
      <div className="flex items-center">
        {links.map((item, i) => {
          return (
            <div className="group" key={i}>
              <a
                className={
                  buttonVariants({
                    variant: "link",
                  }) + "flex items-center gap-3"
                }
                href={item.linkto}
              >
                <div>{item.name}</div>
                <div className="opacity-0 group-hover:opacity-100">
                  <ArrowUpRight size={15} />
                </div>
              </a>
            </div>
          );
        })}
        <Button>
          <div className="flex items-center gap-2">
            <div>Start Now</div>
            <div>
              <ArrowUpRight size={15} />
            </div>
          </div>
        </Button>
      </div>
    </motion.div>
  );
};

export default Navigation;
