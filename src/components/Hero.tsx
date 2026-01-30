export default function Hero() {
  return (
    <section className="relative min-h-[100vh] hero-clip overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#141B2D]">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141B2D] via-[#1E2640] to-[#141B2D]" />
        {/* Accent glow */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#C84B31]/8 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#C84B31]/5 blur-[80px]" />
        {/* Diagonal construction lines */}
        <div className="absolute inset-0 stripe-pattern opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-40 md:pt-40 md:pb-52">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#C84B31]/30 bg-[#C84B31]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#C84B31] animate-pulse" />
            <span className="font-[var(--font-body)] text-xs font-medium tracking-wider uppercase text-[#E07A5F]">
              Licensed PA Contractor &bull; Serving Since 2006
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-[var(--font-heading)] text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationFillMode: "backwards" }}>
            Built on
            <span className="text-copper-gradient"> Trust.</span>
            <br />
            Backed by{" "}
            <span className="text-copper-gradient">Craft.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 mt-6 max-w-xl font-[var(--font-body)] text-lg leading-relaxed text-[#8E9AB3] md:text-xl" style={{ animationFillMode: "backwards" }}>
            Family-owned construction and plumbing serving the Cumberland Valley
            for nearly two decades. From emergency repairs to full home remodels
            — Tim & Timmy Barrick get it done right.
          </p>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-8" style={{ animationFillMode: "backwards" }}>
            <div>
              <p className="font-[var(--font-heading)] text-3xl text-[#C84B31]">20+</p>
              <p className="font-[var(--font-body)] text-xs uppercase tracking-wider text-[#647291]">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-[#2D3554]" />
            <div>
              <p className="font-[var(--font-heading)] text-3xl text-[#C84B31]">4.8★</p>
              <p className="font-[var(--font-body)] text-xs uppercase tracking-wider text-[#647291]">Avg Rating</p>
            </div>
            <div className="h-12 w-px bg-[#2D3554]" />
            <div>
              <p className="font-[var(--font-heading)] text-3xl text-[#C84B31]">Top 24%</p>
              <p className="font-[var(--font-body)] text-xs uppercase tracking-wider text-[#647291]">PA Contractors</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationFillMode: "backwards" }}>
            <a
              href="tel:+17177767319"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#C84B31] px-8 py-4 font-[var(--font-body)] text-base font-semibold text-white shadow-lg shadow-[#C84B31]/20 transition-all hover:bg-[#E07A5F] hover:shadow-[#C84B31]/30 hover:-translate-y-0.5"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (717) 776-7319
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#2D3554] px-8 py-4 font-[var(--font-body)] text-base font-medium text-[#B8C0D2] transition-all hover:border-[#C84B31] hover:text-[#E07A5F]"
            >
              View Our Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Emergency badge */}
          <div className="animate-fade-in delay-500 mt-8 flex items-center gap-2 text-[#647291]" style={{ animationFillMode: "backwards" }}>
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-[var(--font-body)] text-sm">
              Emergency services available &bull; Free estimates
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
