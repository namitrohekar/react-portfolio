import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const projects = [
  {
    id: 1,
    title: "CompatX",
    type: "Backend-focused project",
    description:
      "Spring Boot REST backend for an e-commerce workflow: layered architecture, JWT + refresh tokens, RBAC, JPA/Hibernate schema, Stripe/Razorpay payment integration, and a React 19 frontend.",
    image: "./projects/CompatX.png",
    tags: ["Spring Boot", "JWT/RBAC", "JPA/Hibernate", "MySQL", "Stripe/Razorpay", "React"],
    demoUrl: "https://compat-x.vercel.app/",
    githubUrl: "https://github.com/namitrohekar/CompatX",
  },
  {
    id: 2,
    title: "React Portfolio",
    type: "Supporting project",
    description:
      "Responsive personal portfolio with reusable React components, Tailwind CSS, dark mode toggle, and Vercel deployment.",
    image: "./projects/Portfolio.png",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://react-portfolio-two-lac.vercel.app/",
    githubUrl: "https://github.com/namitrohekar/react-portfolio",
  },
  {
    id: 3,
    title: "YouTube Clone",
    type: "Supporting project",
    description:
      "Pixel-accurate responsive front-end layout clone built to practice semantic HTML5, Flexbox, CSS Grid, and mobile-first styling.",
    image: "./projects/PREVIEW.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://namitrohekar.github.io/youtube-homepage/",
    githubUrl: "https://github.com/namitrohekar/youtube-homepage",
  },
];

export const ProjectsSection = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance , and user experience.
        </p>

        {/* Strict 3-column grid on md+. Single column on mobile. */}
        <div
          ref={ref}
          className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Fixed aspect-ratio image container — reserves space before load */}
              <div className="w-full overflow-hidden bg-secondary/30" style={{ aspectRatio: "16/9" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  width="480"
                  height="270"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                  {project.type}
                </p>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium border border-primary/20 rounded-full bg-primary/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/namitrohekar"
            target="_blank"
            rel="noreferrer"
          >
            Check My GitHub <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
