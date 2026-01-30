const platforms = [
  {
    name: "HomeAdvisor",
    rating: "4.7",
    reviews: 29,
    url: "https://www.homeadvisor.com/rated.TandTConstruction.17609744.html",
    color: "#F68B1E",
  },
  {
    name: "Angi",
    rating: "5.0",
    reviews: 4,
    url: "https://www.angi.com/companylist/us/pa/newville/t-and-t-construction-and-plumbing-reviews-6137353.htm",
    color: "#FF6138",
  },
  {
    name: "Google",
    rating: "4.6",
    reviews: 10,
    url: "https://www.google.com/search?q=T+%26+T+Construction+%26+Plumbing+Newville+PA",
    color: "#4285F4",
  },
  {
    name: "BuildZoom",
    rating: "94",
    reviews: null,
    url: "https://www.buildzoom.com/contractor/t-and-t-construction-and-plumbing-llc",
    color: "#2B9EB3",
    label: "/ 100",
  },
  {
    name: "Nextdoor",
    rating: "★",
    reviews: null,
    url: "https://nextdoor.com/pages/t-t-construction-plumbing-newville-pa/",
    color: "#8ED500",
    label: "Recommended",
  },
];

export default function ReviewAuthority() {
  return (
    <section className="relative py-12 bg-white border-b border-[#D8DCE8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="font-[var(--font-body)] text-sm font-medium text-[#647291]">
            Trusted across the top review platforms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-[#D8DCE8] bg-[#F4F5F7] px-5 py-3.5 transition-all hover:border-[#C84B31]/40 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Platform color dot */}
              <div
                className="h-3 w-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.color }}
              />

              <div className="flex items-baseline gap-1.5">
                <span className="font-[var(--font-body)] text-lg font-bold text-[#141B2D]">
                  {p.rating}
                </span>
                {p.label ? (
                  <span className="font-[var(--font-body)] text-xs text-[#647291]">
                    {p.label}
                  </span>
                ) : (
                  <>
                    {/* Star icons for ratings */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.round(parseFloat(p.rating))
                              ? "text-amber-400"
                              : "text-[#D8DCE8]"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col">
                <span className="font-[var(--font-body)] text-xs font-semibold text-[#141B2D]">
                  {p.name}
                </span>
                {p.reviews && (
                  <span className="font-[var(--font-body)] text-[10px] text-[#647291]">
                    {p.reviews} reviews
                  </span>
                )}
              </div>

              {/* External link icon */}
              <svg
                className="h-3.5 w-3.5 text-[#8E9AB3] opacity-0 transition-opacity group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
