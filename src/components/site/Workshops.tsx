import { Clock, Users } from "lucide-react";
import { Reveal, scrollToSection } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EVENTS = [
  {
    date: "Sat, 12 Sep",
    name: "Watercolour Weekend",
    age: "Teens & Adults",
    duration: "3 hours",
    text: "Loose washes, colour mixing and a finished landscape study to take home.",
  },
  {
    date: "Sun, 20 Sep",
    name: "Festive Art Workshop",
    age: "All ages",
    duration: "2.5 hours",
    text: "Seasonal decor, motifs and hand-painted keepsakes for the festive season.",
  },
  {
    date: "Sat, 26 Sep",
    name: "Creative Mandala Session",
    age: "Teens & Adults",
    duration: "2 hours",
    text: "Slow, meditative linework building up a complete ink mandala.",
  },
  {
    date: "Sun, 4 Oct",
    name: "Kids Craft Day",
    age: "Kids (6–12)",
    duration: "2 hours",
    text: "Paper, clay and collage play with plenty of room for messy ideas.",
  },
  {
    date: "Sat, 10 Oct",
    name: "Introduction to Modern Calligraphy",
    age: "Teens & Adults",
    duration: "3 hours",
    text: "Basic strokes, rhythm and composition using brush pens.",
  },
];

export function Workshops() {
  return (
    <section id="workshops" className="scroll-mt-24 bg-paper-deep/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Sample / Upcoming Programs"
          title="Upcoming Workshops & Creative Events"
          intro="Sample schedule shown below — confirmed dates are shared at the studio and on enquiry."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <Reveal
              key={event.name}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary">
                {event.date}
              </span>
              <h3 className="mt-5 font-display text-xl text-foreground">{event.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {event.text}
              </p>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} aria-hidden /> {event.age}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} aria-hidden /> {event.duration}
                </span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="mt-5 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Register Interest
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
