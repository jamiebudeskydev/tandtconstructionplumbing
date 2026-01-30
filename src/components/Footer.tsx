import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141B2D] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C84B31]">
                <span className="font-[var(--font-heading)] text-xl font-bold text-white">
                  T&T
                </span>
              </div>
              <div>
                <p className="font-[var(--font-heading)] text-lg leading-tight text-white">
                  T & T Construction
                </p>
                <p className="text-xs font-[var(--font-body)] tracking-widest uppercase text-[#E07A5F]">
                  & Plumbing
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm font-[var(--font-body)] text-sm leading-relaxed text-[#647291]">
              Family-owned construction and plumbing serving the Cumberland
              Valley since 2006. Licensed PA contractor. Free estimates on all
              projects.
            </p>
            <a
              href="tel:+17177767319"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C84B31] px-5 py-2.5 font-[var(--font-body)] text-sm font-semibold text-white transition-all hover:bg-[#E07A5F]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (717) 776-7319
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#8E9AB3]">
              Quick Links
            </h4>
            <nav className="mt-4 space-y-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-[var(--font-body)] text-sm text-[#647291] transition-colors hover:text-[#E07A5F]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#8E9AB3]">
              Services
            </h4>
            <nav className="mt-4 space-y-3">
              {[
                "Plumbing",
                "Construction",
                "Remodeling",
                "Electrical",
                "Emergency Repair",
                "Free Estimates",
              ].map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="block font-[var(--font-body)] text-sm text-[#647291] transition-colors hover:text-[#E07A5F]"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#8E9AB3]">
              Service Areas
            </h4>
            <nav className="mt-4 space-y-3">
              {[
                { href: "/areas/carlisle-pa", label: "Carlisle" },
                { href: "/areas/mechanicsburg-pa", label: "Mechanicsburg" },
                { href: "/areas/camp-hill-pa", label: "Camp Hill" },
                { href: "/areas/shippensburg-pa", label: "Shippensburg" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-[var(--font-body)] text-sm text-[#647291] transition-colors hover:text-[#E07A5F]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/areas"
                className="block font-[var(--font-body)] text-sm font-medium text-[#E07A5F] transition-colors hover:text-[#C84B31]"
              >
                All Areas &rarr;
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-[var(--font-body)] text-xs text-[#45506B]">
            &copy; {currentYear} T & T Construction & Plumbing. All rights
            reserved. PA License #PA001752. | Designed with{" "}
            <span className="text-[#C84B31]">&hearts;</span> by{" "}
            <a
              href="https://jamiebudesky.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#647291] transition-colors hover:text-[#E07A5F]"
            >
              jamiebudesky.dev
            </a>
          </p>
          <p className="font-[var(--font-body)] text-xs text-[#45506B]">
            61 Fickes Rd, Newville, PA 17241 &bull; (717) 776-7319
          </p>
        </div>
      </div>
    </footer>
  );
}
