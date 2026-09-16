# Portfólio — Gustavo Pinto da Conceição

Desenvolvedor back-end em formação, cursando Sistemas de Informação na Universidade La Salle (RJ).
Este repositório é o código-fonte do meu portfólio: um site em React + TypeScript onde reúno os
projetos que construí, as tecnologias que uso e a trajetória que me trouxe até aqui.

**🔗 [gustavopinto.dev.br](https://gustavopinto.dev.br)** · Niterói — RJ ·
[LinkedIn](https://www.linkedin.com/in/gustavo-pinto-da-conceicao/) ·
[gustavopinto244@gmail.com](mailto:gustavopinto244@gmail.com)

> Disponível para estágio em tecnologia.

## Áreas de atuação

Organizo meus projetos e minhas competências em três frentes:

| Frente                         | O que envolve                                                           |
| ------------------------------ | ----------------------------------------------------------------------- |
| **Desenvolvimento**            | APIs REST, back-end e aplicações web construídas de ponta a ponta       |
| **Segurança e Infraestrutura** | servidores Linux, containers, deploy e a operação de um homelab próprio |
| **Automação e Dados**          | rotinas automatizadas, integrações e coleta de dados                    |

## Projetos

| Projeto                     | Descrição                                                                                                            | Links                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Atlas**                   | Meu homelab: um mini PC de 8 GB que hospeda meus servidores, aplicações e APIs — onde tudo que construo entra no ar. | infraestrutura própria                                                                                               |
| **Atlas Manager**           | Aplicação que administra o Atlas pelo navegador: métricas da máquina, controle de serviços, agendamentos e backups.  | [repositório](https://github.com/gustavopinto244/atlas-manager)                                                      |
| **ArgosCareer**             | Coleta, organização e priorização de vagas com NestJS, SQLite e apoio de modelos de linguagem. Em desenvolvimento.   | [repositório](https://github.com/gustavopinto244/argos-career)                                                       |
| **E-commerce Full-Stack**   | Catálogo com filtros, carrinho persistente e checkout com validação de preços no servidor.                           | [repositório](https://github.com/gustavopinto244/store-cart-project) · [site](https://store-cart-project.vercel.app) |
| **API de Lista de Tarefas** | API REST em MVC com registro, login, autenticação e persistência em MongoDB.                                         | [repositório](https://github.com/gustavopinto244/task-list-project) · [site](https://task.gustavopinto.dev.br)       |
| **Portfólio Pessoal**       | Este projeto.                                                                                                        | [repositório](https://github.com/gustavopinto244/gustavopinto244.github.io) · [site](https://gustavopinto.dev.br)    |

## Sobre este projeto

Site de duas páginas — a home apresenta projetos, competências e três currículos por área; `/about/` detalha a trajetória. Os projetos principais incluem decisões técnicas, limitações e links para evidências.

**Stack:** React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · lucide-react

Algumas decisões que tomei aqui:

- **Projetos, competências, currículos e perfil vivem em `src/data/`**, com tipos em `src/types/`. Textos de apresentação e agrupamentos visuais ficam nos componentes.
- **Multi-página sem router.** Duas entradas HTML no build do Vite resolvem `/` e `/about/` com URLs
  reais, sem adicionar dependência nem depender de fallback de SPA no GitHub Pages.
- **Áreas tipadas** associam projetos e currículos a desenvolvimento, infraestrutura e automação. As competências exibem cinco itens por grupo inicialmente, com expansão para os demais.
- **Sem dependências de UI.** Abas, filtros, grid de competências e o lightbox de mídia são
  componentes próprios, com papéis ARIA e navegação por teclado.
- **Deploy automático** para GitHub Pages a cada push na `main`.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/ com as duas páginas
```

## Estrutura

```
src/
├── components/
│   ├── ui/        # Componentes compartilhados, como MediaGallery e EnglishHighlight
│   ├── sections/  # Hero, Projects, Skills, About, Experience, Resumes
│   └── layout/    # Navigation, Footer
├── data/          # todo o conteúdo do site
├── types/         # definições TypeScript
└── index.css      # tema e tokens do Tailwind
```

Instruções de manutenção do conteúdo estão em [MAINTENANCE.md](MAINTENANCE.md).
