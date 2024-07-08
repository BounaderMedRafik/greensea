import { Asterisk } from "lucide-react";
import React from "react";

const AboutUsMobile = () => {
  return (
    <div className="p-5">
      <div>
        <div>
          <div className="text-4xl font-DM flex items-center gap-2 font-bold">
            <div>
              <Asterisk size={50} absoluteStrokeWidth />
            </div>{" "}
            <div>About Us</div>
          </div>
          <div className="border border-text mt-3">
            <div className=" p-5 text-xl ">
              <div className="text-3xl font-bold font-DM">Who Are We?</div>
              <div className="  opacity-75 text-sm">
                Green Sea is an innovative agency specializing in web design and
                development, graphic design, logo design, and mobile app
                development. We are passionate about transforming businesses
                through digitalization, providing comprehensive solutions to
                help our clients succeed in the digital landscape.
              </div>
              <div className="mt-2 h-52 overflow-hidden">
                <img src="/placeholding/pic1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className=" h-px w-full my-2 bg-text" />
          <div className="border border-text mt-3">
            <div className=" p-5 text-xl ">
              <div className="mt-2 h-52 overflow-hidden">
                <img src="/placeholding/pic1.jpg" alt="" />
              </div>
              <div className="text-3xl font-bold font-DM mt-2 text-end">
                What we do?
              </div>
              <div className="  opacity-75 text-sm">
                At Green Sea, we offer a range of services to meet your business
                needs. From creating visually stunning websites to designing
                unique logos and developing user-friendly mobile applications,
                we have the expertise to elevate your brand. Our goal is to
                digitize businesses, enhancing their online presence and driving
                growth through cutting-edge technology and creative design.
              </div>
            </div>
          </div>
          <div className=" h-px w-full my-2 bg-text" />
          <div className=" border border-text">
            <img src="/placeholding/pic1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMobile;
