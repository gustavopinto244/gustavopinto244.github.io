# Gustavo Pinto Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Dark mode design with a clean layout, componentized architecture, and an interactive skills section.

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
│   └── content.ts       # All portfolio data (profile, skills, projects, experiences)
├── types/
│   └── index.ts         # TypeScript type definitions
├── App.tsx              # Root component
├── main.tsx             # Entry point
└── index.css            # Tailwind imports and theme config
```

## Editing Content

All data is centralized in `src/data/content.ts`:

- `profile`: name, role, contact details, location, and social links
- `skills`: skill cards with name, icon, proficiency level, and description
- `projects`: project list with description, tech stack, and repo link
- `experiences`: work experience and education timeline

To add a new skill, append an object to the `skills` array following the existing pattern. The `icon` field must match a key in the `iconMap` defined in `src/components/sections/Skills.tsx`.

## Design Tokens

Colors are defined as Tailwind theme variables in `src/index.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0a0a0a` | Page background |
| `surface` | `#171717` | Cards and panels |
| `border` | `#2e2e2e` | Borders |
| `primary` | `#3b82f6` | Blue accent |
| `accent` | `#10b981` | Green accent |
| `text` | `#fafafa` | Primary text |
| `text-muted` | `#a3a3a3` | Secondary text |

## Deployment

The project is configured for GitHub Pages via the workflow in `.github/workflows/deploy.yml`. Push to `main` to trigger an automatic build and deploy.

## Note

When adding new projects, make sure external links include the full `https://` protocol to avoid navigation issues.
