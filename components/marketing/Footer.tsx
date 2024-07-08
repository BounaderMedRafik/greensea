import React from "react";
import OurLogo from "../brand/OurLogo";
import {
  Facebook,
  Github,
  Instagram,
  Locate,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { buttonVariants } from "../ui/button";

const ourLinks = [
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    link: "/",
  },
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    link: "/",
  },
  {
    name: "Github",
    icon: <Github size={20} />,
    link: "/",
  },
];

const ourContacts = [
  {
    name: "rafikbn666@gmail.com",
    icon: <Mail size={20} />,
    link: "mailto:info@our.com",
  },
  {
    name: "+213 0698 45 78 49",
    icon: <Phone size={20} />,
    link: "mailto:info@our.com",
  },
  {
    name: "Taref la wilaya wlad houma sexi",
    icon: <MapPin size={20} />,
    link: "mailto:info@our.com",
  },
];
const Footer = () => {
  return (
    <div className=" max-w-5xl mx-auto mt-10 border-t pt-10">
      <div className="flex items-center justify-between">
        <div>
          <OurLogo variant={"colored"} labeled />
        </div>
        <div className="flex items-center gap-0.5">
          {ourLinks.map((item, i) => (
            <div key={i}>
              <a href={item.link} target="_blank">
                <div className=" p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all border">
                  {item.icon}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-between mt-5">
        <div className=" font-DM text-xs">All Rights Reserved 2024©</div>
        <div className=" font-DM flex flex-col justify-center items-end">
          {ourContacts.map((item, i) => (
            <a href={item.link} target="_blank">
              <div
                key={i}
                className="flex  opacity-75 items-center gap-2 p-2 hover:opacity-100"
              >
                <div>{item.icon}</div>
                <div className="">{item.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
