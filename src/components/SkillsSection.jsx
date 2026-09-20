import { useState } from "react";
import { cn } from "../lib/util";
import { useReveal } from "../hooks/useReveal";

const skillGroups = [
  {
    id: "backend",
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JAX-RS (Jersey)",
      "REST APIs",
      "Hibernate",
      "JPA",
      "JWT",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "JSONB",
      "Indexing",
      "Query Optimization",
      "Relational Schema Design",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "React Router", "Zustand", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    items: [
      "Git",
      "GitHub",
      "SVN",
      "Maven",
      "Apache Ant",
      "Apache Tomcat",
      "Postman",
      "AWS EC2/S3",
    ],
  },
];

const categories = ["all", ...skillGroups.map((group) => group.id)];

const categoryLabels = {
  all: "All",
  backend: "Backend",
  databases: "Databases",
  frontend: "Frontend",
  tools: "Tools & Infrastructure",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useReveal();

  const visibleGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Grouped around backend delivery: service APIs, persistence, frontend
          integration, and the tools used across professional and personal work.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Skill group grid */}
        <div ref={ref} className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-5">
          {visibleGroups.map((group) => (
            <article key={group.id} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
              <h3 className="font-semibold text-lg mb-4 text-foreground">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
