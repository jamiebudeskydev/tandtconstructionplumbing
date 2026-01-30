import type { Metadata } from "next";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | T & T Construction & Plumbing | Newville PA",
  description:
    "Contact T & T Construction & Plumbing at (717) 776-7319. Located at 61 Fickes Rd, Newville, PA 17241. Free estimates. Emergency plumbing available.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 bg-[#1a1d23] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
              Contact Us
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#9ca1af]">
              Call us for a free estimate, email us your project details, or stop
              by. We&apos;re always happy to talk through your project.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B87333] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white transition-all hover:bg-[#D4956B]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (717) 776-7319
            </a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
