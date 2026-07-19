import { experiences } from '../../data';
import { Briefcase, GraduationCap, Building2, Calendar } from 'lucide-react';

const getIcon = (role: string) => {
  if (role.toLowerCase().includes('graduando')) return GraduationCap;
  if (role.toLowerCase().includes('assessor')) return Building2;
  return Briefcase;
};

export function Experience() {
  const totalYears = '4+';
  const totalExperiences = experiences.length;

  return (
    <section id="curriculo" className="relative py-24">
      <div className="absolute -right-16 bottom-1/4 w-56 h-56 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
        <div className="lg:sticky lg:top-8">
          <div className="border border-border rounded-xl bg-surface/40 backdrop-blur-sm p-6">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <p className="text-primary text-sm font-bold mb-2">Currículo</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência e formação</h2>
            <p className="text-text-muted mb-6">
              Trajetória profissional e acadêmica que moldou minhas competências.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg bg-surface/60">
                <div className="p-2 rounded-md bg-accent/10">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="block text-xl font-black text-accent">{totalExperiences}</span>
                  <span className="text-xs text-text-muted">experiências</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-4">
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />
          
          {experiences.map((item) => {
            const Icon = getIcon(item.role);
            
            return (
              <article
                key={`${item.role}-${item.company}`}
                className="group relative pl-12 py-5 pr-5 border border-border bg-surface/80 backdrop-blur-sm rounded-xl hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="absolute left-3 top-6 w-8 h-8 rounded-full bg-surface border border-accent/50 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                
                <span className="text-primary text-sm font-bold">{item.period}</span>
                <h3 className="text-lg font-bold mt-2">{item.role}</h3>
                <strong className="block text-accent mb-3">{item.company}</strong>
                <p className="text-text-muted leading-relaxed">{item.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
