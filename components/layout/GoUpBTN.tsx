import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const GoUpBTN = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: "1deg",
          }}
          className="fixed z-[999] bottom-24 right-24"
        >
          <TooltipTrigger asChild>
            <Button onClick={scrollToTop} size={"icon"}>
              <ArrowUp />
            </Button>
          </TooltipTrigger>
        </motion.div>

        <TooltipContent>
          <div>Go Back To Top</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GoUpBTN;
