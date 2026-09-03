import { Instagram, Facebook, Youtube } from "lucide-react";
import { scrollToSection } from "./Reveal";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", id: "about" },
      { label: "Classes", id: "classes" },
      { label: "Workshops", id: "workshops" },
      { label: "Gallery", id: "gallery" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Kids", id: "ages" },
      { label: "Teens", id: "ages" },
      { label: "Adults", id: "ages" },
      { label: "Calligraphy", id: "calligraphy" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper-deep/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <p className="font-display text-xl font-semibold tracking-[0.14em] text-foreground">
              TVASTRA ART STUDIO
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Creative learning through art, imagination, and expression.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon size={17} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              <li>Mumbai, Maharashtra</li>
              <li>
                <a href="tel:+910000000000" className="transition-colors hover:text-primary">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@tvastraartstudio.com"
                  className="transition-colors hover:text-primary"
                >
                  hello@tvastraartstudio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TVASTRA Art Studio. All rights reserved.</p>
          <p className="font-hand text-lg text-primary">Designed with creativity.</p>
        </div>
      </div>
    </footer>
  );
}
