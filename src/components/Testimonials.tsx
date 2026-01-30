const testimonials = [
  {
    quote:
      "Outstanding short notice service on our historic home! Tim was there in less than 30 min! He fixed the problem to get us through the holiday and then returned to perform the permanent fix afterwards. Awesome customer service, awesome guys, awesome work!",
    author: "Scott M.",
    source: "Google",
    rating: 5,
    service: "Emergency Plumbing",
  },
  {
    quote:
      "Very professional and respectful. Worked with us and gave us options rather than just telling us what they were going to do. Went with good quality at reasonable price and gave us confidence that the job was done right.",
    author: "Tom M.",
    source: "Angi",
    rating: 5,
    service: "General Plumbing",
  },
  {
    quote:
      "They are the best and local. I guarantee you will not be disappointed. They have just about remodeled my entire home and they do everything — plumbing, electrical, construction, just name it.",
    author: "D.E.",
    source: "Nextdoor",
    rating: 5,
    service: "Full Home Remodel",
  },
  {
    quote:
      "There was a nick in the surround tub wall and Tim called his supplier and requested a new one. They would not install a defected product. That is what I call a company that has pride in their work and really cares about their customers.",
    author: "Bob F.",
    source: "HomeAdvisor",
    rating: 5,
    service: "Bathtub Installation",
  },
  {
    quote:
      "Tim did a great job and was very efficient and friendly. He came immediately when I talked to him, although he had another job pending that day. He found the damage, ordered the parts, and fixed the purifier so I had water for the weekend.",
    author: "C.S.",
    source: "HomeAdvisor",
    rating: 5,
    service: "Water Treatment",
  },
  {
    quote:
      "This company is top notch. I called them and they were out the following day. They did a fantastic job and taught me a thing or two about how to keep an outside faucet from freezing. Knowledgeable and professional. They will have all of my future repairs.",
    author: "Elaine C.",
    source: "HomeAdvisor",
    rating: 5,
    service: "Faucet Repair",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#1a1d23] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 stripe-pattern opacity-20" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#B87333]/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-[var(--font-body)] text-sm font-semibold uppercase tracking-widest text-[#B87333]">
            Real Reviews
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-white sm:text-4xl md:text-5xl">
            What our neighbors say
          </h2>
          <p className="mt-4 font-[var(--font-body)] text-lg text-[#9ca1af]">
            50+ verified reviews across Angi, HomeAdvisor, Google, and Nextdoor.
            Here&apos;s what homeowners in the Cumberland Valley have to say.
          </p>

          {/* Aggregate rating */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-[#B87333]/30 bg-[#B87333]/10 px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-[#B87333]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-[var(--font-body)] text-sm font-medium text-[#D4956B]">
              4.7 average &bull; 50+ reviews
            </span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all hover:border-[#B87333]/30 hover:bg-white/8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-[#B87333]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 font-[var(--font-body)] text-sm leading-relaxed text-[#c8ccd6]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-[var(--font-body)] text-sm font-semibold text-white">
                    {t.author}
                  </p>
                  <p className="font-[var(--font-body)] text-xs text-[#6b7080]">
                    {t.service}
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 font-[var(--font-body)] text-xs text-[#9ca1af]">
                  {t.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
