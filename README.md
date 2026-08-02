<div align="center">

# 🌐 Nashrah Portfolio Suite

**A full-stack, CMS-driven portfolio ecosystem built with ASP.NET Core, .NET MAUI, and Next.js**

[![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![MAUI](https://img.shields.io/badge/.NET%20MAUI-9.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/maui)
[![SQL Server](https://img.shields.io/badge/SQL%20Server-2022-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/en-us/sql-server)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue?style=for-the-badge)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)]()

<br/>

[📚 Full Docs](./docs) · [📡 API Reference](./docs/04-api-reference.md) · [⚙️ Setup Guide](./docs/08-setup-guide.md) · [🏛️ Architecture](./docs/02-architecture.md)

</div>

---

## 🎯 What is Nashrah Portfolio Suite?

A **production-grade, fully dynamic portfolio platform** serving as both a real-world personal brand showcase and a technical demonstration of modern cross-platform software engineering.

Content is managed entirely through a **built-in Admin CMS** — no code changes needed to update projects, skills, experience, or blog posts. The same backend API powers the **web app**, **mobile app**, and **admin panel** simultaneously.

---

## ✨ Core Features

| Feature | Description |
|---------|-------------|
| 🗂️ **Projects Showcase** | Dynamic project listings managed via admin panel |
| 👩‍💻 **Skills & Expertise** | Categorized skills with proficiency levels |
| 🏢 **Work Experience** | Timeline of professional experience |
| 📜 **Certifications** | Achievements and certifications gallery |
| ✍️ **Blog** | Developer articles and write-ups |
| 📬 **Contact Form** | Visitor message submission |
| 🔐 **Admin CMS** | Full content management with JWT authentication |
| 📱 **Mobile App** | Cross-platform MAUI app consuming the same API |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT LAYER                       │
│                                                      │
│   🌐 Next.js Web          📱 .NET MAUI Mobile        │
│   (Visitors + Admin)      (Android / Windows)        │
└──────────────────┬──────────────────┬───────────────┘
                   │   REST API (JWT) │
                   ▼                  ▼
┌─────────────────────────────────────────────────────┐
│              ASP.NET Core Web API (.NET 9)           │
│              Controllers · Middleware · Auth          │
└───────────────────────────┬─────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         ▼                  ▼                  ▼
    ┌─────────┐      ┌────────────┐     ┌──────────┐
    │ Domain  │      │   Infra    │     │  Shared  │
    │Entities │      │  EF Core   │     │  DTOs    │
    │Interfaces│     │Repositories│     │ Utilities│
    └─────────┘      └─────┬──────┘     └──────────┘
                           │
                    ┌──────▼──────┐
                    │  SQL Server │
                    │  Database   │
                    └─────────────┘
```

---

## 🏛️ Solution Structure

```
Portfolio/
│
├── Backend/
│   ├── NashrahShaikh.Suite.Api            ← HTTP Controllers, Program.cs
│   ├── NashrahShaikh.Suite.Domain         ← Entities, Interfaces, Enums
│   ├── NashrahShaikh.Suite.Infrastructure ← EF Core, Repositories, DB Context
│   └── NashrahShaikh.Suite.Shared         ← DTOs, Constants, Utilities
│
├── Frontend/
│   └── nashrah-portfolio-web              ← Next.js 15 App Router + Tailwind CSS
│
├── Mobile/
│   └── NashrahShaikh.Suite.Maui           ← .NET MAUI (Android + Windows)
│
└── docs/                                  ← Full project documentation
```

---

## 🛠️ Tech Stack

### Backend
![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-9.0-512BD4?style=flat&logo=dotnet)
![Entity Framework](https://img.shields.io/badge/EF%20Core-Code--First-512BD4?style=flat&logo=dotnet)
![SQL Server](https://img.shields.io/badge/SQL%20Server-2022-CC2927?style=flat&logo=microsoftsqlserver)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat&logo=jsonwebtokens)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=flat&logo=swagger)

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?style=flat&logo=tailwindcss)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=flat&logo=reacthookform)

### Mobile
![MAUI](https://img.shields.io/badge/.NET%20MAUI-9.0-512BD4?style=flat&logo=dotnet)
![MVVM](https://img.shields.io/badge/MVVM-Community%20Toolkit-512BD4?style=flat)
![SQLite](https://img.shields.io/badge/SQLite-Local%20Cache-003B57?style=flat&logo=sqlite)

---

## 🚀 Quick Start

### Prerequisites
- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [Node.js 20+](https://nodejs.org)
- [SQL Server 2022](https://www.microsoft.com/en-us/sql-server)
- [Visual Studio 2022](https://visualstudio.microsoft.com)

### 1. Clone
```bash
git clone https://github.com/SkNashrah/NashrahPortfolioSuite.git
cd NashrahPortfolioSuite
```

### 2. Run Backend
```bash
cd Backend
dotnet restore
# Update connection string in appsettings.json first
dotnet ef database update --project NashrahShaikh.Suite.Infrastructure
dotnet run --project NashrahShaikh.Suite.Api
```

### 3. Run Frontend
```bash
cd Frontend/nashrah-portfolio-web
npm install
npm run dev
```

📖 See the **[Full Setup Guide](./docs/08-setup-guide.md)** for detailed instructions.

---

## 📌 Current Status

> 🔧 **Active Development** — `v0.1.0` scaffold complete. Features being implemented progressively.

| Component | Status | Notes |
|-----------|--------|-------|
| Backend API | 🟡 Scaffold | Clean Architecture layers set up |
| Frontend Web | 🟡 In Progress | Some pages built |
| Mobile MAUI | 🟡 Scaffold | Shell navigation set up |
| Admin CMS | 🔴 Planned | Coming in next milestone |
| Deployment | 🔴 Planned | Free-tier cloud hosting |

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [01 — Project Overview](./docs/01-overview.md) | Vision, goals, and roadmap |
| [02 — Architecture](./docs/02-architecture.md) | System design & Mermaid diagrams |
| [03 — Tech Stack](./docs/03-techstack.md) | Full tech stack with rationale |
| [04 — API Reference](./docs/04-api-reference.md) | All API endpoints documented |
| [08 — Setup Guide](./docs/08-setup-guide.md) | Local development setup |

---

## 👩‍💻 Author

<div align="center">

**Nashrah Fatema Shaikh**
*Junior Software Developer · MSc Computer Science*

[![GitHub](https://img.shields.io/badge/GitHub-SkNashrah-181717?style=for-the-badge&logo=github)](https://github.com/SkNashrah)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nashrah--fatema-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/nashrah-fatema-/)
[![Email](https://img.shields.io/badge/Email-nashrahfatema@gmail.com-EA4335?style=for-the-badge&logo=gmail)](mailto:nashrahfatema@gmail.com)

</div>

---

<div align="center">

*Licensed under the [Apache License 2.0](./LICENSE)*

</div>
