"use client";
import supabase from "@/app/supabase/supabaseClient";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Asterisk,
  Briefcase,
  ChevronDown,
  Facebook,
  Info,
  Instagram,
  Loader,
  Mail,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";

const ContactUsMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Design Branding");
  const [details, setDetails] = useState("");
  // ---
  const [isLoading, setIsLoading] = useState(false);
  const [succ, setIsSucc] = useState(false);
  const [error, setIsError] = useState(false);

  const uploadContact = async () => {
    setIsLoading(true);
    setIsSucc(false);
    setIsError(false);

    if (!name || !email || !subject || !details) {
      setIsError(true);
      setIsLoading(false);
      console.log("yal9lawi u have nth");
      console.log(
        "name: " +
          name +
          " email: " +
          email +
          " subject: " +
          subject +
          "details: " +
          details
      );
      return;
    }

    const { data, error } = await supabase.from("contacts").insert({
      name: name,
      email: email,
      subject: subject,
      details: details,
    });

    if (error) {
      console.log("error");
      setIsError(true);
      setIsLoading(false);
    } else {
      console.log("succ");
      setIsSucc(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div>
        <div className="text-5xl font-DM flex items-center gap-2 font-bold">
          <div>
            <Asterisk size={50} absoluteStrokeWidth />
          </div>{" "}
          <div>Contact Us</div>
        </div>
        <div className="text-xs opacity-75 max-w-md">
          We'd love to hear from you! Whether you have a question, need a quote,
          or are excited to start your next project, the Green Sea team is here
          to help. Reach out to us by phone, email, or fill out our contact
          form. Let's chat and create something amazing together!
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <img
            src="/illustrations/blackwhitePattern.svg"
            className=" h-24 w-full object-cover rounded-lg mt-2"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5">
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
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-2" asChild>
              <Button className="w-full bg-white text-text border border-neutral-300 flex justify-start items-start">
                <div className="flex items-center justify-between w-full">
                  <div>{subject}</div>
                  <div>
                    <ChevronDown size={15} />
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setSubject("Design Branding");
                }}
              >
                Design Branding
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSubject("Software Developpment");
                }}
              >
                Software Developpment
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSubject("Marketing");
                }}
              >
                Marketing
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSubject("Other");
                }}
              >
                Other
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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

        {succ ? (
          <div className=" text-green-900 text-xs my-5">
            We have recieved your contact demand, you will be redirected soon
          </div>
        ) : null}

        {error ? (
          <div className=" text-red-500 text-xs my-5">
            please fill out all the necessary information
          </div>
        ) : null}

        <div className="mt-5">
          <Button onClick={uploadContact}>
            {isLoading ? (
              <Loader className=" animate-spin" size={15} />
            ) : (
              <div className="flex items-center gap-2">
                <div>Send Now</div>
                <div>
                  {" "}
                  <ArrowRight size={15} />
                </div>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsMobile;
