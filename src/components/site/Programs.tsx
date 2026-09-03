import {
  Pencil,
  Brush,
  Scissors,
  PenLine,
  Type,
  CalendarHeart,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, scrollToSection } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PROGRAMS = [
  {
    icon: Pencil,
    name: "Drawing & Sketching",
    text: "Learn observation, proportion, shading, composition, and sketching techniques.",
  },
  {
    icon: Brush,
    name: "Painting",
    text: "Explore watercolor, acrylic, poster colors, and creative painting techniques.",
  },
  {
    icon: Scissors,
    name: "Craft & Creative Art",
    text: "Hands-on creative activities using different materials and techniques.",
  },
  {
    icon: PenLine,
    name: "Calligraphy",
    text: "Learn beautiful lettering, strokes, composition, and modern calligraphy styles.",
  },
  {
    icon: Type,
    name: "Handwriting Improvement",
    text: "Fun and structured practice designed to improve handwriting, presentation, and confidence.",
  },
  {
    icon: CalendarHeart,
    name: "Creative Workshops",
    text: "Special short-term workshops focused on seasonal, thematic, and experimental art activities.",
  },
];

export function Programs() {
  return (
    <section id="classes" className="scroll-mt-24 bg-paper-deep/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Classes & Workshops"
          title="Explore Our Creative Programs"
          intro="Structured, studio-based programs that grow with each learner — from first strokes to confident personal style."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <Reveal
              key={program.name}
              delay={(i % 3) * 80}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <program.icon size={22} aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-xl text-foreground">{program.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.text}
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary transition-colors hover:text-foreground"
              >
                Learn More
                <ArrowUpRight
                  size={16}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
