import OurLogo from "@/components/brand/OurLogo";
import { Facebook, Github, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ourContacts = [
  {
    name: "rafikbn666@gmail.com",
    icon: <Mail size={15} />,
    link: "mailto:info@our.com",
  },
  {
    name: "+213 0698 45 78 49",
    icon: <Phone size={15} />,
    link: "mailto:info@our.com",
  },
  {
    name: "Taref la wilaya wlad houma sexi",
    icon: <MapPin size={15} />,
    link: "mailto:info@our.com",
  },
];

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

const FooterMobile = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <OurLogo variant="black" />
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
      <div className="flex items-end justify-between mt-10">
        <div className=" font-DM text-xs">All Rights Reserved 2024©</div>
        <div className=" font-DM flex flex-col justify-center items-end">
          {ourContacts.map((item, i) => (
            <a key={i} href={item.link} target="_blank">
              <div className="flex  opacity-75 items-center gap-2 p-1 hover:opacity-100">
                <div>{item.icon}</div>
                <div className=" text-xs">{item.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
