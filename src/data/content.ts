import type { Profile, Skill, SoftSkill, Project, Experience } from '../types';

export const profile: Profile = {
  name: 'Gustavo Pinto da Conceição',
  role: 'Desenvolvedor Full-Stack em formação',
  location: 'Niterói - RJ',
  phone: '(21) 99629-8278',
  githubUser: 'gustavopinto244',
  github: 'https://github.com/gustavopinto244',
  linkedin: 'https://www.linkedin.com/in/gustavo-pinto-da-conceicao/',
  email: 'gustavopinto244@gmail.com',
};

export const skills: Skill[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: 'Server',
    category: 'languages',
    level: 'intermediario',
    proficiency: 60,
    description: 'Construção de APIs REST, middlewares, autenticação e integração com bancos de dados.',
    examples: ['API de Lista de Tarefas', 'E-commerce Back-end'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'Code',
    category: 'languages',
    level: 'intermediario',
    proficiency: 50,
    description: 'Tipagem estática, interfaces, generics e boas práticas de tipagem em projetos.',
    examples: ['Todos os projetos atuais'],
  },
  {
    id: 'react',
    name: 'React',
    icon: 'Layout',
    category: 'languages',
    level: 'iniciante',
    proficiency: 40,
    description: 'Componentes funcionais, hooks, gerenciamento de estado e renderização condicional.',
    examples: ['Portfólio Pessoal', 'E-commerce Front-end'],
  },
  {
    id: 'rest',
    name: 'APIs REST',
    icon: 'Globe',
    category: 'techniques',
    level: 'intermediario',
    proficiency: 55,
    description: 'Design de endpoints, métodos HTTP, status codes, autenticação e documentação.',
    examples: ['API de Lista de Tarefas', 'E-commerce API'],
  },
  {
    id: 'solid',
    name: 'SOLID',
    icon: 'Layers',
    category: 'techniques',
    level: 'iniciante',
    proficiency: 15,
    description: 'Princípios de design orientado a objetos para código mais manutenível e flexível.',
    examples: ['Estudo teórico'],
  },
  {
    id: 'patterns',
    name: 'Design Patterns',
    icon: 'Puzzle',
    category: 'techniques',
    level: 'iniciante',
    proficiency: 5,
    description: 'Padrões como Factory, Singleton, Repository e suas aplicações em projetos reais.',
    examples: ['Estudo teórico'],
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: 'GitBranch',
    category: 'tools',
    level: 'intermediario',
    proficiency: 80,
    description: 'Controle de versão, branches, merge, pull requests e workflows colaborativos.',
    examples: ['Todos os projetos'],
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: 'Database',
    category: 'tools',
    level: 'intermediario',
    proficiency: 50,
    description: 'Modelagem relacional, queries, joins, índices e integração com ORMs.',
    examples: ['E-commerce Full-Stack'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: 'Database',
    category: 'tools',
    level: 'intermediario',
    proficiency: 50,
    description: 'Modelagem NoSQL, operações CRUD, agregações e integração com Mongoose.',
    examples: ['API de Lista de Tarefas'],
  },
];

export const softSkills: SoftSkill[] = [
  {
    id: 'problem-solving',
    name: 'Resolução de Problemas',
    icon: 'Lightbulb',
    description: 'Abordagem analítica para identificar causas raiz e propor soluções eficazes.',
    context: 'Aprimorada através de debugging e desenvolvimento de features complexas.',
  },
  {
    id: 'teamwork',
    name: 'Trabalho em Equipe',
    icon: 'Users',
    description: 'Colaboração ativa, compartilhamento de conhecimento e apoio aos colegas.',
    context: 'Experiência em ambientes colaborativos como LEMA-UFRJ e projetos acadêmicos.',
  },
  {
    id: 'adaptability',
    name: 'Adaptabilidade',
    icon: 'RefreshCw',
    description: 'Facilidade para aprender novas tecnologias e se ajustar a diferentes contextos.',
    context: 'Transição de carreira e aprendizado contínuo em desenvolvimento de software.',
  },
  {
    id: 'organization',
    name: 'Organização',
    icon: 'ClipboardList',
    description: 'Gestão de tarefas, priorização e cumprimento de prazos.',
    context: 'Experiência em ambientes produtivos com processos padronizados.',
  },
  {
    id: 'curiosity',
    name: 'Curiosidade',
    icon: 'Search',
    description: 'Busca constante por aprendizado e melhoria contínua.',
    context: 'Estudo autodidata e exploração de novas tecnologias e padrões.',
  },
];

export const projects: Project[] = [
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
  {
    name: 'Projeto de E-commerce Full-Stack',
    description:
      'E-commerce full-stack com autenticação JWT, catálogo de produtos com filtros e ordenação, carrinho de compras persistente e checkout com validação de preços no servidor.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/gustavopinto244/store-cart-project',
    status: 'Publicado',
  },
];

export const experiences: Experience[] = [
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
