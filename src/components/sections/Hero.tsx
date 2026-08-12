import { profile } from '../../data';
import { Button } from '../ui/Button';
import { MapPin, Phone, Mail, GitBranch } from 'lucide-react';

const contactLines = [
  { icon: MapPin, label: 'local', value: profile.location },
  { icon: Phone, label: 'telefone', value: profile.phone },
  { icon: Mail, label: 'email', value: profile.email },
  { icon: GitBranch, label: 'github', value: `@${profile.githubUser}` },
];

export function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center pt-16 md:pt-24 pb-20"
    >
      <div>
        <p className="text-sm md:text-base mb-6">
          <span className="text-text-muted">gustavo@dev:~$</span>{' '}
          <span className="text-primary">whoami</span>
        </p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
          Gustavo
          <span className="block text-primary [text-shadow:0_0_36px_var(--color-primary)]">
            Pinto
          </span>
        </h1>

        <p className="text-base md:text-lg text-accent mb-5">
          <span className="text-text-muted">&gt;</span> {profile.role}
        </p>

        <p className="text-sm md:text-base text-text-muted leading-relaxed mb-10 max-w-xl">
          Em busca de uma oportunidade de estágio na área de Tecnologia, contribuindo com
          desenvolvimento de software, infraestrutura, segurança, análise de dados ou automação, enquanto evoluo
          tecnicamente e agrego valor à equipe.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button href="#projects">Ver projetos</Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            Entrar em contato
          </Button>
        </div>
      </div>

      <aside className="rounded-xl border border-border bg-surface overflow-hidden shadow-[0_0_60px_-20px_var(--color-primary)]">
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-text-muted">~/contato.sh</span>
        </div>

        <div className="p-5 md:p-6 text-sm">
          <p className="mb-5">
            <span className="text-text-muted">$</span>{' '}
            <span className="text-accent">cat</span> contato.txt
          </p>

          <ul className="space-y-3.5 mb-6">
            {contactLines.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-3">
                <Icon className="w-4 h-4 shrink-0 text-primary" />
                <span className="text-text-muted w-20 shrink-0">{label}:</span>
                <span className="break-all">{value}</span>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 border-t border-border pt-4">
            <span className="text-text-muted">$</span>
            <span className="text-primary">status</span>
            <span className="inline-flex items-center gap-1.5 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              aberto_para_estagio
            </span>
          </p>

          <p className="mt-3">
            <span className="text-text-muted">$</span>
            <span className="inline-block w-2 h-4 ml-1.5 translate-y-0.5 bg-primary animate-blink" />
          </p>
        </div>
      </aside>
    </section>
  );
}
