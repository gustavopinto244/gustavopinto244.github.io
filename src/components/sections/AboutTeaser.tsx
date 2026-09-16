import { useLanguage } from '../../i18n/context';
import { ArrowUpRight, GraduationCap, MapPin, Clock } from 'lucide-react';
import { about } from '../../data';

export function AboutTeaser() {
  const { t, language } = useLanguage();
  return (
    <section id="about" className="content-section about-teaser">
      <div className="portrait-wrap">
        <img src={about.photo} alt={about.photoAlt} width="678" height="678" loading="lazy" />
        <div className="portrait-caption">
          <span>{'Gustavo Pinto'}</span>
          <span>{t('Niterói, RJ ↗')}</span>
        </div>
        <span className="portrait-corner" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">{t('03 / ALÉM DO CÓDIGO')}</p>
        <h2>
          {t('Curiosidade para aprender.')} <br />
          <span className="muted-heading">{t('Cuidado para construir.')}</span>
        </h2>
        <p>
          {t(
            'Antes da tecnologia, trabalhei com controle de qualidade na produção de laticínios. Trouxe dessa experiência o cuidado com processos, a documentação e a responsabilidade pelo que entrego.'
          )}{' '}
        </p>
        <p>
          {t(
            'Hoje curso Sistemas de Informação e aprendo construindo: desenvolvo aplicações, mantenho meu homelab e investigo o que acontece depois do deploy. Busco meu primeiro estágio em tecnologia para evoluir com uma equipe e contribuir de verdade.'
          )}{' '}
        </p>
        <div className="about-facts">
          <div>
            <GraduationCap size={19} />
            <span>
              <strong>{t('Sistemas de Informação')}</strong>
              {t('Universidade La Salle · conclusão em dez. 2029')}{' '}
            </span>
          </div>
          <div>
            <Clock size={18} />
            <span>
              <strong>{t('Disponibilidade de 6 horas por dia')}</strong>
              {t('Entre 6h e 17h')}{' '}
            </span>
          </div>
          <div>
            <MapPin size={18} />
            <span>
              <strong>{t('Niterói, Rio de Janeiro')}</strong>
              {t('Remoto, híbrido ou presencial')}{' '}
            </span>
          </div>
        </div>
        <a className="text-link" href={`/about/?lang=${language}`}>
          {t('Conheça minha trajetória')} <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
