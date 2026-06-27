// src/data/roadmapData.js

export const ROADMAP = [
  {
    id: "fundamentos",
    titulo: "Fundamentos da Computação",
    emoji: "🧠",
    cor: "roxo",
    resumo: "A base de tudo: lógica, estruturas de dados e os princípios que tornam seu código profissional.",
    topicos: [
      { nome: "Lógica de Programação", prioridade: "obrigatoria", horas: "30-40h", nivel: "Júnior", desc: "Traduzir problemas reais em passos que o computador executa." },
      { nome: "Estruturas de Dados", prioridade: "obrigatoria", horas: "50-70h", nivel: "Júnior/Pleno", desc: "Listas, pilhas, filas, árvores, grafos e hash maps." },
      { nome: "Algoritmos", prioridade: "obrigatoria", horas: "40-60h", nivel: "Júnior/Pleno", desc: "Ordenação, busca, recursão e programação dinâmica." },
      { nome: "Complexidade (Big O)", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior/Pleno", desc: "Medir e comparar a eficiência de algoritmos." },
      { nome: "Programação Orientada a Objetos", prioridade: "obrigatoria", horas: "25-35h", nivel: "Júnior", desc: "Os 4 pilares: encapsulamento, herança, polimorfismo, abstração." },
      { nome: "Design Patterns Essenciais", prioridade: "alta", horas: "30-40h", nivel: "Pleno", desc: "Soluções testadas para problemas recorrentes de design." },
      { nome: "Princípios SOLID", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "5 princípios que tornam o código manutenível e testável." },
      { nome: "Clean Code", prioridade: "alta", horas: "20-25h", nivel: "Pleno", desc: "Escrever código legível e fácil de manter." },
      { nome: "Clean Architecture", prioridade: "media", horas: "20-30h", nivel: "Pleno/Sênior", desc: "Isolar regras de negócio de detalhes técnicos." },
    ],
  },
  {
    id: "java",
    titulo: "Java",
    emoji: "☕",
    cor: "laranja",
    resumo: "A linguagem mais demandada no mercado Backend brasileiro, do básico ao avançado.",
    subgrupos: [
      {
        nome: "Básico",
        topicos: [
          { nome: "Sintaxe da Linguagem", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior", desc: "Classes, método main, pacotes, imports." },
          { nome: "Variáveis e Tipos de Dados", prioridade: "obrigatoria", horas: "8-12h", nivel: "Júnior", desc: "Primitivos vs referência, BigDecimal para dinheiro." },
          { nome: "Operadores", prioridade: "obrigatoria", horas: "5-8h", nivel: "Júnior", desc: "Aritméticos, relacionais, lógicos, ternário." },
          { nome: "Estruturas de Decisão", prioridade: "obrigatoria", horas: "6-10h", nivel: "Júnior", desc: "if/else, switch tradicional e switch expression." },
          { nome: "Estruturas de Repetição", prioridade: "obrigatoria", horas: "6-10h", nivel: "Júnior", desc: "for, while, do-while, for-each." },
          { nome: "Arrays", prioridade: "obrigatoria", horas: "8-12h", nivel: "Júnior", desc: "Unidimensionais, multidimensionais e métodos utilitários." },
          { nome: "Métodos", prioridade: "obrigatoria", horas: "8-12h", nivel: "Júnior", desc: "Parâmetros, retorno, sobrecarga, varargs." },
        ],
      },
      {
        nome: "Intermediário",
        topicos: [
          { nome: "Classes e Objetos", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior/Pleno", desc: "Construtores, this, modificadores de acesso." },
          { nome: "Encapsulamento", prioridade: "obrigatoria", horas: "5-8h", nivel: "Júnior/Pleno", desc: "Proteger o estado interno de um objeto." },
          { nome: "Herança", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "extends, super e sobrescrita de métodos." },
          { nome: "Polimorfismo", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "Mesmo método, comportamentos diferentes." },
          { nome: "Interfaces", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Contratos — base do Dependency Inversion e do Spring." },
          { nome: "Classes Abstratas", prioridade: "media", horas: "5-8h", nivel: "Pleno", desc: "Base parcial compartilhada entre subclasses." },
          { nome: "Collections Framework", prioridade: "obrigatoria", horas: "20-30h", nivel: "Pleno", desc: "List, Set, Map, Queue — o mais usado no dia a dia." },
          { nome: "Generics", prioridade: "alta", horas: "10-15h", nivel: "Pleno", desc: "Classes e métodos parametrizados por tipo." },
          { nome: "Exceptions", prioridade: "obrigatoria", horas: "12-18h", nivel: "Pleno", desc: "try/catch, hierarquia, exceções customizadas." },
        ],
      },
      {
        nome: "Avançado",
        topicos: [
          { nome: "Streams API", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "filter, map, reduce — o estilo moderno de Java." },
          { nome: "Lambda Expressions", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Sintaxe concisa para interfaces funcionais." },
          { nome: "Programação Funcional", prioridade: "alta", horas: "12-18h", nivel: "Pleno/Sênior", desc: "Function, Predicate, Supplier, Consumer." },
          { nome: "Multithreading", prioridade: "alta", horas: "20-25h", nivel: "Sênior", desc: "Threads, Runnable e ciclo de vida concorrente." },
          { nome: "Concorrência (Concurrency API)", prioridade: "alta", horas: "20-30h", nivel: "Sênior", desc: "ExecutorService, CompletableFuture, locks." },
          { nome: "Reflection", prioridade: "baixa", horas: "8-12h", nivel: "Sênior", desc: "Base de como Spring e Hibernate funcionam." },
          { nome: "JVM", prioridade: "alta", horas: "15-25h", nivel: "Sênior", desc: "Class loading, bytecode, memória, JIT." },
          { nome: "Garbage Collector", prioridade: "media", horas: "10-15h", nivel: "Sênior", desc: "Algoritmos de GC e seus trade-offs." },
          { nome: "Performance e Otimização", prioridade: "media", horas: "15-20h", nivel: "Sênior", desc: "Profiling, cache, eficiência em produção." },
        ],
      },
    ],
  },
  {
    id: "dados",
    titulo: "Banco de Dados",
    emoji: "🗄️",
    cor: "azul",
    resumo: "SQL na prática, modelagem de dados e os bancos relacionais e não relacionais mais usados.",
    subgrupos: [
      {
        nome: "SQL",
        topicos: [
          { nome: "SELECT e Filtros", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior", desc: "WHERE, ORDER BY, LIMIT — a base de tudo." },
          { nome: "JOINs", prioridade: "obrigatoria", horas: "15-20h", nivel: "Júnior/Pleno", desc: "INNER, LEFT, RIGHT, FULL OUTER, self-join." },
          { nome: "Subqueries", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "Consultas aninhadas e correlacionadas." },
          { nome: "Views", prioridade: "media", horas: "4-6h", nivel: "Pleno", desc: "Tabelas virtuais para simplificar consultas." },
          { nome: "Stored Procedures", prioridade: "media", horas: "8-12h", nivel: "Pleno", desc: "Lógica reutilizável armazenada no banco." },
          { nome: "Triggers", prioridade: "baixa", horas: "4-6h", nivel: "Pleno", desc: "Ações automáticas em resposta a eventos." },
          { nome: "Indexes", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Acelerar buscas — tema clássico de entrevista." },
          { nome: "Transactions", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "ACID e níveis de isolamento." },
        ],
      },
      {
        nome: "Modelagem",
        topicos: [
          { nome: "MER", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior/Pleno", desc: "Modelo Entidade-Relacionamento antes do banco físico." },
          { nome: "Normalização", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "1FN, 2FN, 3FN — reduzir redundância." },
          { nome: "Relacionamentos", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "1:1, 1:N, N:N — base para mapear entidades JPA." },
        ],
      },
      {
        nome: "Bancos Relacionais",
        topicos: [
          { nome: "PostgreSQL", prioridade: "obrigatoria", horas: "20-30h", nivel: "Pleno", desc: "O banco relacional mais adotado em projetos novos." },
          { nome: "MySQL", prioridade: "alta", horas: "10-15h", nivel: "Júnior/Pleno", desc: "Muito comum em sistemas legados." },
        ],
      },
      {
        nome: "Bancos Não Relacionais",
        topicos: [
          { nome: "MongoDB", prioridade: "media", horas: "15-20h", nivel: "Pleno", desc: "Documentos flexíveis, sem schema rígido." },
          { nome: "Redis", prioridade: "alta", horas: "12-18h", nivel: "Pleno/Sênior", desc: "Cache em memória — padrão de mercado." },
        ],
      },
    ],
  },
  {
    id: "spring",
    titulo: "Spring Framework",
    emoji: "🌱",
    cor: "verde",
    resumo: "O framework Backend Java mais usado no mercado — a seção mais densa do roadmap, de propósito.",
    subgrupos: [
      {
        nome: "Spring Core",
        topicos: [
          { nome: "IoC (Inversão de Controle)", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "A ideia fundamental que torna o Spring possível." },
          { nome: "Dependency Injection", prioridade: "obrigatoria", horas: "12-18h", nivel: "Pleno", desc: "Injeção via construtor — baixo acoplamento real." },
          { nome: "Beans", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Objetos gerenciados pelo Spring Container." },
          { nome: "ApplicationContext", prioridade: "alta", horas: "6-10h", nivel: "Pleno", desc: "O container central do Spring." },
        ],
      },
      {
        nome: "Spring Boot",
        topicos: [
          { nome: "Estrutura de Projetos", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Organização por camadas — base de tudo." },
          { nome: "Autoconfiguração e Starters", prioridade: "alta", horas: "6-10h", nivel: "Pleno", desc: "Por que 'simplesmente funciona' ao adicionar uma dependência." },
          { nome: "Configurações (properties/yml)", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Centralizar parâmetros da aplicação." },
          { nome: "Profiles", prioridade: "alta", horas: "5-8h", nivel: "Pleno", desc: "Configurações diferentes por ambiente (dev/prod)." },
          { nome: "Properties e Externalização", prioridade: "media", horas: "4-6h", nivel: "Pleno", desc: "Segredos fora do código-fonte." },
        ],
      },
      {
        nome: "Spring MVC",
        topicos: [
          { nome: "Controllers", prioridade: "obrigatoria", horas: "12-18h", nivel: "Pleno", desc: "A porta de entrada de toda API REST." },
          { nome: "Services", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Onde a regra de negócio deve viver." },
          { nome: "DTOs", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Nunca exponha entidades JPA direto na API." },
          { nome: "Validation", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Validar entrada com Bean Validation." },
          { nome: "Exception Handling", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Erros padronizados e centralizados." },
        ],
      },
      {
        nome: "Spring Data JPA",
        topicos: [
          { nome: "Entities", prioridade: "obrigatoria", horas: "12-18h", nivel: "Pleno", desc: "Mapeamento objeto-relacional com JPA/Hibernate." },
          { nome: "Repositories", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "CRUD automático e métodos derivados." },
          { nome: "Relacionamentos JPA", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Lazy/Eager, cascata e o problema N+1." },
          { nome: "Consultas Customizadas", prioridade: "alta", horas: "12-18h", nivel: "Pleno", desc: "JPQL e SQL nativo com @Query." },
          { nome: "Paginação", prioridade: "obrigatoria", horas: "6-10h", nivel: "Pleno", desc: "Pageable e Sort — obrigatório em toda listagem." },
          { nome: "Specifications", prioridade: "media", horas: "10-15h", nivel: "Pleno/Sênior", desc: "Consultas dinâmicas com múltiplos filtros." },
        ],
      },
      {
        nome: "Spring Security",
        topicos: [
          { nome: "Autenticação", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Verificar identidade — primeira linha de defesa." },
          { nome: "Autorização", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "O que cada usuário pode fazer." },
          { nome: "JWT", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Autenticação stateless — padrão de mercado em APIs." },
          { nome: "OAuth2", prioridade: "media", horas: "15-25h", nivel: "Sênior", desc: "Login social e autorização machine-to-machine." },
          { nome: "Roles e Permissions", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "RBAC — controle de acesso granular." },
        ],
      },
      {
        nome: "APIs REST",
        topicos: [
          { nome: "Boas Práticas REST", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Convenções que recrutadores avaliam de cara." },
          { nome: "Status Codes", prioridade: "obrigatoria", horas: "5-8h", nivel: "Júnior/Pleno", desc: "Nunca retorne 200 para tudo." },
          { nome: "Versionamento de API", prioridade: "media", horas: "5-8h", nivel: "Pleno", desc: "Evoluir a API sem quebrar clientes." },
          { nome: "Swagger/OpenAPI", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Documentação interativa — requisito básico hoje." },
        ],
      },
      {
        nome: "Testes",
        topicos: [
          { nome: "JUnit", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Framework padrão de testes em Java." },
          { nome: "Mockito", prioridade: "obrigatoria", horas: "12-18h", nivel: "Pleno", desc: "Simular dependências em testes unitários." },
          { nome: "Testes Unitários", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Base da pirâmide de testes." },
          { nome: "Testes de Integração", prioridade: "alta", horas: "15-20h", nivel: "Pleno/Sênior", desc: "Testcontainers — padrão atual de mercado." },
        ],
      },
      {
        nome: "Microsserviços",
        topicos: [
          { nome: "Spring Cloud", prioridade: "media", horas: "20-30h", nivel: "Sênior", desc: "Ferramentas para sistemas distribuídos." },
          { nome: "Service Discovery", prioridade: "media", horas: "10-15h", nivel: "Sênior", desc: "Serviços se encontram dinamicamente (Eureka)." },
          { nome: "API Gateway", prioridade: "media", horas: "10-15h", nivel: "Sênior", desc: "Ponto único de entrada e roteamento." },
          { nome: "Config Server", prioridade: "baixa", horas: "6-10h", nivel: "Sênior", desc: "Configuração centralizada via Git." },
          { nome: "Comunicação Entre Serviços", prioridade: "alta", horas: "15-20h", nivel: "Sênior", desc: "Feign, WebClient, Circuit Breaker." },
        ],
      },
      {
        nome: "Mensageria",
        topicos: [
          { nome: "RabbitMQ", prioridade: "alta", horas: "15-20h", nivel: "Pleno/Sênior", desc: "Broker de mensagens — fácil de operar." },
          { nome: "Kafka", prioridade: "alta", horas: "20-30h", nivel: "Sênior", desc: "Streaming de eventos em larga escala." },
        ],
      },
      {
        nome: "Observabilidade",
        topicos: [
          { nome: "Logs", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "SLF4J + Logback — diagnóstico básico." },
          { nome: "ELK Stack", prioridade: "media", horas: "15-20h", nivel: "Sênior", desc: "Centralizar logs de múltiplos serviços." },
          { nome: "Prometheus", prioridade: "alta", horas: "12-18h", nivel: "Sênior", desc: "Coleta de métricas em produção." },
          { nome: "Grafana", prioridade: "alta", horas: "8-12h", nivel: "Sênior", desc: "Dashboards visuais e alertas." },
        ],
      },
    ],
  },
  {
    id: "devops",
    titulo: "DevOps para Backend",
    emoji: "🐳",
    cor: "ciano",
    resumo: "Empacotar, containerizar e automatizar o deploy da própria aplicação.",
    topicos: [
      { nome: "Linux", prioridade: "obrigatoria", horas: "20-30h", nivel: "Pleno", desc: "O sistema operacional que roda a produção." },
      { nome: "Bash", prioridade: "alta", horas: "12-18h", nivel: "Pleno", desc: "Automatizar tarefas no terminal." },
      { nome: "Docker", prioridade: "obrigatoria", horas: "20-30h", nivel: "Pleno", desc: "Empacotar a aplicação — exigido em quase toda vaga." },
      { nome: "Docker Compose", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Orquestrar múltiplos containers locais." },
      { nome: "Kubernetes", prioridade: "media", horas: "30-40h", nivel: "Sênior", desc: "Orquestração de containers em escala." },
      { nome: "CI/CD", prioridade: "obrigatoria", horas: "15-20h", nivel: "Pleno", desc: "Build, teste e deploy automatizados." },
      { nome: "GitHub Actions", prioridade: "alta", horas: "12-18h", nivel: "Pleno", desc: "CI/CD nativo do GitHub." },
      { nome: "Jenkins", prioridade: "baixa", horas: "10-15h", nivel: "Sênior", desc: "CI/CD self-hosted, comum em empresas tradicionais." },
    ],
  },
  {
    id: "git",
    titulo: "Git e GitHub",
    emoji: "🔀",
    cor: "rosa",
    resumo: "Controle de versão usado todos os dias, em qualquer time, em qualquer empresa.",
    topicos: [
      { nome: "Fluxo Git Básico", prioridade: "obrigatoria", horas: "10-15h", nivel: "Júnior", desc: "init, add, commit, push, pull." },
      { nome: "Branches", prioridade: "obrigatoria", horas: "8-12h", nivel: "Júnior", desc: "Trabalhar isolado sem afetar o código principal." },
      { nome: "Pull Requests", prioridade: "obrigatoria", horas: "6-10h", nivel: "Júnior/Pleno", desc: "Revisão de código antes de integrar." },
      { nome: "Git Flow", prioridade: "media", horas: "5-8h", nivel: "Pleno", desc: "Modelo de branching para releases formais." },
      { nome: "Conventional Commits", prioridade: "alta", horas: "3-5h", nivel: "Pleno", desc: "Mensagens de commit padronizadas." },
    ],
  },
  {
    id: "arquitetura",
    titulo: "Arquitetura de Software",
    emoji: "🏛️",
    cor: "indigo",
    resumo: "Decisões de alto nível que separam Pleno de Sênior na prática.",
    topicos: [
      { nome: "Monolitos", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "A escolha certa para a maioria dos projetos novos." },
      { nome: "Microsserviços", prioridade: "alta", horas: "20-30h", nivel: "Sênior", desc: "Entender os trade-offs reais, não só implementar." },
      { nome: "DDD", prioridade: "alta", horas: "25-35h", nivel: "Sênior", desc: "Modelo de domínio no centro do sistema." },
      { nome: "Event Driven Architecture", prioridade: "alta", horas: "15-20h", nivel: "Sênior", desc: "Componentes reagem a eventos, desacoplados." },
      { nome: "CQRS", prioridade: "media", horas: "12-18h", nivel: "Sênior", desc: "Separar comandos de queries." },
      { nome: "Hexagonal Architecture", prioridade: "media", horas: "12-18h", nivel: "Sênior", desc: "Núcleo isolado de detalhes de infraestrutura." },
    ],
  },
  {
    id: "cloud",
    titulo: "Cloud Computing (AWS)",
    emoji: "☁️",
    cor: "amarelo",
    resumo: "Operar e implantar aplicações em nuvem — essencial a partir do Pleno.",
    topicos: [
      { nome: "EC2", prioridade: "alta", horas: "10-15h", nivel: "Pleno", desc: "Máquinas virtuais sob demanda." },
      { nome: "S3", prioridade: "alta", horas: "6-10h", nivel: "Pleno", desc: "Armazenamento de arquivos — padrão de mercado." },
      { nome: "RDS", prioridade: "alta", horas: "8-12h", nivel: "Pleno", desc: "Banco de dados relacional gerenciado." },
      { nome: "IAM", prioridade: "obrigatoria", horas: "8-12h", nivel: "Pleno", desc: "Permissões — erro aqui é incidente grave de segurança." },
      { nome: "ECS", prioridade: "media", horas: "12-18h", nivel: "Sênior", desc: "Orquestração de containers na AWS." },
      { nome: "Lambda", prioridade: "media", horas: "10-15h", nivel: "Sênior", desc: "Computação serverless." },
    ],
  },
  {
    id: "seguranca",
    titulo: "Segurança",
    emoji: "🔒",
    cor: "vermelho",
    resumo: "Responsabilidade de todo desenvolvedor, não só de um time especializado.",
    topicos: [
      { nome: "OWASP Top 10", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "As 10 vulnerabilidades mais críticas da web." },
      { nome: "SQL Injection", prioridade: "obrigatoria", horas: "5-8h", nivel: "Pleno", desc: "Prevenida com queries parametrizadas." },
      { nome: "XSS", prioridade: "alta", horas: "5-8h", nivel: "Pleno", desc: "Sanitizar entrada antes de persistir e exibir." },
      { nome: "CSRF", prioridade: "media", horas: "5-8h", nivel: "Pleno", desc: "Crítico em apps baseadas em sessão/cookie." },
      { nome: "Autenticação Segura", prioridade: "obrigatoria", horas: "10-15h", nivel: "Pleno", desc: "Hash forte, rate limiting, MFA." },
      { nome: "Criptografia", prioridade: "alta", horas: "10-15h", nivel: "Pleno/Sênior", desc: "Hash vs simétrica vs assimétrica." },
    ],
  },
];

export const PROJETOS = [
  { num: 1, titulo: "API CRUD Simples", nivel: "Júnior", duracao: "1-2 semanas", cor: "verde", desc: "CRUD completo com paginação, validação, Swagger e PostgreSQL via Docker.", tecnologias: ["Spring Boot", "JPA", "PostgreSQL", "Swagger"] },
  { num: 2, titulo: "Autenticação JWT", nivel: "Júnior/Pleno", duracao: "2-3 semanas", cor: "azul", desc: "Cadastro, login com JWT, refresh token e controle de acesso por Roles.", tecnologias: ["Spring Security", "JWT", "BCrypt"] },
  { num: 3, titulo: "E-commerce Backend", nivel: "Pleno", duracao: "4-6 semanas", cor: "laranja", desc: "Múltiplas entidades relacionadas, regras de negócio, testes e cache Redis.", tecnologias: ["JPA", "Redis", "Testcontainers"] },
  { num: 4, titulo: "Sistema de Reservas", nivel: "Pleno/Sênior", duracao: "3-5 semanas", cor: "roxo", desc: "Controle de concorrência, locking otimista/pessimista e notificações assíncronas.", tecnologias: ["RabbitMQ", "DDD", "Concorrência"] },
  { num: 5, titulo: "Microsserviços com Spring Cloud", nivel: "Sênior", duracao: "5-8 semanas", cor: "ciano", desc: "Decomposição em serviços, Gateway, Service Discovery, Kafka e observabilidade.", tecnologias: ["Spring Cloud", "Kafka", "Grafana"] },
  { num: 6, titulo: "Projeto Completo Profissional", nivel: "Sênior", duracao: "8-12 semanas", cor: "vermelho", desc: "CI/CD completo, deploy real na AWS, segurança e observabilidade ponta a ponta.", tecnologias: ["GitHub Actions", "AWS", "Observabilidade"] },
];

export const FASES = [
  { fase: 1, titulo: "Fundamentos", semanas: "1 a 6", cor: "roxo", itens: ["Lógica de Programação", "Java Básico completo", "Estruturas de dados essenciais", "Java Intermediário completo", "SOLID e Clean Code"] },
  { fase: 2, titulo: "Banco de Dados e Primeiras APIs", semanas: "7 a 12", cor: "azul", itens: ["SQL completo", "Modelagem de dados", "PostgreSQL na prática", "Spring Core, Boot, MVC e Data JPA", "Projeto 1 — API CRUD Simples"] },
  { fase: 3, titulo: "Segurança, Testes e Profissionalização", semanas: "13 a 18", cor: "verde", itens: ["Spring Security: auth, JWT", "Boas práticas REST e Swagger", "JUnit, Mockito, testes unitários", "Docker e Docker Compose", "Projeto 2 — Autenticação JWT"], marco: "Nível Júnior atingido — comece a se candidatar" },
  { fase: 4, titulo: "Consolidação Pleno", semanas: "19 a 30", cor: "laranja", itens: ["Java Avançado: Streams, Lambdas", "Design Patterns e Clean Architecture", "Specifications, Testcontainers, Redis", "Observabilidade básica e OWASP Top 10", "CI/CD com GitHub Actions", "Projeto 3 — E-commerce Backend"], marco: "Nível Pleno atingido" },
  { fase: 5, titulo: "Aprofundamento Sênior", semanas: "Mês 8+", cor: "vermelho", itens: ["Multithreading, JVM, GC, Performance", "DDD, Event Driven, CQRS, Hexagonal", "Microsserviços e Spring Cloud", "RabbitMQ, Kafka, Kubernetes, AWS completo", "Projetos 4, 5 e 6"], marco: "Idealmente já empregado nesta fase" },
];

export const TEMPO_NIVEIS = [
  { nivel: "Júnior", parcial: "4 a 6 meses", integral: "2,5 a 3,5 meses", cor: "verde" },
  { nivel: "Pleno", parcial: "12 a 18 meses", integral: "7 a 10 meses", cor: "laranja" },
  { nivel: "Sênior", parcial: "3 a 5 anos", integral: "2,5 a 4 anos", cor: "vermelho" },
];