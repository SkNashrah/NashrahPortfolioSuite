# 🛠️ Tech Stack — Nashrah Portfolio Suite

> **Document:** 03 — Technology Stack & Rationale  
> **Author:** Nashrah Fatema Shaikh  
> **Last Updated:** 2026-07-31  

---

## Overview

Every technology in this suite was chosen deliberately. This document explains **what** is used and **why** — not just a list, but a reasoned engineering decision record.

---

## ⚙️ Backend — ASP.NET Core Web API

### Core Framework

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **ASP.NET Core** | .NET 9 | Web API framework | Industry-standard .NET API framework. High performance, cross-platform, rich ecosystem. Demonstrates enterprise-grade .NET skills |
| **C#** | 13 | Primary language | Strongly typed, modern, excellent tooling. Native to the entire .NET stack |
| **Entity Framework Core** | Code-First | ORM & migrations | Eliminates raw SQL boilerplate. Code-First approach means the schema is defined in C# and auto-generated — consistent across environments |
| **SQL Server** | 2022 (local) | Relational database | Best integration with EF Core in the .NET ecosystem. Industry-standard for .NET applications |

### Architecture & Patterns

| Pattern | Implementation | Why Chosen |
|---------|---------------|------------|
| **Clean Architecture** | 4-layer project separation | Forces strict dependency rules — inner layers never depend on outer layers. Results in highly testable, maintainable code |
| **Repository Pattern** | `IProjectRepository`, `ISkillRepository`, etc. | Abstracts data access from business logic. Repositories can be swapped (e.g., switch from SQL Server to PostgreSQL) without touching domain code |
| **Dependency Injection** | Built-in .NET DI container | Loose coupling between layers. Makes unit testing with mocks trivial |

### Security & Documentation

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **JWT (JSON Web Tokens)** | Admin authentication | Stateless auth — no server-side sessions needed. Works identically for web and mobile clients |
| **Swagger / OpenAPI** | API documentation | Auto-generates interactive API docs. Any developer (or myself) can explore and test endpoints instantly |

---

## 🌐 Frontend — Next.js Web App

### Core Framework

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **Next.js** | 15.x (App Router) | React framework | Provides SSR, SSG, and ISR out-of-the-box. App Router enables server components, layouts, and efficient data fetching patterns |
| **TypeScript** | 5.x | Language | Type safety catches bugs at compile time, not runtime. Provides better IntelliSense and self-documenting code |
| **React** | 18.x | UI library | Component-based architecture, hooks system, massive ecosystem |

### Styling & UI

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **Tailwind CSS** | 3.x | Utility-first CSS | Rapid UI development without leaving HTML. No CSS file bloat. Consistent design tokens |

### Forms & Data

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **React Hook Form** | Form state management | Performant, minimal re-renders, easy validation integration |
| **NextAuth.js** | Frontend session auth | Handles JWT token storage, session management, and protected route redirects cleanly in Next.js |
| **Fetch API / Axios** | API client | HTTP requests to the ASP.NET Core API |

### Why Next.js over plain React?

```
Plain React (CRA/Vite):           Next.js App Router:
──────────────────────            ──────────────────────────────
No SSR/SSG out-of-box     →      SSR, SSG, ISR built-in
Manual routing setup      →      File-based routing
Poor SEO by default       →      Excellent SEO (server rendering)
No image optimization     →      next/image auto-optimization
Manual code splitting     →      Automatic per-route splitting
```

---

## 📱 Mobile — .NET MAUI

### Core Framework

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **.NET MAUI** | .NET 9 | Cross-platform mobile | Single C# codebase targets Android, Windows, iOS, and macOS. Eliminates need for separate Swift/Kotlin apps |
| **XAML** | — | UI definition | Declarative UI with data-binding support. Familiar to .NET developers |
| **C#** | 13 | App logic | Same language as backend — no context switching |

