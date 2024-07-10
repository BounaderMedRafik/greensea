import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Asterisk } from "lucide-react";
import React from "react";

const TheServices = [
  {
    title: "Design Branding",
    desc: "Crafting visually stunning and cohesive brand identities that resonate with your target audience. Our team of creative designers ensures that your brand stands out with unique logos, compelling graphics, and a consistent visual language that reinforces your brand message.",
    image:
      "https://cdn.dribbble.com/userupload/14268810/file/original-ef9f8d46b7b9bcfde66cbd54b2dab0af.png?resize=1024x768",
  },
  {
    title: "Software Developpment",
    desc: "Building robust and scalable software solutions tailored to your business needs. From web applications to mobile apps, our developers deliver efficient, user-friendly, and secure software that drives your business forward.",
    image:
      "https://cdn.dribbble.com/userupload/8883323/file/original-cfffac4464698497bdc3dfafb37c76cc.png?resize=1024x768&vertical=center",
  },
  {
    title: "Marketing ",
    desc: "Creating strategic marketing campaigns that elevate your brand and engage your audience. Our marketing experts employ a mix of digital marketing tactics, including SEO, social media, content marketing, and more, to increase your brand visibility and achieve your business goals.",
    image:
      "https://cdn.dribbble.com/userupload/12435974/file/original-9fe26fad6f8760efa0a8ffd46a85fe25.jpg?resize=1024x774",
  },
];

const OurServicesMobile = () => {
  return (
    <div className="p-5">
      <div className="text-5xl font-DM flex items-center gap-2 font-bold">
        <div>
          <Asterisk size={50} absoluteStrokeWidth />
        </div>{" "}
        <div>Our services</div>
      </div>
      <div className="text-xs opacity-75 max-w-md">
        At Green Sea, we offer a comprehensive suite of services designed to
        elevate your business and drive success in the digital world. Our
        expertise spans across design branding, software development, and
        marketing, ensuring that we provide holistic solutions tailored to your
        unique needs. Whether you need a compelling brand identity, cutting-edge
        software, or strategic marketing campaigns, our team is dedicated to
        delivering exceptional results that help your business thrive.
      </div>

      <div className="mt-3">
        <Accordion type="single">
          {TheServices.map((item, i) => (
            <div key={i}>
              <AccordionItem value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className=" opacity-75">{item.desc}</div>
                  <div className="mt-3 rounded-lg border overflow-hidden h-56">
                    <img
                      className=" w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default OurServicesMobile;
