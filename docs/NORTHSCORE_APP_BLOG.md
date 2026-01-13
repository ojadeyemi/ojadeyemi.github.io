# PRD — Northscore App System Design Case Study

## 1. Overview

This document defines the product requirements for a **short, high-impact system design case study** showcasing the **Northscore App architecture**. The article is intended to demonstrate founder-level product thinking and senior-level system design, while remaining easy to understand for a broad technical audience.

The final output is a **< 5-minute interactive blog post**, heavily visual, written in MDX, and hosted on a personal static site.

---

## 2. Goals

- Showcase the Northscore App’s **scalable, serverless system design**
- Demonstrate ability to explain complex systems **simply and clearly**
- Impress software engineering recruiters and experienced engineers
- Balance **product-led storytelling** with **technical credibility**

---

## 3. Target Audience

- Software engineering recruiters
- Senior and staff engineers
- Product-minded engineers and founders
- Readers familiar with modern web stacks but not necessarily sports data

---

## 4. Success Criteria

- **CRITICAL:** Readable in **under 5 minutes** (target: 4 minutes)
- No section without a visual or interactive element
- No paragraph longer than two lines
- System design is understandable without prior Northscore context
- Clear signal of scalability, reliability, and engineering maturity
- Code examples prove diagrams are real (not theoretical)

---

## 5. Tech & Publishing Constraints

- Written in **MDX**
- Built using **Next.js App Router**
- Motion powered by the **latest Motion package**
- Deployed as part of a **personal static site**
- All videos embedded from **YouTube or in the public/vids folder**
- All diagrams and images are optimized for fast load also in public/img folder

**IMPORTANT: Tech Stack Disclosure**

- Keep architecture descriptions **high-level and generic**
- Avoid revealing specific vendor names (e.g., use "edge CDN" instead of "Vercel", "managed backend" instead of "Supabase")
- Show patterns and decisions, not implementation details
- Balance demonstrating competence without creating a blueprint

---

## 6. Content Structure & Requirements

### Visual Assets Summary

**Required Visuals (4 total):**

1. ✅ YouTube video (hero section) — product launch commercial
2. ✅ App screenshots grid — `/public/img/northscore-screenshots-grid.png`
3. ✅ Combined architecture + data pipeline diagram — `/public/img/northscore-architecture.png`
4. ✅ Request flow diagram (will animate with Motion CSS) — `/public/img/northscore-request-flow.png`

**Removed/Simplified (text-only):**

- ❌ Device compatibility visual → mention Meta Quest in text
- ❌ Content aggregation diagram → merged into main architecture
- ❌ User → notifications flow → text-only
- ❌ CI/CD icons → text-only

---

### 6.1 Hero Section

**Purpose:** Immediate product + polish signal

**Requirements:**

- One-sentence thesis describing the app
- Embedded **YouTube video** (motion graphic of the app)(think of product launch commerical video)
- Video is sourced and hosted on YouTube

**Key Message:**

> Northscore is a Progressive Web App delivering live Canadian sports data and aggregated media from a single, scalable codebase.

---

### 6.2 Product Experience

**Purpose:** Ground the system in user value (anchors everything that follows)

**Requirements:**

- Visual grid of app screenshots
- **Visual:** `/public/img/northscore-screenshots-grid.png` (create separately)
- Short bullet points only
- Each bullet should have 1-2 sentence explanation

**Must Highlight:**

- Live stats, standings, schedules, leaderboard
- Aggregated content (read, watch, listen)
- Installable PWA experience
- Automated push notifications

---

### 6.3 Platform Architecture & Data Pipeline (Combined)

**Purpose:** Explain the system at a glance (one diagram replaces multiple explanations)

**Requirements:**

- One clean, high-level architecture + data pipeline diagram
- **Visual:** `/public/img/northscore-architecture.png` (create separately)

**Must Include:**

- Frontend: Next.js PWA (serverless, edge CDN deployment)
- Backend: Stateless containerized FastAPI servers (auto-scaling)
- Data layer: Managed PostgreSQL, Redis cache, SQLite
- Platform services: Managed auth backend, CI/CD, observability
- Data ingestion: API wrappers, scrapers, normalization layer

**Key Principles:**

