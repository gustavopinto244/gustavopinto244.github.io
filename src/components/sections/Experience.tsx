import { experiences } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { GitCommitHorizontal } from 'lucide-react';
import { getIcon } from '../ui/icons';
import type { Experience as ExperienceItem } from '../../types';

const iconByType: Record<ExperienceItem['type'], string> = {
  education: 'GraduationCap',
  work: 'Briefcase',
  organization: 'Building2',
};

export function Experience() {
  return (
    <section id="experience" className="pt-20">
      <SectionHeader
        command="git log --experiencia"
        title="Experiência e formação"
        description="Trajetória profissional e acadêmica que moldou minhas competências."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-primary font-bold">{experiences.length}</span> commits
          </p>
        }
      />

      <div className="relative ml-2 border-l border-border pl-8 md:pl-10 space-y-10">
        {experiences.map((item, index) => {
          const Icon = getIcon(iconByType[item.type]);
          const isHead = index === 0;

          return (
            <article key={`${item.role}-${item.company}`} className="group relative">
              <div
                className={`
                  absolute -left-[38px] md:-left-[46px] top-0 flex items-center justify-center w-6 h-6 rounded-full border bg-background transition-colors
                  ${isHead ? 'border-primary shadow-[0_0_16px_-2px_var(--color-primary)]' : 'border-border group-hover:border-primary/60'}
                `}
              >
                <GitCommitHorizontal
                  className={`w-3.5 h-3.5 transition-colors ${isHead ? 'text-primary' : 'text-text-muted group-hover:text-primary'}`}
                />
              </div>

              <p className="text-xs mb-2">
                <span className="text-accent">commit</span>{' '}
                <span className="text-text-muted">(</span>
                <span className="text-primary">{item.period}</span>
                <span className="text-text-muted">)</span>
                {isHead && <span className="text-text-muted"> ← HEAD</span>}
              </p>

              <div className="flex items-center gap-3 mb-1.5">
                {Icon && (
                  <Icon className="w-4 h-4 shrink-0 text-text-muted transition-colors group-hover:text-primary" />
                )}
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                  {item.role}
                </h3>
              </div>

              <p className="text-sm text-accent font-semibold mb-3">{item.company}</p>
              <p className="text-sm text-text-muted leading-relaxed max-w-2xl">{item.summary}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
