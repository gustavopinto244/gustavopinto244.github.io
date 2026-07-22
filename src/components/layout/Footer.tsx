import { Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data';

export function Footer() {
  return (
    <footer className="border-t-2 border-text mt-24">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-8 py-10 border-b border-border">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted mb-3">
            Fim da edição — obrigado pela leitura
          </p>
          <a href="#inicio" className="font-display text-4xl md:text-5xl font-black tracking-tight leading-none hover:text-primary transition-colors">
            {profile.name}
          </a>
          <p className="text-text-muted mt-3">{profile.role}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm font-semibold">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            LinkedIn
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        <span>© {new Date().getFullYear()} — {profile.name}</span>
        <span>{profile.location} · @{profile.githubUser}</span>
      </div>
    </footer>
  );
}
