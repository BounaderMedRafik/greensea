"use client";
import GoUpBTN from "@/components/layout/GoUpBTN";
import Navigation from "@/components/layout/Navigation";
import AboutUs from "@/components/marketing/AboutUs";
import ContactUs from "@/components/marketing/ContactUs";
import Footer from "@/components/marketing/Footer";
import Hero from "@/components/marketing/Hero";
import AboutUsMobile from "@/components/marketing/mobile/AboutUsMobile";
import ContactUsMobile from "@/components/marketing/mobile/ContactUsMobile";
import FooterMobile from "@/components/marketing/mobile/FooterMobile";
import HeroMobile from "@/components/marketing/mobile/HeroMobile";
import NavigationMobile from "@/components/marketing/mobile/NavigationMobile";
import OurServicesMobile from "@/components/marketing/mobile/OurServicesMobile";
import OurServices from "@/components/marketing/OurServices";
export default function Home() {
  return (
    <>
      <main className=" relative hidden md:block">
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
          <ContactUs />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <GoUpBTN />
        </div>
      </main>
      <main className=" block md:hidden">
        <div>
          <NavigationMobile />
        </div>
        <div>
          <HeroMobile />
        </div>
        <div>
          <AboutUsMobile />
        </div>
        <div>
          <OurServicesMobile />
        </div>
        <div>
          <ContactUsMobile />
        </div>
        <div>
          <FooterMobile />
        </div>
      </main>
    </>
  );
}
