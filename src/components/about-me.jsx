import {Briefcase, Code, User} from "lucide-react";
export const AboutMe = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Computer Science student and Passionate Software
                            developer</h3>
                        <p className="text-muted-foreground">
                            I'm a passionate software engineering student at the University of Sydney, majoring in
                            Software Development and Computer Science. I enjoy building scalable, user-focused
                            applications and constantly exploring new technologies.
                        </p>
                        <p className="text-muted-foreground">
                            I've worked on a range of projects using React, Next.js, Spring Boot, and .NET, with a focus
                            on writing clean, maintainable code. I'm always eager to learn and collaborate with others
                            to create impactful solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="https://drive.google.com/file/d/1JQtboPepyNqMfBQ5THh8ON0R28K3dr4U/view?usp=sharing"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="px-6 py-2 rounded-full border border-primary text-primary hover-bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Collaboration</h4>
                                    <p className="text-muted-foreground">
                                        Working collaboratively in teams to build scalable, maintainable software using
                                        modern tools and best practices.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solving</h4>
                                    <p className="text-muted-foreground">
                                        Building efficient, scalable solutions by breaking down complex problems and
                                        applying logical thinking.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        {/* Likely another section goes here */}
                    </div>
                </div>
            </div>
        </section>

    )
}
