type SkillBadgeProps = {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm">
            {skill}
        </span>
    );
}