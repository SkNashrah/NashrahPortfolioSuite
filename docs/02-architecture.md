# 🏛️ Architecture — Nashrah Portfolio Suite

> **Document:** 02 — System Architecture & Design  
> **Author:** Nashrah Fatema Shaikh  
> **Last Updated:** 2026-07-31  

---

## 📐 System Overview

The Nashrah Portfolio Suite is a **tri-client, single-API** architecture. Three separate client applications — a Next.js web app, a .NET MAUI mobile app, and an admin panel — all consume one centralized ASP.NET Core REST API, which in turn follows **Clean Architecture** internally.

---

## 🗺️ High-Level System Diagram

```mermaid
graph TB
    subgraph Clients["🖥️ Client Layer"]
        WEB["🌐 Next.js Web App<br/>(Visitors + Admin)<br/>TypeScript · Tailwind CSS"]
        MOB["📱 .NET MAUI Mobile<br/>(Android + Windows)<br/>MVVM · Community Toolkit"]
    end

    subgraph API["⚙️ API Layer"]
        CTRL["ASP.NET Core Web API<br/>.NET 9<br/>Controllers · JWT Middleware · Swagger"]
    end

    subgraph CleanArch["🏗️ Clean Architecture (Backend)"]
        direction TB
        DOM["📦 Domain Layer<br/>Entities · Interfaces · Enums"]
        INFRA["🔧 Infrastructure Layer<br/>EF Core · Repositories · DB Context"]
        SHARED["🔗 Shared Layer<br/>DTOs · Constants · Utilities"]
    end

    subgraph Data["🗄️ Data Layer"]
        DB[("SQL Server 2022<br/>Code-First Schema")]
    end

    WEB -->|"HTTPS REST + JWT"| CTRL
    MOB -->|"HTTPS REST + JWT"| CTRL
    CTRL --> DOM
    CTRL --> SHARED
    CTRL --> INFRA
    DOM --> SHARED
    INFRA --> DOM
    INFRA -->|"EF Core Queries"| DB
```

---

## 🏗️ Clean Architecture Breakdown

The backend is structured in **4 layers** following Clean Architecture principles — inner layers have **zero knowledge** of outer layers.

```mermaid
graph LR
    subgraph Outer["Outer Layers (depend inward)"]
        API["API Layer<br/>NashrahShaikh.Suite.Api"]
        INFRA["Infrastructure Layer<br/>NashrahShaikh.Suite.Infrastructure"]
    end

    subgraph Inner["Inner Layers (no external dependencies)"]
        DOM["Domain Layer<br/>NashrahShaikh.Suite.Domain"]
        SHARED["Shared Layer<br/>NashrahShaikh.Suite.Shared"]
    end

    API -->|"Depends on"| DOM
    API -->|"Depends on"| INFRA
    API -->|"Depends on"| SHARED
    INFRA -->|"Implements interfaces from"| DOM
    INFRA -->|"Uses"| SHARED
    DOM -->|"Uses"| SHARED
```

### Layer Responsibilities

| Layer | Project | Responsibility | Can depend on |
|-------|---------|----------------|---------------|
| **API** | `NashrahShaikh.Suite.Api` | HTTP endpoints, routing, middleware, DI wiring, Swagger | Domain, Infrastructure, Shared |
| **Domain** | `NashrahShaikh.Suite.Domain` | Business entities, repository interfaces, domain enums | Shared only |
| **Infrastructure** | `NashrahShaikh.Suite.Infrastructure` | EF Core DbContext, repository implementations, migrations | Domain, Shared |
| **Shared** | `NashrahShaikh.Suite.Shared` | DTOs (request/response), constants, utility helpers | Nothing (innermost) |

---

## 🔄 Request Flow — Visitor Reads Data

```mermaid
sequenceDiagram
    actor Visitor as 🌐 Web / 📱 Mobile
    participant API as ASP.NET Core API
    participant MW as JWT Middleware
    participant CTRL as Controller
    participant REPO as Repository Interface
    participant INFRA as EF Core Repo (Infra)
    participant DB as SQL Server

    Visitor->>API: GET /api/projects
    API->>MW: Validate JWT (if required)
    MW-->>CTRL: Request passes through
    CTRL->>REPO: IProjectRepository.GetAllAsync()
    REPO->>INFRA: Concrete implementation called
    INFRA->>DB: EF Core SELECT query
    DB-->>INFRA: Raw data rows
    INFRA-->>REPO: List<Project> entities
    REPO-->>CTRL: IEnumerable<Project>
    CTRL-->>API: Map to ProjectResponseDto
    API-->>Visitor: 200 OK — JSON array
```

---

## 🔐 Authentication Flow — Admin Login

```mermaid
sequenceDiagram
    actor Admin as 👤 Admin (Next.js)
    participant API as ASP.NET Core API
    participant AUTH as Auth Controller
    participant DB as SQL Server

    Admin->>API: POST /api/auth/login { username, password }
    API->>AUTH: Validate credentials
    AUTH->>DB: Query admin user record
    DB-->>AUTH: Admin entity
    AUTH->>AUTH: Verify password hash
    AUTH-->>API: Generate JWT token (HS256)
    API-->>Admin: 200 OK { token, expiresAt }

    Note over Admin,API: Subsequent protected requests

    Admin->>API: GET /api/admin/messages [Authorization: Bearer token]
    API->>API: JWT Middleware validates token
    API-->>Admin: 200 OK — protected data
```

---

## 📱 Mobile MVVM Architecture (.NET MAUI)

