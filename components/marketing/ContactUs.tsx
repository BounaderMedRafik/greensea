import {
  Facebook,
  Instagram,
  Leaf,
  Phone,
  PhoneCall,
  PhoneIcon,
  PhoneIncoming,
  Youtube,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const socials = [
  {
    name: <Instagram size={20} />,
    link: "#yeh",
  },
  {
    name: <Facebook size={20} />,
    link: "#yeh",
  },
  {
    name: <Youtube size={20} />,
    link: "#yeh",
  },
];

const ContactUs = () => {
  return (
    <div className="wrapper">
      <div>
        <div className="text-5xl font-LT flex items-center justify-between ">
          <div>Reach us now!</div>
          <div>
            <div className="flex items-center">
              {socials.map((item, i) => (
                <div key={i}>
                  <a target="_blank" href={item.link}>
                    <Button variant={"link"} size={"icon"}>
                      {item.name}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-start mt-10 gap-5">
          <div className="w-1/2  h-full">
            <div className="text-3xl font-LT">Contact informations</div>
            <div className="text-sm font-light mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium architecto non dignissimos.
            </div>
            <Myinformation />
          </div>
          <div className="w-1/2 overflow-hidden border border-text/20 rounded-lg ">
            <img
              className=" w-full h-full object-cover object-center"
              src="/placeholding/pic1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Myinformation = ({
  label,
  info,
  icon,
}: {
  label: string;
  info: string;
  icon: JSX.Element;
}) => {
  const information = info;

  return (
    <div className="mt-5">
      <div>
        <Label>
          <div className="flex items-center gap-2">
            <div>{icon}</div>
            <div className="text-xl">{label}</div>
          </div>
        </Label>
        <div className="w-full text-sm font-light bg-text/20 border-b border-b-text/50 p-2">
          <div>+234 812 345 6789</div>
          <div>
            <Button>Copy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
