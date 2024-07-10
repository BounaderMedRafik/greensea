import OurLogo from "@/components/brand/OurLogo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Ellipsis,
  Menu,
  X,
} from "lucide-react";
import React from "react";

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

const NavigationMobile = () => {
  return (
    <div className="px-10 fixed z-40 w-full bg-background py-5 flex items-center justify-between border-b">
      <div>
        <OurLogo variant="black" />
      </div>
      <div>
        <Drawer>
          <DrawerTrigger className="hover:shadow-xl transition-all" asChild>
            <Button size={"icon"} variant={"white"}>
              <Menu size={18} />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>Navigation</DrawerTitle>
            <div className="text-sm max-w-xs mt-1 opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eum
              odio repellendus!
            </div>
            <div className=" w-full h-px bg-neutral-200 my-3" />
            <div>
              {links.map((item, i) => (
                <div key={i}>
                  <a href={item.linkto}>
                    <div className="flex items-center justify-between py-3 hover:bg-neutral-100 ">
                      <div>{item.name}</div>
                      <div>
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <DrawerFooter>
              <DrawerClose>
                <Button variant={"white"}>
                  <div className="flex items-center gap-2">
                    <div>Close</div>
                    <div>
                      <X size={15} />
                    </div>
                  </div>
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default NavigationMobile;
