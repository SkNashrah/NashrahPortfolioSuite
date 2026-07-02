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

        <div
          className="
          mb-10
          rounded-3xl
          border
          border-blue-500/20
          p-8
          "
        >
          <div
            className="
            mb-6
            h-72
            rounded-xl
            bg-zinc-900
            flex
            items-center
            justify-center
            text-2xl
            "
          >
            AVR Screenshot
          </div>

          <h3 className="mb-4 text-3xl font-bold">
            {featured.title}
          </h3>

          <p className="mb-6 text-zinc-400">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2">

            {featured.technologies.map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                bg-blue-500/10
                border
                border-blue-500/20
                px-3
                py-1
                text-blue-300
                "
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