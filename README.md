# Gustavo Pinto Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Dark "terminal/neon" design (branch `redesign/terminal-neon`) with a near-black palette, neon green/cyan accents, monospace typography, terminal-window cards, ASCII progress bars, and a git-log experience timeline.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- lucide-react
- clsx

## Features

- Hero section with `whoami` prompt, professional summary and calls to action
- Terminal-window contact card with availability status
- Interactive skills section with expandable rows and ASCII proficiency bars
- Featured projects as terminal windows with descriptions, tech stacks, and repo links
- Git-log style experience timeline with work history and education
- Social links (GitHub, LinkedIn, email)
- Fully responsive layout
- Smooth anchor navigation

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview the Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Badge, ProgressBar, SectionHeader)
│   ├── sections/        # Page sections (Hero, Skills, SoftSkills, Projects, Experience)
│   └── layout/          # Layout components (Navigation, Footer)
├── data/
│   ├── profile.ts        # Profile info (name, role, contact, social links)
│   ├── skills.ts         # Technical skills with proficiency levels
│   ├── softSkills.ts     # Behavioral skills
│   ├── projects.ts       # Featured projects
│   ├── experiences.ts    # Work and education timeline
│   └── index.ts          # Re-exports
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Tailwind imports and theme config
```

## Editing Content

All data is centralized in `src/data/`:

- `profile`: name, role, contact details, location, and social links
- `skills`: skill cards with name, icon, proficiency level, and description
- `projects`: project list with description, tech stack, and repo link
- `experiences`: work experience and education timeline

To add a new skill, append an object to the `skills` array following the existing pattern. The `icon` field must match a key in the `iconMap` defined in `src/components/sections/Skills.tsx`.

## Design Tokens

Colors and fonts are defined as Tailwind theme variables in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#07090d` | Near-black page background |
| `surface` | `#0d1117` | Cards and panels |
| `surface-hover` | `#161d29` | Hover state on rows and cards |
| `border` | `#232c3d` | Borders and dividers |
| `primary` | `#00ff88` | Neon terminal green |
| `accent` | `#22d3ee` | Cyan accent |
| `text` | `#e6edf3` | Primary text |
| `text-muted` | `#8b98ab` | Secondary text |
| `font-display` | Space Grotesk | Headlines |
| `font-sans` | JetBrains Mono | Body and UI text |
