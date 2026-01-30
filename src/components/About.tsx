export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#B87333]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left — image placeholder / visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[#1a1d23] overflow-hidden relative">
              {/* Decorative content since we don't have actual photos */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#252830] to-[#1a1d23]" />
              <div className="absolute inset-0 stripe-pattern opacity-20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#B87333]/20 mb-6">
                  <span className="font-[var(--font-heading)] text-4xl text-[#B87333]">T&T</span>
                </div>
                <p className="font-[var(--font-heading)] text-3xl text-white">
                  Family Owned
                </p>
                <p className="font-[var(--font-heading)] text-3xl text-[#B87333]">
                  Since 2006
                </p>
                <div className="mt-6 flex items-center gap-4 text-slate-400">
                  <div className="h-px w-12 bg-slate-600" />
                  <span className="font-[var(--font-body)] text-sm uppercase tracking-widest">
                    Newville, PA
                  </span>
                  <div className="h-px w-12 bg-slate-600" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-white p-5 shadow-xl shadow-black/10 border border-[#e2e5eb] md:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#B87333]/10">
                  <svg className="h-6 w-6 text-[#B87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-[var(--font-body)] text-2xl font-bold text-[#1a1d23]">Top 24%</p>
                  <p className="font-[var(--font-body)] text-xs text-[#6b7080]">of PA Contractors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
              Our Story
            </p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[#1a1d23] sm:text-4xl">
              A father & son team you can count on
            </h2>

            <div className="mt-6 space-y-4 font-[var(--font-body)] text-base leading-relaxed text-[#4a4e5a]">
              <p>
                When Tim Barrick founded T & T Construction & Plumbing in 2006,
                the vision was simple: treat every home like it&apos;s your own.
                Joined by his son Timmy, the two have built a reputation in the
                Cumberland Valley that speaks for itself — 20 years of honest
                work, fair prices, and neighbors who keep calling back.
              </p>
              <p>
                Based in Walnut Bottom and serving Newville, Carlisle,
                Shippensburg, and the surrounding communities, T & T handles
                everything from emergency plumbing calls at dawn to full home
                remodels. Plumbing, construction, electrical, tile, drywall,
                decks — you name it, Tim and Timmy have done it.
              </p>
              <p>
                With Tim bringing over 40 years of personal trade experience and
                a PA contractor&apos;s license (PA001752), you&apos;re not hiring
                a faceless company. You&apos;re hiring your neighbors.
              </p>
            </div>

            {/* Key facts */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#e2e5eb] bg-[#f8f9fa] p-5">
                <p className="font-[var(--font-heading)] text-2xl text-[#B87333]">2006</p>
                <p className="mt-1 font-[var(--font-body)] text-sm text-[#6b7080]">
                  Year founded
                </p>
              </div>
              <div className="rounded-xl border border-[#e2e5eb] bg-[#f8f9fa] p-5">
                <p className="font-[var(--font-heading)] text-2xl text-[#B87333]">40+</p>
                <p className="mt-1 font-[var(--font-body)] text-sm text-[#6b7080]">
                  Years of trade experience
                </p>
              </div>
              <div className="rounded-xl border border-[#e2e5eb] bg-[#f8f9fa] p-5">
                <p className="font-[var(--font-heading)] text-2xl text-[#B87333]">50+</p>
                <p className="mt-1 font-[var(--font-body)] text-sm text-[#6b7080]">
                  Verified reviews
                </p>
              </div>
              <div className="rounded-xl border border-[#e2e5eb] bg-[#f8f9fa] p-5">
                <p className="font-[var(--font-heading)] text-2xl text-[#B87333]">PA001752</p>
                <p className="mt-1 font-[var(--font-body)] text-sm text-[#6b7080]">
                  Licensed contractor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
