import { featuredProjects } from "@/constants/projects";
import ProjectCard from "@/components/cards/ProjectCard";

export default function FeaturedProjectsSection() {
  const featured = featuredProjects[0];

  const others = featuredProjects.slice(1);

  return (
    <section className="px-8 py-24">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-4xl font-bold">
          Featured Projects
        </h2>

        {/* AVR */}

        <div className="mb-10 rounded-3xl bg-surface p-8 shadow-card">
          <div
            className="mb-6 flex h-72 items-center justify-center rounded-xl text-2xl"
            style={{ backgroundColor: "var(--card)", color: "var(--muted)" }}
          >
            AVR Screenshot
          </div>

          <h3 className="mb-4 text-3xl font-bold" style={{ color: "var(--text)" }}>
            {featured.title}
          </h3>

          <p className="mb-6" style={{ color: "var(--muted)" }}>
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">

            {featured.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1"
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