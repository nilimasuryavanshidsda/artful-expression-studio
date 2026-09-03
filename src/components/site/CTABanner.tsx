import { Reveal, scrollToSection } from "./Reveal";

export function CTABanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink px-6 py-20 text-center sm:px-12">
        {/* Abstract brush-stroke treatment */}
        <svg
          aria-hidden
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        >
          <path
            d="M-40 300 C 180 180, 320 380, 560 240 S 820 120, 900 200"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="60"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M-20 120 C 200 40, 380 200, 620 90"
            fill="none"
            stroke="var(--lavender)"
            strokeWidth="28"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M60 360 C 260 320, 420 400, 780 330"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="20"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl leading-[1.1] text-paper sm:text-4xl lg:text-5xl">
            Ready to Begin Your Creative Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
            Join a welcoming space where ideas become art and every learner gets the
            freedom to create.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Join a Class
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-paper/40 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
