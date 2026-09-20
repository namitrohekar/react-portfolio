import { ArrowDown, Braces, Coffee, Database, Layers3, LeafIcon, Route, ServerCog } from "lucide-react";
import { SiSpringboot } from "react-icons/si";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4">
          {/* Name — dominant visual element */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Namit</span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">Rohekar.</span>
          </h1>

          {/* Title — strong, clearly secondary */}
          <h2 className="text-2xl md:text-3xl font-bold text-primary/90 opacity-0 animate-fade-in-delay-2 tracking-tight">
            Java Backend Developer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
           I build backned applications in Java, with production experience in JAX-RS, Hibernate, and PostgreSQL, 
           plus hands-on development with Spring Boot and React
          </p>

          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 opacity-0 animate-fade-in-delay-4 pt-1">
            
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
              <Coffee className="h-3.5 w-3.5 text-primary" />
              Java
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
              <SiSpringboot className="h-3.5 w-3.5 text-primary" />
              Spring Boot
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
              <Database className="h-3.5 w-3.5 text-primary" />
              PostgreSQL
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-muted-foreground">
              <Route className="h-3.5 w-3.5 text-primary" />
              REST APIs
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#experience" className="cosmic-button">
              View experience
            </a>
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              Explore projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">Scroll</span>
        <a href="#about">
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        </a>
      </div>
    </section>
  );
};
