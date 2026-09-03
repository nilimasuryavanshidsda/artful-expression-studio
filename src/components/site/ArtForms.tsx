import { useState } from "react";
import folk from "@/assets/art-folk.jpg";
import abstract from "@/assets/art-abstract.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FORMS = {
  traditional: {
    label: "Traditional",
    image: folk,
    alt: "Folk-art inspired ink and colour motifs on handmade paper",
    note: "Rooted techniques, patient craft, and the discipline of the hand.",
    items: [
      "Pencil Sketching",
      "Watercolor",
      "Indian Art Inspirations",
      "Folk Art",
      "Mandala Art",
    ],
  },
  modern: {
    label: "Modern",
    image: abstract,
    alt: "Abstract acrylic painting in terracotta, charcoal and lavender",
    note: "Contemporary materials, personal voice, and room to experiment.",
    items: [
      "Acrylic Art",
      "Abstract Art",
      "Mixed Media",
      "Creative Illustration",
      "Modern Calligraphy",
    ],
  },
} as const;

type FormKey = keyof typeof FORMS;

export function ArtForms() {
  const [tab, setTab] = useState<FormKey>("traditional");
  const active = FORMS[tab];

  return (
    <section id="artforms" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Art Forms"
          title="Tradition Meets Contemporary Creativity"
          intro="Students move between time-honoured practice and modern experimentation — both taught with the same care."
          align="center"
        />

        <Reveal className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Art form categories"
            className="inline-flex rounded-full border border-border bg-card p-1"
          >
            {(Object.keys(FORMS) as FormKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                  tab === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {FORMS[key].label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="organic overflow-hidden border border-border/70 shadow-lift">
            <img
              key={active.image}
              src={active.image}
              alt={active.alt}
              width={900}
              height={900}
              loading="lazy"
              className="aspect-4/3 w-full animate-in fade-in duration-500 object-cover"
            />
          </div>

          <div>
            <p className="font-hand text-3xl text-primary">{active.label} approaches</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {active.note}
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {active.items.map((item, i) => (
                <li
                  key={item}
                  className="group flex items-baseline gap-5 py-4 transition-colors hover:text-primary"
                >
                  <span className="w-8 shrink-0 text-xs tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl text-foreground transition-colors group-hover:text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
