import { Mail, GitBranch, Briefcase, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data';

const socialLinks = [
  { href: profile.github, label: 'GitHub', icon: GitBranch },
  { href: profile.linkedin, label: 'LinkedIn', icon: Briefcase },
  { href: `mailto:${profile.email}`, label: 'E-mail', icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="rounded-xl border border-border bg-surface p-8 md:p-12 text-center">
        <p className="text-sm text-primary mb-4">
          <span className="text-text-muted">gustavo@dev:~$</span> ./contato.sh
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Vamos construir algo juntos?
        </h2>
        <p className="text-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Estou em busca de uma oportunidade de estágio em tecnologia. Se você tem uma vaga,
          um projeto ou apenas quer trocar uma ideia, me chama.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Icon className="w-4 h-4" />
              {label}
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-6 text-xs text-text-muted">
        <p>
          gustavo@dev:~$ <span className="text-text">exit</span>
          <span className="inline-block w-1.5 h-3.5 ml-1 translate-y-0.5 bg-primary animate-blink" />
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
