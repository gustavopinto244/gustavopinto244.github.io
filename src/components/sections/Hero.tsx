import { profile } from '../../data';
import { Button } from '../ui/Button';
import { ArrowDown, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 pt-16 md:pt-24 pb-20 min-h-[calc(100vh-180px)]"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Portfólio de {profile.githubUser}
          </span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8">
          Clareza e
          <span className="block font-light italic text-primary">organização</span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl border-l-2 border-primary pl-6">
          Em busca de uma oportunidade de estágio na área de Tecnologia, contribuindo com
          desenvolvimento de software, análise de dados, automação ou IA, enquanto evoluo
          tecnicamente e agrego valor à equipe.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-12">
          <Button href="#projetos">Ver projetos</Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            Entrar em contato
          </Button>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 pt-5 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Calendar className="w-4 h-4 text-accent" />
            <span>Disponível imediatamente</span>
          </div>
        </div>
      </div>

      <aside className="relative border border-border bg-surface p-7 self-start shadow-[6px_6px_0_0_var(--color-border)]">
        <div className="absolute -top-3 left-6 px-2 bg-background inline-flex items-center gap-2 text-accent text-[11px] font-bold uppercase tracking-[0.18em]">
          <span className="w-2 h-2 bg-accent animate-pulse" />
          Aberto para estágio
        </div>

        <h2 className="font-display text-2xl font-bold leading-tight mt-2">{profile.name}</h2>
        <p className="text-primary text-sm font-semibold mt-1 mb-5">{profile.role}</p>

        <ul className="text-sm">
          {[
            profile.location,
            profile.phone,
            profile.email,
            `@${profile.githubUser}`,
          ].map((item) => (
            <li
              key={item}
              className="py-2.5 border-t border-border text-text-muted break-all"
            >
              {item}
            </li>
          ))}
          <li className="border-t border-border" aria-hidden="true" />
        </ul>
      </aside>

      <div className="absolute bottom-2 left-0 flex items-center gap-3 text-text-muted">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em]">Continue lendo</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
