"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import { Ban, Stars } from "lucide-react";
import supabase from "@/app/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNum, setPhoneNum] = useState("");
  const [company, setCompany] = useState("");
  // --
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !PhoneNum || !company) {
      setFormError(true);
      return;
    }

    console.log(name, company, PhoneNum, email);

    const { data, error } = await supabase.from("clients").insert([
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
    } else {
      toast({
        title: "Thank you for contacting us",
        description: "We will get back to you soon",
      });
      setSuccess(true);
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
            <DialogTrigger asChild>
              <div
                className={buttonVariants({
                  variant: "default",
                  size: "wide",
                })}
              >
                Let&apos;s Start
              </div>
            </DialogTrigger>
            <DialogContent className="overflow-hidden">
              <div className="text-4xl font-LT">Contact us</div>
              <div className=" mt-2">Lorem ipsum dolor sit amet.</div>
              <div className="text-sm font-thin ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident tenetur possimus quas.
              </div>
              <div className="mt-5">
                {success ? (
                  <AnimatePresence>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    >
                      <div className="w-full h-full">
                        <img
                          className=" mx-auto h-96"
                          src="/illustrations/success.svg"
                        />
                        <div className="text-4xl text-center font-LT mt-3">
                          Lorem, ipsum dolor.
                        </div>
                        <div className="mt-2 font-thin text-center">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Praesentium, possimus est.
                        </div>
                        <div className="flex items-center gap-2 mt-5">
                          <DialogClose asChild>
                            <Button>Close</Button>
                          </DialogClose>
                          <Button
                            variant={"white"}
                            onClick={() => setSuccess(false)}
                          >
                            Go Back
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                    >
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
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Button variant={"white"}>
          <div className=" flex items-center gap-2">
            <div>Our services</div>
            <div>
              <Stars size={15} />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
