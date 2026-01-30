import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | T & T Construction & Plumbing | Newville PA",
  description:
    "Frequently asked questions about T & T Construction & Plumbing. Service area, licensing, emergency services, pricing, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 bg-[#141B2D] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#C84B31]">
              FAQ
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#8E9AB3]">
              Everything you need to know before calling T & T Construction &
              Plumbing. If your question isn&apos;t here, give us a ring.
            </p>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
