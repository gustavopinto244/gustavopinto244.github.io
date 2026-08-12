import type { About } from '../types';

export const about: About = {
  headline: 'Transição de carreira para o back-end.',

  paragraphs: [
    'Passei quase dois anos como técnico em laticínios, em um ambiente onde processo não é burocracia: cada lote depende de matéria-prima analisada, etapas cumpridas na ordem certa e dados registrados no momento certo. Um desvio que ninguém percebe cedo custa a produção inteira.',

    'Hoje curso Sistemas de Informação na Universidade La Salle e desenvolvo back-end. Meus projetos partiram do básico (CRUD, autenticação, modelagem de dados) e foram ficando mais completos: uma API REST com autenticação e MongoDB, um e-commerce full-stack onde o preço do pedido é validado no servidor, e o Atlas, um mini PC de 8 GB que virou meu homelab e hoje hospeda meus servidores, aplicações e APIs.',

    'O Atlas foi o projeto que mais me ensinou, porque não terminou no deploy. Manter as coisas de pé exige entender o que está acontecendo na máquina, e por isso construí um painel próprio para monitorar saúde, controlar serviços, agendar rotinas e fazer backups sem abrir SSH para cada tarefa. Foi por esse caminho que a infraestrutura e a automação entraram nos meus planos junto com o desenvolvimento.',

    'Procuro um estágio onde eu possa contribuir com desenvolvimento, infraestrutura, dados ou automação enquanto evoluo tecnicamente.',
  ],

  photo: '/photo.png',
  photoAlt: 'Gustavo Pinto da Conceição',

  facts: [
    { label: 'formação', value: 'Sistemas de Informação - Universidade La Salle RJ' },
    { label: 'período', value: '2º período' },
    { label: 'conclusão', value: 'Previsão: dezembro de 2029' },
    { label: 'localização', value: 'Niterói - RJ' },
    { label: 'objetivo', value: 'Estágio em tecnologia' },
    { label: 'modo de trabalho', value: 'Remoto, híbrido ou presencial' },
    { label: 'turno', value: 'Disponível das 6h às 17h' },
    { label: 'disponibilidade', value: 'Disponível para 6h/dia' },
  ],
};
