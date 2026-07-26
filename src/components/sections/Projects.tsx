import { projects } from '../../data';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { ArrowUpRight, FolderGit2, Globe } from 'lucide-react';

const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export function Projects() {
  return (
    <section id="projetos" className="pt-20">
      <SectionHeader
        command="ls ~/projetos --publicados"
        title="Projetos em destaque"
        description="Projetos que demonstram minha evolução técnica e capacidade de construir soluções completas."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-primary font-bold">{projects.length}</span> repositórios
          </p>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`
              group flex flex-col rounded-xl border border-border bg-surface overflow-hidden
              transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_40px_-14px_var(--color-primary)]
              ${index === 0 ? 'lg:col-span-2' : ''}
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
                <Badge variant="success">{project.status.toLowerCase()}</Badge>
              </span>
            </div>

            <div className="flex flex-col flex-1 p-5 md:p-6">
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors group-hover:text-primary">
                {project.name}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed mb-5">
                <span className="text-accent">// </span>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((item) => (
                  <Badge key={item} variant="primary">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3">
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
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
