type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
};

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
    return (
        <div className="rounded-2xl border border-zinc-800 p-6 transition hover:border-blue-500 hover:-traslate-y-1">
            <div className="mb-4 h-48 rounded-xl bg-zinc-900 flex items-center justify-center">
                Project Screenshot
            </div>

            <h3 className="mb-3 text-2xl font-bold">
                {title}
            </h3>

            <p className="mb-4 text-gray-400">
                {description}
            </p>

             <div className="mb-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                <span
                    key={tech}
                    className="
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    px-3
                    py-1
                    text-sm
                    text-blue-300
                    "
                >
                    {tech}
                </span>
                ))}

            </div>
            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
                View Details
            </button>
        </div>
    );
}