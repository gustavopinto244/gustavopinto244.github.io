import { projects } from '../../data';
import { Badge } from '../ui/Badge';
import { ArrowUpRight, FolderGit2, Globe, Star } from 'lucide-react';

export function Projects() {
  const publishedCount = projects.filter((p) => p.status === 'Publicado').length;
  const totalStacks = new Set(projects.flatMap((p) => p.stack)).size;

  return (
    <section id="projetos" className="relative pt-20">
      <div className="border-t-2 border-text pt-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
              <span className="font-display italic text-text-muted/70">03 — </span>
              GitHub
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Projetos em destaque
            </h2>
            <p className="text-text-muted mt-4">
              Projetos que demonstram minha evolução técnica e capacidade de construir soluções completas.
            </p>
          </div>

          <div className="flex items-center gap-8 border-b border-border pb-2">
            <div className="flex items-baseline gap-2">
              <FolderGit2 className="w-4 h-4 text-primary self-center" />
              <span className="font-display text-4xl font-black text-primary leading-none">{projects.length}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">projetos</span>
            </div>
            <div className="flex items-baseline gap-2">
              <Star className="w-4 h-4 text-accent self-center" />
              <span className="font-display text-4xl font-black text-accent leading-none">{publishedCount}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">publicados</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group grid grid-cols-1 lg:grid-cols-[110px_1fr_auto] gap-6 lg:gap-10 border-t border-border py-10"
          >
            <span className="font-display text-6xl lg:text-7xl font-black text-border leading-none select-none group-hover:text-primary/30 transition-colors">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="success">{project.status}</Badge>
                {project.isLive && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                    <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
                    Você está aqui
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                {project.name}
              </h3>

              <p className="text-text-muted leading-relaxed mb-5 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="primary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex lg:flex-col items-start gap-4 lg:gap-3 lg:text-right lg:min-w-[170px]">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Acessar site
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-bold hover:text-primary transition-colors"
              >
                Abrir repositório
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 text-right text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        {totalStacks} tecnologias utilizadas no total
      </div>
    </section>
  );
}
