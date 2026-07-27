
using System.Collections.Generic;

namespace NashrahShaikh.Suite.Domain.Entities;

public class SkillCategory
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Color { get; set; } = default!;
    public int DisplayOrder { get; set; }

    public ICollection<SkillCategoryLink> Skills { get; set; } = new List<SkillCategoryLink>();
}