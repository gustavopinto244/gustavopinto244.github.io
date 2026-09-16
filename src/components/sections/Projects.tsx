import { useLanguage } from '../../i18n/context';
import { useState } from 'react';
import { ArrowUpRight, Braces, GitBranch, Globe, Server, Workflow, Plus } from 'lucide-react';
import { projects, profile } from '../../data';
import { MediaGallery } from '../ui/MediaGallery';
import type { AreaId, Project } from '../../types';

const filters: { id: 'all' | AreaId; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'development', label: 'Desenvolvimento' },
  { id: 'security-infra', label: 'Infraestrutura' },
  { id: 'automation-data', label: 'Automação' },
];
function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLanguage();
  return (
    <div className="project-links">
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          <GitBranch size={15} />
          {t('Ver código')} <ArrowUpRight size={14} />
          <span className="sr-only">
            {t('de')} {t(project.name)}
          </span>
        </a>
      )}
      {project.liveLink && (
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <Globe size={15} />
          {t('Acessar projeto')} <ArrowUpRight size={14} />
          <span className="sr-only"> {t(project.name)}</span>
        </a>
      )}
      {project.note && <span>{t(project.note)}</span>}
    </div>
  );
}
export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | AreaId>('all');
  const visible = projects.filter(
    (project) =>
      project.status !== 'Planejado' && (filter === 'all' || project.areas.includes(filter))
  );
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('01 / PROJETOS SELECIONADOS')}</p>
          <h2>
            {t('Projetos reais.')} <br />
            <span className="muted-heading">{t('Decisões que posso explicar.')}</span>
          </h2>
        </div>
        <p>
          {t(
            'Do primeiro CRUD à automação da minha busca por estágio. Conheça os problemas, as escolhas técnicas e os limites de cada projeto.'
          )}{' '}
        </p>
      </div>
      <div className="project-toolbar">
        <div className="filter-list" role="group" aria-label={t('Filtrar projetos por área')}>
          {filters.map(({ id, label }) => (
            <button
              key={id}
              className={filter === id ? 'filter active' : 'filter'}
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {String(visible.length).padStart(2, '0')} {t('projetos')}
        </span>
      </div>
      <div className="project-grid">
        {visible
          .filter((project) => !project.supporting)
          .map((project) => {
            const featured = project.featured;
            const Icon = project.areas.includes('security-infra')
              ? Server
              : project.areas.includes('automation-data')
                ? Workflow
                : Braces;
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className={`project-card ${featured ? 'featured-project' : ''}`}
              >
                {featured && (
                  <div className="featured-media">
                    <div className="media-label">
                      <span className="status-dot" />
                      {t('PROJETO EM DESTAQUE')}
                      <span>01</span>
                    </div>
                    <MediaGallery media={project.media ?? []} label={t(project.name)} />
                  </div>
                )}
                <div className="project-body">
                  <div className="project-kicker">
                    <Icon size={21} />
                    <span
                      className={`project-status ${project.status === 'Em desenvolvimento' ? 'in-progress' : ''}`}
                    >
                      <span className="status-dot" />
                      {t(project.status === 'Self-hosted' ? 'Servidor próprio' : project.status)}
                    </span>
                  </div>
                  <h3>{t(project.name)}</h3>
                  <p className="project-description">{t(project.description)}</p>
                  {project.highlights?.map((highlight) => (
                    <p className="project-highlight" key={highlight}>
                      {t(highlight)}
                    </p>
                  ))}
                  {project.caseStudy && (
                    <details className="project-case">
                      <summary>
                        {t('Decisões e evidências')} <Plus size={17} />
                      </summary>
                      <div className="project-case-content">
                        <h4>{t('O problema')}</h4>
                        <p>{t(project.caseStudy.challenge)}</p>
                        <h4>{t('Como construí')}</h4>
                        <ul>
                          {project.caseStudy.decisions.map((decision) => (
                            <li key={decision}>{t(decision)}</li>
                          ))}
                        </ul>
                        <h4>{t('Escopo e limites')}</h4>
                        <p>{t(project.caseStudy.limitation)}</p>
                        <div className="evidence-links">
                          {project.caseStudy.evidence.map((evidence) => (
                            <a
                              key={evidence.href}
                              href={evidence.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t(evidence.label)} <ArrowUpRight size={14} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </details>
                  )}
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{t(item)}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </article>
            );
          })}
      </div>
      {visible.some((project) => project.supporting) && (
        <div className="supporting-projects">
          <h3>{t('Outras experiências práticas')}</h3>
          <div className="supporting-grid">
            {visible
              .filter((project) => project.supporting)
              .map((project) => (
                <article
                  className="supporting-project"
                  id={`project-${project.id}`}
                  key={project.id}
                >
                  <h4>{t(project.name)}</h4>
                  <p>{t(project.description)}</p>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{t(item)}</span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </article>
              ))}
          </div>
        </div>
      )}
      <a className="text-link github-more" href={profile.github} target="_blank" rel="noreferrer">
        {t('Explore meus repositórios no GitHub')} <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
