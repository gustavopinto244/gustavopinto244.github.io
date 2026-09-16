import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, type Language } from './context';
import { en } from './en';

function initialLanguage(): Language {
  const query = new URLSearchParams(window.location.search).get('lang');
  if (query === 'en' || query === 'pt') return query;
  try {
    return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt';
  } catch {
    return 'pt';
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = (text: string) => (language === 'en' ? (en[text] ?? text) : text);

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      /* Language switching also works when storage is unavailable. */
    }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.replaceState(null, '', url);
    const isAbout = window.location.pathname.startsWith('/about');
    const title = isAbout
      ? language === 'en'
        ? 'About | Gustavo Pinto'
        : 'Sobre | Gustavo Pinto'
      : language === 'en'
        ? 'Gustavo Pinto | Back-End, Infrastructure & Automation'
        : 'Gustavo Pinto | Back-End, Infra e Automação';
    const description =
      language === 'en'
        ? 'Gustavo Pinto: aspiring back-end developer with advanced technical English. Projects, background and resumes in development, infrastructure, data and automation.'
        : 'Gustavo Pinto: desenvolvedor back-end em formação com inglês técnico avançado. Projetos, trajetória e currículos em desenvolvimento, infraestrutura, dados e automação.';
    document.title = title;
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute('content', title);
    }
    for (const selector of [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ]) {
      document.querySelector(selector)?.setAttribute('content', description);
    }
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'en' ? 'en_US' : 'pt_BR');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
