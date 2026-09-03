import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Building2, Clock } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Fields = {
  name: string;
  email: string;
  phone: string;
  ageGroup: string;
  program: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  ageGroup: "",
  program: "",
  message: "",
};

const PROGRAM_OPTIONS = [
  "Drawing & Sketching",
  "Painting",
  "Craft & Creative Art",
  "Calligraphy",
  "Handwriting Improvement",
  "Creative Workshops",
];

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!/^[\d+\s()-]{8,15}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!values.ageGroup) errors.ageGroup = "Please select an age group.";
  if (!values.program) errors.program = "Please select a program.";
  return errors;
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});

  const set = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    // Static site: no backend — acknowledge locally.
    toast.success("Thank you! Your enquiry has been received.", {
      description: "Our studio team will get back to you shortly.",
    });
    setValues(EMPTY);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Visit TVASTRA Art Studio"
          intro="Drop by the studio, or send an enquiry and we'll help you find the right class."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="space-y-6">
            <dl className="space-y-5 rounded-2xl border border-border bg-card p-7">
              {[
                { icon: Building2, term: "Studio", desc: "TVASTRA Art Studio" },
                { icon: MapPin, term: "Location", desc: "Mumbai, Maharashtra" },
                { icon: Phone, term: "Phone", desc: "+91 XXXXX XXXXX" },
                { icon: Mail, term: "Email", desc: "hello@tvastraartstudio.com" },
              ].map((item) => (
                <div key={item.term} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon size={18} aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                      {item.term}
                    </dt>
                    <dd className="mt-0.5 text-foreground">{item.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="flex items-center gap-2 font-display text-lg text-foreground">
                <Clock size={18} aria-hidden className="text-primary" /> Studio Hours
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Sunday – Workshops / Special Events
              </p>
            </div>

            {/* Map placeholder — no external map API needed for this static site */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-paper-deep p-7">
              <div
                aria-hidden
                className="absolute inset-0 opacity-45"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                  backgroundSize: "36px 36px",
                }}
              />
              <div className="relative flex items-center gap-3">
                <MapPin size={20} aria-hidden className="text-primary" />
                <div>
                  <p className="font-display text-base text-foreground">Find the studio</p>
                  <p className="text-sm text-muted-foreground">
                    Detailed directions shared on enquiry.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={cn(inputClass, errors.name && "border-destructive")}
                  />
                </Field>

                <Field label="Email" id="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={cn(inputClass, errors.email && "border-destructive")}
                  />
                </Field>

                <Field label="Phone" id="phone" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    aria-invalid={Boolean(errors.phone)}
                    className={cn(inputClass, errors.phone && "border-destructive")}
                  />
                </Field>

                <Field label="Age Group" id="ageGroup" error={errors.ageGroup}>
                  <select
                    id="ageGroup"
                    name="ageGroup"
                    value={values.ageGroup}
                    onChange={(e) => set("ageGroup", e.target.value)}
                    aria-invalid={Boolean(errors.ageGroup)}
                    className={cn(inputClass, errors.ageGroup && "border-destructive")}
                  >
                    <option value="">Select age group</option>
                    <option value="Kids">Kids</option>
                    <option value="Teens">Teens</option>
                    <option value="Adults">Adults</option>
                  </select>
                </Field>

                <Field
                  label="Program Interested In"
                  id="program"
                  error={errors.program}
                  className="sm:col-span-2"
                >
                  <select
                    id="program"
                    name="program"
                    value={values.program}
                    onChange={(e) => set("program", e.target.value)}
                    aria-invalid={Boolean(errors.program)}
                    className={cn(inputClass, errors.program && "border-destructive")}
                  >
                    <option value="">Select a program</option>
                    {PROGRAM_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" id="message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us what you'd like to learn (optional)"
                    className={cn(inputClass, "resize-y")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift sm:w-auto sm:px-10"
              >
                Send Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-xs tracking-[0.14em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
