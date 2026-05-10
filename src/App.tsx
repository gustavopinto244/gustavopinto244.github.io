import type { ReactNode } from 'react';
import { MailIcon } from 'lucide-react';

type Skill = {
  title: string;
  description: string;
  tone: 'blue' | 'green';
  icon: ReactNode;
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
  status: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

const profile = {
  name: 'Gustavo Pinto da Conceição',
  role: 'Desenvolvedor Back-End em formação',
  location: 'Niterói - RJ',
  phone: '(21) 99629-8278',
  githubUser: 'gustavopinto244',
  github: 'https://github.com/gustavopinto244',
  linkedin: 'https://www.linkedin.com/in/gustavo-pinto-da-conceicao/',
  email: 'gustavopinto244@gmail.com',
};

const skills: Skill[] = [
  {
    title: 'Back-End com Node.js',
    description: 'Construção de APIs REST, regras de negócio e organização de serviços.',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M25 18 11 32l14 14" />
        <path d="m39 18 14 14-14 14" />
        <path d="m35 12-6 40" />
      </svg>
    ),
  },
  {
    title: 'Bancos de dados',
    description: 'Conhecimentos em SQL, NoSQL, modelagem e persistência de dados.',
    tone: 'green',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="16" rx="20" ry="8" />
        <path d="M12 16v16c0 4.4 9 8 20 8s20-3.6 20-8V16" />
        <path d="M12 32v16c0 4.4 9 8 20 8s20-3.6 20-8V32" />
      </svg>
    ),
  },
  {
    title: 'Aprendizado rápido',
    description: 'Facilidade para aprender, resolver problemas e trabalhar em equipe.',
    tone: 'blue',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 46h40" />
        <path d="M18 46V18h28v28" />
        <path d="M24 24h16" />
        <path d="M24 32h16" />
        <path d="M24 40h10" />
      </svg>
    ),
  },
];

const projects: Project[] = [
  {
    name: 'API de Lista de Tarefas com Autenticação',
    description:
      'Projeto back-end em desenvolvimento com registro e login de usuários, autenticação e integração com MongoDB para persistência de dados. A aplicação organiza tarefas com operações CRUD e boas práticas de estruturação.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'API REST', 'Autenticação'],
    link: 'https://github.com/gustavopinto244/task-list-project',
    status: 'Finalizado',
  },
  {
    name: 'Portfólio Gustavo Pinto',
    description:
      'Portfólio pessoal desenvolvido para apresentar perfil profissional, competências, experiências e projetos em um layout escuro com identidade visual neon.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS3', 'HTML5'],
    link: 'https://github.com/gustavopinto244/gustavopinto244.github.io',
    status: 'Publicado',
  },
];

const experiences: Experience[] = [
  {
    role: 'Queijeiro / Técnico em Laticínios',
    company: 'Terra Límpida Queijos Orgânicos',
    period: 'Maio 2023 - Fevereiro 2025',
    summary:
      'Atuação em ambiente produtivo com processos padronizados, controle de qualidade, análise de matéria-prima, registro de dados, documentação e execução de rotinas estruturadas.',
  },
  {
    role: 'Assessor da Diretoria de Administrativo',
    company: 'LEMA - UFRJ',
    period: 'Janeiro 2021 - Abril 2023',
    summary:
      'Organização de atividades internas, alinhamento entre equipes, apoio ao planejamento de eventos, coordenação de tarefas e acompanhamento de processos em ambiente colaborativo.',
  },
  {
    role: 'Graduando em Sistemas de Informação',
    company: 'Universidade La Salle - RJ',
    period: 'Março 2026 - Dezembro 2029',
    summary:
      'Formação em andamento com foco em desenvolvimento de software, banco de dados, lógica de programação e fundamentos de sistemas.',
  },
];

function App() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span>&lt;/&gt;</span>
        </a>

        <div className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projeto</a>
          <a href="#curriculo">Currículo</a>
        </div>
      </nav>

      <section id="inicio" className="hero-section">
        <div className="hero-line" aria-hidden="true" />

        <div className="hero-content">
          <p className="eyebrow">Portfólio de {profile.githubUser}</p>
          <h1>
            Clareza e organização
            <span> no back-end</span>
          </h1>
          <p className="hero-subtitle">
            Busco uma oportunidade de estágio em desenvolvimento de software, com foco em
            backend, para aplicar e expandir meus conhecimentos em frameworks, banco de dados
            e trabalho em equipe.
          </p>

          <div className="hero-actions" aria-label="Links principais">
            <a className="primary-button" href="#projetos">
              Ver projeto
            </a>
            <a className="secondary-button" href={`mailto:${profile.email}`}>
              Entrar em contato
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Resumo profissional">
          <div>
            <span className="status-dot" />
            Aberto para estágio
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
          <ul>
            <li>{profile.location}</li>
            <li>{profile.phone}</li>
            <li>{profile.email}</li>
            <li>@{profile.githubUser}</li>
          </ul>
        </aside>
      </section>

      <section id="sobre" className="skills-grid" aria-label="Competências">
        {skills.map((skill) => (
          <article className={`skill-card ${skill.tone}`} key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </article>
        ))}
      </section>

      <section id="projetos" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">GitHub</p>
          <h2>Projetos em destaque</h2>
        </div>

        <div className="project-grid featured-project-grid">
          {projects.map((project) => (
            <article className="project-card featured-project-card" key={project.name}>
              <div>
                <span className="project-status">{project.status}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>

              <div className="stack-list" aria-label="Tecnologias">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer">
                Abrir repositório
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="curriculo" className="content-section resume-section">
        <div className="section-heading">
          <p className="eyebrow">Currículo</p>
          <h2>Experiência e formação</h2>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>{profile.name}</span>
        <div className="social-links" aria-label="Links sociais">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg className="brand-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5v-1.78c-2.78.62-3.37-1.2-3.37-1.2-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7.07c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.7c0 .28.18.6.69.5A10.1 10.1 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
            </svg>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg className="brand-social-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4A1.84 1.84 0 1 0 5.3 7.68 1.84 1.84 0 0 0 5.35 4Zm6.75 4.98H9.05v10.27h3.18v-5.08c0-1.34.25-2.64 1.91-2.64 1.64 0 1.66 1.54 1.66 2.73v4.99H19v-5.63c0-2.77-.59-4.9-3.83-4.9-1.55 0-2.59.85-3.02 1.66h-.05v-1.4Z" />
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <MailIcon aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
