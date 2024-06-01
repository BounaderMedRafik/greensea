import ContactUs from "@/components/marketing/ContactUs";
import Hero from "@/components/marketing/Hero";
import Paragraph from "@/components/marketing/Paragraph";
import WhoAreWe from "@/components/marketing/WhoAreWe";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Paragraph text="We craft unique digital experiences for businesses, bringing your ideas to life with creativity and innovation. Explore the possibilities with us." />
      <WhoAreWe />
      <Paragraph text="Now let's take a step further and start our journy into making you business have a social & digital presence" />
      <div className=" w-full wrapper py-0 px-0 mb-10 bg-text/20 h-px"></div>
      <ContactUs />
    </main>
  );
}
