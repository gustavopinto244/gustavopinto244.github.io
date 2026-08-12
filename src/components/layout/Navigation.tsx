import { profile } from '../../data';
import { Terminal } from 'lucide-react';

type NavigationProps = {
  /** Decides which links are local anchors and which point to the other page. */
  page?: 'home' | 'about';
};

const linksByPage = {
  home: [
    { href: '#projects', label: 'projetos' },
    { href: '#skills', label: 'skills' },
    { href: '#soft-skills', label: 'soft-skills' },
    { href: '/about/', label: 'sobre' },
  ],
  about: [
    { href: '/#projects', label: 'projetos' },
    { href: '/#skills', label: 'skills' },
    { href: '#experience', label: 'trajetoria' },
    { href: '#resumes', label: 'curriculos' },
  ],
};

export function Navigation({ page = 'home' }: NavigationProps) {
  const navLinks = linksByPage[page];
  const homeHref = page === 'home' ? '#home' : '/';

  return (
    <header className="sticky top-0 z-50 -mx-5 md:-mx-10 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="px-5 md:px-10">
        <nav className="flex items-center justify-between gap-4 h-16">
          <a
            href={homeHref}
            className="group inline-flex items-center gap-2.5 text-sm font-bold shrink-0"
            aria-label="Voltar ao início"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-surface text-primary transition-colors group-hover:border-primary/60">
              <Terminal className="w-4 h-4" />
            </span>
            <span>
              gustavo<span className="text-primary">@</span>dev
              <span className="text-text-muted">:~$</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-text-muted transition-colors hover:bg-surface hover:text-primary"
              >
                <span className="text-primary/70">./</span>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-text-muted transition-colors hover:border-primary/60 hover:text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            disponível para estágio
          </a>
        </nav>

        <div className="no-scrollbar md:hidden flex items-center gap-1 overflow-x-auto pb-3 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-md px-3 py-1.5 text-text-muted transition-colors hover:bg-surface hover:text-primary"
            >
              <span className="text-primary/70">./</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
