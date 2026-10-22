# NOXAS — Premium Creative Agency Website

> **Digital Growth, Website Development & Influencer Marketing Agency**  
> Inspired by the visual storytelling, editorial layouts, and portfolio experience of modern luxury agency references.

---

## 1. Project Overview

**NOXAS** is a high-end, frontend-only creative agency website engineered with **Next.js App Router (JavaScript only)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

### Positioning & Core Capabilities
- **Website Design & Development**: Bespoke brand flagships, editorial layouts, and Next.js frontend performance.
- **E-commerce Growth Experiences**: Conversion-engineered PDPs, headless storefronts, and frictionless shopping journeys.
- **Influencer Marketing**: Curated creator discovery, relationship management, and authentic campaign coordination.
- **UGC & Content Production**: Tactile short-form video assets, unboxings, texture close-ups, and paid social hooks.

### Target Client Verticals
- Beauty & Skincare brands
- Jewellery & Luxury Fashion labels
- Direct-to-Consumer (D2C) & Modern Commerce businesses
- High-Growth Startups & Digital-First Brands
- International markets across India, USA, UK, Australia, and worldwide.

---

## 2. Design System & Brand Palette

NOXAS features a clean, high-contrast, bold creative-agency aesthetic inspired by modern advertising agency design:

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Primary Background** | `#FFFFFF` | Crisp white agency foundation |
| **Primary Text** | `#111111` | High-contrast black typography |
| **Accent Orange** | `#D62545` | Main brand accent for CTAs, highlights, active states |
| **Hover Orange** | `#E94A14` | Darker orange hover state |
| **Soft Background** | `#F5F5F2` | Subtle off-white for section rhythm & cards |
| **Secondary Text** | `#686868` | Refined body text, descriptions & metadata |
| **Borders & Dividers** | `#E5E5E5` | Clean light-gray dividers and framing |
| **Dark Feature Sections** | `#171717` | High-contrast dark sections (Footer, Creator Callout) |
| **Text on Dark** | `#F7F7F7` | Off-white text on dark feature sections |
| **Muted Text on Dark** | `#B5B5B5` | Secondary text on dark feature sections |

### Typography
- **Headlines / Accents**: `Playfair Display` (Italic / Bold Italic) via `next/font/google`.
- **Interface / Body / Labels**: `Inter` via `next/font/google`.

---

## 3. Directory Structure

```text
/
├── app/
│   ├── layout.js                 # Root layout with fonts, header, footer & SEO metadata
│   ├── page.js                   # 10-section editorial homepage
│   ├── globals.css               # Design tokens, custom scrollbar & utilities
│   ├── sitemap.js                # Search engine sitemap generator
│   ├── robots.js                 # Crawler directives
│   ├── services/page.js          # Detailed services overview & deliverables
│   ├── web-development/page.js   # Web dev, headless e-commerce, standards & FAQs
│   ├── influencer-marketing/page.js # Creator workflow, UGC, and fee transparency
│   ├── portfolio/page.js         # Interactive filter tabs & concept detail modal
│   ├── about/page.js             # Agency positioning, philosophy & core values
│   ├── insights/page.js          # Editorial journal with reader modal
│   ├── contact/page.js           # Client brief form with browser validation & mailto
│   └── privacy-policy/page.js    # Data protection & Google Form notice
├── components/
│   ├── layout/
│   │   ├── Header.js             # Sticky backdrop blur, navigation & dropdown
│   │   └── Footer.js             # Spacious footer with quick links & creator apply
│   └── home/
│       ├── HeroSection.js        # Section 1: Editorial hero & asymmetric visual
│       ├── BrandPositioning.js   # Section 2: Strategy meets creativity
│       ├── BrandShowcase.js      # Section 3: Curated concept brand labs
│       ├── ServicesSection.js    # Section 4: "What We Bring to the Table" rows
│       ├── FeaturedWork.js       # Section 5: "Work That Makes People Look Twice"
│       ├── ProcessSection.js     # Section 6: 4-phase horizontal timeline
│       ├── IndustryFocus.js      # Section 7: Beauty, Jewellery, D2C, Startups
│       ├── CreatorRecruitment.js # Section 8: Google Form integration callout
│       ├── InsightsSection.js    # Section 9: Upcoming editorial perspectives
│       └── FinalCta.js           # Section 10: High-contrast closing conversation CTA
├── data/
│   ├── navigation.js             # Header, dropdown & footer link structure
│   ├── services.js               # Service specifications, deliverables & process
│   ├── projects.js               # Portfolio concept projects & categories
│   └── insights.js               # Editorial articles & thought leadership
├── lib/
│   └── site-config.js            # Centralized brand constants, mailto, & Google Form URL
├── jsconfig.json                 # Path aliases (@/*)
├── next.config.js                # Remote image domain configs
├── tailwind.config.js            # Custom color palette & keyframes
└── package.json                  # Dependencies & scripts
```

---

## 4. Google Form Creator Network Integration

The exact Google Form URL is integrated throughout the site:
- **URL**: `https://docs.google.com/forms/d/e/1FAIpQLSdB9jkdVIUF4bngiNrXQkabsQ_gWuaPRKcdoHbrgrIgUz-bPg/viewform?pli=1&fbzx=-3569669940816965366`
- **Placements**:
  - Header desktop & mobile drawer (`Join as Creator`)
  - Homepage Section 8 (`Creator Recruitment`)
  - Influencer Marketing Page (`Join Roster as Creator`)
  - Contact Page (`For Content Creators & Influencers` card)
  - Footer creator callout
- **Security & Usability**:
  - Opens in new tab with `target="_blank"` and `rel="noopener noreferrer"`.
  - Includes transparent disclaimer: *"Registration does not guarantee an immediate campaign or paid collaboration."*
  - Zero backend dependencies; Google Forms handles all response collection directly into linked Google Sheets.

---

## 5. Contact Inquiries & Commercial Transparency

- **Frontend-Only Architecture**: No mock databases, no fake success banners.
- **Validation**: Strict browser-side validation verifies that client name, email, company, and project scope are complete.
- **Mailto Dispatch**: Submitting the form opens the client's email application with a structured inquiry addressed to `siteConfig.contactEmail` (`hello@noxas.in`).
- **Clipboard Backup**: Users can click *"Copy Brief Text"* to copy the formatted inquiry directly to their clipboard with one click.

---

## 6. Local Development Setup

### Prerequisites
- Node.js `v18.17.0` or higher
- npm `v9.0.0` or higher

### Steps
```bash
# 1. Clone or navigate to the workspace
cd "Noxas upgraded"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open browser
http://localhost:3000
```

---

## 7. Production Build & Deployment on Vercel

### Testing the Production Build Locally
```bash
npm run build
npm run start
```

### Deploying to Vercel
1. Push the repository to GitHub, GitLab, or Bitbucket:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NOXAS creative agency platform"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import the repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**. The site will build statically and go live on Vercel's global edge network.

---

## 8. License & Proprietary Notice

Proprietary digital identity and concept architecture for **NOXAS**. All concept archetypes and creative specifications are intended for agency presentation and client demonstration.
