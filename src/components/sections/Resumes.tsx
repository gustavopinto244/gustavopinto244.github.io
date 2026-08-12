import { Download, Clock } from 'lucide-react';
import { areas, resumes } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { getIcon } from '../ui/icons';

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

const formatUpdatedAt = (value: string) => {
  const [year, month] = value.split('-');
  const label = months[Number(month) - 1];
  return label ? `${label} de ${year}` : value;
};

export function Resumes() {
  const available = resumes.filter((resume) => resume.file).length;

  return (
    <section id="resumes" className="pt-20">
      <SectionHeader
        command="ls ~/curriculos"
        title="Currículos"
        description="Uma versão para cada frente de atuação, com o foco ajustado à vaga. Baixe a que fizer sentido para o seu processo."
        meta={
          <p className="text-sm text-text-muted">
            disponíveis: <span className="text-primary font-bold">{available}</span> de{' '}
            {resumes.length}
          </p>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resumes.map((resume) => {
          const area = areas.find((item) => item.id === resume.area);
          if (!area) return null;

          const Icon = getIcon(area.icon);
          const isAvailable = Boolean(resume.file);

          const content = (
            <>
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border bg-background transition-colors ${
                    isAvailable
                      ? 'border-border text-primary group-hover:border-primary/50'
                      : 'border-border text-text-muted/50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" strokeWidth={1.75} />}
                </span>

                {isAvailable ? <Badge variant="primary">pdf</Badge> : <Badge>em breve</Badge>}
              </div>

              <h3
                className={`font-display text-lg font-bold mb-2 transition-colors ${
                  isAvailable ? 'group-hover:text-primary' : 'text-text-muted'
                }`}
              >
                {area.title}
              </h3>

              <p className="text-xs text-text-muted leading-relaxed mb-5">{area.description}</p>

              <p className="mt-auto flex items-center gap-2 text-[11px] text-text-muted/80">
                {isAvailable ? (
                  <>
                    <Download className="w-3.5 h-3.5 text-primary" />
                    baixar · atualizado em {formatUpdatedAt(resume.updatedAt)}
                  </>
                ) : (
                  <>
                    <Clock className="w-3.5 h-3.5" />
                    em preparação
                  </>
                )}
              </p>
            </>
          );

          const baseClass =
            'group flex flex-col rounded-xl border bg-surface p-5 transition-colors duration-200';

          return isAvailable ? (
            <a
              key={resume.area}
              href={resume.file}
              download
              className={`${baseClass} border-border hover:border-primary/50 hover:shadow-[0_0_30px_-14px_var(--color-primary)]`}
            >
              {content}
            </a>
          ) : (
            <div
              key={resume.area}
              className={`${baseClass} border-border border-dashed opacity-80`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