- League-agnostic design (all leagues map to shared schema)
- Safe fallbacks (failed updates don't break app)
- Resilient data ingestion

---

### 6.4 One Codebase, Every Device

**Purpose:** Highlight frontend scalability and design rationale

**Requirements:**

- **Text-only section** (no additional visual needed)

**Must Explain:**

- Single frontend codebase (Next.js)
- PWA installability across iOS, Android, desktop, **and Meta Quest**
- Web push notifications
- Native-like UX without native apps

**Why PWA over native apps:**

- One frontend codebase vs 3+ native apps (iOS, Android, web)
- Faster shipping and iteration
- No app store approval delays
- Instant updates for all users

**Key Principle:**

- Same frontend code runs everywhere → keeps development fast and maintenance low

---

### 6.5 Backend & Data Flow

**Purpose:** Show backend separation and extensibility (merged with architecture diagram in 6.3)

**Requirements:**

- **No separate visual** — merged into combined architecture diagram in 6.3

**Must Explain:**

- Two APIs:
  - Stats API (FastAPI containers)
  - Content API (Headless CMS)

- Data ingestion strategies:
  - Scraping for some leagues
  - Official external APIs for others
  - Custom SDK wrappers (e.g. [CFL API](https://github.com/ojadeyemi/cfl-sdk))

- Unified, normalized data schema
- Safe fallback behavior

**Technical Challenge Solved:**

- **Limited data access** → Implemented custom SDKs with full documentation
- Built entire data infrastructure for HoopQueens league ([read the case study](#))

---

### 6.6 Content Aggregation & Recommendation

**Purpose:** Demonstrate sophistication beyond raw data

**Requirements:**

- **No separate visual** — merged into main architecture diagram

**Must Explain:**

- Content is indexed, not created
- Articles, podcasts, and **YouTube videos** are monitored automatically
- Latest videos are fetched and normalized
- Content appears alongside stats
- Content can be **personalized** based on:
  - Followed teams
  - User preferences
  - Watch / read / listen behavior

**Key Principle:**

- Enables _watch, read, listen_ in one place

---

### 6.7 Request → Response Flow

**Purpose:** Core engineering credibility section

**Requirements:**

- **Animated request flow diagram** (will animate with Motion CSS, very interactive)
- **Visual:** `/public/img/northscore-request-flow.png` (create separately)
- One small, contextual code block

**Must Explain:**

1. User opens the app
2. CDN serves the PWA shell
3. API request checks Redis cache
4. Cache miss queries the database
5. Normalized response is returned
6. UI updates instantly

**Performance Metrics:**

- Stats API p90 latency < 100ms
- Cache-first architecture keeps response times low under load

**Code Example Requirement:**

- Demonstrate cache-first read pattern (pseudocode is fine)
- **The code proves the diagram is real** (not theoretical)

---

### 6.8 Auth, Personalization & Notifications

**Purpose:** Show real-world app concerns

**Requirements:**

- **Text-only section** (no visual needed)

**Must Explain:**

- Passwordless authentication (Google, Microsoft, email OTP)
- Modern security model (no passwords stored)
- Managed auth backend used for:
  - User accounts
  - Favorites / followed teams
  - Notification preferences
  - Upcoming games tracking
- Automated push notifications triggered by game data

**Technical Challenge Solved:**

- Streamlined onboarding flow: install app → signup → enable notifications
- Designed logic to minimize friction while ensuring proper permissions

**Key Principle:**

- Auth backend handles user state — not core stats (separation of concerns)

---

### 6.9 Reliability, DevOps & Scale

**Purpose:** Show production readiness

**Requirements:**

- **Text-only section** (no icons needed)

**Must Explain:**

- Serverless & stateless services (horizontal scaling by default)
- Automated CI/CD pipeline:
  - Every commit is linted, formatted, and tested
  - Failed deployments never take over (rollback automatic)
  - Deploys to separate branch for review before production
  - Follows proper Git flow across all repos
- Safe deployments (only verified builds reach production)
- Auto-healing (services restart/redeploy without downtime)
- Observability (logs, traces, Slack alerts for failures)

**Performance & Reliability:**

- 99.999% uptime since launch
- Zero-downtime deployments with automatic rollback

**Key Principle:**

- Infrastructure stays invisible to users (reliability without complexity)

---

### 6.10 Closing

**Purpose:** Leave a strong final impression

**Requirements:**

- No visuals
- One or two short sentences

**Recommended Closing:(keep more exmaples)**

> Northscore isn’t built to look scalable.
> It’s built to stay simple as it scales.

---

## 7. Non-Goals

- Deep algorithmic detail
- Long-form explanations
- Marketing language or buzzwords
- Exhaustive tech stack documentation

---

## 8. Risks & Mitigations

- **Risk:** Too technical for quick read
  **Mitigation:** Visual-first, minimal prose

- **Risk:** Feels like marketing
  **Mitigation:** Concrete system decisions and code

---

## 9. Final Notes

This case study should feel:

- Product-led
- Engineer-respectful
- Founder-authored

If successful, the reader should understand **how the system works**, **why it scales**, and **why the design choices were intentional** — all in under five minutes.
