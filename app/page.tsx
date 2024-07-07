"use client";
import GoUpBTN from "@/components/layout/GoUpBTN";
import Navigation from "@/components/layout/Navigation";
import AboutUs from "@/components/marketing/AboutUs";
import Hero from "@/components/marketing/Hero";
import OurServices from "@/components/marketing/OurServices";
export default function Home() {
  return (
    <main className=" relative">
      <div>
        <Navigation />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <GoUpBTN />
      </div>
    </main>
  );
}
