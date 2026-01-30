"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface CityFAQProps {
  items: FAQItem[];
}

export default function CityFAQ({ items }: CityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#D8DCE8]">
      {items.map((faq, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-start justify-between gap-4 text-left"
          >
            <span className="font-[var(--font-body)] text-base font-medium text-[#141B2D]">
              {faq.question}
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-[#C84B31] transition-transform duration-200 ${
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
              <p className="font-[var(--font-body)] text-sm leading-relaxed text-[#647291]">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
