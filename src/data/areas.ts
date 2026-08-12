import type { Area } from '../types';

export const areas: Area[] = [
  {
    id: 'development',
    label: 'desenvolvimento',
    title: 'Desenvolvimento',
    icon: 'Code',
    description: 'APIs, back-end e aplicações web construídas de ponta a ponta.',
  },
  {
    id: 'security-infra',
    label: 'seguranca_infra',
    title: 'Segurança e Infraestrutura',
    icon: 'ShieldCheck',
    description: 'Servidores, containers, deploy e operação de um homelab próprio.',
  },
  {
    id: 'automation-data',
    label: 'automacao_dados',
    title: 'Automação e Dados',
    icon: 'Workflow',
    description: 'Rotinas automatizadas, integrações e coleta de dados.',
  },
];
