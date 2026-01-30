"use client";

import { useState } from "react";

const faqs = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
            FAQ
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-lg text-[#6b7080]">
            Everything you need to know before calling.
          </p>
        </div>

        {/* FAQ items */}
        <div className="mt-12 divide-y divide-[#e2e5eb]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <span className="font-[var(--font-body)] text-base font-medium text-[#1a1d23]">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-[#B87333] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-3 pr-12">
                  <p className="font-[var(--font-body)] text-sm leading-relaxed text-[#6b7080]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-[var(--font-body)] text-sm text-[#6b7080]">
            Still have questions?
          </p>
          <a
            href="tel:+17177767319"
            className="mt-3 inline-flex items-center gap-2 font-[var(--font-body)] text-base font-semibold text-[#B87333] hover:text-[#8B5A2B] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (717) 776-7319
          </a>
        </div>
      </div>
    </section>
  );
}
