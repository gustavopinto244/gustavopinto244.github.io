import { useLanguage } from '../../i18n/context';
import { experiences } from '../../data';
import { Briefcase, GraduationCap, Users } from 'lucide-react';
export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{t('EXPERIÊNCIA & FORMAÇÃO')}</p>
          <h2>
            {t('O que trago')} <br />
            <span className="muted-heading">{t('na bagagem.')}</span>
          </h2>
        </div>
        <p>
          {t(
            'Experiências que desenvolveram minha organização, colaboração e atenção à qualidade.'
          )}
        </p>
      </div>
      <div className="experience-list">
        {experiences.map((item) => {
          const Icon =
            item.type === 'education' ? GraduationCap : item.type === 'work' ? Briefcase : Users;
          return (
            <article key={item.role}>
              <div className="experience-date">
                <Icon size={22} />
                <span>{t(item.period)}</span>
              </div>
              <div>
                <h3>{t(item.role)}</h3>
                <strong>{item.company}</strong>
                <p>{t(item.summary)}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
