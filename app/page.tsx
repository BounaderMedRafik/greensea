import Hero from "@/components/marketing/Hero";
import Paragraph from "@/components/marketing/Paragraph";
import WhoAreWe from "@/components/marketing/WhoAreWe";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Paragraph text="We craft unique digital experiences for businesses, bringing your ideas to life with creativity and innovation. Explore the possibilities with us." />
      <WhoAreWe />
    </main>
  );
}
