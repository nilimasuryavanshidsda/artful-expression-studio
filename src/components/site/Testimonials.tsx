import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    quote:
      "TVASTRA has created such a welcoming environment for my child. She looks forward to every art session.",
    name: "Anjali",
    type: "Parent",
  },
  {
    quote:
      "The classes helped me build a proper sketching routine. My portfolio finally looks like my own work, not copied studies.",
    name: "Rehan",
    type: "Teen Student",
  },
  {
    quote:
      "I joined for a weekend painting workshop and stayed on. It's the calmest two hours of my week.",
    name: "Meera",
    type: "Adult Learner",
  },
  {
    quote:
      "My son's handwriting improved steadily, and more importantly he stopped dreading writing practice.",
    name: "Sudhir",
    type: "Parent",
  },
  {
    quote:
      "The calligraphy sessions are patient and detailed. I learned to slow down and actually enjoy the strokes.",
    name: "Farah",
    type: "Adult Learner",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    const timer = window.setInterval(next, 7000);
    return () => window.clearInterval(timer);
  }, [next]);

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Learners Say"
          align="center"
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <figure
            aria-live="polite"
            className="relative rounded-3xl border border-border bg-card px-7 py-12 text-center sm:px-14"
          >
            <Quote
              size={34}
              aria-hidden
              className="mx-auto text-primary/45"
            />
            <blockquote className="mt-6 font-display text-xl leading-relaxed text-foreground sm:text-2xl">
              &ldquo;{active.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7">
              <span className="block font-medium text-foreground">{active.name}</span>
              <span className="mt-0.5 block text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {active.type}
              </span>
            </figcaption>
          </figure>

          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
