using System;
using System.Collections.Generic;
using NashrahShaikh.Suite.Domain.Enums;

namespace NashrahShaikh.Suite.Domain.Entities;

public class Project
{
    public int Id { get; set; }
    public string Title { get; set; } = default!;
    public string Description { get; set; } = default!;
    public ProjectType Type { get; set; }

    public string? GitHubUrl { get; set; }
    public string? LiveDemoUrl { get; set; }
    public string? Architecture { get; set; }

    // TODO: Features — still unresolved, see chat notes.

    public bool IsFeatured { get; set; }
    public int DisplayOrder { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<ProjectImage> Gallery { get; set; } = new List<ProjectImage>();
    public ICollection<ProjectSkill> Skills { get; set; } = new List<ProjectSkill>();
}