```mermaid
graph TB
    subgraph MAUI["📱 .NET MAUI App"]
        subgraph View["View Layer"]
            PAGES["XAML Pages<br/>Projects · Skills · About · Blog"]
        end

        subgraph ViewModel["PageModel / ViewModel Layer"]
            PM["PageModels<br/>Community Toolkit MVVM<br/>[ObservableProperty] [RelayCommand]"]
        end

        subgraph Services["Service Layer"]
            SVC["Services<br/>IProjectService · ISkillService · etc."]
            CACHE["SQLite Cache<br/>Offline Data Storage"]
        end
    end

    subgraph Remote["🌐 Remote"]
        API["ASP.NET Core API"]
    end

    PAGES <-->|"Data Binding"| PM
    PM -->|"Calls"| SVC
    SVC -->|"HttpClient REST calls"| API
    SVC <-->|"Local cache read/write"| CACHE
    API -->|"JSON Response"| SVC
```

### MAUI Shell Navigation

```mermaid
graph LR
    SHELL["AppShell"] --> HOME["Home Page"]
    SHELL --> PROJECTS["Projects Page"]
    SHELL --> SKILLS["Skills Page"]
    SHELL --> ABOUT["About Page"]
    SHELL --> BLOG["Blog Page"]
    SHELL --> CONTACT["Contact Page"]

    PROJECTS -->|"Navigate to"| DETAIL["Project Detail Page"]
    BLOG -->|"Navigate to"| BLOGPOST["Blog Post Page"]
```

---

## 🗄️ Database Architecture

### Entity Relationship Overview

```mermaid
erDiagram
    ADMIN_USER {
        int Id PK
        string Username
        string PasswordHash
        string Email
        datetime CreatedAt
    }

    PROJECT {
        int Id PK
        string Title
        string ShortDescription
        string FullDescription
        string TechStack
        string GithubUrl
        string LiveUrl
        string ImageUrl
        string Category
        string Status
        int DisplayOrder
        bool IsFeatured
        datetime CreatedAt
    }

    SKILL {
        int Id PK
        string Name
        string Category
        int ProficiencyLevel
        string IconUrl
        int DisplayOrder
    }

    EXPERIENCE {
        int Id PK
        string Company
        string Role
        string Description
        datetime StartDate
        datetime EndDate
        bool IsCurrentRole
    }

    CERTIFICATION {
        int Id PK
        string Title
        string IssuingOrganization
        string CertificateUrl
        string ImageUrl
        datetime IssuedDate
    }

    BLOG_POST {
        int Id PK
        string Title
        string Slug
        string Content
        string Excerpt
        string Tags
        bool IsPublished
        datetime PublishedAt
        datetime CreatedAt
    }

    CONTACT_MESSAGE {
        int Id PK
        string SenderName
        string SenderEmail
        string Subject
        string Message
        bool IsRead
        datetime ReceivedAt
    }

    ABOUT {
        int Id PK
        string Bio
        string ProfileImageUrl
        string ResumeUrl
        datetime UpdatedAt
    }

    ADMIN_USER ||--o{ BLOG_POST : "authors"
    ADMIN_USER ||--o{ CONTACT_MESSAGE : "receives"
```

---

## 🌐 Frontend Architecture (Next.js)

```mermaid
graph TB
    subgraph NextApp["Next.js 15 — App Router"]
        subgraph Public["Public Routes (visitors)"]
            HOME_P["/ — Home"]
            PROJ_P["/projects — Projects"]
            DETAIL_P["/projects/[id]"]
            ABOUT_P["/about — About"]
            BLOG_P["/blog — Blog"]
            BLOGP_P["/blog/[slug]"]
            CONTACT_P["/contact — Contact"]
        end

        subgraph Admin["Protected Routes (admin)"]
            LOGIN["/admin/login"]
            DASH["/admin/dashboard"]
            MANAGE_P["/admin/projects"]
            MANAGE_S["/admin/skills"]
            MANAGE_E["/admin/experience"]
            MANAGE_B["/admin/blog"]
            MESSAGES["/admin/messages"]
        end

        subgraph Shared["Shared"]
            COMPS["Components<br/>Navbar · Footer · Cards · Forms"]
            HOOKS["Custom Hooks<br/>useAuth · useProjects · etc."]
            LIB["API Client<br/>fetch wrapper + base URL"]
        end
    end

    API["🔗 ASP.NET Core API"]

    Public -->|"API calls (public endpoints)"| LIB
    Admin -->|"API calls (JWT protected)"| LIB
    LIB -->|"HTTPS REST"| API
```

---

## 🔁 Deployment Architecture (Planned)

```mermaid
graph LR
    subgraph GitHub["GitHub Repository"]
        CODE["Source Code"]
    end

    subgraph Vercel["Vercel (Free Tier)"]
        FE["Next.js Frontend<br/>nashrahportfolio.vercel.app"]
    end

    subgraph Render["Render / Railway (Free Tier)"]
        BE["ASP.NET Core API<br/>api.nashrahportfolio.com"]
        DB2[("SQL Server / PostgreSQL")]
    end

    CODE -->|"Auto-deploy on push"| FE
    CODE -->|"Auto-deploy on push"| BE
    BE --> DB2
    FE -->|"REST API calls"| BE
```

---

## 🏷️ Key Design Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Architecture | Clean Architecture | Separation of concerns, testability, scalability |
| API Style | REST (JSON) | Universal — works with web, mobile, and future clients |
| Auth | JWT (Bearer Token) | Stateless, works perfectly with SPA and mobile apps |
| ORM | Entity Framework Core Code-First | Clean C# models → auto schema generation |
| Mobile Pattern | MVVM + Community Toolkit | Data binding, testable ViewModels, MAUI best practice |
| Frontend Router | Next.js App Router | Layouts, Server Components, modern React patterns |
| Styling | Tailwind CSS | Utility-first, rapid development, consistent design |
| Database | SQL Server | Tight EF Core integration, familiar for .NET ecosystem |
