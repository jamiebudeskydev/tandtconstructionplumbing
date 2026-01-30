import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | T & T Construction & Plumbing | Newville PA",
  description:
    "Frequently asked questions about T & T Construction & Plumbing. Service area, licensing, emergency services, pricing, and more.",
};

/**
 * FAQ data for FAQPage JSON-LD structured data.
 * Mirrors the items rendered in the FAQ client component.
 * SECURITY: All values are hardcoded string literals defined at build time.
 * No user input or dynamic data is used — safe for JSON.stringify output.
 */
const faqStructuredData = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Cumberland Valley including Newville, Carlisle, Shippensburg, Walnut Bottom, Mechanicsburg, Camp Hill, and surrounding communities in Cumberland County, PA.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — we provide free estimates on all projects. Give us a call at (717) 776-7319 and we'll schedule a time to assess your project and discuss options.",
  },
  {
    question: "Do you handle emergency plumbing?",
    answer:
      "Yes. We offer emergency plumbing services and respond as quickly as possible. We've been on-site in under 30 minutes for urgent calls. Don't hesitate to call us anytime at (717) 776-7319.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. T & T Construction & Plumbing is a licensed Pennsylvania contractor (License #PA001752). We've been licensed and operating since January 2006.",
  },
  {
    question: "What services do you offer besides plumbing?",
    answer:
      "We're a full-service construction and plumbing company. Beyond plumbing, we handle home additions, remodeling (bathrooms, basements, kitchens), electrical work, deck building, drywall, tile, flooring, carpentry, excavation, foundations, and more. If you're not sure if we cover it, just ask.",
  },
  {
    question: "Who will be doing the work?",
    answer:
      "Tim and Timmy Barrick — a father-and-son team. When you hire T & T, you get the owners on-site. Tim brings over 40 years of personal trade experience. You're not getting subcontractors or strangers — you're getting your neighbors.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit cards as well as checks and cash. Payment can be arranged on-site or invoiced after project completion.",
  },
  {
    question: "How quickly can you start a project?",
    answer:
      "For emergencies, we often respond the same day or next day. For scheduled projects, we'll work with you to find a start date that fits. We're known for our prompt, reliable scheduling.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqStructuredData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/**
 * Renders the FAQPage JSON-LD script tag.
 * SECURITY NOTE: faqSchema contains only hardcoded string literals
 * defined above — no user input, no dynamic data, no external sources.
 * JSON.stringify safely serializes the static object for the script tag.
 */
function FAQSchemaScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQSchemaScript />

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
