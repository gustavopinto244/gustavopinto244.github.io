# Gustavo Pinto Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Light "editorial/print" design (branch `redesign/editorial-light`) with a warm paper palette, serif display typography, hairline rules, numbered magazine-style sections, and an interactive skills index.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- lucide-react
- clsx

## Features

- Hero section with professional summary and calls to action
- Profile panel with contact info and availability status
- Interactive skills section with expandable cards showing proficiency levels
- Featured projects with descriptions, tech stacks, and repo links
- Experience timeline with work history and education
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
│   ├── ui/              # Reusable UI components (Button, Card, Badge, ProgressBar)
│   ├── sections/        # Page sections (Hero, Skills, Projects, Experience, Footer)
│   └── layout/          # Layout components (Navigation)
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
| `background` | `#f5f1e8` | Warm paper page background |
| `surface` | `#fdfbf5` | Cards and panels |
| `border` | `#d8d0bf` | Hairline rules and borders |
| `primary` | `#c2410c` | Terracotta accent |
| `accent` | `#1d6a4f` | Deep green accent |
| `text` | `#1c1917` | Ink text |
| `text-muted` | `#71695c` | Secondary text |
| `font-display` | Fraunces (serif) | Headlines and numerals |
| `font-sans` | Inter | Body text |
