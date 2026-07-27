namespace NashrahShaikh.Suite.Domain.Entities;

// Composite key (SkillId + SkillCategoryId) configured in OnModelCreating.
public class SkillCategoryLink
{
    public int SkillId { get; set; }
    public Skill Skill { get; set; } = default!;

    public int SkillCategoryId { get; set; }
    public SkillCategory SkillCategory { get; set; } = default!;

    public int DisplayOrder { get; set; }
}
