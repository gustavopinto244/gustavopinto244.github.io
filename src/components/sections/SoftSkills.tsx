import { useState } from 'react';
import {
  MessageCircle,
  Lightbulb,
  Users,
  RefreshCw,
  ClipboardList,
  Search,
  Heart,
  Zap,
  Eye,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import { softSkills } from '../../data';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
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
    <section id="soft-skills" className="relative py-24" aria-label="Soft Skills">
      <div className="absolute -left-20 top-1/3 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative border border-border rounded-xl bg-surface/40 backdrop-blur-sm p-6 md:p-8 mb-10">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-accent text-sm font-bold mb-2">Comportamental</p>
            <h2 className="text-3xl md:text-4xl font-bold">Soft Skills</h2>
            <p className="text-text-muted mt-3 max-w-lg">
              Habilidades interpessoais e comportamentais desenvolvidas através de experiências profissionais e acadêmicas.
            </p>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-3 border border-accent/30 rounded-lg bg-accent/5">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm text-text-muted">
              <span className="text-accent font-semibold">{softSkills.length}</span> competências destacadas
            </span>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {softSkills.map((skill) => {
          const Icon = iconMap[skill.icon];
          const isExpanded = expandedId === skill.id;

          return (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`
                group relative border border-border bg-surface/80 backdrop-blur-sm rounded-xl cursor-pointer
                transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
                ${isExpanded ? 'sm:col-span-2 lg:col-span-3 border-accent/40 shadow-lg shadow-accent/5' : ''}
              `}
            >
              {isExpanded && (
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              )}
              
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  {Icon && (
                    <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                  )}
                  <h3 className="font-bold">{skill.name}</h3>
                </div>

                {isExpanded ? (
                  <div className="space-y-3 animate-in fade-in duration-300">
                    <p className="text-text-muted leading-relaxed">{skill.description}</p>
                    <div className="pt-3 border-t border-border">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide block mb-1">
                        Contexto
                      </span>
                      <p className="text-sm text-text-muted">{skill.context}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-text-muted">{skill.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
