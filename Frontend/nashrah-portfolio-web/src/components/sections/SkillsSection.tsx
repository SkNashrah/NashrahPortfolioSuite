import { skillGroups } from "@/constants/skills";
import { categoryColors } from "@/constants/skillColors";
import SkillBadge from "@/components/ui/SkillBadge";

export default function SkillsSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}>
                    What I Know
                </p>

                <h2 className="mb-12 font-serif text-4xl font-bold gradient-text"
                style={{ color: "var(--text)" }}>
                    Technical Skills
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="glass-card rounded-2xl p-6">
                            <h3
                                className="mb-5 text-lg font-bold"
                                style={{ color: categoryColors[group.color] ?? "var(--secondary)" }}
                            >
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <SkillBadge
                                        key={skill}
                                        skill={skill}
                                        color={group.color}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}