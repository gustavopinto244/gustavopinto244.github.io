import { profile } from '../../data';

const navLinks = [
  { href: '#sobre', index: '01', label: 'Skills' },
  { href: '#soft-skills', index: '02', label: 'Soft Skills' },
  { href: '#projetos', index: '03', label: 'Projetos' },
  { href: '#curriculo', index: '04', label: 'Currículo' },
];

export function Navigation() {
  return (
    <header className="border-b-2 border-text">
      <div className="flex items-center justify-between gap-4 py-3 border-b border-border text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
        <span>{profile.location}</span>
        <span className="hidden sm:inline">Portfólio — Edição Corrente</span>
        <span>Disponível para estágio</span>
      </div>

      <nav className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 py-5">
        <a
          href="#inicio"
          className="font-display text-3xl md:text-4xl font-black leading-none tracking-tight hover:text-primary transition-colors"
          aria-label="Voltar ao início"
        >
          {profile.name.split(' ').slice(0, 2).join(' ')}
          <span className="text-primary">.</span>
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-baseline gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-text-muted hover:text-primary transition-colors"
            >
              <span className="font-display text-[10px] italic text-primary/70 group-hover:text-primary">
                {link.index}
              </span>
              <span className="underline-offset-4 group-hover:underline">{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
