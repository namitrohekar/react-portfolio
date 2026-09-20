import { Braces, Database, ShieldCheck, PanelsTopLeft } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const AboutSection = () => {
    const ref = useReveal();

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div
                    ref={ref}
                    className="reveal-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Java backend developer focused on APIs, persistence, and reliable systems
                        </h3>

                        <p className="text-muted-foreground">
                            I build backend applications in Java, working across REST APIs,
                            persistence, business logic, and database-driven systems. My
                            experience spans enterprise Java services as well as Spring Boot
                            applications and full-stack projects.
                        </p>

                        <p className="text-muted-foreground">
                            My core stack includes Java, Spring Boot, JAX-RS, Hibernate,
                            PostgreSQL, MySQL, and React. I’m particularly interested in
                            backend systems where API design, data modeling, authorization,
                            and reliability come together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#experience" className="cosmic-button">
                                View Experience
                            </a>

                            <a
                                href="./projects/Namit_Rohekar_Resume.pdf"
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Braces className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        API Development
                                    </h4>

                                    <p className="text-muted-foreground">
                                        Building REST APIs with clear contracts, validation,
                                        business logic, and client-facing responses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Persistence & Data
                                    </h4>

                                    <p className="text-muted-foreground">
                                        Working with Hibernate, JPA, PostgreSQL, MySQL,
                                        relational schemas, and database-driven application logic.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Security & Authorization
                                    </h4>

                                    <p className="text-muted-foreground">
                                        Implementing authentication, JWT-based security,
                                        role-based access control, and permission-driven flows.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PanelsTopLeft className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Full-Stack Integration
                                    </h4>

                                    <p className="text-muted-foreground">
                                        Connecting backend services with React applications
                                        through well-defined APIs and frontend-ready data flows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
