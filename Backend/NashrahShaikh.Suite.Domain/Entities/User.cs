using System;

namespace NashrahShaikh.Suite.Domain.Entities;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; } = default!;
    public string PasswordHash { get; set; } = default!;
    public string Role { get; set; } = "Admin"; // "Admin" | "Guest"

    // Hashed, not raw — if the DB ever leaks, a stolen hash can't be replayed.
    public string? RefreshTokenHash { get; set; }
    public DateTime? RefreshTokenExpiresAt { get; set; }
}