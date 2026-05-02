# paridhi-goyal-portfolio

Personal portfolio website for **Paridhi Goyal** — Senior Software Engineer with 5+ years of experience in cloud-native systems, scalable APIs, and data pipelines. Currently pursuing MS in Information Technology (Data Science & Analytics) at RPI.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Syne (display) + DM Mono (body) + Instrument Serif (accent)

## Design Direction

Dark, precision-engineered aesthetic — inspired by terminal interfaces and high-end SaaS products. Features:
- Custom animated cursor with laggy ring follower
- CSS grid background with radial mask
- Scroll-triggered section reveals
- Interactive tabbed experience timeline
- Noise grain overlay for depth
- Animated tech ticker

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/Paridhi1112/paridhi-goyal-portfolio.git
cd paridhi-goyal-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
paridhi-goyal-portfolio/
├── app/
│   ├── data.ts          # All portfolio content (edit here)
│   ├── globals.css      # Global styles + custom cursor CSS
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Page composition
├── components/
│   ├── Cursor.tsx        # Custom cursor with lag ring
│   ├── Navbar.tsx        # Sticky nav with mobile drawer
│   ├── Hero.tsx          # Hero with animated grid + stats
│   ├── Ticker.tsx        # Scrolling tech stack marquee
│   ├── About.tsx         # About + achievements + certifications
│   ├── Projects.tsx      # Featured projects (3-column grid)
│   ├── Experience.tsx    # Tabbed experience timeline + education
│   ├── Skills.tsx        # Skill categories + full cert list
│   ├── Contact.tsx       # Contact with social links
│   └── Footer.tsx        # Minimal footer
├── public/              # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

All content lives in `app/data.ts`. To update:
- Edit the `portfolio` object with your own info
- No environment variables required
- No external APIs or auth dependencies

## Build

```bash
npm run build
npm run start
```
