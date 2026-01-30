const hours = [
  { day: "Monday", time: "5:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "5:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "5:00 AM – 8:00 PM" },
  { day: "Thursday", time: "5:00 AM – 8:00 PM" },
  { day: "Friday", time: "5:00 AM – 8:00 PM" },
  { day: "Saturday", time: "Emergency Only" },
  { day: "Sunday", time: "Emergency Only" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#F4F5F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#C84B31]">
            Get In Touch
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[#141B2D] sm:text-4xl md:text-5xl">
            Ready to start your project?
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-lg text-[#647291]">
            Call us for a free estimate or send an email. We serve Newville,
            Carlisle, Shippensburg, and the entire Cumberland Valley.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Contact info card */}
          <div className="rounded-2xl bg-white border border-[#D8DCE8] p-8 shadow-sm">
            <h3 className="font-[var(--font-heading)] text-xl text-[#141B2D]">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <a
                href="tel:+17177767319"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#C84B31]/10 text-[#C84B31] group-hover:bg-[#C84B31] group-hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-medium text-[#141B2D] group-hover:text-[#C84B31] transition-colors">
                    (717) 776-7319
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    Main business line
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:reesepandh@embarqmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#C84B31]/10 text-[#C84B31] group-hover:bg-[#C84B31] group-hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-medium text-[#141B2D] group-hover:text-[#C84B31] transition-colors">
                    reesepandh@embarqmail.com
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    Email us anytime
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#C84B31]/10 text-[#C84B31]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-medium text-[#141B2D]">
                    61 Fickes Rd
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    Newville, PA 17241
                  </p>
                </div>
              </div>

              {/* License */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#C84B31]/10 text-[#C84B31]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-sm font-medium text-[#141B2D]">
                    PA License #PA001752
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#647291]">
                    Licensed & insured contractor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours card */}
          <div className="rounded-2xl bg-white border border-[#D8DCE8] p-8 shadow-sm">
            <h3 className="font-[var(--font-heading)] text-xl text-[#141B2D]">
              Business Hours
            </h3>

            <div className="mt-6 space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between py-2 border-b border-[#ECEEF3] last:border-0"
                >
                  <span className="font-[var(--font-body)] text-sm text-[#45506B]">
                    {h.day}
                  </span>
                  <span
                    className={`font-[var(--font-body)] text-sm font-medium ${
                      h.time === "Emergency Only"
                        ? "text-[#C84B31]"
                        : "text-[#141B2D]"
                    }`}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[#C84B31]/5 border border-[#C84B31]/20 p-4">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-[#C84B31]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="font-[var(--font-body)] text-xs font-medium text-[#9B3922]">
                  Emergency services available 7 days a week
                </span>
              </div>
            </div>
          </div>

          {/* Service area card */}
          <div className="rounded-2xl bg-white border border-[#D8DCE8] p-8 shadow-sm">
            <h3 className="font-[var(--font-heading)] text-xl text-[#141B2D]">
              Service Area
            </h3>

            <p className="mt-4 font-[var(--font-body)] text-sm text-[#647291] leading-relaxed">
              Proudly serving homeowners across the Cumberland Valley and
              surrounding communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Newville",
                "Carlisle",
                "Shippensburg",
                "Walnut Bottom",
                "Big Spring",
                "Plainfield",
                "Mechanicsburg",
                "Camp Hill",
                "Cumberland County",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[#D8DCE8] bg-[#F4F5F7] px-3 py-1.5 font-[var(--font-body)] text-xs font-medium text-[#45506B]"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Map embed placeholder */}
            <div className="mt-6 aspect-[4/3] rounded-xl overflow-hidden border border-[#D8DCE8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.2!2d-77.37191!3d40.14269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z40wrMDgnMzMuNyJOIDc3wrAyMicxOC45Ilc!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="T &amp; T Construction &amp; Plumbing location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
