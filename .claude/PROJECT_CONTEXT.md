# THK Enterprises Website - Project Context

## Project: thk-website
**Last Updated:** 2026-03-08

---

## Business Overview

**THK Enterprises** is a video infrastructure and production company based in Mexico City, founded by Timothy Hernandez Kipper (age 11). The company deploys and manages video infrastructure for schools, churches, and businesses.

### Core Value Proposition
- Deploy professional Epiphan Pearl encoders at client locations
- Manage them 24/7 remotely from Mexico City
- $50-75/month per device vs $50,000/year for full-time AV tech
- Trilingual service: English, Spanish, Mandarin

### Target Markets
- Universities (lecture capture)
- K-12 Schools (events, ceremonies)
- Corporate (town halls, training)
- Houses of Worship (service streaming)
- Legal/Courts (depositions, hearings)
- Events & Conferences

---

## Technical Stack

### Current Architecture
- **Frontend:** Static HTML with inline CSS/JS (being refactored to modular structure)
- **Deployment:** Vercel
- **Form Handling:** Formspree (to be integrated)

### Target Architecture
```
src/
├── index.html          # Main HTML with external refs
├── css/
│   ├── variables.css   # CSS custom properties
│   ├── base.css        # Reset, typography, body
│   ├── components.css  # Buttons, cards, forms
│   ├── sections.css    # Hero, nav, footer, content sections
│   └── responsive.css  # Media queries
└── js/
    ├── main.js         # Entry point, nav scroll
    ├── animations.js   # Intersection Observer animations
    └── form.js         # Contact form handling
```

### Key Equipment/Technology Mentioned
- Epiphan Pearl Nexus (1RU rackmount encoder)
- Epiphan Pearl Mini (portable)
- Epiphan EC20 PTZ Camera
- Epiphan Edge Cloud (management platform)
- Raspberry Pi 5 AI Operations Center

---

## Design System

### Colors (CSS Variables)
| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | #0a1628 | Primary background |
| `--navy-light` | #131f38 | Card backgrounds |
| `--navy-mid` | #1a2a4a | Hover states |
| `--blue` | #3b82f6 | Primary accent |
| `--blue-glow` | #60a5fa | Light accent |
| `--cyan` | #22d3ee | Secondary accent |
| `--white` | #f8fafc | Text primary |
| `--gray` | #94a3b8 | Text secondary |
| `--gray-light` | #cbd5e1 | Text tertiary |
| `--orange` | #f97316 | Accent |
| `--green` | #10b981 | Success/CTA |
| `--purple` | #a78bfa | Accent |

### Gradients
- `--gradient-blue`: linear-gradient(135deg, #3b82f6, #8b5cf6)
- `--gradient-cyan`: linear-gradient(135deg, #22d3ee, #3b82f6)
- `--gradient-green`: linear-gradient(135deg, #10b981, #22d3ee)

### Typography
- **Primary:** Inter (system fallback)
- **Display:** Space Grotesk

---

## Pricing Structure

### Managed AV (Monthly)
| Service | Price |
|---------|-------|
| VIaaS Core | $50-75 USD/device/month |
| Lecture Capture | $60 USD/room/month |
| AI-Enhanced Recording | +$15 USD/device/month |
| Multi-Campus Dashboard | Included at 3+ devices |

### Event Production (Per Event)
| Service | Price |
|---------|-------|
| Multi-Camera Livestreaming | From $5,000 MXN |
| 4K Video Production | From $6,500 MXN |
| Social Media Content | From $3,000 MXN |
| Hybrid Event Bridge | From $4,500 MXN |
| Event Coverage | From $4,500 MXN |
| AV Consultation | From $2,000 MXN |

---

## Contact Information
- **Location:** Mexico City, CDMX
- **Email:** hello@thkenterprises.com
- **Availability:** Weekends, US Business Hours

---

## Development Workflow

### Budget
- Monthly cap: $100 USD
- Cost tracking: `costs/daily-YYYY-MM-DD.json`

### Observer System
- `OBSERVER_QUALITY.md` - Code quality audits
- `OBSERVER_ARCH.md` - Architecture reviews
- `OBSERVER_ALERTS.md` - Critical blockers

### Deployment
- Platform: Vercel
- Auto-deploy from `main` branch
