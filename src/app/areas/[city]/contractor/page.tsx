import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import CityFAQ from "@/components/CityFAQ";
import {
  SERVICE_AREAS,
  getAreaBySlug,
  getNearbyAreas,
} from "@/data/service-areas";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return {};

  return {
    title: area.contractorMeta.metaTitle,
    description: area.contractorMeta.metaDescription,
    openGraph: {
      title: area.contractorMeta.metaTitle,
      description: area.contractorMeta.metaDescription,
      type: "website",
      locale: "en_US",
      url: `https://tandtconstructionplumbing.com/areas/${area.slug}/contractor`,
    },
    alternates: {
      canonical: `https://tandtconstructionplumbing.com/areas/${area.slug}/contractor`,
    },
  };
}

/**
 * StructuredData outputs JSON-LD for GeneralContractor + FAQPage schemas.
 * All data comes from the static service-areas.ts file — no user input is used.
 * The dangerouslySetInnerHTML usage is safe because the content is fully static
 * build-time data with no external or user-supplied strings.
 */
function StructuredData({ area }: { area: { slug: string; name: string; state: string; geo: { lat: number; lng: number }; contractorMeta: { faqs: { question: string; answer: string }[] } } }) {
  const contractorJsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "T & T Construction & Plumbing",
    url: `https://tandtconstructionplumbing.com/areas/${area.slug}/contractor`,
    telephone: "+17177767319",
    email: "reesepandh@embarqmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "61 Fickes Rd",
      addressLocality: "Newville",
      addressRegion: "PA",
      postalCode: "17241",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.14268780888541,
      longitude: -77.37191117629165,
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      addressRegion: area.state,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.geo.lat,
        longitude: area.geo.lng,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "33",
      bestRating: "5",
    },
    priceRange: "$$",
    foundingDate: "2006",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.contractorMeta.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Static JSON-LD from build-time data only — no user input, safe for innerHTML
  const jsonString = JSON.stringify([contractorJsonLd, faqJsonLd]);

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

export default async function ContractorCityPage({ params }: PageProps) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  const nearbyAreas = getNearbyAreas(area.slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 bg-[#141B2D] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C84B31]/8 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Service Areas", href: "/areas" },
                { label: `${area.name}, PA`, href: `/areas/${area.slug}` },
                { label: "Contractor" },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <h1 className="font-[var(--font-heading)] text-4xl text-white sm:text-5xl">
                General Contractor in{" "}
                <span className="text-copper-gradient">
                  {area.name}, PA
                </span>
              </h1>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C84B31]/15 px-3 py-1 font-[var(--font-body)] text-sm font-medium text-[#E07A5F]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {area.distanceFromNewville} miles from our shop
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 font-[var(--font-body)] text-sm text-[#8E9AB3]">
                Licensed PA Contractor
              </span>
            </div>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#8E9AB3] leading-relaxed">
              Licensed general contractor serving {area.name} and the
              Cumberland Valley since 2006. Remodeling, additions, decks, and
              more — one team from start to finish. Free estimates.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C84B31] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white transition-all hover:bg-[#E07A5F]"
            >
              Get a Free Estimate — (717) 776-7319
            </a>
          </div>
        </section>

        {/* Local Context — contractor-specific */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-[var(--font-heading)] text-2xl text-[#141B2D] sm:text-3xl">
                Construction & remodeling in {area.name}
              </h2>
              <p className="mt-4 font-[var(--font-body)] text-base text-[#647291] leading-relaxed">
                {area.contractorMeta.localContext}
              </p>
              {area.landmarks.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.landmarks.map((landmark) => (
                    <span
                      key={landmark}
                      className="rounded-full border border-[#D8DCE8] bg-[#F4F5F7] px-3 py-1.5 font-[var(--font-body)] text-xs font-medium text-[#45506B]"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contractor Services Grid */}
        <section className="py-16 bg-[#F4F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-heading)] text-2xl text-[#141B2D] sm:text-3xl">
              Contractor services in {area.name}
            </h2>
            <p className="mt-2 font-[var(--font-body)] text-base text-[#647291]">
              Construction and remodeling services for {area.name} homeowners.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {area.contractorMeta.commonServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-[#D8DCE8] bg-white p-5 transition-all hover:border-[#C84B31]/30 hover:shadow-sm"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#C84B31]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-[var(--font-body)] text-sm font-medium text-[#141B2D]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/services"
              className="mt-6 inline-flex items-center gap-2 font-[var(--font-body)] text-sm font-semibold text-[#C84B31] hover:text-[#9B3922] transition-colors"
            >
              View all services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Trust Row */}
        <section className="py-12 bg-white border-y border-[#D8DCE8]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#C84B31]/10 text-[#C84B31]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-semibold text-[#141B2D]">
                    PA License #PA001752
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    Licensed general contractor since 2006
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#C84B31]/10 text-[#C84B31]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-semibold text-[#141B2D]">
                    4.8-Star Rated
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    33 reviews across platforms
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#C84B31]/10 text-[#C84B31]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-semibold text-[#141B2D]">
                    Full-Service Contractor
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    One team from demo to punch list
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contractor FAQ */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[var(--font-heading)] text-2xl text-[#141B2D] sm:text-3xl">
              Contractor questions — {area.name}
            </h2>
            <p className="mt-2 font-[var(--font-body)] text-base text-[#647291]">
              Common questions about construction and remodeling in {area.name}.
            </p>
            <div className="mt-8">
              <CityFAQ items={area.contractorMeta.faqs} />
            </div>
          </div>
        </section>

        {/* CTA Block */}
        <section className="py-20 bg-[#141B2D]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-white sm:text-4xl">
              Need a contractor in {area.name}?
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[#8E9AB3]">
              Call Tim for a free estimate on your remodeling, addition, or
              construction project. No obligation — just honest advice from a
              licensed contractor.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C84B31] px-10 py-4 font-[var(--font-body)] text-lg font-semibold text-white shadow-lg shadow-[#C84B31]/20 transition-all hover:bg-[#E07A5F] hover:-translate-y-0.5"
            >
              Call (717) 776-7319
            </a>
          </div>
        </section>

        {/* Cross-Links */}
        <section className="py-12 bg-[#F4F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
              {/* Link to plumber page for this city */}
              <div>
                <h3 className="font-[var(--font-heading)] text-lg text-[#141B2D]">
                  Also available in {area.name}
                </h3>
                <div className="mt-3">
                  <a
                    href={`/areas/${area.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#C84B31]/30 bg-white px-4 py-2 font-[var(--font-body)] text-sm font-medium text-[#C84B31] transition-all hover:bg-[#C84B31]/5"
                  >
                    Plumber in {area.name}, PA
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Nearby contractor pages */}
              {nearbyAreas.length > 0 && (
                <div>
                  <h3 className="font-[var(--font-heading)] text-lg text-[#141B2D]">
                    Contractor services nearby
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {nearbyAreas.map((nearby) => (
                      <a
                        key={nearby.slug}
                        href={`/areas/${nearby.slug}/contractor`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#D8DCE8] bg-white px-4 py-2 font-[var(--font-body)] text-sm font-medium text-[#141B2D] transition-all hover:border-[#C84B31]/30 hover:text-[#C84B31]"
                      >
                        {nearby.name}, PA
                        <svg className="h-3.5 w-3.5 text-[#8E9AB3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <StructuredData area={area} />
      <Footer />
    </>
  );
}
