const services = [
  {
    icon: WrenchIcon,
    title: "Plumbing",
    description:
      "From leaky faucets to full water heater replacements. Drain clearing, sump pumps, well pumps, water treatment systems, and emergency repairs.",
    items: [
      "Faucet & Pipe Repair",
      "Water Heater Install",
      "Drain Clearing",
      "Well & Sump Pumps",
      "Water Treatment",
      "Emergency Service",
    ],
  },
  {
    icon: HammerIcon,
    title: "Construction",
    description:
      "Home additions, custom builds, decks, barns, foundations, and excavation. Full project management from start to finish.",
    items: [
      "Home Additions",
      "Deck Building",
      "Custom Homes",
      "Barn Construction",
      "Foundations",
      "Excavation",
    ],
  },
  {
    icon: SparklesIcon,
    title: "Remodeling",
    description:
      "Complete bathroom and basement remodels. Tile, flooring, drywall, and finish carpentry — all handled in-house by our crew.",
    items: [
      "Bathroom Remodels",
      "Basement Finishing",
      "Tile & Flooring",
      "Drywall & Patching",
      "Kitchen Updates",
      "Accessibility Mods",
    ],
  },
  {
    icon: BoltIcon,
    title: "Electrical",
    description:
      "Wiring for additions and remodels, panel upgrades, new circuits, and lightning protection. Licensed and up to code.",
    items: [
      "Wiring & Panels",
      "Addition Electrical",
      "New Circuits",
      "Lightning Protection",
      "Laundry Hookups",
      "Code Upgrades",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#f8f9fa]">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
            What We Do
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl md:text-5xl">
            One call handles it all
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-lg leading-relaxed text-[#6b7080]">
            Plumbing, construction, electrical, and remodeling — all under one
            roof. No juggling multiple contractors. Tim and Timmy bring 20+ years
            of expertise to every project.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative rounded-2xl border border-[#e2e5eb] bg-white p-8 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B87333] to-[#D4956B] opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#B87333]/10 text-[#B87333] transition-colors group-hover:bg-[#B87333] group-hover:text-white">
                <service.icon />
              </div>

              {/* Content */}
              <h3 className="mt-6 font-[var(--font-heading)] text-xl text-[#1a1d23]">
                {service.title}
              </h3>
              <p className="mt-3 font-[var(--font-body)] text-sm leading-relaxed text-[#6b7080]">
                {service.description}
              </p>

              {/* Service items */}
              <ul className="mt-5 space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-[var(--font-body)] text-sm text-[#4a4e5a]"
                  >
                    <svg
                      className="h-3.5 w-3.5 flex-shrink-0 text-[#B87333]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl bg-[#1a1d23] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-30" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-[var(--font-heading)] text-2xl text-white md:text-3xl">
                Not sure what you need?
              </h3>
              <p className="mt-2 font-[var(--font-body)] text-[#9ca1af]">
                Call us for a free estimate. We&apos;ll assess your project and
                give you honest options.
              </p>
            </div>
            <a
              href="tel:+17177767319"
              className="inline-flex items-center gap-3 rounded-xl bg-[#B87333] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white shadow-lg shadow-[#B87333]/20 transition-all hover:bg-[#D4956B] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WrenchIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}
