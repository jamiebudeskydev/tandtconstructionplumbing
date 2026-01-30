import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | T & T Construction & Plumbing | Newville PA",
  description:
    "View project photos from T & T Construction & Plumbing. Bathroom remodels, deck builds, plumbing installations, and more across the Cumberland Valley.",
};

const projects = [
  {
    title: "Complete Bathroom Remodel",
    category: "Remodeling",
    color: "#7C3AED",
    description:
      "Full gut and renovation including new tile, vanity, fixtures, and plumbing. Custom shower installation with glass enclosure.",
    icon: "bath",
  },
  {
    title: "Trex Composite Deck Build",
    category: "Construction",
    color: "#B87333",
    description:
      "Custom-built composite deck with integrated railing system. Low-maintenance Trex decking with hidden fasteners.",
    icon: "deck",
  },
  {
    title: "Water Heater Replacement",
    category: "Plumbing",
    color: "#2563EB",
    description:
      "Tankless water heater installation with new copper supply lines. Energy-efficient upgrade from conventional tank system.",
    icon: "water",
  },
  {
    title: "Basement Finishing",
    category: "Remodeling",
    color: "#7C3AED",
    description:
      "Full basement buildout with framing, electrical, plumbing rough-in, drywall, and finished flooring. Added full bathroom.",
    icon: "basement",
  },
  {
    title: "Home Addition — Sunroom",
    category: "Construction",
    color: "#B87333",
    description:
      "Three-season sunroom addition with foundation, framing, roofing, and full electrical. Seamless tie-in to existing structure.",
    icon: "addition",
  },
  {
    title: "Sewer Main Repair",
    category: "Plumbing",
    color: "#2563EB",
    description:
      "Emergency sewer main excavation and replacement. Full-line repair with new PVC, backfill, and grade restoration.",
    icon: "sewer",
  },
  {
    title: "Kitchen Plumbing Renovation",
    category: "Plumbing",
    color: "#2563EB",
    description:
      "Complete kitchen plumbing reroute for remodel. New supply lines, drain relocation, garbage disposal, and dishwasher hookup.",
    icon: "kitchen",
  },
  {
    title: "Covered Deck with Awning",
    category: "Construction",
    color: "#B87333",
    description:
      "Pressure-treated deck with aluminum awning system. Built-in bench seating and multi-level step design.",
    icon: "awning",
  },
  {
    title: "Electrical Panel Upgrade",
    category: "Electrical",
    color: "#EAB308",
    description:
      "200-amp panel upgrade from outdated fuse box. New circuits for kitchen, laundry, and HVAC. Full code compliance.",
    icon: "electrical",
  },
  {
    title: "Accessibility Bathroom",
    category: "Remodeling",
    color: "#7C3AED",
    description:
      "ADA-compliant bathroom conversion with walk-in shower, grab bars, comfort-height toilet, and non-slip tile flooring.",
    icon: "accessible",
  },
  {
    title: "Well Pump Replacement",
    category: "Plumbing",
    color: "#2563EB",
    description:
      "Submersible well pump diagnosis and full replacement. New pressure tank, check valve, and wiring. Water tested post-install.",
    icon: "well",
  },
  {
    title: "Barn Construction",
    category: "Construction",
    color: "#B87333",
    description:
      "Agricultural barn build from foundation to roofing. Post-frame construction with metal siding and overhead door installation.",
    icon: "barn",
  },
];

function ProjectIcon({ icon, color }: { icon: string; color: string }) {
  const iconPaths: Record<string, string> = {
    bath: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a4 4 0 014-4h1m7 12V8a4 4 0 00-4-4H9m0 0V2",
    deck: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v7M12 14v7M16 14v7",
    water: "M12 3v18m0-18c-4 4-6 8-6 12a6 6 0 0012 0c0-4-2-8-6-12z",
    basement: "M3 21V9l9-6 9 6v12M9 21v-6h6v6M3 9h18",
    addition: "M12 4v16m8-8H4M3 21h18M3 10h18M9 3h6",
    sewer: "M4 20h16M6 20V10M18 20V10M10 20V6h4v14M6 10h12M2 20h20",
    kitchen: "M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM3 9V6a2 2 0 012-2h14a2 2 0 012 2v3M12 13v4",
    awning: "M3 21h18M5 21V7l7-4 7 4v14M3 7h18M9 21v-6h6v6",
    electrical: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    accessible: "M12 2a2 2 0 100 4 2 2 0 000-4zM10 8h4l2 6h-8l2-6zM8 22a4 4 0 01-4-4h2a2 2 0 104 0h2a4 4 0 01-4 4z",
    well: "M12 2v20M8 6l4-4 4 4M6 12h12M9 18a3 3 0 006 0",
    barn: "M3 21V11l9-8 9 8v10M3 11h18M9 21v-6h6v6M7 11V8M17 11V8",
  };

  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[icon] || iconPaths.bath} />
    </svg>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 bg-[#1a1d23] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#B87333]/8 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
              Our Work
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl md:text-6xl">
              Projects built to last.
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#9ca1af] leading-relaxed">
              From emergency plumbing repairs to full home additions, every
              project gets the same attention to detail. Here&apos;s a look at
              the kind of work Tim & Timmy deliver across the Cumberland Valley.
            </p>
          </div>
        </section>

        {/* Category filter pills */}
        <section className="bg-white border-b border-[#e2e5eb]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 py-5 overflow-x-auto">
              {["All", "Plumbing", "Construction", "Remodeling", "Electrical"].map(
                (cat, i) => (
                  <span
                    key={cat}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-[var(--font-body)] text-sm font-medium whitespace-nowrap transition-colors ${
                      i === 0
                        ? "bg-[#1a1d23] text-white"
                        : "bg-[#f1f2f4] text-[#6b7080] hover:bg-[#e2e5eb]"
                    }`}
                  >
                    {i === 0 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B87333]" />
                    )}
                    {cat}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Project grid */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[#e2e5eb] transition-all hover:shadow-lg hover:border-[#B87333]/30 hover:-translate-y-1"
                >
                  {/* Image placeholder — replace with next/image when photos available */}
                  <div
                    className="relative h-56 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 100%)`,
                    }}
                  >
                    {/* Diagonal stripe texture */}
                    <div className="absolute inset-0 stripe-pattern opacity-30" />

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex h-20 w-20 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${project.color}12`,
                          border: `1px solid ${project.color}25`,
                        }}
                      >
                        <ProjectIcon
                          icon={project.icon}
                          color={project.color}
                        />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-[var(--font-body)] text-xs font-semibold text-white"
                        style={{ backgroundColor: project.color }}
                      >
                        <span className="h-1 w-1 rounded-full bg-white/60" />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[var(--font-heading)] text-lg text-[#1a1d23]">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-[#6b7080]">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Photo coming soon note */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-xl bg-white border border-[#e2e5eb] px-6 py-4">
                <svg
                  className="h-5 w-5 text-[#B87333]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                  />
                </svg>
                <p className="font-[var(--font-body)] text-sm text-[#6b7080]">
                  Project photos coming soon. Call us to see examples of our
                  recent work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-[#1a1d23]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-white sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[#9ca1af]">
              Every project starts with a free estimate. Call Tim and
              let&apos;s talk through what you need.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B87333] px-10 py-4 font-[var(--font-body)] text-lg font-semibold text-white shadow-lg shadow-[#B87333]/20 transition-all hover:bg-[#D4956B] hover:-translate-y-0.5"
            >
              Call (717) 776-7319
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
