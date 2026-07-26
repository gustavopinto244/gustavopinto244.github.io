import { type ReactNode } from 'react';

type SectionHeaderProps = {
  command: string;
  title: string;
  description?: string;
  meta?: ReactNode;
};

export function SectionHeader({ command, title, description, meta }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div className="max-w-xl">
        <p className="text-sm text-primary mb-4">
          <span className="text-text-muted">gustavo@dev:~$</span> {command}
          <span className="inline-block w-2 h-4 ml-1.5 translate-y-0.5 bg-primary animate-blink" />
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {description && <p className="text-text-muted mt-4 leading-relaxed">{description}</p>}
      </div>

      {meta && <div className="shrink-0">{meta}</div>}
    </div>
  );
}
