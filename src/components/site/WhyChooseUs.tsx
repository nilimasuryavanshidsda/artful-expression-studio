import { GraduationCap, Users, Home, Layers, Hand, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const REASONS = [
  {
    icon: GraduationCap,
    title: "Experienced Guidance",
    text: "Learn through structured and supportive instruction.",
  },
  {
    icon: Users,
    title: "Small Group Learning",
    text: "Personal attention and meaningful interaction.",
  },
  {
    icon: Home,
    title: "Creative Environment",
    text: "A welcoming space that encourages experimentation.",
  },
  {
    icon: Layers,
    title: "Age-Appropriate Programs",
    text: "Programs designed for different learning stages.",
  },
  {
    icon: Hand,
    title: "Hands-On Learning",
    text: "Practice techniques through real creative activities.",
  },
  {
    icon: HeartHandshake,
    title: "Confidence Through Creativity",
    text: "Encouraging students to express their ideas freely.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="scroll-mt-24 border-y border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why TVASTRA"
          title="Why Learn at TVASTRA?"
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(i % 3) * 80}
              className="group bg-card p-8 transition-colors hover:bg-paper-deep/70"
            >
              <reason.icon
                size={26}
                aria-hidden
                className="text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <h3 className="mt-5 font-display text-lg text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
