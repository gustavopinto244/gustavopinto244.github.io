import { profile } from '../../data/content';
import { Button } from '../ui/Button';
import { ArrowDown, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_330px] items-center gap-12 min-h-[calc(100vh-98px)] pb-16"
    >
      <div className="absolute -left-20 top-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-3xl border border-border rounded-xl bg-surface/40 backdrop-blur-sm p-8 md:p-10 shadow-xl shadow-black/20">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-8 bottom-8 -left-px w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-sm font-medium">
            Portfólio de {profile.githubUser}
          </span>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div className="w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.96]">
            Clareza e 
            <span className="block text-accent"> organização</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl">
          Em busca de uma oportunidade de estágio na área de Tecnologia, contribuindo com 
          desenvolvimento de software, análise de dados, automação ou IA, enquanto evoluo 
          tecnicamente e agrego valor à equipe.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button href="#projetos">Ver projetos</Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            Entrar em contato
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
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

      <aside className="relative border border-border bg-surface/80 backdrop-blur-sm rounded-xl p-7 space-y-4 shadow-xl shadow-black/20">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="flex items-center gap-2.5 text-accent text-sm font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          Aberto para estágio
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold">{profile.name}</h2>
        <p className="text-text-muted">{profile.role}</p>
        
        <ul className="space-y-2 text-text-muted text-sm">
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-border" />
            {profile.location}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-border" />
            {profile.phone}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-border" />
            {profile.email}
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-border" />
            @{profile.githubUser}
          </li>
        </ul>
      </aside>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
        <span className="text-xs">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
