import { Hero2 } from "@/components/Hero2";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MobileSection } from "@/components/MobileSection";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Features />
      <MobileSection />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
