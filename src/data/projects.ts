import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'Atlas Manager - Gerenciamento e Monitoramento de Servidor',
    description:
      'Aplicação que administra o Atlas pelo navegador: métricas de saúde da máquina, controle de serviços, agendamento de rotinas, backups e operações administrativas numa interface centralizada e protegida - no lugar de abrir SSH para cada tarefa.',
    stack: ['TypeScript', 'Node.js', 'Express', 'Linux', 'Docker'],
    areas: ['security-infra', 'automation-data'],
    link: 'https://github.com/gustavopinto244/atlas-manager',
    status: 'Self-hosted',
    media: [
      {
        type: 'image',
        src: '/media/atlas-dashboard.png',
        caption: 'Dashboard do Atlas Manager',
      },
      {
        type: 'video',
        src: '/media/atlas-manager.mp4',
        poster: '/media/atlas-dashboard.png',
        caption: 'Demonstração do Atlas Manager em ação',
      },
    ],
  },
  {
    name: 'Atlas - Homelab',
    description:
      'Mini PC de 8 GB de RAM montado como homelab e mantido por mim: hospeda meus servidores, aplicações e APIs, e é onde tudo que eu construo entra no ar de verdade. Serviu de laboratório para deploy, containers, rede e rotinas de manutenção.',
    stack: ['Linux', 'Docker', 'Self-hosting'],
    areas: ['security-infra'],
    status: 'Self-hosted',
    note: 'Infraestrutura própria - sem repositório público.',
    media: [],
  },
  {
    name: 'Projeto de E-commerce Full-Stack',
    description:
      'E-commerce full-stack com autenticação JWT, catálogo de produtos com filtros e ordenação, carrinho de compras persistente e checkout com validação de preços no servidor.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/store-cart-project',
    isLive: true,
    liveLink: 'https://store-cart-project.vercel.app',
    status: 'Publicado',
    highlights: [
      'Preços validados no servidor no fechamento do pedido: o cliente nunca define quanto paga.',
    ],
  },
  {
    name: 'API de Lista de Tarefas com Autenticação',
    description:
      'Projeto back-end de modelo MVC com registro e login de usuários, autenticação e integração com MongoDB para persistência de dados. A aplicação organiza tarefas com operações CRUD e boas práticas de estruturação.',
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'API REST', 'Autenticação'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/task-list-project',
    isLive: true,
    liveLink: 'https://task.gustavopinto.dev.br',
    status: 'Publicado',
  },
  {
    name: 'Portfólio Pessoal',
    description:
      'Portfólio pessoal desenvolvido para apresentar perfil profissional, competências, experiências e projetos.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/gustavopinto244.github.io',
    isLive: true,
    liveLink: 'https://gustavopinto.dev.br',
    status: 'Publicado',
  },
  {
    name: 'API de Vagas - Agregador Semanal de Oportunidades',
    description:
      'Serviço que automatiza a busca semanal de vagas que hoje faço manualmente: coleta as oportunidades, normaliza os dados em um formato único e notifica as que combinam com os critérios definidos.',
    stack: ['NestJS', 'Make', 'Hermes'],
    areas: ['automation-data'],
    status: 'Planejado',
  },
];
