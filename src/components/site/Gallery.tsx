import { useCallback, useEffect, useState } from "react";
import { X, Expand } from "lucide-react";
import sketch from "@/assets/art-sketch.jpg";
import watercolor from "@/assets/art-watercolor.jpg";
import calligraphy from "@/assets/art-calligraphy.jpg";
import mandala from "@/assets/art-mandala.jpg";
import craft from "@/assets/art-craft.jpg";
import workshop from "@/assets/art-workshop.jpg";
import abstract from "@/assets/art-abstract.jpg";
import folk from "@/assets/art-folk.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Artwork = {
  src: string;
  title: string;
  category: string;
  alt: string;
};

const ARTWORKS: Artwork[] = [
  {
    src: sketch,
    title: "Still Life Study",
    category: "Drawing",
    alt: "Graphite still life study of pots and a jug drawn by a student",
  },
  {
    src: watercolor,
    title: "Evening Street",
    category: "Painting",
    alt: "Watercolour painting of a village street at dusk",
  },
  {
    src: calligraphy,
    title: "Brush Lettering Sheet",
    category: "Calligraphy",
    alt: "Brush calligraphy practice sheet with flowing ink strokes",
  },
  {
    src: mandala,
    title: "Ink Mandala",
    category: "Drawing",
    alt: "Detailed ink mandala with terracotta accents",
  },
  {
    src: craft,
    title: "Paper Blooms",
    category: "Crafts",
    alt: "Handmade paper flowers arranged on a table",
  },
  {
    src: workshop,
    title: "Weekend Paint Session",
    category: "Workshops",
    alt: "Overhead view of learners painting together at a workshop table",
  },
  {
    src: abstract,
    title: "Colour Field",
    category: "Painting",
    alt: "Abstract acrylic painting in terracotta, charcoal and lavender",
  },
  {
    src: folk,
    title: "Folk Motifs",
    category: "Crafts",
    alt: "Folk-art inspired floral motifs painted in ink and colour",
  },
];

const CATEGORIES = ["All", "Drawing", "Painting", "Calligraphy", "Crafts", "Workshops"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Artwork | null>(null);

  const visible =
    filter === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.category === filter);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section id="gallery" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Student Work"
          title="Created at TVASTRA"
          intro="A rotating selection of work made in our studio sessions and workshops."
        />

        <Reveal className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                filter === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Masonry via CSS columns for an organic, gallery-wall rhythm */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {visible.map((art) => (
            <button
              key={art.title}
              type="button"
              onClick={() => setActive(art)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card text-left"
            >
              <img
                src={art.src}
                alt={art.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 flex flex-col justify-end bg-ink/55 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-[0.68rem] tracking-[0.2em] text-paper/80 uppercase">
                  {art.category}
                </span>
                <span className="mt-1 flex items-center gap-2 font-display text-lg text-paper">
                  View Artwork <Expand size={16} aria-hidden />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/85 p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-card"
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[70vh] w-full object-contain bg-paper-deep"
            />
            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <div>
                <p className="font-display text-lg text-foreground">{active.title}</p>
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {active.category}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close artwork"
              autoFocus
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
