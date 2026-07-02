import {skillGroups} from "@/constants/skills";
import SkillBadge from "@/components/ui/SkillBadge";
import { group } from "console";

export default function SkillsSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold">
                    Technical Skills
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="rounded-2xl border border-zinc-800 p-6">
                            <h3 className="mb-6 text-2xl font-semibold">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {group.skills.map((skill) => (

                                <SkillBadge
                                    key={skill}
                                    skill={skill}
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