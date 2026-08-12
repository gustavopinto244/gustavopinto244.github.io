import { about, profile } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export function About() {
  const initials = profile.name
    .split(' ')
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

  return (
    <section id="about" className="pt-16 md:pt-24">
      <SectionHeader
        command="cat ~/sobre.md"
        title="Sobre mim"
        description={about.headline}
        meta={
          <p className="text-sm text-text-muted">
            {profile.role}
          </p>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        <aside className="lg:sticky lg:top-24">
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-text-muted">~/perfil</span>
            </div>

            {about.photo ? (
              <img
                src={about.photo}
                alt={about.photoAlt ?? profile.name}
                className="w-full aspect-square object-cover"
              />
            ) : (
              <div className="flex aspect-square items-center justify-center border-b border-border bg-background">
                <span className="font-display text-6xl font-bold text-primary/25 [text-shadow:0_0_40px_var(--color-primary)]">
                  {initials}
                </span>
              </div>
            )}

            <dl className="divide-y divide-border text-sm">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 px-4 py-3">
                  <dt className="text-xs text-text-muted">
                    <span className="text-primary">$</span> {fact.label}
                  </dt>
                  <dd className="text-sm leading-snug">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        <div>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-text-muted leading-relaxed mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#resumes">Ver currículos</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
