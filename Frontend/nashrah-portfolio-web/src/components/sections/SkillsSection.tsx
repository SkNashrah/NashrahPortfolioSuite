import { skillGroups } from "@/constants/skills";
import { categoryColors } from "@/constants/skillColors";
import SkillBadge from "@/components/ui/SkillBadge";

export default function SkillsSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold">
                    Technical Skills
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border p-6"
                            style={{
                                borderColor: "var(--border)",
                                backgroundColor: "var(--card)",
                            }}
                        >
                            <h3
                                className="mb-6 text-2xl font-semibold"
                                style={{ color: categoryColors[group.color] ?? "var(--primary)" }}
                            >
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
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
