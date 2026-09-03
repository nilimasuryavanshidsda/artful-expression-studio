import heroCollage from "@/assets/hero-collage.jpg";
import { scrollToSection } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Soft artistic washes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-lavender/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="eyebrow">Offline Creative Learning Studio</span>
          <h1 className="mt-5 font-display text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Where Creativity
            <br />
            Finds Its{" "}
            <span className="relative isolate italic brush-underline">Expression.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore art, imagination, and creative learning at TVASTRA Art Studio —
            thoughtfully designed classes and workshops for kids, teens, and adults.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("classes")}
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Explore Classes
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-secondary"
            >
              Join a Class
            </button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              ["Kids • Teens • Adults", "All ages welcome"],
              ["Small Groups", "Personal attention"],
              ["Studio Sessions", "Hands-on, offline"],
            ].map(([term, desc]) => (
              <div key={term}>
                <dt className="font-display text-base text-foreground">{term}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative organic overflow-hidden border border-border/70 shadow-lift">
            <img
              src={heroCollage}
              alt="Mixed-media art collage with watercolour washes, a sketchbook, brushes and hand lettering"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating artistic elements */}
          <div
            aria-hidden
            className="float-slow absolute -left-4 top-10 hidden h-20 w-20 rotate-12 rounded-full border border-primary/40 sm:block"
          />
          <div
            aria-hidden
            className="float-slower absolute -bottom-6 left-8 hidden rounded-2xl border border-border bg-card px-5 py-3 shadow-soft sm:block"
          >
            <span className="font-hand text-2xl text-primary">create daily</span>
          </div>
          <svg
            aria-hidden
            viewBox="0 0 120 40"
            className="float-slower absolute -right-6 -top-8 hidden h-14 w-36 text-sage lg:block"
          >
            <path
              d="M4 30 C 30 4, 60 40, 116 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
