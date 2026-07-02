type SkillBadgeProps = {
    skill: string;
    color: string;
}

export default function SkillBadge({ skill, color, }: SkillBadgeProps) {
    const colorClasses = {
        blue: "border-blue-500/30 bg-blue-500/10 text-blue-300",
        green: "border-green-500/30 bg-green-500/10 text-green-300",
        orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
        purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
        pink: "border-pink-500/30 bg-pink-500/10 text-pink-300",
    };
    
    return (
        <span className={`rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
            {skill}
        </span>
    );
}