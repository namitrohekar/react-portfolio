import { BadgeCheck } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const professionalStack = [
  "Java",
  "JAX-RS",
  "Hibernate",
  "PostgreSQL",
  "Tomcat",
  "Ant",
  "SVN",
  "AWS S3",
];

const experienceHighlights = [
  "Designed and shipped REST services for resource-type permissions, dynamic custom fields, and pre-filled forms with AWS S3 media.",
  "Instrumented audit and transaction logging across 15+ services, capturing pre-mutation state for readable change history.",
  "Diagnosed production defects from live stack traces, including Hibernate LazyInitializationException, session-context failures, and Apache POI cell-style exhaustion.",
  "Optimized high-traffic query paths by removing per-iteration database queries, eliminating redundant joins, and adding a targeted PostgreSQL index.",
  "Built a five-endpoint note read-receipt subsystem with per-user upsert logic, coordinated directly with the frontend team, and fixed Excel upload and header-parsing issues blocking production data imports.",
];

export const ExperienceSection = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Single experience card */}
        <article
          ref={ref}
          className="reveal-section rounded-lg border border-border bg-card p-7 md:p-9 text-left shadow-xs experience-card card-hover"
        >
          {/* Header row */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Java Developer</h3>
              <p className="mt-1 text-muted-foreground">Technopurple · Mumbai</p>
            </div>
            <p className="text-sm text-primary shrink-0">May 2026 – Aug 2026</p>
          </div>

          {/* Stack pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {professionalStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Inline factual stats */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted-foreground border-t border-border pt-4">
            <span>
              <strong className="text-foreground text-base">15+</strong> services instrumented
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span>
              <strong className="text-foreground text-base">5</strong> REST endpoints built
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span>Production backend</span>
          </div>

          {/* Highlight bullets */}
          <ul className="mt-6 space-y-3.5">
            {experienceHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
