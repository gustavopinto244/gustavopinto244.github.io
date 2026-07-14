import { Mail } from 'lucide-react';
import { profile } from '../../data/content';

export function Footer() {
  return (
    <footer className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-7 border-t border-border">
      <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <span className="font-bold">{profile.name}</span>

      <div className="flex gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex items-center justify-center w-11 h-11 border border-border rounded-full bg-surface/80 backdrop-blur-sm text-text hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7.07c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.7c0 .28.18.6.69.5A10.1 10.1 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
          </svg>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center w-11 h-11 border border-border rounded-full bg-surface/80 backdrop-blur-sm text-text hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4A1.84 1.84 0 1 0 5.3 7.68 1.84 1.84 0 0 0 5.35 4Zm6.75 4.98H9.05v10.27h3.18v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.54 1.66 2.73v4.99H19v-5.63c0-2.77-.59-4.9-3.83-4.9-1.55 0-2.59.85-3.02 1.66h-.05v-1.4Z" />
          </svg>
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="E-mail"
          className="inline-flex items-center justify-center w-11 h-11 border border-border rounded-full bg-surface/80 backdrop-blur-sm text-text hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-0.5 transition-all"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
