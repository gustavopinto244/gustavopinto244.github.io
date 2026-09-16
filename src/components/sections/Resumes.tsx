import { useLanguage } from '../../i18n/context';
import { ArrowDownToLine, ArrowUpRight, Braces, Server, Workflow } from 'lucide-react';
import { resumes } from '../../data';
import type { AreaId } from '../../types';

const resumeContent = {
  development: {
    title: 'Desenvolvimento',
    description: 'APIs, aplicações web e bancos de dados.',
    icon: Braces,
  },
  'security-infra': {
    title: 'Segurança e infraestrutura',
    description: 'Linux, containers e administração de serviços.',
    icon: Server,
  },
  'automation-data': {
    title: 'Dados e automação',
    description: 'Integrações, tratamento de dados e automação de rotinas.',
    icon: Workflow,
  },
} satisfies Record<AreaId, { title: string; description: string; icon: typeof Braces }>;

export function Resumes() {
  const { t, language } = useLanguage();
  return (
    <section id="resumes" className="resume-section" aria-labelledby="resumes-heading">
      <div className="resume-heading">
        <div>
          <p className="eyebrow">{t('PARA QUEM ESTÁ RECRUTANDO')}</p>
          <h2 id="resumes-heading">{t('Um currículo para cada oportunidade.')}</h2>
        </div>
        <p>
          {t(
            'Formação, projetos e experiências reunidos em PDF, com o foco ajustado à área da vaga.'
          )}{' '}
        </p>
      </div>
      <div className="resume-grid">
        {resumes.map((resume) => {
          const file = language === 'en' ? resume.englishFile : resume.file;
          const { title, description, icon: Icon } = resumeContent[resume.area];
          return (
            <article className="resume-card" key={resume.area}>
              <div className="resume-card-top">
                <Icon size={24} />
                <span>{language === 'en' ? 'EN · PDF' : 'PT-BR · PDF'}</span>
              </div>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
              {file ? (
                <div className="resume-card-actions">
                  <a href={file} target="_blank" rel="noreferrer">
                    {t('Visualizar')} <ArrowUpRight size={16} />
                    <span className="sr-only">
                      {t('currículo de')} {t(title)}
                    </span>
                  </a>
                  <a href={file} download={`gustavo-pinto-${resume.area}-${language}.pdf`}>
                    <ArrowDownToLine size={16} />
                    {t('Baixar')}{' '}
                    <span className="sr-only">
                      {t('currículo de')} {t(title)}
                    </span>
                  </a>
                </div>
              ) : (
                <div className="resume-placeholder">
                  <strong>{t('Em breve')}</strong>
                  <p>{t('A versão em inglês deste currículo estará disponível em breve.')}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
