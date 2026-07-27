namespace NashrahShaikh.Suite.Domain.Entities;

public class ProjectImage
{
    public int Id { get; set; }

    public int ProjectId { get; set; }
    public Project Project { get; set; } = default!;

    public string Url { get; set; } = default!;
    public string? AltText { get; set; }
    public int DisplayOrder { get; set; }
}