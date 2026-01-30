import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About T & T Construction & Plumbing | Father & Son Contractors | Newville PA",
  description:
    "Meet Tim & Timmy Barrick — the father-and-son team behind T & T Construction & Plumbing. Serving the Cumberland Valley since 2006 with 40+ years of combined trade experience.",
};

const timeline = [
  { year: "2006", event: "Tim Barrick officially registers T & T Construction & Plumbing in Pennsylvania" },
  { year: "2010", event: "Timmy joins the crew full-time — the father & son team is born" },
  { year: "2014", event: "Expanded into full bathroom and kitchen remodeling services" },
  { year: "2017", event: "Joined HomeAdvisor — rapidly earning 5-star reviews from the community" },
  { year: "2020", event: "Emergency response during COVID — keeping essential plumbing services running" },
  { year: "2023", event: "Earned BuildZoom score of 94/100 — ranked top 24% of PA contractors" },
  { year: "2026", event: "20 years of service — still the same commitment to quality and honesty" },
];

const values = [
  {
    title: "Show Up On Time",
    description:
      "Our customers say it best: we respond the same day, often next day. Tim has been on-site in under 30 minutes for emergencies. We don't leave you waiting.",
    icon: ClockIcon,
  },
  {
    title: "Do It Right the First Time",
    description:
      "When Tim found a nick in a tub surround, he called the supplier for a replacement rather than install a defective product. That's the standard — no shortcuts.",
    icon: ShieldIcon,
  },
  {
    title: "Give Honest Options",
    description:
      "We don't tell you what we're going to do — we explain the options and let you decide. Fair prices, transparent estimates, no surprises on the invoice.",
    icon: HandshakeIcon,
  },
  {
    title: "Treat Your Home Like Ours",
    description:
      "We clean up after ourselves, explain what we're doing, and make sure you understand how to maintain things. We've taught customers how to prevent future problems.",
    icon: HomeIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative pt-32 pb-20 bg-[#1a1d23] overflow-hidden">
          <div className="absolute inset-0 stripe-pattern opacity-20" />
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#B87333]/8 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
              About Us
            </p>
            <h1 className="mt-3 font-[var(--font-heading)] text-4xl text-white sm:text-5xl md:text-6xl">
              A father & son.
              <br />
              <span className="text-copper-gradient">A shared craft.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-[var(--font-body)] text-lg text-[#9ca1af] leading-relaxed">
              T & T is Tim & Timmy — a father-and-son team based in Walnut
              Bottom, PA. For 20 years they&apos;ve built a reputation on
              showing up early, doing the job right, and treating every
              home like their own.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-start">
              <div>
                <h2 className="font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl">
                  The story behind T & T
                </h2>
                <div className="mt-6 space-y-5 font-[var(--font-body)] text-base leading-relaxed text-[#4a4e5a]">
                  <p>
                    Tim Barrick didn&apos;t start T & T Construction &
                    Plumbing to build an empire. He started it because he&apos;d
                    spent decades working with his hands and knew he could serve
                    his neighbors better than the big outfits ever would.
                  </p>
                  <p>
                    In January 2006, he registered the business out of Newville,
                    PA — a small town in the Cumberland Valley where people still
                    know their neighbors by name. The &quot;T & T&quot; stands
                    for Tim and his son Timmy, who joined the crew to carry on
                    the family trade.
                  </p>
                  <p>
                    With over 40 years of personal trade experience, Tim has seen
                    it all. Lead pipes in century-old homes. Frozen hose bibs on
                    Thanksgiving morning. Full home remodels that transformed
                    outdated spaces into something families are proud of. And
                    Timmy is right there learning every lesson, building the same
                    reputation for the next generation.
                  </p>
                  <p>
                    Today, T & T handles everything under one roof — plumbing,
                    construction, electrical, remodeling, tile, drywall, decks.
                    Their customers don&apos;t need to juggle multiple
                    contractors. One call to Tim, and it&apos;s handled.
                  </p>
                  <p>
                    The reviews tell the story better than we can: 50+ verified
                    reviews with a 4.7+ average. Ranked in the top 24% of
                    Pennsylvania contractors. Customers who call once and keep
                    calling back for every project after that.
                  </p>
                </div>
              </div>

              {/* Visual element */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-[#1a1d23] p-10 relative overflow-hidden">
                  <div className="absolute inset-0 stripe-pattern opacity-20" />
                  <div className="relative text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#B87333]/20 mb-6">
                      <span className="font-[var(--font-heading)] text-4xl text-[#B87333]">T&T</span>
                    </div>
                    <p className="font-[var(--font-heading)] text-2xl text-white">Tim & Timmy Barrick</p>
                    <p className="mt-2 font-[var(--font-body)] text-sm text-[#9ca1af]">Father & Son &bull; Walnut Bottom, PA</p>
                    <div className="mt-6 flex justify-center gap-8">
                      <div>
                        <p className="font-[var(--font-heading)] text-3xl text-[#B87333]">40+</p>
                        <p className="font-[var(--font-body)] text-xs text-[#6b7080]">Years Experience</p>
                      </div>
                      <div className="h-12 w-px bg-[#353842]" />
                      <div>
                        <p className="font-[var(--font-heading)] text-3xl text-[#B87333]">2006</p>
                        <p className="font-[var(--font-body)] text-xs text-[#6b7080]">Founded</p>
                      </div>
                      <div className="h-12 w-px bg-[#353842]" />
                      <div>
                        <p className="font-[var(--font-heading)] text-3xl text-[#B87333]">50+</p>
                        <p className="font-[var(--font-body)] text-xs text-[#6b7080]">Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="rounded-2xl border border-[#e2e5eb] bg-[#f8f9fa] p-8">
                  <svg className="h-8 w-8 text-[#B87333]/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="mt-4 font-[var(--font-body)] text-base leading-relaxed text-[#4a4e5a] italic">
                    &ldquo;They are the best and local. I guarantee you will not be
                    disappointed. They have just about remodeled my entire home and
                    they do everything — plumbing, electrical, construction, just
                    name it.&rdquo;
                  </blockquote>
                  <p className="mt-4 font-[var(--font-body)] text-sm font-semibold text-[#1a1d23]">
                    — D.E., Nextdoor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl">
                How we work
              </h2>
              <p className="mt-4 font-[var(--font-body)] text-lg text-[#6b7080]">
                These aren&apos;t marketing slogans — they&apos;re pulled
                directly from what 50+ customers have said about working with us.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-5 rounded-2xl bg-white border border-[#e2e5eb] p-8">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#B87333]/10 text-[#B87333]">
                    <v.icon />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg text-[#1a1d23]">{v.title}</h3>
                    <p className="mt-2 font-[var(--font-body)] text-sm leading-relaxed text-[#6b7080]">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl">
                20 years of building trust
              </h2>
            </div>

            <div className="mt-16 space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 last:pb-0">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#B87333] text-white font-[var(--font-body)] text-xs font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-[#e2e5eb] mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <p className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-wider text-[#B87333]">
                      {item.year}
                    </p>
                    <p className="mt-1 font-[var(--font-body)] text-base text-[#4a4e5a]">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a1d23]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[#9ca1af]">
              Call for a free estimate. No pressure, just honest advice from Tim
              and Timmy.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#B87333] px-10 py-4 font-[var(--font-body)] text-lg font-semibold text-white shadow-lg shadow-[#B87333]/20 transition-all hover:bg-[#D4956B] hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (717) 776-7319
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ClockIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}
