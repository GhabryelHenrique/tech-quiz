export const quizData = [
    {
      question: "Qual ambiente de desenvolvimento você prefere?",
      options: {
        a: { 
          text: "Editor visual com preview ao vivo", 
          weights: { front: 40, ux: 30 }
        },
        b: { 
          text: "Terminal e ferramentas CLI", 
          weights: { back: 50 }
        },
        c: { 
          text: "Console de gerenciamento cloud", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Seu momento favorito em um projeto é:",
      options: {
        a: { 
          text: "Ver o design ganhar vida no navegador", 
          weights: { front: 45, ux: 35 }
        },
        b: { 
          text: "Resolver um problema complexo de lógica", 
          weights: { back: 55 }
        },
        c: { 
          text: "Automatizar um processo manual", 
          weights: { devops: 50 }
        }
      }
    },
    {
      question: "Como você aborda um bug crítico?",
      options: {
        a: { 
          text: "Analiso o comportamento visual primeiro", 
          weights: { front: 40, ux: 30 }
        },
        b: { 
          text: "Depuro o código linha por linha", 
          weights: { back: 50 }
        },
        c: { 
          text: "Verifico logs e métricas do sistema", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Que tipo de documentação você mais gosta de escrever?",
      options: {
        a: { 
          text: "Guias de interface para usuários", 
          weights: { ux: 50, front: 30 }
        },
        b: { 
          text: "Documentação técnica de APIs", 
          weights: { back: 60 }
        },
        c: { 
          text: "Diagramas de infraestrutura", 
          weights: { devops: 55 }
        }
      }
    },
    {
      question: "Em prazos apertados, você prioriza:",
      options: {
        a: { 
          text: "Experiência do usuário consistente", 
          weights: { ux: 45, front: 35 }
        },
        b: { 
          text: "Funcionalidades essenciais", 
          weights: { back: 50 }
        },
        c: { 
          text: "Estabilidade do sistema", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Prefere trabalhar:",
      options: {
        a: { 
          text: "Em equipe multidisciplinar", 
          weights: { ux: 40, front: 30 }
        },
        b: { 
          text: "Em dupla técnica", 
          weights: { back: 50 }
        },
        c: { 
          text: "Com autonomia total", 
          weights: { devops: 45 }
        }
      }
    },
    {
      question: "Ao aprender uma nova tecnologia, você:",
      options: {
        a: { 
          text: "Cria projetos visuais imediatamente", 
          weights: { front: 50, ux: 30 }
        },
        b: { 
          text: "Estuda a documentação profundamente", 
          weights: { back: 55 }
        },
        c: { 
          text: "Testa em ambiente isolado primeiro", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Como lida com feedbacks contraditórios?",
      options: {
        a: { 
          text: "Faço protótipos para comparar", 
          weights: { ux: 50, front: 30 }
        },
        b: { 
          text: "Analiso dados técnicos", 
          weights: { back: 55 }
        },
        c: { 
          text: "Testo ambas soluções", 
          weights: { devops: 45 }
        }
      }
    },
    {
      question: "Qual reunião você mais valoriza?",
      options: {
        a: { 
          text: "Review de design", 
          weights: { ux: 50 }
        },
        b: { 
          text: "Planning técnico", 
          weights: { back: 55 }
        },
        c: { 
          text: "Retrospectiva de processos", 
          weights: { devops: 50 }
        }
      }
    },
    {
      question: "Como organiza seu workflow?",
      options: {
        a: { 
          text: "Ferramentas visuais (Figma, etc)", 
          weights: { front: 45, ux: 35 }
        },
        b: { 
          text: "IDEs poderosas (VS Code, etc)", 
          weights: { back: 50 }
        },
        c: { 
          text: "Scripts automatizados", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Num novo projeto, você primeiro:",
      options: {
        a: { 
          text: "Defino o sistema de design", 
          weights: { front: 50, ux: 30 }
        },
        b: { 
          text: "Modelo o banco de dados", 
          weights: { back: 55 }
        },
        c: { 
          text: "Configuro o ambiente CI/CD", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Sua maior preocupação é:",
      options: {
        a: { 
          text: "Consistência visual", 
          weights: { front: 45, ux: 35 }
        },
        b: { 
          text: "Performance do código", 
          weights: { back: 55 }
        },
        c: { 
          text: "Disponibilidade do sistema", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Prefere contribuir com:",
      options: {
        a: { 
          text: "Componentes UI open-source", 
          weights: { front: 50 }
        },
        b: { 
          text: "Bibliotecas de algoritmos", 
          weights: { back: 55 }
        },
        c: { 
          text: "Ferramentas de infraestrutura", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Num incidente de produção, você:",
      options: {
        a: { 
          text: "Verifico a interface afetada", 
          weights: { front: 45 }
        },
        b: { 
          text: "Analiso logs de erro", 
          weights: { back: 55 }
        },
        c: { 
          text: "Escalo para a equipe de SRE", 
          weights: { devops: 50 }
        }
      }
    },
    {
      question: "Sua abordagem para novas tecnologias:",
      options: {
        a: { 
          text: "Adoto se melhorar a experiência", 
          weights: { ux: 50 }
        },
        b: { 
          text: "Avalio performance técnica", 
          weights: { back: 55 }
        },
        c: { 
          text: "Testo em ambiente stage primeiro", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Como mentor, você ensina:",
      options: {
        a: { 
          text: "Padrões de design responsivo", 
          weights: { front: 50 }
        },
        b: { 
          text: "Padrões de arquitetura de software", 
          weights: { back: 55 }
        },
        c: { 
          text: "Melhores práticas de deploy", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Seu hackathon ideal tem:",
      options: {
        a: { 
          text: "Desafios de UI/UX", 
          weights: { front: 45, ux: 35 }
        },
        b: { 
          text: "Problemas complexos de lógica", 
          weights: { back: 55 }
        },
        c: { 
          text: "Otimizações de sistemas distribuídos", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Como mantém work-life balance?",
      options: {
        a: { 
          text: "Design sprints bem definidos", 
          weights: { ux: 40 }
        },
        b: { 
          text: "Pair programming eficiente", 
          weights: { back: 45 }
        },
        c: { 
          text: "Automação de tarefas repetitivas", 
          weights: { devops: 50 }
        }
      }
    },
    {
      question: "Num sistema legado, você primeiro:",
      options: {
        a: { 
          text: "Atualizo a interface", 
          weights: { front: 50 }
        },
        b: { 
          text: "Refatoro o código core", 
          weights: { back: 55 }
        },
        c: { 
          text: "Modernizo a infraestrutura", 
          weights: { devops: 60 }
        }
      }
    },
    {
      question: "Seu foco de carreira é:",
      options: {
        a: { 
          text: "Design Systems", 
          weights: { front: 50, ux: 40 }
        },
        b: { 
          text: "Arquitetura de Software", 
          weights: { back: 60 }
        },
        c: { 
          text: "Engenharia de Confiabilidade", 
          weights: { devops: 65 }
        }
      }
    },
  ];
  
  export const maxScores = {
    front: 980,
    back: 1060,
    devops: 1150,
    ux: 720
  };