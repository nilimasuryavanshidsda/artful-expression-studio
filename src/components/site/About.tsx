import { Palette, Sparkles, PenTool } from "lucide-react";
import studio from "@/assets/studio.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  {
    icon: PenTool,
    title: "Learn",
    text: "Build artistic skills through guided learning.",
  },
  {
    icon: Palette,
    title: "Create",
    text: "Experiment with traditional and modern art forms.",
  },
  {
    icon: Sparkles,
    title: "Express",
    text: "Develop confidence and communicate ideas through creativity.",
  },
];

const STATS = [
  "Creative Learning",
  "Kids • Teens • Adults",
  "Classes & Workshops",
  "Hands-on Activities",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="organic-alt overflow-hidden border border-border/70 shadow-lift">
              <img
                src={studio}
                alt="TVASTRA Art Studio interior with easels, brushes and student artwork on the wall"
                width={1104}
                height={1312}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-5 -right-3 hidden h-24 w-24 rounded-full bg-sage/25 sm:block"
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About TVASTRA"
              title="A Space to Create, Learn & Imagine"
              intro="TVASTRA Art Studio is an offline creative learning space where students can explore artistic skills, develop confidence, and express their imagination through art."
            />

            <div className="mt-9 space-y-4">
              {HIGHLIGHTS.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="flex gap-4 rounded-xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat} className="bg-card px-6 py-8 text-center">
              <p className="font-display text-lg text-foreground">{stat}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
