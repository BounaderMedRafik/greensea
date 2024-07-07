import {
  ArrowRight,
  Asterisk,
  Briefcase,
  Info,
  Mail,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <div className=" max-w-5xl mx-auto pt-10">
      <div className="text-9xl font-DM flex items-center gap-2 font-bold">
        <div>
          <Asterisk size={50} absoluteStrokeWidth />
        </div>{" "}
        <div>Contact Us</div>
      </div>
      <div className="  opacity-75 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis
        dolore architecto id placeat. Voluptatem temporibus sit odit impedit
        omnis mollitia cupiditate animi delectus nobis maxime sequi, alias illo
        dignissimos!
      </div>

      <div className="">
        <Form />
      </div>
    </div>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  return (
    <div className="w-full flex items-start mt-5 ">
      <div className="w-1/2 h-full">
        <img
          className="w-full  rounded-xl"
          src="/illustrations/blackwhitePattern.svg"
          alt=""
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-[95%]">
          <div>
            <Label>
              <div className=" flex items-center gap-2">
                <div>
                  <UserRound size={15} />
                </div>
                <div>Full Name</div>
              </div>
            </Label>
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Aymen Melouah"
              className="w-full mt-2"
            />
          </div>

          <div className="mt-4">
            <Label>
              <div className=" flex items-center gap-2">
                <div>
                  <Mail size={15} />
                </div>
                <div>Your Email</div>
              </div>
            </Label>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="aymenmeloah@gmail.com"
              className="w-full mt-2"
            />
          </div>

          <div className="mt-4">
            <Label>
              <div className=" flex items-center gap-2">
                <div>
                  <Briefcase size={15} />
                </div>
                <div>Subject</div>
              </div>
            </Label>
            <Select>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="choose a subject u interested in" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="design-brands"
                  onClick={() => {
                    setSubject("Design Brands");
                  }}
                >
                  Design Brands
                </SelectItem>
                <SelectItem
                  onClick={() => setSubject("Software Developpment")}
                  value="software-development"
                >
                  Software Developpment
                </SelectItem>
                <SelectItem
                  onClick={() => {
                    setSubject("Marketing");
                  }}
                  value="marketing"
                >
                  Marketing
                </SelectItem>
                <SelectItem
                  onClick={() => {
                    setSubject("Other");
                  }}
                  value="other"
                >
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-4">
            <Label>
              <div className=" flex items-center gap-2">
                <div>
                  <Info size={15} />
                </div>
                <div>Details</div>
              </div>
            </Label>
            <Textarea
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
              placeholder="Specify exactly what do you want"
              className="w-full mt-2 font-DM"
            />
          </div>
          <div className="mt-5">
            <Button>
              <div className="flex items-center gap-2">
                <div>Send Now</div>
                <div>
                  {" "}
                  <ArrowRight size={15} />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
