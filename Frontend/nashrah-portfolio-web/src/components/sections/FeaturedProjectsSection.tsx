import { featuredProjects } from "@/constants/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function FeaturedProjectsSection() {
  const featured = featuredProjects[0];

  const others = featuredProjects.slice(1);

  return (
    <section className="px-8 py-24">

      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          My work
        </p>

        <h2 className="mb-12 font-serif text-4xl font-bold gradient-text" >
          Featured Projects
        </h2>

        {/* AVR */}

        <div className="glass-card mb-10 rounded-3xl p-8">
          <div
            className="mb-6 flex h-64 items-center justify-center rounded-2xl text-sm font-medium"
            style={{ backgroundColor: "var(--background)", color: "var(--muted)" }}
          >
            Project Screenshot
          </div>

          <h3 className="mb-3 font-serif text-3xl font-bold gradient-text" >
            {featured.title}
          </h3>

          <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">

            {featured.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full  px-3 py-1 text-sm font-medium"
                style={{
                  background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                  border: "1px solid color-mix(in srgb, var(--primary) 35%, transparent)",
                  color: "var(--primary)",
                }}
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Others */}

        <div className="grid gap-6 md:grid-cols-3">

          {others.map((project) => (

            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />

          ))}

        </div>

      </div>

    </section>
  );
}