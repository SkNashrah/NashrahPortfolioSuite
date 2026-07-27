type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
};

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    return (
        <div className="rounded-2xl bg-surface p-6 shadow-card transition hover:-translate-y-1">
            <div
                className="mb-4 flex h-48 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--card)", color: "var(--muted)" }}
            >
                Project Screenshot
            </div>

            <h3 className="mb-3 text-2xl font-bold" style={{ color: "var(--text)" }}>
                {title}
            </h3>

            <p className="mb-4" style={{ color: "var(--muted)" }}>
                {description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-sm"
                        style={{
                            borderColor: "color-mix(in srgb, var(--primary) 40%, transparent)",
                            backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)",
                            color: "var(--primary)",
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <button
                className="rounded-full px-4 py-2 font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--primary)" }}
            >
                View Details
            </button>
        </div>
    );
}