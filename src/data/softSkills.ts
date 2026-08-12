import type { SoftSkill } from '../types';

export const softSkills: SoftSkill[] = [
  {
    id: 'problem-solving',
    name: 'Resolução de Problemas',
    icon: 'Lightbulb',
    description: 'Abordagem analítica para identificar causas raiz e propor soluções eficazes.',
    context:
      'Investigação de falhas em aplicações self-hosted no Atlas, onde o sintoma aparece em um serviço e a causa costuma estar em outra camada.',
  },
  {
    id: 'teamwork',
    name: 'Trabalho em Equipe',
    icon: 'Users',
    description: 'Colaboração ativa, compartilhamento de conhecimento e apoio aos colegas.',
    context:
      'Dois anos na assessoria da diretoria administrativa do LEMA-UFRJ, alinhando equipes e acompanhando processos entre áreas diferentes.',
  },
  {
    id: 'adaptability',
    name: 'Adaptabilidade',
    icon: 'RefreshCw',
    description: 'Facilidade para aprender novas tecnologias e se ajustar a diferentes contextos.',
    context:
      'Transição de técnico em laticínios para desenvolvimento, com projetos próprios publicados ainda no primeiro ano de Sistemas de Informação.',
  },
  {
    id: 'organization',
    name: 'Organização',
    icon: 'ClipboardList',
    description: 'Gestão de tarefas, priorização e cumprimento de prazos.',
    context:
      'Rotinas de produção padronizadas na Terra Límpida: processo documentado, registro diário de dados e etapas que não admitem ser puladas.',
  },
  {
    id: 'curiosity',
    name: 'Curiosidade',
    icon: 'Search',
    description: 'Busca constante por aprendizado e melhoria contínua.',
    context:
      'Montagem e operação de um homelab próprio para hospedar minhas aplicações - fora de qualquer exigência acadêmica.',
  },
  {
    id: 'fast-learning',
    name: 'Aprendizado Rápido',
    icon: 'Zap',
    description: 'Capacidade de absorver e aplicar novos conhecimentos de forma eficiente.',
    context:
      'Node, TypeScript, React e Docker aplicados em projetos publicados - cada um aprendido durante a própria construção.',
  },
  {
    id: 'attention-to-detail',
    name: 'Atenção aos Detalhes',
    icon: 'Eye',
    description: 'Foco na qualidade do código, testes e revisão de funcionalidades.',
    context:
      'Análise de matéria-prima e controle de qualidade em produção de alimentos, onde um desvio não detectado a tempo compromete o lote inteiro.',
  },
  {
    id: 'autonomy',
    name: 'Autonomia',
    icon: 'UserCheck',
    description: 'Capacidade de trabalhar de forma independente e tomar decisões informadas.',
    context:
      'Projetos pessoais conduzidos da ideia ao deploy sem supervisão, incluindo a infraestrutura que os hospeda.',
  },
];
