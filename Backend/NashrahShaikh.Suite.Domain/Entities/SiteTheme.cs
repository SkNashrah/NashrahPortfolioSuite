using System;

namespace NashrahShaikh.Suite.Domain.Entities;

// Deliberately only 6 admin-editable values (primary/secondary/accent x
// light/dark). Neutrals and semantic colors stay fixed in globals.css.
public class SiteTheme
{
    public int Id { get; set; }

    public string PrimaryLight { get; set; } = default!;
    public string SecondaryLight { get; set; } = default!;
    public string AccentLight { get; set; } = default!;

    public string PrimaryDark { get; set; } = default!;
    public string SecondaryDark { get; set; } = default!;
    public string AccentDark { get; set; } = default!;

    public DateTime UpdatedAt { get; set; }

    public static SiteTheme Default() => new()
    {
        PrimaryLight = "#8A6BC4",
        SecondaryLight = "#C97B96",
        AccentLight = "#C08B6F",
        PrimaryDark = "#8B3A5C",
        SecondaryDark = "#B98BD9",
        AccentDark = "#C08B6F",
        UpdatedAt = DateTime.UtcNow,
    };
}