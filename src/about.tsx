import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './AboutPage';
import './index.css';
import { LanguageProvider } from './i18n/LanguageProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <AboutPage />
    </LanguageProvider>
  </StrictMode>
);
