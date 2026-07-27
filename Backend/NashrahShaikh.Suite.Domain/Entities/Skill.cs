using System.Collections.Generic;

namespace NashrahShaikh.Suite.Domain.Entities;

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;

    public ICollection<SkillCategoryLink> Categories { get; set; } = new List<SkillCategoryLink>();
    public ICollection<ProjectSkill> Projects { get; set; } = new List<ProjectSkill>();
}
