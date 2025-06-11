# 🚀 Portfolio de Jackson Porciúncula

Um site portfolio moderno e responsivo com design estilo futurista/tech, construído com React e Tailwind CSS. O site apresenta uma interface elegante, animações fluidas e uma experiência de usuário aprimorada em todos os dispositivos.

![Portfolio Preview](./public/preview.png)

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Características](#-características)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Componentes Reutilizáveis](#-componentes-reutilizáveis)
- [Hooks Personalizados](#-hooks-personalizados)
- [Integrações de API](#-integrações-de-api)
- [UI/UX & Design](#-uiux--design)
- [SEO & Otimizações](#-seo--otimizações)
- [Responsive Design](#-responsive-design)
- [Performance](#-performance)
- [Como Executar](#-como-executar)
- [Manutenção e Atualização](#-manutenção-e-atualização)

## 🛠 Tecnologias

O projeto utiliza diversas tecnologias modernas de desenvolvimento front-end:

### Core
- **React** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** - Superset de JavaScript com tipagem estática para maior segurança e produtividade
- **Vite** - Ferramenta de build extremamente rápida para desenvolvimento moderno
- **React Router** - Gerenciamento de rotas e navegação no lado do cliente

### Styling
- **Tailwind CSS** - Framework CSS utility-first para desenvolvimento rápido
- **Shadcn/UI** - Componentes acessíveis e estilizáveis baseados em Radix UI
- **Framer Motion** - Biblioteca para criar animações fluidas e interativas
- **Lucide Icons** - Conjunto de ícones SVG consistentes e personalizáveis

### State Management
- **React Query (TanStack)** - Biblioteca para gerenciamento de estado de dados assíncronos

### Data Fetching
- **Axios** - Cliente HTTP baseado em promessas para requisições de API

### Tooling
- **ESLint** - Ferramenta de linting para identificar e reportar padrões em código
- **PostCSS** - Ferramenta para transformar CSS com plugins JavaScript
- **Bun** - Toolkit e runtime JavaScript para desenvolvimento rápido

### SEO & PWA
- **React Helmet** - Gerenciamento de metadados e tags para SEO
- **Service Worker** - Suporte a PWA para experiência offline e melhor desempenho
- **Schema.org JSON-LD** - Estruturação de dados para melhor compreensão por motores de busca

## ✨ Características

### Geral
- **Design Moderno e Elegante** - Interface com estética tech/futurista em tons de azul e roxo
- **Navegação Fluida** - Transições de página suaves com animações de entrada e saída
- **Totalmente Responsivo** - Experiência consistente em desktops, tablets e dispositivos móveis
- **Tema Dark** - Design com tema escuro otimizado para leitura prolongada e estética tech

### Seções
- **Portfolio** - Exibição de projetos de desenvolvimento front-end com descrições e links
- **UX/UI** - Estudos de caso e artigos relacionados a design e experiência do usuário


### UX/UX
- **Animações Sutis** - Microinterações e animações que melhoram a experiência do usuário
- **Estados de Loading** - Feedback visual durante o carregamento de dados
- **Tratamento de Erros** - Mensagens amigáveis quando algo dá errado
- **Elementos Decorativos** - Efeitos de blur, gradientes animados e partículas que se movem suavemente

## 📁 Estrutura do Projeto

O projeto segue uma arquitetura organizada e escalável:

```
src/
├── components/         # Componentes reutilizáveis
│   ├── ui/             # Componentes básicos de UI
│   ├── SEO/            # Componentes para otimização SEO 
│   └── ...             # Componentes de maior complexidade
├── hooks/              # Hooks personalizados
├── lib/                # Utilitários e funções auxiliares
├── pages/              # Componentes de página
└── main.tsx            # Ponto de entrada da aplicação
```

## 🧩 Componentes Reutilizáveis

O projeto foi desenvolvido com um forte foco na reutilização de componentes:

### Layout
- **Layout.tsx** - Estrutura principal com animações de fundo e decorações
- **Header.tsx** - Cabeçalho com navegação responsiva e avatar
- **Footer.tsx** - Rodapé com copyright e links sociais

### UI Components
- **SectionTitle** - Títulos de seção com ícones e subtítulos
- **LinkCard** - Cards clicáveis para exibir links e projetos
- **CaseStudyCard** - Cards para exibir estudos de caso com imagens e descrições
- **SocialIcons** - Conjunto de ícones sociais com links externos
- **SerieCard** - Card específico para mostrar séries literárias (implementado mas removido temporariamente)

### SEO Components
- **SEO** - Componente principal para gerenciamento de metadados e tags
- **SchemaOrg** - Componente para adicionar dados estruturados JSON-LD

### UI Primitives (via Shadcn/UI)
- **Button** - Botões estilizados com variantes
- **Avatar** - Componente para exibir imagens de perfil
- **Toaster/Sonner** - Sistema de notificações toast
- **Tooltip** - Dicas para elementos de UI

## 🪝 Hooks Personalizados

Hooks React personalizados para lógica reutilizável:

- **useMediumArticles** - Hook para buscar e atualizar periodicamente artigos do Medium
  - Gerencia estados de loading, erro e dados
  - Suporta refetch automático em intervalos configuráveis
  - Inclui tratamento de erros integrado

## 🌐 Integrações de API

### Medium API
- Integração com o feed RSS do Medium via RSS2JSON
- Extração automática de miniaturas de artigos do conteúdo
- Cache e atualização periódica dos dados


- Carregamento condicional para melhorar privacidade e desempenho

## 🎨 UI/UX & Design

### Design System
- **Paleta de Cores** - Tons escuros com acentos em azul e roxo
- **Tipografia** - Fontes sem serifa para melhor legibilidade
- **Espaçamento** - Sistema consistente de margens e paddings
- **Cards** - Elementos de vidro (glass-effect) com bordas sutis
- **Ícones** - Ícones consistentes que correspondem ao contexto

### Animações
- **Page Transitions** - Animações suaves entre páginas
- **Hover Effects** - Feedback visual ao passar o mouse sobre elementos
- **Background Elements** - Elementos decorativos animados no fundo
- **Loading States** - Animações durante estados de carregamento

## 🔍 SEO & Otimizações

O projeto implementa diversas práticas para melhorar a visibilidade nos motores de busca:

### Metadados Otimizados
- **Title e Description** - Tags meta otimizadas para cada página
- **OpenGraph/Facebook** - Metadados para compartilhamento no Facebook
- **Twitter Cards** - Metadados para compartilhamento no Twitter
- **Canonical URLs** - Links canônicos para evitar conteúdo duplicado

### Dados Estruturados
- **Schema.org JSON-LD** - Marcação de dados estruturados para melhor compreensão pelos motores de busca
- **Perfil Pessoa** - Informações estruturadas sobre o desenvolvedor
- **WebSite** - Informações estruturadas sobre o site
- **ProfilePage** - Informações estruturadas sobre o portfolio

### PWA (Progressive Web App)
- **Manifest.json** - Configuração para instalação como aplicativo
- **Service Worker** - Suporte para funcionamento offline
- **Ícones e Theme Colors** - Identidade visual para instalação como app

### Otimizações
- **Sitemap XML** - Mapa do site para indexação por rastreadores
- **Robots.txt** - Configuração para controle de rastreamento
- **Imagem OpenGraph** - Imagem personalizada para compartilhamento social


## 📱 Responsive Design

O projeto segue uma abordagem mobile-first com adaptações para diversos tamanhos de tela:

- **Mobile (< 640px)** - Layout em coluna única com conteúdo centralizado
- **Tablet (>= 640px)** - Layout com mais espaço de respiro e alguns elementos lado a lado
- **Desktop (>= 1024px)** - Layout completo com elementos decorativos adicionais e organização otimizada

Estratégias de responsividade:
- Uso de unidades flexíveis (`rem`, porcentagens)
- Grid e Flexbox para layouts adaptativos
- Media queries para ajustes específicos
- Alinhamento diferenciado em mobile (centralizado) vs desktop (à esquerda)

## ⚡ Performance

O projeto é otimizado para carregar rapidamente e funcionar suavemente:

- **Code Splitting** - Carregamento de código sob demanda
- **Lazy Loading** - Imagens e componentes carregados quando necessário
- **Efficient Bundling** - Bundle otimizado com Vite
- **Caching** - Estratégias de cache para dados externos
- **Optimized Animations** - Animações otimizadas usando Framer Motion
- **Service Worker** - Cache de recursos para carregamento rápido e funcionalidade offline

## 🚀 Como Executar

Para rodar o projeto localmente:

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/jacksonporciuncula-portfolio.git
cd jacksonporciuncula-portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Para build de produção
npm run build
```

## 🔧 Manutenção e Atualização

### Adicionar Novos Projetos

Para adicionar novos projetos à seção Portfolio, edite o arquivo `src/pages/Portfolio.tsx`:

```tsx
const devProjects = [
  {
    title: "Novo Projeto",
    description: "Descrição do novo projeto",
    url: "https://url-do-projeto.com",
    icon: <ExternalLink size={20} />
  },
  // Projetos existentes...
];
```

### Atualizar Informações Pessoais

Para atualizar informações de perfil, edite o componente Header em `src/components/Header.tsx`.

### Atualizar Metadados SEO

Para atualizar metadados de SEO, edite o componente SEO em `src/components/SEO/SEO.tsx`.

### Atualizar Dados Estruturados

Para atualizar os dados estruturados Schema.org, edite o componente SchemaOrg em `src/components/SEO/SchemaOrg.tsx`.

### Adicionar Nova Seção

1. Crie um novo componente em `src/pages/`
2. Adicione a rota em `src/App.tsx`
3. Adicione o link de navegação em `src/components/Header.tsx`
4. Atualize o sitemap.xml com a nova URL

---

Desenvolvido com ❤️ por Jackson Porciúncula