### Architecture & Patterns

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **MVVM Pattern** | Architectural pattern | Separates UI (View) from logic (ViewModel/PageModel). Enables unit testing of ViewModels independently of UI |
| **Community Toolkit MVVM** | MVVM helpers | `[ObservableProperty]`, `[RelayCommand]` source generators eliminate boilerplate ViewModel code dramatically |
| **Shell Navigation** | App navigation | Provides structured, hierarchical navigation with flyout/tab support. MAUI's recommended navigation pattern |
| **Dependency Injection** | Built-in MAUI DI | Same .NET DI container as the API. Consistent programming model across the entire suite |

### Data & Connectivity

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **HttpClient** | API communication | Native .NET HTTP client. Communicates with the ASP.NET Core API using the same DTOs from the Shared layer |
| **SQLite** | Local offline cache | Lightweight, embedded database. Caches API responses so the app works when offline |
| **Custom UI Controls** | Branded UI components | Reusable controls with the portfolio's colorful, creative design system |

### Target Platforms

| Platform | Status |
|----------|--------|
| Android | ✅ Primary target |
| Windows (WinUI 3) | ✅ Secondary target |
| iOS | 🔮 Planned (requires Mac for build) |
| macOS Catalyst | 🔮 Planned |

---

## 🗄️ Database

| Technology | Version | Purpose | Why Chosen |
|------------|---------|---------|------------|
| **SQL Server** | 2022 | Primary database | Best-in-class EF Core integration. Supports all relational features needed. Industry standard in .NET ecosystem |
| **EF Core Migrations** | Code-First | Schema management | Database schema is version-controlled in C# migrations. Reproducible across environments |
| **SQLite** | — | Mobile local cache | Zero-config embedded DB for MAUI offline support |

---

## 🧰 Development Tools

| Tool | Purpose | Why Used |
|------|---------|----------|
| **Visual Studio 2022** | Primary IDE for .NET | Best-in-class C# tooling, MAUI designer, EF Core tools, debugger |
| **VS Code** | Frontend development | Lightweight, excellent TypeScript/Next.js support with extensions |
| **Git** | Version control | Industry-standard source control |
| **GitHub** | Remote repository | Free hosting, CI/CD via GitHub Actions, project management |
| **Swagger UI** | API testing & docs | Auto-generated interactive API explorer from OpenAPI spec |

---

## 🚀 Planned Deployment Stack (Free Tier)

| Service | What | Free Tier |
|---------|------|-----------|
| **Vercel** | Next.js frontend | ✅ Generous free tier, auto-deploy from GitHub |
| **Render** | ASP.NET Core API | ✅ Free tier available, Docker deployment |
| **Render / PlanetScale** | Database | ✅ Free PostgreSQL (migrate from SQL Server) |
| **GitHub Pages** | Static content / docs | ✅ Unlimited for public repos |
| **GitHub Actions** | CI/CD pipeline | ✅ 2,000 minutes/month free |

> **Note on Database for Deployment:** SQL Server has no free cloud tier. For production deployment, EF Core will be configured to use **PostgreSQL** (fully compatible with all EF Core features). The local development environment continues to use SQL Server.

---

## 📊 Tech Stack Summary

```
┌─────────────────────────────────────────────────────────┐
│                    TECH STACK AT A GLANCE               │
├──────────────┬──────────────────────────────────────────┤
│ Backend      │ ASP.NET Core 9 · C# 13 · EF Core         │
│              │ Clean Architecture · JWT · Swagger        │
│              │ SQL Server (local) · PostgreSQL (cloud)   │
├──────────────┼──────────────────────────────────────────┤
│ Frontend     │ Next.js 15 · TypeScript · React 18        │
│              │ Tailwind CSS · React Hook Form             │
│              │ NextAuth.js · Fetch API                   │
├──────────────┼──────────────────────────────────────────┤
│ Mobile       │ .NET MAUI 9 · C# · XAML                  │
│              │ MVVM · Community Toolkit · Shell Nav       │
│              │ HttpClient · SQLite (offline cache)       │
├──────────────┼──────────────────────────────────────────┤
│ DevOps       │ Git · GitHub · GitHub Actions             │
│              │ Vercel · Render                           │
├──────────────┼──────────────────────────────────────────┤
│ Tools        │ Visual Studio 2022 · VS Code · Swagger UI │
└──────────────┴──────────────────────────────────────────┘
```
