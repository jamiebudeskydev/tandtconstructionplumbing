import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICE_AREAS, getAreasByTier } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Service Areas | T & T Construction & Plumbing | Cumberland Valley PA",
  description:
    "T&T Construction & Plumbing serves 15+ communities across Cumberland County and the Cumberland Valley. Carlisle, Mechanicsburg, Camp Hill, Shippensburg, Boiling Springs & more. Call (717) 776-7319.",
  openGraph: {
    title: "Service Areas | T & T Construction & Plumbing",
    description:
      "Serving 15+ communities across the Cumberland Valley since 2006. Licensed PA contractor. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://tandtconstructionplumbing.com/areas",
  },
  alternates: {
    canonical: "https://tandtconstructionplumbing.com/areas",
  },
};

const tierLabels: Record<number, { heading: string; description: string }> = {
  1: {
    heading: "Primary Service Areas",
    description: "Our most-served communities — fast response and deep local knowledge.",
  },
  2: {
    heading: "Extended Service Areas",
    description: "Communities we serve regularly across the eastern Cumberland Valley and West Shore.",
  },
  3: {
    heading: "Additional Coverage",
    description: "Smaller and rural communities near our Newville shop and beyond.",
  },
};

export default function AreasPage() {
  const tier1 = getAreasByTier(1);
  const tier2 = getAreasByTier(2);
  const tier3 = getAreasByTier(3);

  const tiers = [
    { tier: 1, areas: tier1 },
    { tier: 2, areas: tier2 },
    { tier: 3, areas: tier3 },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-[#141B2D] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C84B31]/8 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#C84B31]">
              Service Areas
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl md:text-6xl">
              Serving the{" "}
              <span className="text-copper-gradient">Cumberland Valley</span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#8E9AB3] leading-relaxed">
              Based in Newville, we provide construction and plumbing services to
              {" "}{SERVICE_AREAS.length} communities across Cumberland County and
              beyond. Licensed PA contractor since 2006.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C84B31] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white transition-all hover:bg-[#E07A5F]"
            >
              Get a Free Estimate — (717) 776-7319
            </a>
          </div>
        </section>

        {/* Area Groups */}
        {tiers.map(({ tier, areas }) => (
          <section
            key={tier}
            className={`py-16 ${tier % 2 === 1 ? "bg-white" : "bg-[#F4F5F7]"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-1.5 w-12 rounded-full bg-[#C84B31]" />
                <h2 className="font-[var(--font-heading)] text-2xl text-[#141B2D] sm:text-3xl">
                  {tierLabels[tier].heading}
                </h2>
              </div>
              <p className="mb-8 max-w-xl font-[var(--font-body)] text-base text-[#647291]">
                {tierLabels[tier].description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {areas.map((area) => (
                  <a
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group rounded-xl border border-[#D8DCE8] bg-white p-6 transition-all hover:border-[#C84B31]/30 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-[var(--font-heading)] text-lg text-[#141B2D] group-hover:text-[#C84B31] transition-colors">
                          {area.name}, PA
                        </h3>
                        <p className="mt-1 font-[var(--font-body)] text-xs text-[#647291]">
                          {area.county} County
                        </p>
                      </div>
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-[#8E9AB3] group-hover:text-[#C84B31] transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 font-[var(--font-body)] text-xs text-[#647291]">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {area.distanceFromNewville} mi
                      </span>
                      <span className="font-[var(--font-body)] text-xs text-[#8E9AB3]">
                        Pop. ~{area.population.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {area.commonServices.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-[#F4F5F7] px-2 py-0.5 font-[var(--font-body)] text-[10px] text-[#45506B]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Map Section */}
        <section className="py-16 bg-[#F4F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-heading)] text-2xl text-[#141B2D] sm:text-3xl">
              Our coverage area
            </h2>
            <p className="mt-2 max-w-xl font-[var(--font-body)] text-base text-[#647291]">
              Based at 61 Fickes Rd, Newville, PA — serving the entire Cumberland
              Valley and West Shore.
            </p>
            <div className="mt-8 aspect-[16/9] max-h-[500px] rounded-xl overflow-hidden border border-[#D8DCE8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195363.37!2d-77.45!3d40.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8c1e97f1e0001%3A0x1c0b82e36d40d7a9!2sCumberland%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="T &amp; T Construction &amp; Plumbing service area — Cumberland Valley, PA"
              />
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 bg-[#141B2D]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-white sm:text-4xl">
              Don&apos;t see your area?
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[#8E9AB3]">
              We may still be able to help. Call Tim — if we can get there, we
              will. Free estimates, no obligation.
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
