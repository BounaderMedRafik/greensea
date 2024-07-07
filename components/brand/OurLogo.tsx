import { cn } from "@/lib/utils";
import React from "react";

const OurLogo = ({
  variant,
  LogoClassName,
  labeled,
}: {
  variant: "colored" | "white" | "black";
  LogoClassName?: string;
  labeled?: boolean;
}) => {
  return (
    <a href="/">
      <div className="px-5 py-1">
        <div className="flex items-center gap-3">
          {" "}
          <img
            className={cn(" w-8", LogoClassName)}
            src={
              variant == "colored"
                ? "/logos/coloredLogo.png"
                : variant == "black"
                ? "/logos/blackLogo.png"
                : variant == "white"
                ? "/logos/whiteLogo.png"
                : "/logos/whiteLogo.png"
            }
            alt=""
          />
          {labeled ? (
            <div>
              GreenSea <span className="text-xs">2024</span>
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default OurLogo;
