import { profile } from '../../data';

const navLinks = [
  { href: '#sobre', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#curriculo', label: 'Trajetória' },
];

export function Navigation() {
  return (
    <header className="topbar">
      <nav className="nav-wrap" aria-label="Navegação principal">
        <a href="#inicio" className="wordmark" aria-label="Voltar ao início">
          GP<span>.</span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="nav-cta">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
