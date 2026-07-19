import { projects } from '../../data';
import { Badge } from '../ui/Badge';
import { ExternalLink, FolderGit2, Globe, Star } from 'lucide-react';

export function Projects() {
  const publishedCount = projects.filter((p) => p.status === 'Publicado').length;
  const totalStacks = new Set(projects.flatMap((p) => p.stack)).size;

  return (
    <section id="projetos" className="relative py-24">
      <div className="absolute -left-20 top-1/3 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative border border-border rounded-xl bg-surface/40 backdrop-blur-sm p-6 md:p-8 mb-10">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-primary text-sm font-bold mb-2">GitHub</p>
            <h2 className="text-3xl md:text-4xl font-bold">Projetos em destaque</h2>
            <p className="text-text-muted mt-3 max-w-lg">
              Projetos que demonstram minha evolução técnica e capacidade de construir soluções completas.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <FolderGit2 className="w-4 h-4 text-primary" />
              <span className="text-sm"><span className="font-bold text-primary">{projects.length}</span> <span className="text-text-muted">projetos</span></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm"><span className="font-bold text-accent">{publishedCount}</span> <span className="text-text-muted">publicados</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative space-y-6">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group relative border border-border bg-surface/80 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FolderGit2 className="w-5 h-5 text-accent" />
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="success">{project.status}</Badge>
                  {project.isLive && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Você está aqui
                    </span>
                  )}
                </div>
              </div>
              <span className="text-4xl font-black text-border/40 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
              {project.name}
            </h3>

            <p className="text-text-muted leading-relaxed mb-5 max-w-2xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="primary">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    Acessar site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  Abrir repositório
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-text-muted">
        <span className="text-text-muted/60">{totalStacks} tecnologias utilizadas no total</span>
      </div>
    </section>
  );
}
