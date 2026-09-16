import { useLanguage } from '../../i18n/context';
import { ArrowUpRight, ArrowUp, GitBranch, Briefcase, Mail } from 'lucide-react';
import { profile } from '../../data';
export function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer id="contact">
      <div className="contact-block">
        <div>
          <p className="eyebrow">{t('VAMOS CONVERSAR?')}</p>
          <h2>
            {t('Meu próximo passo')} <br />
            {t('pode ser')} <span>{t('com sua equipe.')}</span>
          </h2>
          <p>
            {t(
              'Busco um estágio em tecnologia para aprender, colaborar e transformar conhecimento em entregas reais.'
            )}{' '}
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} />
          </a>
        </div>
        <div className="contact-side">
          <span className="availability">
            <span className="status-dot" />
            {t('Aberto a oportunidades')}{' '}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Briefcase size={19} />
            {'LinkedIn'} <ArrowUpRight size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={19} />
            {'GitHub'} <ArrowUpRight size={17} />
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={19} />
            {t('Enviar e-mail')} <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <a href={`/?lang=${language}`} className="footer-brand">
          {'gustavo'}
          <span>{'.dev'}</span>
        </a>
        <p>
          © {new Date().getFullYear()} {t('Gustavo Pinto · Feito com React e TypeScript')}
        </p>
        <a href="#" className="back-top">
          {t('Voltar ao topo')} <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
