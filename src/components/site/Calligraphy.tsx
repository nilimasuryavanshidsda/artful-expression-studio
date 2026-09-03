import calligraphy from "@/assets/art-calligraphy.jpg";
import { Reveal, scrollToSection } from "./Reveal";

const OFFERINGS = [
  "Modern Calligraphy",
  "Basic Lettering",
  "Brush Lettering",
  "Handwriting Improvement",
  "Creative Letter Art",
];

export function Calligraphy() {
  return (
    <section id="calligraphy" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/8 blur-2xl"
          />
          <div className="grid gap-0 lg:grid-cols-2">
            <Reveal className="order-2 p-8 sm:p-12 lg:order-1 lg:p-14">
              <span className="eyebrow">Lettering Studio</span>
              <p className="mt-5 font-hand text-4xl text-primary sm:text-5xl">
                Beautiful writing
              </p>
              <h2 className="mt-1 text-3xl leading-[1.1] sm:text-4xl">
                The Art of Beautiful Writing
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Discover the beauty of expressive lettering while developing better
                handwriting, control, consistency, and presentation.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {OFFERINGS.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-10 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Join Calligraphy Classes
              </button>
            </Reveal>

            <div className="order-1 lg:order-2">
              <img
                src={calligraphy}
                alt="Modern brush calligraphy practice sheet with ink strokes and a brush pen"
                width={900}
                height={900}
                loading="lazy"
                className="h-full min-h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
