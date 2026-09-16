import { useLanguage } from '../../i18n/context';
import { useState } from 'react';
import type { Skill } from '../../types';
import { Braces, Database, Server, Plus } from 'lucide-react';
import { skills } from '../../data';

const groups = [
  {
    title: 'Back-end & aplicações',
    icon: Braces,
    description: 'Da regra de negócio à API que a entrega.',
    ids: [
      'nodejs',
      'typescript',
      'express',
      'rest',
      'nestjs',
      'javascript',
      'react',
      'automated-tests',
      'solid',
      'patterns',
      'insomnia',
    ],
  },
  {
    title: 'Dados & automação',
    icon: Database,
    description: 'Persistir, consultar e conectar informações.',
    ids: ['postgresql', 'mongodb', 'sqlite', 'python', 'llm-integration'],
  },
  {
    title: 'Infraestrutura & deploy',
    icon: Server,
    description: 'Colocar no ar também faz parte do projeto.',
    ids: [
      'docker',
      'linux',
      'git',
      'nginx',
      'cloudflare',
      'linux-server',
      'systemd',
      'ssh',
      'http-https',
      'dns',
      'web-security',
    ],
  },
];
function SkillDetail({ skill }: { skill: Skill }) {
  const { t } = useLanguage();
  return (
    <details>
      <summary>
        {t(skill.name)}
        {skill.usage === 'studying' && <small>{t('Em estudo')}</small>}
        <Plus size={14} />
      </summary>
      <div>
        <p>{t(skill.description)}</p>
        <span>
          {t('Aplicação:')} {skill.examples.map(t).join(' · ')}
        </span>
      </div>
    </details>
  );
}

function SkillGroup({ group, index }: { group: (typeof groups)[number]; index: number }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const { title, icon: Icon, description, ids } = group;
  const primary = ids.slice(0, 5);
  const remaining = ids.slice(5);
  const renderSkill = (id: string) => {
    const skill = skills.find((item) => item.id === id);
    return skill ? <SkillDetail skill={skill} key={id} /> : null;
  };
  return (
    <article className="skill-group">
      <div className="skill-group-top">
        <Icon size={25} strokeWidth={1.5} />
        <span>0{index + 1}</span>
      </div>
      <h3>{t(title)}</h3>
      <p>{t(description)}</p>
      <div className="skill-details">
        {primary.map(renderSkill)}
        <div id={`additional-skills-${index}`} hidden={!expanded}>
          {remaining.map(renderSkill)}
        </div>
      </div>
      {remaining.length > 0 && (
        <button
          className="skill-more"
          type="button"
          aria-expanded={expanded}
          aria-controls={`additional-skills-${index}`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? t('Mostrar menos') : `${t('Mais')} ${remaining.length} ${t('competências')}`}
          <Plus size={15} className={expanded ? 'rotate-45' : ''} />
        </button>
      )}
    </article>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('02 / CAIXA DE FERRAMENTAS')}</p>
          <h2>
            {t('Tecnologia com')} <br />
            <span className="muted-heading">{t('contexto de uso.')}</span>
          </h2>
        </div>
        <p>
          {t(
            'As principais ferramentas dos meus projetos. Abra uma tecnologia para conhecer minha experiência e onde ela foi aplicada.'
          )}{' '}
        </p>
      </div>
      <div className="skills-grid">
        {groups.map((group, index) => (
          <SkillGroup key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
