import {experiences} from "@/constants/experience";
import TimelineItem from "@/components/cards/TimelineItem";

export default function ExperienceSection() {
    return (
        <section className="px-8 py-24">
            <div className="mx-auto max-w-6xl">    
                <h2 className="mb-12 text-4xl font-bold">
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