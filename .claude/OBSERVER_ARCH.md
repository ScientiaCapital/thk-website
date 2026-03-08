# Observer 2: Architecture Report

## Session: 2026-03-08
**Scope:** Architecture analysis for THK Website

---

## Current State
Single monolithic HTML file with all CSS and JS inline.

## Target State
Modular static site with:
- Separated CSS (5 files by concern)
- Separated JS (3 files by feature)
- Vercel deployment with form handling

---

## Findings

### [SMELL] - Monolithic Structure
**Component:** THK_Website.html
**Description:** 940-line single file makes maintenance difficult.
**Impact if ignored:** Harder to update individual sections, no code reuse.
**Status:** Being resolved this session.

### [RISK] - No Build System
**Component:** Project root
**Description:** No package.json, no bundler, no dev server.
**Impact if ignored:** Cannot use npm packages, no hot reload during development.
**Resolution:** Adding Vite for dev server and build.

### [RISK] - Form Not Functional
**Component:** Contact form
**Description:** Form submission is simulated, not real.
**Impact if ignored:** Leads will not be captured.
**Resolution:** Integrating Formspree this session.

### [INFO] - No Analytics
**Component:** index.html
**Description:** No Google Analytics, Plausible, or similar.
**Impact if ignored:** Cannot track visitor behavior.
**Resolution:** Out of scope for this session, log for future.

---

## Dependency Map
```
index.html
├── css/
│   ├── variables.css (required by all CSS)
│   ├── base.css
│   ├── components.css
│   ├── sections.css
│   └── responsive.css
└── js/
    ├── main.js
    ├── animations.js
    └── form.js (depends on Formspree endpoint)
```

---

## Technical Debt Backlog
| Item | Priority | Estimated Effort |
|------|----------|------------------|
| Add analytics tracking | Low | 30 min |
| Add favicon | Low | 15 min |
| Image optimization | Medium | 1 hour |
| Add sitemap.xml | Low | 15 min |
| Add robots.txt | Low | 5 min |

---

## Architecture Decision Records

### ADR-001: Static Site with Vite
**Decision:** Use Vite as dev server and build tool.
**Rationale:** Fast HMR, zero-config for static sites, good Vercel integration.
**Alternatives considered:** Plain HTML (no dev server), Parcel (less popular).

### ADR-002: Formspree for Contact Form
**Decision:** Use Formspree instead of serverless function.
**Rationale:** No backend code needed, free tier sufficient, AJAX support.
**Alternatives considered:** Vercel serverless (more complex), Netlify Forms (different platform).
