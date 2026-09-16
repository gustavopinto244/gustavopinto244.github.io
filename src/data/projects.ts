import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'atlas-manager',
    name: 'Atlas Manager',
    featured: true,
    description:
      'Painel e API para administrar meu servidor Linux: monitoramento, controle de serviços e containers, agendamento de rotinas e backups em uma interface centralizada.',
    stack: ['TypeScript', 'Node.js', 'Express', 'Docker', 'Vitest'],
    areas: ['development', 'security-infra', 'automation-data'],
    link: 'https://github.com/gustavopinto244/atlas-manager',
    status: 'Self-hosted',
    highlights: [
      'Da API à operação: desenvolvido para administrar a infraestrutura que uso no dia a dia.',
    ],
    caseStudy: {
      challenge:
        'Administrar serviços do homelab sem repetir operações manuais por SSH, mantendo controle sobre ações que afetam a máquina real.',
      decisions: [
        'Separei regras de negócio das integrações com Docker, PM2 e systemd por meio de adaptadores.',
        'Combinei autenticação via Cloudflare Access com permissões por função e histórico de operações administrativas.',
        'Usei simulações nos testes de operações como desligamento e restauração antes de permitir efeitos no servidor.',
      ],
      limitation:
        'O painel administrativo tem acesso restrito. A demonstração em vídeo e a documentação permitem avaliar o projeto sem acesso ao servidor.',
      evidence: [
        {
          label: 'Arquitetura e decisões',
          href: 'https://github.com/gustavopinto244/atlas-manager/blob/main/docs/architecture.md',
        },
        {
          label: 'Funcionalidades e limitações',
          href: 'https://github.com/gustavopinto244/atlas-manager/blob/main/docs/capabilities.md',
        },
      ],
    },
    media: [
      { type: 'image', src: '/media/atlas-dashboard.png', caption: 'Dashboard do Atlas Manager' },
      {
        type: 'video',
        src: '/media/atlas-manager.mp4',
        poster: '/media/atlas-dashboard.png',
        caption: 'Demonstração do Atlas Manager em ação',
      },
    ],
  },
  {
    id: 'argos-career',
    name: 'ArgosCareer',
    description:
      'Automação da minha busca por estágio: coleta oportunidades, normaliza informações, remove duplicatas e organiza vagas por aderência ao perfil, com apoio de modelos de linguagem.',
    stack: ['TypeScript', 'NestJS', 'SQLite', 'Drizzle', 'LLMs', 'Vitest'],
    areas: ['development', 'automation-data'],
    link: 'https://github.com/gustavopinto244/argos-career',
    status: 'Em desenvolvimento',
    highlights: [
      'A IA extrai requisitos e busca evidências; a pontuação é calculada por regras explícitas no código.',
    ],
    caseStudy: {
      challenge:
        'Reduzir a leitura repetida de anúncios e organizar as oportunidades que fazem sentido para meu perfil.',
      decisions: [
        'Dividi o fluxo em coleta, normalização, deduplicação, pré-filtro e avaliação para evitar processar repetidamente a mesma vaga.',
        'Exigi evidências do perfil na análise dos requisitos, em vez de aceitar uma nota produzida livremente pelo modelo.',
        'Separei a coleta periódica da avaliação com IA e da entrega de resumos pelo Telegram.',
      ],
      limitation:
        'A calibração ainda é preliminar. A aderência ao anúncio apoia minha triagem e não representa uma previsão de aprovação em processos seletivos.',
      evidence: [
        {
          label: 'Como a pontuação funciona',
          href: 'https://github.com/gustavopinto244/argos-career/blob/main/docs/04-scoring-model.md',
        },
        {
          label: 'Estratégia de testes',
          href: 'https://github.com/gustavopinto244/argos-career/blob/main/docs/07-testing-strategy.md',
        },
      ],
    },
  },
  {
    id: 'ecommerce',
    name: 'E-commerce full-stack',
    description:
      'Loja com autenticação JWT, catálogo com filtros, carrinho persistente e checkout. O back-end integra as regras de compra à persistência em PostgreSQL.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/store-cart-project',
    liveLink: 'https://store-cart-project.vercel.app',
    isLive: true,
    status: 'Publicado',
    highlights: [
      'O preço é validado no servidor ao fechar o pedido: o cliente não define quanto paga.',
    ],
    caseStudy: {
      challenge:
        'Construir o fluxo de compra completo e conectar a interface às regras de negócio do servidor.',
      decisions: [
        'Implementei autenticação JWT para identificar os usuários da aplicação.',
        'Mantive a validação dos preços no servidor durante o checkout.',
        'Integrei uma interface React ao back-end Node.js e a um banco relacional PostgreSQL.',
      ],
      limitation:
        'Projeto de estudo. A demonstração apresenta o fluxo implementado, sem representar uma loja comercial em operação.',
      evidence: [
        {
          label: 'Código e instruções do projeto',
          href: 'https://github.com/gustavopinto244/store-cart-project#readme',
        },
      ],
    },
  },
  {
    id: 'task-list',
    supporting: true,
    name: 'Aplicação de tarefas',
    description:
      'Registro e login de usuários, autenticação e operações CRUD de tarefas com persistência em MongoDB e organização em MVC.',
    stack: ['Node.js', 'Express', 'MongoDB', 'MVC', 'Autenticação'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/task-list-project',
    isLive: true,
    liveLink: 'https://task.gustavopinto.dev.br',
    status: 'Publicado',
  },
  {
    id: 'atlas-homelab',
    supporting: true,
    name: 'Atlas — Homelab',
    description:
      'Mini PC de 8 GB mantido como servidor próprio para aplicações e APIs. Meu laboratório de containers, rede, deploy e manutenção de serviços Linux.',
    stack: ['Linux', 'Docker', 'Nginx', 'Cloudflare'],
    areas: ['security-infra'],
    status: 'Self-hosted',
    note: 'Infraestrutura pessoal, sem repositório público.',
  },
  {
    id: 'portfolio',
    supporting: true,
    name: 'Portfólio pessoal',
    description:
      'Site responsivo com projetos, trajetória e currículos por área. Duas páginas com React e TypeScript, conteúdo tipado e navegação acessível por teclado.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    areas: ['development'],
    link: 'https://github.com/gustavopinto244/gustavopinto244.github.io',
    isLive: true,
    liveLink: 'https://gustavopinto.dev.br',
    status: 'Publicado',
  },
];
