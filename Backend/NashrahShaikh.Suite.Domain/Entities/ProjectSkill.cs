namespace NashrahShaikh.Suite.Domain.Entities;

// Composite key (ProjectId + SkillId) configured in OnModelCreating.
public class ProjectSkill
{
    public int ProjectId { get; set; }
    public Project Project { get; set; } = default!;

    public int SkillId { get; set; }
    public Skill Skill { get; set; } = default!;

    public int DisplayOrder { get; set; }
}