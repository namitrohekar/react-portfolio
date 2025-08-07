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
                        Passionate Web Developer & Tech Entusiast
                    </h3>
                    <p className="text-muted-foreground">
                    Full-Stack DevOps Developer passionate about building scalable, cloud-native apps, automating workflows, and contributing to open-source.

                    </p>
                    <p className="text-muted-foreground">
                    I aim to build systems that make life simpler, teams faster, and ideas scale. Fueled by purpose and curiosity, I strive to leave a mark through technology that matters. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
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
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground"> Creating responsive websites and web applications with 
                                    modern frameworks</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Braces className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Java Full Stack</h4>
                                <p className="text-muted-foreground"> Building robust applications using Core Java, JDBC, Servlets, JSP, and Spring Boot.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Puzzle className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Problem solver</h4>
                                <p className="text-muted-foreground"> Bringing creativity and logic together to build solutions that are both beautiful and efficient.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    
    </section>


    );

}