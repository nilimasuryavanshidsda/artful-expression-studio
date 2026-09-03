import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, scrollToSection } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    name: "Kids",
    tagline: "Discover • Play • Create",
    focus: [
      "Basic drawing",
      "Coloring",
      "Craft",
      "Creative expression",
      "Fun art activities",
    ],
    cta: "Explore Kids Classes",
    accent: "bg-primary/8 border-primary/30",
    chip: "bg-primary/12 text-primary",
  },
  {
    name: "Teens",
    tagline: "Learn • Experiment • Develop",
    focus: [
      "Sketching",
      "Painting",
      "Illustration",
      "Creative projects",
      "Portfolio development",
    ],
    cta: "Explore Teen Classes",
    accent: "bg-sage/12 border-sage/45",
    chip: "bg-sage/20 text-sage-foreground",
  },
  {
    name: "Adults",
    tagline: "Relax • Learn • Express",
    focus: [
      "Painting",
      "Sketching",
      "Calligraphy",
      "Creative workshops",
      "Hobby-based learning",
    ],
    cta: "Explore Adult Classes",
    accent: "bg-lavender/12 border-lavender/45",
    chip: "bg-lavender/22 text-lavender-foreground",
  },
];

export function AgePrograms() {
  return (
    <section id="ages" className="scroll-mt-24 bg-paper-deep/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="By Age Group"
          title="Creative Learning for Every Age"
          intro="Every stage of a creative life needs a different kind of studio. Ours has three."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.name}
              delay={i * 100}
              className={cn(
                "flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                group.accent,
                i === 1 && "lg:mt-8",
              )}
            >
              <span
                className={cn(
                  "self-start rounded-full px-3 py-1 text-[0.68rem] tracking-[0.2em] uppercase",
                  group.chip,
                )}
              >
                {group.name}
              </span>
              <h3 className="mt-6 font-display text-3xl text-foreground">{group.name}</h3>
              <p className="mt-2 font-hand text-2xl text-primary">{group.tagline}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {group.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-foreground/25 px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                {group.cta}
                <ArrowRight size={16} aria-hidden />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
