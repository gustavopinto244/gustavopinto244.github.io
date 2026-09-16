import { useLanguage } from '../../i18n/context';
import { ArrowLeft, ArrowDownToLine } from 'lucide-react';
import { about } from '../../data';
import { EnglishHighlight } from '../ui/EnglishHighlight';
export function About() {
  const { t, language } = useLanguage();
  return (
    <section id="about" className="about-page">
      <a className="text-link" href={`/?lang=${language}`}>
        <ArrowLeft size={16} />
        {t('Voltar ao início')}{' '}
      </a>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('MINHA TRAJETÓRIA')}</p>
          <h1>
            {t('Novos caminhos.')} <br />
            <span className="muted-heading">{t('O mesmo cuidado.')}</span>
          </h1>
        </div>
      </div>
      <div className="about-page-grid">
        <aside>
          <img src={about.photo} alt={about.photoAlt} width="678" height="678" />
          <dl>
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{t(fact.label)}</dt>
                <dd>{t(fact.value)}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="about-story">
          <EnglishHighlight />
          <h2>{t(about.headline)}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{t(paragraph)}</p>
          ))}
          <a href="#resumes" className="action action-primary">
            {t('Ver currículos')} <ArrowDownToLine size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
