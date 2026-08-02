# 📡 API Reference — Nashrah Portfolio Suite

> **Document:** 04 — API Endpoints Reference  
> **Author:** Nashrah Fatema Shaikh  
> **Last Updated:** 2026-07-31  
> **Interactive Docs:** `https://localhost:{PORT}/swagger` (when running locally)

---

## Base URL

| Environment | Base URL |
|-------------|----------|
| Local Dev | `https://localhost:{PORT}/api` |
| Production | `https://api.nashrahportfolio.com/api` *(planned)* |

---

## Authentication

Protected endpoints require a **Bearer JWT token** in the Authorization header.

```http
Authorization: Bearer {your_jwt_token}
```

Obtain a token via [POST /api/auth/login](#post-apiauthlogin).

### Auth Status Key
| Symbol | Meaning |
|--------|---------|
| 🔓 | Public — no auth required |
| 🔐 | Protected — requires valid JWT token |

---

## Endpoints Index

- [🔑 Auth](#-auth)
- [📁 Projects](#-projects)
- [💡 Skills](#-skills)
- [🏢 Experience](#-experience)
- [📜 Certifications](#-certifications)
- [✍️ Blog](#-blog)
- [📬 Contact](#-contact)
- [👤 About](#-about)

---

## 🔑 Auth

### POST /api/auth/login
🔓 Authenticate as admin and receive a JWT token.

**Request Body:**
```json
{
  "username": "admin",
  "password": "yourpassword"
}
```

**Response 200 — Success:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": "2026-08-02T00:00:00Z"
}
```

**Response 401 — Unauthorized:**
```json
{
  "message": "Invalid username or password."
}
```

---

## 📁 Projects

### GET /api/projects
🔓 Returns all published portfolio projects.

**Response 200:**
```json
[
  {
    "id": 1,
    "title": "QVisit",
    "shortDescription": "Visitor & Employee Management System — digital log management",
    "techStack": ["MAUI", "ASP.NET Core", "Blazor", "SQL Server", "SSRS"],
    "category": "Enterprise",
    "status": "Complete",
    "githubUrl": null,
    "liveUrl": null,
    "imageUrl": "/images/projects/qvisit.png",
    "isFeatured": true,
    "displayOrder": 1
  }
]
```

---

### GET /api/projects/{id}
🔓 Returns a single project with full details.

**Path Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | int | ✅ | Project ID |

**Response 200:**
```json
{
  "id": 1,
  "title": "QVisit",
  "shortDescription": "Visitor & Employee Management System",
  "fullDescription": "A complete digital log management system for visitor and employee tracking...",
  "techStack": ["MAUI", "ASP.NET Core", "Blazor", "SQL Server", "SSRS", "IIS"],
  "category": "Enterprise",
  "status": "Complete",
  "githubUrl": null,
  "liveUrl": null,
  "imageUrl": "/images/projects/qvisit.png",
  "isFeatured": true,
  "displayOrder": 1,
  "createdAt": "2026-07-31T00:00:00Z"
}
```

**Response 404:**
```json
{ "message": "Project not found." }
```

---

### POST /api/projects
🔐 Create a new project entry.

**Request Body:**
```json
{
  "title": "Clean Binge",
  "shortDescription": "AI-powered video cleaner for family-friendly viewing",
  "fullDescription": "Full description...",
  "techStack": ["Python", "PyQt6", "FFmpeg"],
  "category": "Desktop App",
  "status": "InProgress",
  "githubUrl": null,
  "liveUrl": null,
  "imageUrl": "/images/projects/cleanbinge.png",
  "isFeatured": false,
  "displayOrder": 2
}
```

**Response 201 — Created:** Project object with assigned `id`

---

### PUT /api/projects/{id}
🔐 Update an existing project.

**Response 200:** Updated project object  
**Response 404:** Project not found

---

### DELETE /api/projects/{id}
🔐 Delete a project.

**Response 204:** No content (success)  
**Response 404:** Project not found

---

## 💡 Skills

### GET /api/skills
🔓 Returns all skills grouped by category.

**Response 200:**
```json
[
  {
    "id": 1,
    "name": "C# / .NET",
    "category": "Backend",
    "proficiencyLevel": 85,
    "iconUrl": "/icons/csharp.svg",
    "displayOrder": 1
  },
  {
    "id": 2,
    "name": "ASP.NET Core",
    "category": "Backend",
    "proficiencyLevel": 80,
    "iconUrl": "/icons/aspnet.svg",
    "displayOrder": 2
  }
]
```

### POST /api/skills
🔐 Add a new skill.

### PUT /api/skills/{id}
🔐 Update a skill.

### DELETE /api/skills/{id}
🔐 Delete a skill.

---

## 🏢 Experience

### GET /api/experience
🔓 Returns all work experience entries ordered by date (newest first).

**Response 200:**
```json
[
  {
    "id": 1,
    "company": "Company Name",
    "role": "Junior Software Developer",
    "description": "Responsibilities and achievements...",
    "startDate": "2024-01-01T00:00:00Z",
    "endDate": null,
    "isCurrentRole": true
  }
]
```

### POST /api/experience
🔐 Add a new experience entry.

### PUT /api/experience/{id}
🔐 Update an experience entry.

### DELETE /api/experience/{id}
🔐 Delete an experience entry.

---

## 📜 Certifications

### GET /api/certifications
🔓 Returns all certifications.

**Response 200:**
```json
[
  {
    "id": 1,
    "title": "Certification Name",
    "issuingOrganization": "Microsoft / Coursera / etc.",
    "certificateUrl": "https://...",
    "imageUrl": "/images/certs/cert1.png",
    "issuedDate": "2025-06-01T00:00:00Z"
  }
]
```

### POST /api/certifications
🔐 Add a certification.

### PUT /api/certifications/{id}
🔐 Update a certification.

### DELETE /api/certifications/{id}
🔐 Delete a certification.

---

## ✍️ Blog

### GET /api/blog
🔓 Returns all published blog posts (without full content).

**Query Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `page` | int | ❌ | Page number (default: 1) |
| `pageSize` | int | ❌ | Items per page (default: 10) |

**Response 200:**
```json
{
  "totalCount": 5,
  "page": 1,
  "pageSize": 10,
  "items": [
    {
      "id": 1,
      "title": "Building Clean Architecture in .NET 9",
      "slug": "clean-architecture-dotnet-9",
      "excerpt": "A deep dive into structuring enterprise .NET solutions...",
      "tags": ["dotnet", "architecture", "csharp"],
      "publishedAt": "2026-07-15T00:00:00Z"
    }
  ]
}
```

### GET /api/blog/{slug}
🔓 Returns a single blog post with full content.

**Response 200:**
```json
{
  "id": 1,
  "title": "Building Clean Architecture in .NET 9",
  "slug": "clean-architecture-dotnet-9",
  "content": "Full markdown content...",
  "excerpt": "A deep dive...",
  "tags": ["dotnet", "architecture"],
  "isPublished": true,
  "publishedAt": "2026-07-15T00:00:00Z"
}
```

### POST /api/blog
🔐 Create a new blog post.

### PUT /api/blog/{id}
🔐 Update a blog post.

### DELETE /api/blog/{id}
🔐 Delete a blog post.

---

## 📬 Contact

### POST /api/contact
🔓 Submit a contact message (visitor-facing form).

**Request Body:**
```json
{
  "senderName": "John Doe",
  "senderEmail": "john@example.com",
  "subject": "Collaboration Opportunity",
  "message": "Hi Nashrah, I would love to discuss..."
}
```

**Response 200:**
```json
{ "message": "Your message has been sent successfully. I'll get back to you soon!" }
```

**Response 400 — Validation Error:**
```json
{
  "errors": {
    "senderEmail": ["Please provide a valid email address."],
    "message": ["Message must be at least 10 characters."]
  }
}
```

---

### GET /api/contact/messages
🔐 Returns all received contact messages (admin only).

**Response 200:**
```json
[
  {
    "id": 1,
    "senderName": "John Doe",
    "senderEmail": "john@example.com",
    "subject": "Collaboration Opportunity",
    "message": "Hi Nashrah...",
    "isRead": false,
    "receivedAt": "2026-07-31T10:00:00Z"
  }
]
```

### PATCH /api/contact/messages/{id}/read
🔐 Mark a message as read.

---

## 👤 About

### GET /api/about
🔓 Returns the about/bio section content.

**Response 200:**
```json
{
  "id": 1,
  "bio": "Junior Software Developer with an MSc in Computer Science...",
  "profileImageUrl": "/images/nashrah-profile.jpg",
  "resumeUrl": "/files/nashrah-resume.pdf",
  "updatedAt": "2026-07-31T00:00:00Z"
}
```

### PUT /api/about
🔐 Update the about section (admin only).

---

## 📋 Response Codes Summary

| Code | Meaning | When |
|------|---------|------|
| `200 OK` | Success | GET, PUT, PATCH |
| `201 Created` | Resource created | POST |
| `204 No Content` | Success, no body | DELETE |
| `400 Bad Request` | Validation failed | Invalid request body |
| `401 Unauthorized` | Not authenticated | Missing/invalid JWT |
| `403 Forbidden` | Not authorized | Valid JWT but insufficient permissions |
| `404 Not Found` | Resource missing | Invalid ID or slug |
| `500 Internal Server Error` | Server error | Unexpected exceptions |

---

> 💡 **Tip:** All endpoints are fully explorable via Swagger UI at `/swagger` when the API is running locally.
