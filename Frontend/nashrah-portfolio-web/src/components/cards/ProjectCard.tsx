type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
};

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    return (
        <div className="glass-card group rounded-2xl p-6 transition-all">

            <div
                className="mb-4 flex h-44 items-center justify-center rounded-xl text-sm font-medium"
                style={{ backgroundColor: "var(--background)", color: "var(--muted)" }}
            >
                Comming Soon
            </div>

            <h3 className="mb-2 text-xl font-bold gradient-text">
                {title}
            </h3>

            <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {description}
            </p>

            <div className="mb-5 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full px-3 py-1 text-sm font-medium"
                        style={{
                            borderColor: "color-mix(in srgb, var(--primary) 12%, transparent)",
                            backgroundColor: "color-mix(in srgb, var(--primary) 35%, transparent)",
                            color: "var(--primary)",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <button
                className="btn-gradient w-full rounded-lg py-2 text-sm">
                View Details
            </button>
        </div>
    );
}