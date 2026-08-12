# Content maintenance

Internal guide for updating the portfolio. Everything here is a data-file edit — no component needs
to be touched.

> Site copy stays in Portuguese: it is written for Brazilian recruiters. Code, comments and this
> guide are in English.

- [Add a project](#add-a-project)
- [Add screenshots or video](#add-screenshots-or-video)
- [Publish or update a resume](#publish-or-update-a-resume)
- [Edit the About page](#edit-the-about-page)
- [Add a skill](#add-a-skill)
- [Create a new area of focus](#create-a-new-area-of-focus)
- [Photo and icons](#photo-and-icons)
- [Design tokens](#design-tokens)
- [Publishing](#publishing)

---

## Add a project

Append an object to `src/data/projects.ts`. Required: `name`, `description`, `stack`, `areas` and
`status`.

```ts
{
  name: 'Nome do projeto',
  description: 'O que ele faz e por quê.',
  stack: ['TypeScript', 'Node.js'],
  areas: ['development'],                         // may belong to more than one tab
  link: 'https://github.com/...',                 // optional
  liveLink: 'https://...',                        // optional
  isLive: true,                                   // shows the "no ar" badge
  status: 'Publicado',                            // Publicado | Self-hosted | Planejado
  highlights: ['Decisão técnica em uma linha.'],  // optional
}
```

Things that matter:

- **`link` is optional**, so a project can be listed as `Planejado` before it exists — it renders
  with a dashed border and no repo button.
- **The first project in each tab spans both columns**, so array order decides what gets featured
  in each area.
- `status` drives the badge color: `Publicado` green, `Self-hosted` neon, `Planejado` neutral.

> The project table in `README.md` is written by hand, for recruiters who only open the repository.
> When adding a relevant project, update both.

## Add screenshots or video

1. Drop the files into `public/media/` — not `public/`, and the extension in the data must match
   the file on disk. A mismatch renders a card that silently fails to load.
2. List them in the project's `media` array:

```ts
media: [
  { type: 'image', src: '/media/atlas-dashboard.png', caption: 'Painel de métricas' },
  { type: 'video', src: '/media/atlas-demo.mp4', poster: '/media/atlas-demo-capa.png' },
];
```

The first item becomes the card cover; the rest show up as thumbnails. Clicking opens the lightbox
(`Esc` or backdrop click closes it, ← → navigate).

With no `media`, the card renders exactly as before — no empty placeholder.

**Priority:** Atlas Manager is the only project without a public link. To anyone evaluating it, it
is currently just a paragraph of text — a short video of the dashboard is worth more than the whole
description.

### Converting a screen recording

Screen recorders on Linux (Kooha, GNOME Recorder) save WebM/VP8, which **Safari cannot play** — an
iPhone or Mac visitor gets an empty player. Always ship H.264 MP4:

```bash
ffmpeg -y -i gravacao.webm \
  -vf "scale=1280:-2:flags=lanczos" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 28 -preset slow \
  -movflags +faststart -an \
  public/media/nome-do-video.mp4
```

`yuv420p` is what makes it play on Apple devices, `+faststart` lets it start before the whole file
downloads, and `-an` drops the (usually silent) audio track. The Atlas demo went from 5.6 MB of VP8
to 657 KB of H.264 this way.

To grab a video cover frame:

```bash
ffmpeg -i public/media/atlas-demo.mp4 -ss 00:00:02 -frames:v 1 public/media/atlas-demo-capa.png
```

## Publish or update a resume

1. Put the PDF in `public/resumes/`.
2. In `src/data/resumes.ts`, fill `file` with the path and bump `updatedAt` (`YYYY-MM`).

```ts
{
  area: 'development',
  file: '/resumes/gustavo-pinto-desenvolvimento.pdf',
  updatedAt: '2026-08',
}
```

Without `file`, the card shows "em breve" instead of a broken link. The update date is displayed on
the card, so keeping it current is part of the edit.

## Edit the About page

`src/data/about.ts` holds:

- `headline` — the opening line;
- `paragraphs` — the narrative, one string per paragraph;
- `facts` — the objective data in the sidebar card (semester, expected graduation, location).

Worth adding to `facts`: accepted work mode (on-site/hybrid/remote) and available shift. Both are
knockout criteria in internship screening.

## Add a skill

Append to `src/data/skills.ts`:

```ts
{
  id: 'nginx',
  name: 'Nginx',
  icon: 'Server',                    // must exist in src/components/ui/icons.ts
  category: 'tools',                 // languages | techniques | tools
  areas: ['security-infra'],
  usage: 'projects',                 // projects = actually used | studying = currently studying
  description: 'Uma frase sobre o que você faz com isso.',
  examples: ['Atlas Manager'],
}
```

`usage` is what separates what you command from what you are still learning — keep it honest, since
that is exactly what makes the rest of the list credible.

To use a new icon, import it from `lucide-react` and add it to `src/components/ui/icons.ts` —
one map shared by skills, soft skills, resumes and the experience timeline.

## Create a new area of focus

1. Add the entry to `src/data/areas.ts`.
2. Add the id to the `AreaId` union in `src/types/index.ts`.

Project tabs, skill filters and resume cards pick it up automatically. If the area needs its own
resume, add it to `src/data/resumes.ts` as well.

## Photo and icons

**About photo:** put it in `public/` and set `photo: '/photo.jpg'` in `src/data/about.ts`. Without
it, the sidebar card falls back to your initials.

**Favicon and share image:** only the resized versions live in `public/` — the 920 KB original was
removed because everything under `public/` ships on every deploy. Keep the high-resolution source
outside the repo and regenerate from it when the icon changes:

```bash
ffmpeg -y -i origem.png -vf "scale=32:32:flags=lanczos"   public/favicon-32.png
ffmpeg -y -i origem.png -vf "scale=180:180:flags=lanczos" public/apple-touch-icon.png
ffmpeg -y -i origem.png -vf "scale=600:600:flags=lanczos" public/og-image.png
```

`og-image.png` is what shows up when the link is shared on WhatsApp or LinkedIn. Once a dedicated
1200×630 artwork exists, switch `twitter:card` from `summary` to `summary_large_image` in both HTML
files.

## Design tokens

Defined as Tailwind theme variables in `src/index.css`:

| Token           | Value          | Usage                |
| --------------- | -------------- | -------------------- |
| `background`    | `#07090d`      | page background      |
| `surface`       | `#0d1117`      | cards and panels     |
| `surface-hover` | `#161d29`      | row and card hover   |
| `border`        | `#232c3d`      | borders and dividers |
| `primary`       | `#00ff88`      | neon terminal green  |
| `accent`        | `#22d3ee`      | cyan accent          |
| `text`          | `#e6edf3`      | primary text         |
| `text-muted`    | `#8b98ab`      | secondary text       |
| `font-display`  | Space Grotesk  | headlines            |
| `font-sans`     | JetBrains Mono | body and UI          |

## Checks before pushing

```bash
npm run typecheck   # tsc, the same check the build runs
npm run lint        # eslint
npm run format      # prettier, rewrites files
```

CI runs typecheck, lint and build on every branch and pull request; `main` goes straight to
production, so prefer pushing a branch first.

## Publishing

A `git push` to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes `dist/`
to GitHub Pages. The build emits both pages: `index.html` and `about/index.html`.
