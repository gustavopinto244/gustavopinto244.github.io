# Content maintenance

Site copy is in Portuguese for Brazilian recruiters. Keep project claims tied to actual code,
documentation, or the owner's supplied information. Do not invent experience or results.

## Projects

Edit `src/data/projects.ts`. Each project requires a stable `id`, `name`, `description`, `stack`,
`areas`, and `status`.

- `featured: true` gives the main project a full-width card with its media gallery.
- `supporting: true` places a project in the compact complementary section.
- Array order determines display order within each group.
- Available statuses: `Publicado`, `Self-hosted`, `Em desenvolvimento`, `Planejado`.
- Planned projects are omitted from the current showcase. Change the status when work exists.
- `link` and `liveLink` are optional. Do not link private administrative interfaces as public demos.
- `highlights` contains short, verifiable technical decisions.
- `caseStudy` adds expandable context: `challenge`, `decisions`, `limitation`, and `evidence`
  links (`label` and `href`). Link only to documentation that exists in the public repository.
- A project can belong to several `areas`; Atlas Manager belongs to all three.

Update the hand-maintained project table in `README.md` when adding a relevant project.

## Media

Place screenshots and videos in `public/media/`. Use exact paths in a project's `media` array:

```ts
media: [
  { type: 'image', src: '/media/atlas-dashboard.png', caption: 'Painel de métricas' },
  {
    type: 'video',
    src: '/media/atlas-manager.mp4',
    poster: '/media/atlas-dashboard.png',
    caption: 'Demonstração do Atlas Manager',
  },
];
```

Media is displayed in the featured card. The first item is the cover. The native modal supports
Escape, arrow keys and Tab, returning focus to its opener. Prefer MP4/H.264 with a poster image.

## Curricula

Place PDFs in `public/resumes/` and register their exact paths in `src/data/resumes.ts`.
Update `updatedAt` when replacing a document; this field is maintenance metadata.

The three registered documents are:

| Area                      | File                                              |
| ------------------------- | ------------------------------------------------- |
| Development               | `public/resumes/gustavo-pinto-development.pdf`    |
| Security / infrastructure | `public/resumes/gustavo-pinto-security-infra.pdf` |
| Data / automation         | `public/resumes/Gustavo_Data&Auto.pdf`            |

Both pages use the same `Resumes` component. Each available document has separate **Visualizar**
and **Baixar** links. Missing files must have their `file` property removed until available; those
entries are hidden. The hero links to the curriculum section so visitors can choose the right area.

Changing the portfolio does not update PDF contents. Review the documents separately to keep their
project descriptions and technology lists consistent. Card titles and descriptions are defined in
`src/components/sections/Resumes.tsx`.

## Skills

Edit `src/data/skills.ts` for skill descriptions, examples and learning status. A skill marked
`studying` is explicitly labelled **Em estudo**. Basic knowledge should remain described as basic.

Add the skill's ID to the appropriate group in `src/components/sections/Skills.tsx`. The first five
IDs are displayed initially; the rest are available through **Mais competências**. Keep the most
relevant skills first and avoid duplicating an ID across groups.

## Profile and biography

- `src/data/profile.ts`: contact information and professional role.
- `src/data/about.ts`: full biography, photo path and academic/availability facts.
- `src/data/experiences.ts`: education and work history.
- `src/components/sections/AboutTeaser.tsx`: short home-page biography and essential facts.
- `src/components/sections/Hero.tsx`: introduction and primary calls to action.

When updating academic details, availability or the biography, check both pages. Keep the photo
path valid and provide descriptive alternative text.

## Areas

An additional area requires updating `AreaId` in `src/types/index.ts`, project filters in
`Projects.tsx`, and the typed curriculum content in `Resumes.tsx`. Add an available PDF entry in
`src/data/resumes.ts` if applicable.

## Design

Theme variables and responsive rules live in `src/index.css`. The main palette is near-black
(`#090c0b`), dark green surfaces (`#101512`) and neon green (`#a3ff5c`). DM Sans is the body font,
Space Grotesk is used for headings, and JetBrains Mono for technical labels.

Keep text legible, interactive controls keyboard-accessible, and reduced-motion preferences
respected. Check `/` and `/about/` at mobile and desktop widths after layout changes.

## Validation and publication

```bash
npm run build
npm run lint
npx prettier --check <changed-files>
git diff --check
```

Check project filters, expandable content, navigation, gallery keyboard interaction, and all PDF
links in the browser. PDF URLs should return actual PDF contents rather than an HTML fallback.

The Vite build produces `dist/index.html` and `dist/about/index.html`. Pushing to `main` triggers
GitHub Pages deployment. Commits and publication require the owner's authorization; keep the
current redesign on its branch until requested otherwise.
