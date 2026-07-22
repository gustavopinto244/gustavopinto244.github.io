import { experiences } from '../../data';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';

const getIcon = (role: string) => {
  if (role.toLowerCase().includes('graduando')) return GraduationCap;
  if (role.toLowerCase().includes('assessor')) return Building2;
  return Briefcase;
};

export function Experience() {
  const totalExperiences = experiences.length;

  return (
    <section id="curriculo" className="relative pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start border-t-2 border-text pt-8">
        <div className="lg:sticky lg:top-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary mb-3">
            <span className="font-display italic text-text-muted/70">04 — </span>
            Currículo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4">
            Experiência e formação
          </h2>
          <p className="text-text-muted mb-8">
            Trajetória profissional e acadêmica que moldou minhas competências.
          </p>

          <div className="flex items-baseline gap-2 border-b border-border pb-2 max-w-[220px]">
            <Briefcase className="w-4 h-4 text-accent self-center" />
            <span className="font-display text-4xl font-black text-accent leading-none">{totalExperiences}</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">experiências</span>
          </div>
        </div>

        <div className="relative border-l-2 border-text pl-8 md:pl-10 space-y-10">
          {experiences.map((item) => {
            const Icon = getIcon(item.role);

            return (
              <article key={`${item.role}-${item.company}`} className="group relative">
                <div className="absolute -left-[43px] md:-left-[51px] top-1 w-5 h-5 bg-background border-2 border-text flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Icon className="w-3 h-3 text-text group-hover:text-surface transition-colors" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                  {item.period}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight mt-2 group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <strong className="block text-accent font-semibold mb-3">{item.company}</strong>
                <p className="text-text-muted leading-relaxed max-w-xl">{item.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
