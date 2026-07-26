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
import { SectionHeader } from '../ui/SectionHeader';

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
    <section id="soft-skills" className="pt-20" aria-label="Soft Skills">
      <SectionHeader
        command="cat ./soft-skills.md"
        title="Soft Skills"
        description="Habilidades interpessoais e comportamentais desenvolvidas através de experiências profissionais e acadêmicas."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-accent font-bold">{softSkills.length}</span> competências
          </p>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {softSkills.map((skill, index) => {
          const Icon = iconMap[skill.icon];
          const isExpanded = expandedId === skill.id;

          return (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`
                group relative rounded-xl border border-border bg-surface p-5 text-left transition-all duration-200
                hover:border-accent/50 hover:shadow-[0_0_30px_-12px_var(--color-accent)]
                ${isExpanded ? 'sm:col-span-2 border-accent/50' : ''}
              `}
              aria-expanded={isExpanded}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background text-accent transition-colors group-hover:border-accent/50">
                  {Icon && <Icon className="w-4 h-4" strokeWidth={1.75} />}
                </span>
                <span className="text-xs text-text-muted/60 tabular-nums">
                  0x{String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold mb-2 transition-colors group-hover:text-accent">
                {skill.name}
              </h3>

              <p className="text-xs text-text-muted leading-relaxed">{skill.description}</p>

              {isExpanded ? (
                <div className="mt-4 border-t border-border pt-4">
                  <span className="block text-xs text-accent mb-1.5">
                    <span className="text-text-muted">$</span> contexto:
                  </span>
                  <p className="text-xs text-text-muted leading-relaxed">{skill.context}</p>
                </div>
              ) : (
                <span className="block mt-4 text-[11px] text-text-muted/70 transition-colors group-hover:text-accent">
                  [+] contexto
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
