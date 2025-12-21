import {Braces, Briefcase, Code, Coffee, Puzzle } from "lucide-react";

export const AboutSection = () => {
    return(
    
    <section id="about" className="py-24 px-4 relative">
        <div  className="container mx-auto max-w-5xl"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Full-Stack Developer building production-grade web systems
                    </h3>
                    <p className="text-muted-foreground">
                  I'am in designing, building, and deploying end-to-end web applications using React, Spring Boot, and MySQL. I focus on clean APIs, secure authentication, and scalable architectures.


                    </p>
                    <p className="text-muted-foreground">
                    I aim to build systems that make life simpler, teams faster, and ideas scale. Fueled by purpose and curiosity, I strive to leave a mark through technology that matters. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="./projects/NAMIT ROHEKAR 2.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
                        transition-color duration-300">
                            Download CV
                        </a>

                    </div>
                </div>

            
                <div className="grid gird-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Frontend Engineering</h4>
                                <p className="text-muted-foreground">  Building scalable React applications with clean component architecture,
                                 state management, and responsive UI using TailwindCSS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Braces className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Backend & APIs</h4>
                                <p className="text-muted-foreground"> Designing RESTful APIs with Spring Boot, implementing JWT authentication,
                                role-based access control, and MySQL-backed data models.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Puzzle className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Systems Thinking</h4>
                                <p className="text-muted-foreground">   Translating requirements into reliable systems, handling edge cases,
                                 and making pragmatic trade-offs across frontend, backend, and deployment.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    
    </section>


    );

}