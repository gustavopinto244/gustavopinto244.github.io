import { Fragment, useState } from 'react';
import { Plus } from 'lucide-react';
import { areas, skills } from '../../data';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { AreaSelector } from '../ui/AreaSelector';
import { getIcon } from '../ui/icons';
import { RowDetail } from '../ui/RowDetail';
import { useColumnCount, type ColumnStep } from '../../hooks/useColumnCount';
import type { AreaId, SkillCategory } from '../../types';

const categoryLabels: Record<SkillCategory, string> = {
  languages: 'linguagens_&_frameworks',
  techniques: 'técnicas_&_conceitos',
  tools: 'ferramentas',
};

const ALL = 'all' as const;

/** Mirrors the grid classes below: grid-cols-2 sm:grid-cols-3 lg:grid-cols-4. */
const COLUMN_STEPS: ColumnStep[] = [
  { min: 1024, columns: 4 },
  { min: 640, columns: 3 },
  { min: 0, columns: 2 },
];

export function Skills() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<AreaId | typeof ALL>(ALL);
  const columns = useColumnCount(COLUMN_STEPS);

  const options = [
    { id: ALL, label: 'todas', count: skills.length },
    ...areas.map((area) => ({
      id: area.id,
      label: area.label,
      count: skills.filter((skill) => skill.areas.includes(area.id)).length,
    })),
  ];

  const visible =
    filter === ALL ? skills : skills.filter((skill) => skill.areas.includes(filter));

  const changeFilter = (id: string) => {
    setFilter(id as AreaId | typeof ALL);
    setExpandedId(null);
  };

  const expandedIndex = expandedId
    ? visible.findIndex((skill) => skill.id === expandedId)
    : -1;
  const expanded = expandedIndex >= 0 ? visible[expandedIndex] : null;

  // Last tile of the row holding the selected one - the panel goes right after it.
  const panelAfterIndex =
    expandedIndex < 0
      ? -1
      : Math.min(Math.floor(expandedIndex / columns) * columns + columns, visible.length) - 1;

  return (
    <section id="skills" className="pt-20" aria-label="Competências técnicas">
      <SectionHeader
        command="ls ./skills"
        title="Competências técnicas"
        description="Tecnologias e conceitos que aplico no desenvolvimento de projetos. Clique em um item para ver detalhes, ou filtre pela área de atuação."
        meta={
          <p className="text-sm text-text-muted">
            total: <span className="text-primary font-bold">{skills.length}</span> tecnologias
          </p>
        }
      />

      <AreaSelector
        options={options}
        active={filter}
        onChange={changeFilter}
        variant="chips"
        ariaLabel="Filtrar competências por área"
        idPrefix="skills"
        className="mb-8"
      />

      <div
        id="skills-panel"
        role="tabpanel"
        aria-labelledby={`skills-tab-${filter}`}
        tabIndex={-1}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {visible.map((skill, index) => {
          const Icon = getIcon(skill.icon);
          const isExpanded = expandedId === skill.id;
          const isStudying = skill.usage === 'studying';

          return (
            <Fragment key={skill.id}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : skill.id)}
                aria-expanded={isExpanded}
                aria-controls={isExpanded ? 'skill-detail' : undefined}
                className={`
                  group flex items-center gap-3 rounded-xl border bg-surface p-3.5 text-left
                  transition-colors duration-200
                  ${
                    isExpanded
                      ? 'border-primary/50 bg-surface-hover'
                      : 'border-border hover:border-primary/50'
                  }
                `}
              >
                <span
                  className={`flex items-center justify-center w-9 h-9 shrink-0 rounded-lg border bg-background transition-colors ${
                    isExpanded
                      ? 'border-primary/40 text-primary'
                      : 'border-border text-text-muted group-hover:border-primary/50 group-hover:text-primary'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" strokeWidth={1.75} />}
                </span>

                <span className="min-w-0">
                  <span
                    className={`block truncate text-xs md:text-sm font-semibold transition-colors ${
                      isExpanded ? 'text-primary' : 'group-hover:text-primary'
                    }`}
                  >
                    {skill.name}
                  </span>
                  {isStudying && (
                    <span className="block text-[10px] leading-tight text-text-muted/70">
                      estudando
                    </span>
                  )}
                </span>

                <Plus
                  className={`ml-auto w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                    isExpanded
                      ? 'rotate-45 text-primary'
                      : 'text-text-muted/40 group-hover:text-primary'
                  }`}
                />
              </button>

              {expanded && index === panelAfterIndex && (
                <RowDetail
                  id="skill-detail"
                  columns={columns}
                  column={expandedIndex % columns}
                  command={`cat skills/${expanded.id}.md`}
                  meta={categoryLabels[expanded.category]}
                  onClose={() => setExpandedId(null)}
                >
                  <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-3xl">
                    <span className="text-accent">// </span>
                    {expanded.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] text-text-muted mr-1">
                      <span className="text-primary">$</span>{' '}
                      {expanded.usage === 'studying'
                        ? 'estudo_em_andamento:'
                        : 'projetos_relacionados:'}
                    </span>
                    {expanded.examples.map((example) => (
                      <Badge key={example}>{example}</Badge>
                    ))}
                  </div>
                </RowDetail>
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
