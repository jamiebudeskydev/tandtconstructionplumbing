import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ReviewAuthority from "@/components/ReviewAuthority";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "T & T Construction & Plumbing | Newville PA | Licensed Since 2006",
  description:
    "Family-owned construction and plumbing serving Newville, Carlisle, Shippensburg & the Cumberland Valley since 2006. Plumbing, remodeling, electrical, decks & more. Free estimates. Call (717) 776-7319.",
  alternates: {
    canonical: "https://tandtconstructionplumbing.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReviewAuthority />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
