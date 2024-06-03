"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { motion } from "framer-motion";
import { Ban } from "lucide-react";
import supabase from "@/app/supabase/supabaseClient";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [company, setCompany] = useState("");
  // --
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !PhoneNum || !company) {
      setFormError(true);
      return;
    }

    console.log(name, company, PhoneNum, email);

    const { data, error } = await supabase.from("Users").insert([
      {
        name,
        email,
        PhoneNum,
        company,
      },
    ]);
    if (error) {
      console.log(error);
      setFormError(true);
    }
    if (data) {
      console.log(data);
      toast({
        title: "Success",
      });
    }
  };

  return (
    <div className="wrapper">
      <div>
        <div className="text-4xl text-center font-LT">Contact us</div>
        <div className="mt-2 text-sm font-thin text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis
          aspernatur odit!
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <img className=" max-w-xl" src="/illustrations/contact.svg" alt="" />
        </div>
      </div>
      <div className="mt-10 w-full gap-3 flex items-center justify-center">
        <div>
          <Dialog>
            <DialogTrigger>
              <div
                className={buttonVariants({
                  variant: "default",
                  size: "wide",
                })}
              >
                Let&apos;s Start
              </div>
            </DialogTrigger>
            <DialogContent>
              <div className="text-4xl font-LT">Contact us</div>
              <div className=" mt-2">Lorem ipsum dolor sit amet.</div>
              <div className="text-sm font-thin ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident tenetur possimus quas.
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Jhonson lmao"
                      name="name"
                      id="name"
                      className="mt-1"
                    />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="cn">Company Name</Label>
                    <Input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      placeholder="wlad ljudj"
                      name="cn"
                      id="cn"
                      className="mt-1"
                    />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="companyxyz@mail.com"
                      name="email"
                      id="email"
                      className="mt-1"
                    />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      value={PhoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      required
                      placeholder="0658 48 52 95"
                      name="phone"
                      id="phone"
                      className="mt-1"
                    />
                  </div>
                  {formError ? (
                    <div className=" bg-danger flex items-center justify-center gap-3 p-1 py-1.5 text-center rounded-md mt-2 ">
                      please fill the form correctly!{" "}
                      <div>
                        <Ban size={15} />
                      </div>
                    </div>
                  ) : null}
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    className="mt-7"
                  >
                    <Button size={"wide"} type="submit">
                      Submit
                    </Button>
                  </motion.div>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Button variant={"white"}>another action btn</Button>
      </div>
    </div>
  );
};

export default ContactUs;
