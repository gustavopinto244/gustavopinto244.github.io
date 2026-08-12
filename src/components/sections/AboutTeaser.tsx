import { ArrowUpRight, FileText } from 'lucide-react';
import { about } from '../../data';

export function AboutTeaser() {
  return (
    <section id="about" className="pt-20">
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-text-muted">~/sobre.md</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-6 md:p-10">
          <div>
            <p className="text-sm text-primary mb-4">
              <span className="text-text-muted">gustavo@dev:~$</span> head -n 1 sobre.md
            </p>

            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-4 max-w-2xl">
              {about.headline}
            </h2>

            <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
              Trajetória completa, o que estou construindo hoje e os currículos por área de atuação.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href="/about/"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              ler mais
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>

            <a
              href="/about/#resumes"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-semibold transition-colors hover:border-accent/60 hover:text-accent"
            >
              <FileText className="w-4 h-4" />
              currículos
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
