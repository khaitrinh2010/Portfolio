const projects = [
    {
        id: 1,
        title: "ZoitDocs",
        description: "A collaborative document editor built in C with a focus on multithreading, synchronization, and low-level system design.",
        tags: ["C", "Multithreading", "Synchronization", "Low-Level Systems"],
        demoUrl: "#",
        githubUrl: "https://github.com/khaitrinh2010/ZOIT-Docs",
    },
    {
        id: 2,
        title: "WorkflowX",
        description: "A team-based project and workflow management platform with file uploads, dashboards, and notifications.",
        tags: ["Spring Boot", "React", "Redis", "PostgreSQL", "Docker"],
        demoUrl: "#",
        githubUrl: "https://github.com/khaitrinh2010/WorkFlowX",
    },
    {
        id: 3,
        title: "NovaCord",
        description: "A full-featured real-time chat application inspired by Discord, with support for servers, roles, and file uploads.",
        tags: ["Next.js", "Socket.IO", "TailwindCSS", "Prisma", "Clerk"],
        demoUrl: "#",
        githubUrl: "https://github.com/khaitrinh2010/DISCORD-CLONE",
    },
    {
        id: 4,
        title: "PhotoMoment",
        description: "A personal photo sharing app with album collaboration and cloud image storage using GCP.",
        tags: ["Next.js", "GCP", "Prisma", "UploadThing", "Clerk"],
        demoUrl: "#",
        githubUrl: "https://github.com/khaitrinh2010/Photo-Moment",
    },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                    performance, and user experience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs border border-muted p-6 hover:shadow-md transition"
                        >
                            {/* Project Title */}
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            {/* GitHub Button */}
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 0C5.373 0 0 5.373 0 12c0 5.302
                                        3.438 9.8 8.205 11.387.6.111.82-.261.82-.58
                                        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61
                                        -4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                                        -1.089-.745.083-.729.083-.729 1.205.084 1.84
                                        1.236 1.84 1.236 1.07 1.835 2.809 1.305
                                        3.495.997.108-.776.418-1.305.76-1.605-2.665
                                        -.303-5.466-1.332-5.466-5.932 0-1.31.467
                                        -2.381 1.235-3.221-.124-.303-.535-1.523.117
                                        -3.176 0 0 1.008-.322 3.301 1.23A11.52
                                        11.52 0 0112 6.844c1.02.005 2.045.138
                                        3.003.404 2.291-1.553 3.297-1.23 3.297-1.23
                                        .654 1.653.243 2.873.12 3.176.77.84 1.233
                                        1.911 1.233 3.221 0 4.61-2.803 5.625-5.475
                                        5.921.43.371.814 1.102.814 2.222 0 1.604
                                        -.015 2.896-.015 3.292 0 .321.216.694.825
                                        .576C20.565 21.796 24 17.298 24 12c0-6.627
                                        -5.373-12-12-12z"
                                    />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-16">
                    <a href="https://github.com/khaitrinh2010" target="_blank"
                       rel="noopener noreferrer" className="cosmic-button">
                        View My Github
                    </a>
                </div>


            </div>

        </section>

    )
}
