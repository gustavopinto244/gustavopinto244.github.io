import { useState } from 'react';
import {
  Lightbulb,
  Users,
  RefreshCw,
  ClipboardList,
  Search,
  Zap,
  Eye,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import { softSkills } from '../../data';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Users,
  RefreshCw,
  ClipboardList,
  Search,
  Zap,
  Eye,
  UserCheck,
};

export function SoftSkills() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSkill = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="soft-skills" className="relative pt-20" aria-label="Soft Skills">
      <div className="border-t-2 border-text pt-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-3">
              <span className="font-display italic text-text-muted/70">02 — </span>
              Comportamental
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Soft Skills
            </h2>
            <p className="text-text-muted mt-4">
              Habilidades interpessoais e comportamentais desenvolvidas através de experiências profissionais e acadêmicas.
            </p>
          </div>

          <div className="flex items-baseline gap-2 border-b border-border pb-2">
            <span className="font-display text-5xl font-black text-accent leading-none">{softSkills.length}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">
              competências destacadas
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {softSkills.map((skill, index) => {
          const Icon = iconMap[skill.icon];
          const isExpanded = expandedId === skill.id;

          return (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`
                group relative bg-background hover:bg-surface p-6 cursor-pointer transition-colors
                ${isExpanded ? 'sm:col-span-2 bg-surface' : ''}
              `}
            >
              <div className="flex items-start justify-between mb-5">
                {Icon && (
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                )}
                <span className="font-display text-3xl font-black text-border leading-none select-none group-hover:text-accent/40 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {skill.name}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">{skill.description}</p>

              {isExpanded && (
                <div className="mt-4 pt-4 border-t border-border animate-in fade-in duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent block mb-1.5">
                    Contexto
                  </span>
                  <p className="text-sm text-text-muted leading-relaxed">{skill.context}</p>
                </div>
              )}

              {!isExpanded && (
                <span className="block mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted/70 group-hover:text-accent transition-colors">
                  Clique para contexto +
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
