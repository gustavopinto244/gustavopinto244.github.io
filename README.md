# Gustavo Pinto Portfolio

Personal portfolio built with React, TypeScript, and Vite to present professional profile, skills, projects, and experience in a clean and visually strong format. The interface uses a dark theme with blue and green accents, a professional summary card, skills section, featured projects, and a timeline for experience.

## Overview

This project was designed as a single-page presentation with anchor navigation and content centralized in one data file. The goal is to keep it easy to maintain while remaining ready for quick content updates.

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- HTML5
- lucide-react

## Features

- Main hero section with a clear presentation and calls to action.
- Professional summary card with contact information and availability status.
- Skills section with custom icons.
- Projects section with description, technologies, and external links.
- Resume section with work experience and education.
- Links to GitHub, LinkedIn, and email.

## Featured Projects

The portfolio displays the projects defined in `src/App.tsx`, including:

- Task List API with Authentication
- Gustavo Pinto Portfolio

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

## Where to Edit Data

The main content lives in `src/App.tsx`:

- `profile`: name, role, contact details, location, and social links.
- `skills`: cards displayed in the skills section.
- `projects`: project list with description, technologies, and link.
- `experiences`: work experience and education.

## Project Structure

- `src/App.tsx`: main portfolio content.
- `src/index.css`: visual styling for the application.
- `src/main.tsx`: React entry point.

## Note

When adding new projects, make sure external links include the full `https://` protocol to avoid navigation issues.
