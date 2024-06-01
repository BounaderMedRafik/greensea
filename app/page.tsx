import Hero from "@/components/marketing/Hero";
import Paragraph from "@/components/marketing/Paragraph";
import WhoAreWe from "@/components/marketing/WhoAreWe";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Paragraph
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque iusto
        accusamus, eaque illum beatae omnis."
      />
      <WhoAreWe />
    </main>
  );
}
