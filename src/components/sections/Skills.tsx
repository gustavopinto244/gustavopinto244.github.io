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
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
};

const categoryLabels: Record<SkillCategory, string> = {
  languages: 'Linguagens & Frameworks',
  techniques: 'Técnicas & Conceitos',
  tools: 'Ferramentas',
};

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  languages: Code,
  techniques: Layers,
  tools: Cpu,
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
    icon: categoryIcons[category],
    items: skills.filter((s) => s.category === category),
  }));

  const totalSkills = skills.length;

  return (
    <section id="sobre" className="relative pt-20" aria-label="Competências">
      <div className="border-t-2 border-text pt-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
              <span className="font-display italic text-text-muted/70">01 — </span>
              Habilidades
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
              Competências técnicas
            </h2>
            <p className="text-text-muted mt-4">
              Tecnologias e conceitos que aplico no desenvolvimento de projetos. Clique em cada item para ver detalhes.
            </p>
          </div>

          <div className="flex items-baseline gap-2 border-b border-border pb-2">
            <span className="font-display text-5xl font-black text-primary leading-none">{totalSkills}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">Tecnologias</span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {skillsByCategory.map(({ category, label, icon: CategoryIcon, items }) => (
          <div key={category}>
            <h3 className="flex items-center gap-3 mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
              <CategoryIcon className="w-4 h-4 text-primary" />
              {label}
              <span className="text-text-muted/60">({items.length})</span>
              <span className="flex-1 h-px bg-border" />
            </h3>

            <div className="border-b border-border">
              {items.map((skill) => {
                const Icon = iconMap[skill.icon];
                const isExpanded = expandedId === skill.id;

                return (
                  <div key={skill.id} className="border-t border-border">
                    <button
                      onClick={() => toggleSkill(skill.id)}
                      className="group w-full flex items-center gap-4 py-4 text-left"
                      aria-expanded={isExpanded}
                    >
                      {Icon && (
                        <Icon className="w-5 h-5 shrink-0 text-text-muted group-hover:text-primary transition-colors" strokeWidth={1.75} />
                      )}

                      <span className="font-display text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>

                      <span className="hidden sm:block flex-1 border-b border-dotted border-border mx-2 -translate-y-1" />

                      <span className="hidden md:inline-flex">
                        <Badge variant={skill.level === 'intermediario' ? 'primary' : 'default'}>
                          {levelLabels[skill.level]}
                        </Badge>
                      </span>

                      <span className="ml-auto md:ml-0 w-12 text-right text-sm font-semibold text-text-muted tabular-nums">
                        {skill.proficiency}%
                      </span>

                      <Plus
                        className={`w-4 h-4 shrink-0 text-primary transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-6 pb-6 pl-9 pr-1 animate-in fade-in duration-300">
                        <div>
                          <p className="text-text-muted leading-relaxed mb-4">{skill.description}</p>

                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted block mb-2">
                            Projetos relacionados
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {skill.examples.map((example) => (
                              <Badge key={example}>{example}</Badge>
                            ))}
                          </div>
                        </div>

                        <div className="md:border-l md:border-border md:pl-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">
                              Proficiência
                            </span>
                            <Badge variant="primary">{levelLabels[skill.level]}</Badge>
                          </div>
                          <ProgressBar value={skill.proficiency} />
                          <span className="font-display text-3xl font-black text-primary mt-2 block tabular-nums">
                            {skill.proficiency}%
                          </span>
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
