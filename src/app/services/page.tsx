import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | T & T Construction & Plumbing | Newville PA",
  description:
    "Full-service plumbing, construction, electrical, and remodeling. Bathroom remodels, water heater installation, drain clearing, deck building, home additions, and more. Serving Newville, Carlisle, Shippensburg & Cumberland Valley.",
};

const serviceCategories = [
  {
    category: "Plumbing",
    color: "#2563EB",
    description: "Complete residential plumbing from emergency repairs to new installations.",
    services: [
      { name: "Faucet & Fixture Repair/Replacement", detail: "Kitchen, bathroom, and utility faucets. Showerheads, valves, and hardware." },
      { name: "Drain Clog & Blockage Clearing", detail: "Snaking, augering, and plunging for kitchen, bath, and floor drains." },
      { name: "Water Heater Installation & Replacement", detail: "Standard and tankless water heaters. Repair and full replacement." },
      { name: "Sump Pump Repair & Replacement", detail: "Emergency sump pump service. Battery backup installations." },
      { name: "Water Main Install/Replace/Repair", detail: "Main line repair, replacement, and new installations." },
      { name: "Well Pump Installation & Replacement", detail: "Well pump diagnostics, repair, and full replacement." },
      { name: "Water Treatment & Purification", detail: "Water softeners, purifiers, and filtration system service." },
      { name: "Sewer Main Clearing", detail: "Main sewer line cleaning and blockage removal." },
      { name: "Septic System Repair", detail: "Septic tank service, repair, and maintenance." },
      { name: "Toilet Repair & Replacement", detail: "Valve replacement, flange repair, and full toilet installation." },
      { name: "Outside Faucet Installation", detail: "Hose bibs, frost-proof faucets, hot & cold outdoor taps." },
      { name: "Garbage Disposal Installation", detail: "New disposal install and replacement of existing units." },
      { name: "Bathroom Plumbing Rough-In", detail: "New water lines, drain rough-in, and fixture connections for remodels." },
      { name: "Emergency Plumbing Service", detail: "Same-day response. Burst pipes, flooding, no-water emergencies." },
    ],
  },
  {
    category: "Construction",
    color: "#C84B31",
    description: "From foundations to finished structures. Residential and light commercial.",
    services: [
      { name: "Home Additions", detail: "Room additions, bump-outs, and second-story additions." },
      { name: "Custom Home Construction", detail: "Ground-up custom home building with full project management." },
      { name: "Deck Building", detail: "Wood and composite (Trex) decks. Covered decks with roofing." },
      { name: "Barn Construction", detail: "Agricultural and residential barn building." },
      { name: "Foundations & Excavation", detail: "Foundation pouring, footers, and site excavation." },
      { name: "Carport Installation", detail: "Attached and detached carport construction." },
      { name: "Paver Installation", detail: "Patio pavers, walkways, and driveway paving." },
      { name: "Roofing & Awnings", detail: "Roof installation and awning additions for decks and patios." },
      { name: "Building Fireproofing", detail: "Fireproofing applications for residential structures." },
      { name: "Construction Project Management", detail: "Full project oversight from permits to final inspection." },
    ],
  },
  {
    category: "Remodeling",
    color: "#7C3AED",
    description: "Transform your spaces. Bathrooms, basements, kitchens, and whole-home renovations.",
    services: [
      { name: "Bathroom Remodeling", detail: "Full and half bath renovations. Tile, vanity, fixtures, and plumbing." },
      { name: "Basement Finishing", detail: "Full basement remodels including framing, electrical, plumbing, and finishes." },
      { name: "Kitchen Updates", detail: "Cabinet replacement, countertop upgrades, plumbing rerouting." },
      { name: "Tile & Flooring Installation", detail: "Ceramic, porcelain, and stone tile. Vinyl and laminate flooring." },
      { name: "Drywall Installation & Patching", detail: "New drywall hanging, taping, mudding, and patch repairs." },
      { name: "Accessibility Modifications", detail: "Grab bars, walk-in showers, ramps, and ADA-compliant modifications." },
      { name: "Interior Trim & Carpentry", detail: "Baseboards, crown molding, door frames, and custom woodwork." },
      { name: "Window & Door Installation", detail: "Replacement windows, entry doors, sliding doors, and storm doors." },
      { name: "Sink Replacement & Console Sinks", detail: "Pedestal, console, and vanity sink installation with plumbing." },
      { name: "General Handyman Services", detail: "Hanging, mounting, minor repairs, and miscellaneous fix-ups." },
    ],
  },
  {
    category: "Electrical",
    color: "#EAB308",
    description: "Licensed electrical work for additions, remodels, and upgrades.",
    services: [
      { name: "Electrical for Additions & Remodels", detail: "Full electrical rough-in and finish for new spaces." },
      { name: "Electrical Wiring & Panel Upgrades", detail: "Circuit panel upgrades, new wiring runs, and service upgrades." },
      { name: "New Circuit Installation", detail: "Dedicated circuits for laundry, kitchen, HVAC, and workshops." },
      { name: "Lightning Protection", detail: "Lightning rod installation and grounding systems." },
      { name: "Laundry Room Electrical", detail: "New lines, outlets, and connections for washers and dryers." },
      { name: "Code Upgrades & Inspections", detail: "Bringing older homes up to current electrical code requirements." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 bg-[#141B2D] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C84B31]/8 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#C84B31]">
              Our Services
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl md:text-6xl">
              Everything your home needs.
              <br />
              <span className="text-copper-gradient">One crew.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#8E9AB3] leading-relaxed">
              Plumbing, construction, electrical, and remodeling — all performed
              by Tim & Timmy Barrick. No subcontractors. No middlemen. Just
              skilled tradesmen who take pride in their work.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C84B31] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white transition-all hover:bg-[#E07A5F]"
            >
              Get a Free Estimate — (717) 776-7319
            </a>
          </div>
        </section>

        {/* Service categories */}
        {serviceCategories.map((cat) => (
          <section
            key={cat.category}
            className="py-20 border-b border-[#D8DCE8] last:border-0 odd:bg-white even:bg-[#F4F5F7]"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="h-1.5 w-12 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h2 className="font-[var(--font-heading)] text-3xl text-[#141B2D]">
                  {cat.category}
                </h2>
              </div>
              <p className="mb-10 max-w-xl font-[var(--font-body)] text-base text-[#647291]">
                {cat.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-xl border border-[#D8DCE8] bg-white p-6 transition-all hover:border-[#C84B31]/30 hover:shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C84B31]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <h3 className="font-[var(--font-body)] text-sm font-semibold text-[#141B2D]">
                          {s.name}
                        </h3>
                        <p className="mt-1 font-[var(--font-body)] text-xs text-[#647291] leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="py-20 bg-[#141B2D]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-white sm:text-4xl">
              Don&apos;t see what you need?
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[#8E9AB3]">
              If it involves plumbing, construction, or your home — chances are
              we do it. Call Tim and ask. Free estimates, no obligation.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C84B31] px-10 py-4 font-[var(--font-body)] text-lg font-semibold text-white shadow-lg shadow-[#C84B31]/20 transition-all hover:bg-[#E07A5F] hover:-translate-y-0.5"
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
