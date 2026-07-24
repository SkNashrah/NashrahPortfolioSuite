import { categoryColors } from "@/constants/skillColors";

type SkillBadgeProps = {
  skill: string;
  color: string;
};

export default function SkillBadge({ skill, color }: SkillBadgeProps) {
  const hex = categoryColors[color] ?? "#8A6BC4";

  return (
    <span
      className="rounded-full border px-4 py-2 text-sm font-medium"
      style={{
        borderColor: `${hex}66`,
        backgroundColor: `${hex}1A`,
        color: "var(--text)",
      }}
    >
      {skill}
    </span>
  );
}
