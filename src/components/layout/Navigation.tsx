const navLinks = [
  { href: '#sobre', label: 'Skills' },
  { href: '#soft-skills', label: 'Soft Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#curriculo', label: 'Currículo' },
];

export function Navigation() {
  return (
    <nav className="flex items-center justify-between gap-5 min-h-[52px]">
      <a
        href="#inicio"
        className="inline-flex items-center justify-center w-14 h-11 text-primary text-2xl font-black hover:text-accent transition-colors"
        aria-label="Voltar ao início"
      >
        &lt;/&gt;
      </a>

      <div className="flex items-center gap-2 px-2 py-2 border border-border rounded-full bg-surface/80 backdrop-blur-sm shadow-lg shadow-black/20">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-2 rounded-full text-sm font-bold text-text-muted hover:text-text hover:bg-surface-hover transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
