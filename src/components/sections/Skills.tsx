import { useState } from 'react';
import {
  Server,
  Code,
  Database,
  Layout,
  GitBranch,
  Globe,
  Layers,
  Puzzle,
  Cpu,
  Box,
  Terminal,
  Plus,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '../../data';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { SectionHeader } from '../ui/SectionHeader';
import type { SkillCategory } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Code,
  Database,
  Layout,
  GitBranch,
  Globe,
  Layers,
  Puzzle,
  Box,
  Terminal,
};

const levelLabels = {
  iniciante: 'iniciante',
  intermediario: 'intermediário',
  avancado: 'avançado',
};

const categoryLabels: Record<SkillCategory, string> = {
  languages: 'linguagens_&_frameworks',
  techniques: 'técnicas_&_conceitos',
  tools: 'ferramentas',
};

const categoryOrder: SkillCategory[] = ['languages', 'techniques', 'tools'];

export function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSkill = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const skillsByCategory = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    items: skills.filter((s) => s.category === category),
  }));

  return (
    <section id="sobre" className="pt-20" aria-label="Competências">
      <SectionHeader
        command="ls ./skills --detalhes"
        title="Competências técnicas"
        description="Tecnologias e conceitos que aplico no desenvolvimento de projetos. Clique em cada item para ver detalhes."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-primary font-bold">{skills.length}</span> tecnologias
          </p>
        }
      />

      <div className="space-y-10">
        {skillsByCategory.map(({ category, label, items }) => (
          <div key={category}>
            <h3 className="text-sm text-accent mb-3">
              <span className="text-text-muted">##</span> {label}{' '}
              <span className="text-text-muted">({items.length})</span>
            </h3>

            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              {items.map((skill, index) => {
                const Icon = iconMap[skill.icon];
                const isExpanded = expandedId === skill.id;

                return (
                  <div
                    key={skill.id}
                    className={index > 0 ? 'border-t border-border' : ''}
                  >
                    <button
                      onClick={() => toggleSkill(skill.id)}
                      className="group w-full flex items-center gap-3 md:gap-4 px-4 md:px-5 py-4 text-left transition-colors hover:bg-surface-hover"
                      aria-expanded={isExpanded}
                    >
                      {Icon && (
                        <Icon
                          className="w-4 h-4 shrink-0 text-text-muted transition-colors group-hover:text-primary"
                          strokeWidth={1.75}
                        />
                      )}

                      <span className="font-semibold text-sm md:text-base transition-colors group-hover:text-primary">
                        {skill.name}
                      </span>

                      <span className="hidden lg:block flex-1 mx-2">
                        <ProgressBar value={skill.proficiency} />
                      </span>

                      <span className="hidden sm:inline-flex ml-auto lg:ml-0">
                        <Badge variant={skill.level === 'intermediario' ? 'primary' : 'default'}>
                          {levelLabels[skill.level]}
                        </Badge>
                      </span>

                      <span className="ml-auto sm:ml-0 lg:hidden text-xs font-semibold text-text-muted tabular-nums">
                        {skill.proficiency}%
                      </span>

                      <Plus
                        className={`w-4 h-4 shrink-0 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 border-t border-border bg-background/50 px-4 md:px-5 py-5">
                        <div>
                          <p className="text-sm text-text-muted leading-relaxed mb-4">
                            <span className="text-accent">// </span>
                            {skill.description}
                          </p>

                          <span className="block text-xs text-text-muted mb-2">
                            <span className="text-primary">$</span> projetos_relacionados:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {skill.examples.map((example) => (
                              <Badge key={example}>{example}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="md:border-l md:border-border md:pl-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-text-muted">proficiência</span>
                            <Badge variant="primary">{levelLabels[skill.level]}</Badge>
                          </div>
                          <ProgressBar value={skill.proficiency} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
