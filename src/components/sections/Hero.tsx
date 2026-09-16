import { useLanguage } from '../../i18n/context';
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  GitBranch,
  MapPin,
  Server,
  Terminal,
} from 'lucide-react';
import { profile } from '../../data';
import { EnglishHighlight } from '../ui/EnglishHighlight';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <span className="availability">
          <span className="status-dot" />
          {t('Disponível para estágio')}{' '}
        </span>
        <p className="hero-intro">{t('OLÁ, EU SOU')}</p>
        <h1>
          {'Gustavo'} <br />
          {'Pinto'}
          <span className="text-primary">.</span>
        </h1>
        <p className="hero-role">
          {t('Desenvolvedor')} <span>{t('back-end em formação.')}</span>
        </p>
        <p className="hero-description">
          {t(
            'Transformo aprendizado em aplicações reais. Construo APIs, conecto dados e coloco projetos no ar no meu próprio servidor.'
          )}{' '}
        </p>
        <EnglishHighlight />
        <div className="hero-actions">
          <a href="#projects" className="action action-primary">
            {t('Conheça meus projetos')} <ArrowDown size={17} />
          </a>
          <a href="#resumes" className="action action-secondary">
            {t('Ver currículos')} <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={14} /> {profile.location}
          <span className="small-divider" />
          {t('Remoto, híbrido ou presencial')}{' '}
        </div>
      </div>
      <div
        className="hero-visual"
        aria-label={t('Foco de aprendizado: back-end, dados e infraestrutura')}
      >
        <div className="visual-topline">
          <span className="eyebrow">{t('APRENDER. CONSTRUIR. PUBLICAR.')}</span>
          <span className="visual-cross">+</span>
        </div>
        <div className="architecture">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="architecture-label label-api">&lt; API /&gt;</span>
          <span className="architecture-label label-data">{t('{ dados }')}</span>
          <div className="architecture-core">
            <Server size={47} strokeWidth={1.3} />
            <span>{'ATLAS'}</span>
            <small>{t('meu homelab')}</small>
          </div>
          <div className="satellite satellite-code">
            <Braces size={23} />
          </div>
          <div className="satellite satellite-data">
            <Database size={22} />
          </div>
          <div className="satellite satellite-git">
            <GitBranch size={21} />
          </div>
          <span className="architecture-label label-deploy">{'deploy ↗'}</span>
        </div>
        <div className="visual-terminal">
          <div>
            <Terminal size={14} />
            <span>{t('da primeira rota ao servidor')}</span>
            <span className="text-primary">↗</span>
          </div>
          <p>
            <span>const</span> {t('jornada = [')}
            <br />
            <span className="code-indent">{t("'back-end', 'dados', 'infra'")}</span>
            <br />
            ];
            <span className="terminal-cursor" />
          </p>
        </div>
        <div className="visual-bottom">
          <span className="status-dot" />
          <span>{t('Projetos próprios. Aprendizado na prática.')}</span>
        </div>
      </div>
      <div className="hero-foot">
        <span>{t('DO CÓDIGO À INFRAESTRUTURA')}</span>
        <div>
          {['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Linux'].map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <a href="#projects" aria-label={t('Ir para projetos')}>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
