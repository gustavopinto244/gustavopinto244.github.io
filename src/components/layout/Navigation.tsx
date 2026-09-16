import { useLanguage } from '../../i18n/context';
import { useState } from 'react';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';

type NavigationProps = { page?: 'home' | 'about' };

export function Navigation({ page = 'home' }: NavigationProps) {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { href: page === 'home' ? '#projects' : `/?lang=${language}#projects`, label: 'Projetos' },
    { href: page === 'home' ? '#skills' : `/?lang=${language}#skills`, label: 'Competências' },
    { href: '#about', label: 'Sobre mim' },
    { href: '#contact', label: 'Contato' },
  ];
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        {t('Pular para o conteúdo')}{' '}
      </a>
      <nav className="page-width navigation" aria-label={t('Navegação principal')}>
        <a
          className="brand"
          href={page === 'home' ? '#home' : `/?lang=${language}`}
          aria-label={t('Gustavo Pinto — início')}
        >
          <Code2 size={25} />
          <span>
            {'gustavo'}
            <span className="text-primary">{'.dev'}</span>
          </span>
        </a>
        <div className="desktop-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {t(link.label)}
            </a>
          ))}
        </div>
        <a className="nav-cta" href={'#resumes'}>
          {t('Currículo')} <ArrowUpRight size={15} />
        </a>
        <div className="language-switch" role="group" aria-label={t('Idioma do site')}>
          <button
            type="button"
            lang="pt-BR"
            aria-label="Português"
            aria-pressed={language === 'pt'}
            onClick={() => setLanguage('pt')}
          >
            {'PT'}
          </button>
          <button
            type="button"
            lang="en"
            aria-label="English"
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            {'EN'}
          </button>
        </div>
        <button
          className="menu-toggle"
          aria-label={open ? t('Fechar menu') : t('Abrir menu')}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-links page-width" id="mobile-navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {t(link.label)}
            </a>
          ))}
          <a href="#resumes" onClick={() => setOpen(false)}>
            {t('Currículos')}{' '}
          </a>
        </div>
      )}
    </header>
  );
}
