import { profile } from '../../data';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-kicker">
        <span>Desenvolvedor Full-Stack</span>
        <span className="availability"><i /> Disponível para estágio</span>
      </div>

      <div className="hero-title">
        <span>Gustavo</span>
        <span className="hero-title-line"><em>Pinto</em><b>↘</b></span>
      </div>

      <div className="hero-bottom">
        <div className="hero-location">
          <MapPin />
          <span>{profile.location}</span>
        </div>
        <div className="hero-intro">
          <p>
          Em busca de uma oportunidade de estágio na área de Tecnologia, contribuindo com
          desenvolvimento de software, análise de dados, automação ou IA, enquanto evoluo
          tecnicamente e agrego valor à equipe.
          </p>
          <div className="hero-actions">
            <a href="#projetos" className="circle-link" aria-label="Ver projetos">
              <ArrowDown />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
