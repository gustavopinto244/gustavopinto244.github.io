import { Fragment, useState } from 'react';
import { Plus } from 'lucide-react';
import { softSkills } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { RowDetail } from '../ui/RowDetail';
import { getIcon } from '../ui/icons';
import { useColumnCount, type ColumnStep } from '../../hooks/useColumnCount';

/** Mirrors the grid classes below: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4. */
const COLUMN_STEPS: ColumnStep[] = [
  { min: 1024, columns: 4 },
  { min: 640, columns: 2 },
  { min: 0, columns: 1 },
];

export function SoftSkills() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const columns = useColumnCount(COLUMN_STEPS);

  const expandedIndex = expandedId ? softSkills.findIndex((skill) => skill.id === expandedId) : -1;
  const expanded = expandedIndex >= 0 ? softSkills[expandedIndex] : null;

  // Last card of the row holding the selected one - the panel goes right after it.
  const panelAfterIndex =
    expandedIndex < 0
      ? -1
      : Math.min(Math.floor(expandedIndex / columns) * columns + columns, softSkills.length) - 1;

  return (
    <section id="soft-skills" className="pt-20" aria-label="Soft Skills">
      <SectionHeader
        command="cat ./soft-skills.md"
        title="Soft Skills"
        description="Habilidades interpessoais e comportamentais desenvolvidas através de experiências profissionais e acadêmicas. Clique para ver o contexto de cada uma."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-accent font-bold">{softSkills.length}</span> competências
          </p>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {softSkills.map((skill, index) => {
          const Icon = getIcon(skill.icon);
          const isExpanded = expandedId === skill.id;

          return (
            <Fragment key={skill.id}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : skill.id)}
                aria-expanded={isExpanded}
                aria-controls={isExpanded ? 'soft-skill-detail' : undefined}
                className={`
                  group flex flex-col rounded-xl border bg-surface p-4 text-left
                  transition-colors duration-200
                  ${
                    isExpanded
                      ? 'border-accent/50 bg-surface-hover'
                      : 'border-border hover:border-accent/50'
                  }
                `}
              >
                <div className="flex items-center gap-3 w-full mb-3">
                  <span
                    className={`flex items-center justify-center w-9 h-9 shrink-0 rounded-lg border bg-background transition-colors ${
                      isExpanded
                        ? 'border-accent/40 text-accent'
                        : 'border-border text-accent/70 group-hover:border-accent/50 group-hover:text-accent'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" strokeWidth={1.75} />}
                  </span>

                  <h3
                    className={`font-display text-sm md:text-base font-bold leading-tight transition-colors ${
                      isExpanded ? 'text-accent' : 'group-hover:text-accent'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  <Plus
                    className={`ml-auto w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                      isExpanded
                        ? 'rotate-45 text-accent'
                        : 'text-text-muted/40 group-hover:text-accent'
                    }`}
                  />
                </div>

                <p className="text-xs text-text-muted leading-relaxed">{skill.description}</p>

                <span className="mt-3 text-[10px] text-text-muted/50 tabular-nums">
                  0x{String(index + 1).padStart(2, '0')}
                </span>
              </button>

              {expanded && index === panelAfterIndex && (
                <RowDetail
                  id="soft-skill-detail"
                  tone="accent"
                  columns={columns}
                  column={expandedIndex % columns}
                  command={`cat soft-skills/${expanded.id}.md`}
                  meta="contexto"
                  onClose={() => setExpandedId(null)}
                >
                  <p className="text-sm text-text-muted leading-relaxed max-w-3xl">
                    <span className="text-accent">// </span>
                    {expanded.context}
                  </p>
                </RowDetail>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
