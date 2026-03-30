import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import Services from "@/components/Services";
import FuelCatalog from "@/components/FuelCatalog";
import Fleet from "@/components/Fleet";
import Quality from "@/components/Quality";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerTicker />
        <ScrollReveal>
          <Services />
        </ScrollReveal>
        <ScrollReveal>
          <FuelCatalog />
        </ScrollReveal>
        <ScrollReveal>
          <Fleet />
        </ScrollReveal>
        <ScrollReveal>
          <Quality />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
