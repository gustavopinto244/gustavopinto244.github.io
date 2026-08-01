import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'API de Lista de Tarefas com Autenticação',
    description:
      'Projeto back-end de modelo MVC com registro e login de usuários, autenticação e integração com MongoDB para persistência de dados. A aplicação organiza tarefas com operações CRUD e boas práticas de estruturação.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'API REST', 'Autenticação'],
    link: 'https://github.com/gustavopinto244/task-list-project',
    isLive: true,
    liveLink: 'https://gustavopinto.dev.br',
    status: 'Publicado',
  },
  {
    name: 'Portfólio Pessoal',
    description:
      'Portfólio pessoal desenvolvido para apresentar perfil profissional, competências, experiências e projetos',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/gustavopinto244/gustavopinto244.github.io',
    isLive: true,
    liveLink: 'https://gustavopinto244.github.io',
    status: 'Publicado',
  },
  {
    name: 'Projeto de E-commerce Full-Stack',
    description:
      'E-commerce full-stack com autenticação JWT, catálogo de produtos com filtros e ordenação, carrinho de compras persistente e checkout com validação de preços no servidor.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://github.com/gustavopinto244/store-cart-project',
    isLive: true,
    liveLink: 'https://store-cart-project.vercel.app',
    status: 'Publicado',
  },
];
