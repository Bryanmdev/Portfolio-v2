# Portfolio V2 Plan

## 1. Contexto e Objetivos
- **Objetivo**: Desenvolver um portfólio moderno, profissional e atraente, com uma estética minimalista e "clean".
- **Tecnologias**: React, Next.js (App Router), Tailwind CSS, Framer Motion (para animações fluidas) e Lucide React (ícones).
- **Estilo Visual**: Minimalista e Clean. Foco em tipografia forte, excelente uso de espaço em branco (whitespace), alto contraste e animações de interface sutis (fade-ins, reveals, hover effects macios). Evitar excesso de cores vibrantes ou "neon genérico", priorizando uma paleta sofisticada (ex: tons de base off-white ou dark-slate sólido com uma cor de destaque madura e profissional).
- **Conteúdo Principal**:
  - **Identidade**: Desenvolvedor Full Stack, Estudante de Ciência da Computação, focado também em Segurança da Informação e Desenvolvimento de Jogos.
  - **Projetos Principais**:
    1. **Brasil Hosp**: E-commerce/Catálogo de produtos médicos.
    2. **Argus One**: Gerenciamento de segurança pessoal com criptografia (Foco em Segurança/Fullstack).
    3. **Chatbot de Cobranças**: Protótipo de automação (Foco em Backend/IA).
    4. Outros exemplos do portfólio antigo (Frontend World, Programming Showcase).

## 2. Arquitetura da Solução
- O portfólio será prioritariamente uma *Single Page Application* (SPA) com âncoras para navegação suave, ou seções muito bem delimitadas.
- **Seções Planejadas**:
  - `Hero (Início)`: Apresentação de impacto, com tipografia grande e texto direto.
  - `Sobre Mim`: Breve histórico e proposta de valor.
  - `Habilidades (Skills)`: Categorizadas para mostrar o leque "Full Stack & Sec".
  - `Projetos (Work)`: Cards minimalistas detalhando cada projeto, tecnologias usadas, e links (Deploy/GitHub).
  - `Contato`: Links rápidos para LinkedIn, GitHub, Email e Currículo.

## 3. Fases de Implementação

### Fase 1: Fundação
- [ ] Instalar dependências adicionais (Framer Motion, Lucide React).
- [ ] Configurar variáveis de design no Tailwind CSS (Cores, Fontes, Utilitários).
- [ ] Estruturar o `layout.tsx` (Navbar fixa, rodapé).

### Fase 2: Componentes Core
- [ ] Desenvolver Componente Secional (Wrapper para Framer Motion fade-in).
- [ ] Desenvolver Componente de Card de Projeto.
- [ ] Desenvolver Botões e Links com micro-interações.

### Fase 3: Montagem das Seções
- [ ] Implementar `Hero Section`.
- [ ] Implementar `About & Skills Section`.
- [ ] Implementar `Projects Section`.
- [ ] Implementar `Contact Section`.

### Fase 4: Refinamento e Auditoria
- [ ] Teste de Responsividade (Mobile First).
- [ ] Preenchimento otimizado do SEO (Metadata Next.js).
- [ ] Auditoria de UX/UI fina (espaçamentos e cores).

## 4. Estratégias de Aprovação
O desenvolvimento seguirá a metodologia e regras do projeto, focando especialmente nas diretrizes `frontend-design` e de revisão de UI/UX antes da finalização. A cada grande etapa concluída, revisaremos se o aspecto continua profissional, limpo e atende à expectativa do usuário.
