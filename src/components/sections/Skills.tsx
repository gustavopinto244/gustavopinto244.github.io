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
    <section id="sobre" className="relative py-24" aria-label="Competências">
      <div className="absolute -right-20 top-1/2 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative border border-border rounded-xl bg-surface/40 backdrop-blur-sm p-6 md:p-8 mb-10">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-primary text-sm font-bold mb-2">Habilidades</p>
            <h2 className="text-3xl md:text-4xl font-bold">Competências técnicas</h2>
            <p className="text-text-muted mt-3 max-w-lg">
              Tecnologias e conceitos que aplico no desenvolvimento de projetos. Clique em cada card para ver detalhes.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="border border-border rounded-lg p-4 text-center min-w-[80px]">
              <span className="block text-2xl font-black text-primary">{totalSkills}</span>
              <span className="text-xs text-text-muted">Tecnologias</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative space-y-10">
        {skillsByCategory.map(({ category, label, icon: CategoryIcon, items }) => (
          <div key={category} className="border border-border rounded-xl bg-surface/20 p-5 md:p-6">
            <h3 className="text-lg font-semibold text-text-muted mb-4 flex items-center gap-3">
              <div className="p-1.5 rounded-md bg-primary/10">
                <CategoryIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="w-8 h-px bg-border" />
              {label}
              <span className="text-sm text-text-muted/60">({items.length})</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((skill) => {
                const Icon = iconMap[skill.icon];
                const isExpanded = expandedId === skill.id;

                return (
                  <div
                    key={skill.id}
                    onClick={() => toggleSkill(skill.id)}
                    className={`
                      group relative border border-border bg-surface/80 backdrop-blur-sm rounded-xl cursor-pointer
                      transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5
                      ${isExpanded ? 'col-span-2 sm:col-span-3 lg:col-span-4 border-primary/40 shadow-lg shadow-primary/5' : ''}
                    `}
                  >
                    {isExpanded && (
                      <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    )}
                    
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        {Icon && (
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5" strokeWidth={2} />
                          </div>
                        )}
                        <h4 className="font-bold">{skill.name}</h4>
                      </div>

                      {isExpanded ? (
                        <div className="space-y-4 animate-in fade-in duration-300">
                          <p className="text-text-muted leading-relaxed">{skill.description}</p>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Proficiência</span>
                              <Badge variant="primary">{levelLabels[skill.level]}</Badge>
                            </div>
                            <ProgressBar value={skill.proficiency} />
                            <span className="text-xs text-text-muted mt-1 block">
                              {skill.proficiency}%
                            </span>
                          </div>

                          <div>
                            <span className="text-sm font-medium block mb-2">
                              Projetos relacionados
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {skill.examples.map((example) => (
                                <Badge key={example}>{example}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-text-muted">Clique para ver mais</p>
                      )}
                    </div>
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
