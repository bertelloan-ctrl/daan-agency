import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { Process } from "@/components/Process";
import { BehindScenes } from "@/components/BehindScenes";
import { CaseStudies } from "@/components/CaseStudies";
import { ProductBrands } from "@/components/ProductBrands";
import { WhyDaan } from "@/components/WhyDaan";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileWhatsApp } from "@/components/MobileWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <ClientsMarquee />
        <Services />
        <WorkGrid />
        <Process />
        <BehindScenes />
        <CaseStudies />
        <ProductBrands />
        <WhyDaan />
        <CTA />
      </main>
      <Footer />
      <MobileWhatsApp />
    </>
  );
}
