import { useState } from 'react';
import { areas, projects } from '../../data';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { AreaSelector } from '../ui/AreaSelector';
import { MediaGallery } from '../ui/MediaGallery';
import { ArrowUpRight, FolderGit2, Globe } from 'lucide-react';
import type { AreaId, ProjectStatus } from '../../types';

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const statusVariant: Record<ProjectStatus, 'default' | 'success' | 'primary'> = {
  Publicado: 'success',
  'Self-hosted': 'primary',
  Planejado: 'default',
};

export function Projects() {
  const [activeArea, setActiveArea] = useState<AreaId>('development');

  const options = areas.map((area) => ({
    id: area.id,
    label: area.label,
    count: projects.filter((project) => project.areas.includes(area.id)).length,
  }));

  const visible = projects.filter((project) => project.areas.includes(activeArea));
  const currentArea = areas.find((area) => area.id === activeArea)!;

  return (
    <section id="projects" className="pt-20">
      <SectionHeader
        command={`ls ~/projetos/${currentArea.label}`}
        title="Projetos em destaque"
        description="Projetos organizados pelas três frentes em que quero atuar. Cada um demonstra uma etapa da minha evolução técnica."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-primary font-bold">{projects.length}</span> projetos
          </p>
        }
      />

      <AreaSelector
        options={options}
        active={activeArea}
        onChange={(id) => setActiveArea(id as AreaId)}
        variant="tabs"
        ariaLabel="Áreas de atuação"
        idPrefix="projects"
        className="mb-8"
      />

      <div
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`projects-tab-${activeArea}`}
        tabIndex={-1}
      >
        <p className="text-sm text-text-muted mb-6">
          <span className="text-accent">// </span>
          {currentArea.description}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {visible.map((project, index) => {
            const isPlanned = project.status === 'Planejado';

            return (
              <article
                key={project.name}
                className={`
                  group flex flex-col rounded-xl border bg-surface overflow-hidden
                  transition-all duration-200
                  ${
                    isPlanned
                      ? 'border-border border-dashed hover:border-text-muted/50'
                      : 'border-border hover:border-primary/40 hover:shadow-[0_0_40px_-14px_var(--color-primary)]'
                  }
                  ${index === 0 && visible.length > 1 ? 'lg:col-span-2' : ''}
                `}
              >
                <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-text-muted truncate">
                    ~/projetos/{slugify(project.name)}
                  </span>
                  <span className="ml-auto flex items-center gap-2 shrink-0">
                    {project.isLive && (
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        no ar
                      </span>
                    )}
                    <Badge variant={statusVariant[project.status]}>
                      {project.status.toLowerCase()}
                    </Badge>
                  </span>
                </div>

                {project.media && project.media.length > 0 && (
                  <MediaGallery media={project.media} label={project.name} />
                )}

                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3
                    className={`font-display text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors ${
                      isPlanned ? 'text-text-muted' : 'group-hover:text-primary'
                    }`}
                  >
                    {project.name}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed mb-5">
                    <span className="text-accent">// </span>
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mb-5 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-xs text-text-muted leading-relaxed"
                        >
                          <span className="text-primary shrink-0">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((item) => (
                      <Badge key={item} variant={isPlanned ? 'default' : 'primary'}>
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold transition-colors hover:border-primary/60 hover:text-primary"
                      >
                        <FolderGit2 className="w-4 h-4" />
                        repositório
                        <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-primary" />
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
                      >
                        <Globe className="w-4 h-4" />
                        acessar site
                        <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-accent" />
                      </a>
                    )}

                    {isPlanned && (
                      <p className="text-xs text-text-muted">
                        <span className="text-primary">$</span> em planejamento - repositório em
                        breve
                      </p>
                    )}

                    {!isPlanned && !project.link && !project.liveLink && project.note && (
                      <p className="text-xs text-text-muted">
                        <span className="text-primary">$</span> {project.note}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
