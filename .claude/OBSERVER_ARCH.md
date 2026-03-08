# Observer 2: Architecture Report

## Session: 2026-03-08 (Updated)
**Scope:** THK Website - Production Architecture

---

## Current State: PRODUCTION READY ✅

Modern React single-page application with:
- Component-based architecture
- Custom i18n system (no external library)
- Interactive UI with modals
- Vercel Edge Functions for API

---

## Project Structure
```
thk-website/
├── .claude/
│   ├── PROJECT_CONTEXT.md
│   ├── OBSERVER_QUALITY.md
│   └── OBSERVER_ARCH.md
├── api/
│   └── contact.ts         # Vercel Edge Function
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   │
│   ├── contexts/
│   │   └── LanguageContext.tsx   # i18n (EN/ES)
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── modal.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # + Language toggle
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── ManagedServices.tsx
│   │   │   ├── EventProduction.tsx
│   │   │   ├── Equipment.tsx
│   │   │   ├── WhyThk.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Verticals.tsx     # 10 industries
│   │   │   ├── VerticalDetail.tsx # Modal with equipment
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── VerticalCard.tsx  # Clickable
│   │   │   ├── EquipmentCard.tsx
│   │   │   └── StatsBar.tsx
│   │   │
│   │   └── SalesAgent/
│   │       ├── ChatInterface.tsx
│   │       └── ChatBubble.tsx
│   │
│   └── lib/
│       └── utils.ts
│
├── tailwind.config.ts
├── components.json           # shadcn config
├── vite.config.ts
├── vercel.json
└── package.json
```

---

## Component Dependency Graph
```
App.tsx
├── LanguageContext.Provider
│   ├── Navbar (language toggle)
│   ├── Hero
│   ├── StatsBar
│   ├── HowItWorks
│   ├── ManagedServices
│   ├── EventProduction
│   ├── Equipment
│   ├── WhyThk
│   ├── Verticals
│   │   ├── VerticalCard[] (clickable)
│   │   └── VerticalDetail (modal)
│   ├── About
│   ├── Contact
│   ├── Footer
│   └── ChatInterface
```

---

## Key Architecture Decisions

### ADR-001: React + Vite (Implemented)
**Decision:** Migrated from static HTML to React SPA
**Rationale:** Component reuse, state management, better DX
**Status:** ✅ Complete

### ADR-002: Custom i18n System
**Decision:** Built translation system with Context API
**Rationale:** Simple needs (2 languages), no external dependency
**Files:** src/contexts/LanguageContext.tsx
**Status:** ✅ Complete

### ADR-003: Modal-based Detail Views
**Decision:** Industry cards open modals instead of new pages
**Rationale:** Single-page experience, faster navigation
**Files:** src/components/ui/modal.tsx, VerticalDetail.tsx
**Status:** ✅ Complete

### ADR-004: Vercel Edge Functions
**Decision:** Use Edge Runtime for API routes
**Rationale:** Low latency, free tier, TypeScript support
**Files:** api/contact.ts
**Status:** ✅ Complete

---

## Tech Stack
| Layer | Technology | Status |
|-------|------------|--------|
| Framework | React 18 | ✅ |
| Language | TypeScript | ✅ |
| Build | Vite | ✅ |
| Styling | Tailwind CSS | ✅ |
| Components | shadcn/ui | ✅ |
| Icons | Lucide React | ✅ |
| i18n | Custom Context | ✅ |
| Hosting | Vercel | ✅ |
| API | Vercel Edge | ✅ |

---

## Resolved Issues
| Issue | Resolution |
|-------|------------|
| Monolithic HTML | ✅ Split into React components |
| Inline CSS | ✅ Tailwind utility classes |
| Fake form | ✅ Real Edge Function |
| Single language | ✅ EN/ES toggle |
| Static cards | ✅ Clickable with modals |

---

## Production URLs
- **Live Site:** https://thk-website.vercel.app
- **GitHub:** Connected to Vercel for auto-deploy
