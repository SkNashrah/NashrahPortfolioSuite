import {experiences} from "@/constants/experience";
import TimelineItem from "@/components/cards/TimelineItem";

export default function ExperienceSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto max-w-4xl">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                My journey
                </p>

                <h2 className="mb-14 font-serif text-4xl font-bold gradient-text" >
                    Experience
                </h2>

                {experiences.map((experience, index)=>(
                    <TimelineItem
                        key={experience.title}
                        year={experience.year}
                        title={experience.title}
                        company={experience.company}
                        description={experience.description}
                        iscurrent={index === 0}
                        />
                ))}
            </div>
        </section>
    );
}