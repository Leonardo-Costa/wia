import { ProjectCard } from '../../interfaces/interface';

export const projects: ProjectCard[] = [
  {
    authors: [
      {
        authorName: 'Leonardo Loureiro Costa',
        socialUrl: 'https://github.com/Leonardo-Costa',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=122hfADJaMxnpiFcgOnzRfSMiCGd7A4yh',
    title:
      'Illuminating Artistic Intuition: Exploring Zero-Shot Image Classification and Explainable AI through Diffusion Models and the LIME Algorithm',
    summary:
      'Um estudo sobre a classificação de imagens de pinturas usando dados artificialmente gerados e a rede neural EfficientNet. O objetivo é classificar pinturas por artista, utilizando modelos treinados exclusivamente em dados gerados por IA. O estudo também inclui áreas de explainable AI, dando luz ao que faz uma pintura ser classificada como tal.',
    keyWords: ['XAI', 'Classification', 'LIME', 'EfficientNet', 'Wikiart'],
  },
  {
    authors: [
      {
        authorName: 'Gabriela Cristina Moreira dos Santos',
        socialUrl: 'https://www.linkedin.com/in/gabrielacmds/',
      },
      {
        authorName: 'Lucas Guilherme Silva de Carvalho',
        socialUrl: 'https://www.linkedin.com/in/lcarva12/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1_UxNcwBEUt5lX9KhCj-9Wyyf6QCJItpG',
    title:
      'Reconhecimento Facial em Risco: vulnerabilidades e defesas contra ataques adversariais',
    summary:
      'Este estudo se concentra na compreensão dos ataques adversariais em sistemas de reconhecimento facial baseados em Inteligência Artificial (IA) e na implementação de estratégias de defesa. Os sistemas de reconhecimento facial, muitas vezes baseados em aprendizado profundo e redes neurais artificiais, são susceptíveis a ataques adversariais que envolvem perturbações quase imperceptíveis inseridas nas imagens de entrada. A metodologia empregada abrange uma revisão extensa da literatura, análise de conjuntos de dados de imagens de rosto para treinar e testar modelos, e a avaliação de diferentes abordagens de detecção e defesa. Os modelos são treinados utilizando técnicas de aprendizado profundo e, em seguida, são testados sob diversas condições, incluindo ataques adversariais. Variadas estratégias de defesa contra esses ataques são implementadas e testadas, com seus resultados subsequentemente analisados. Além disso, o estudo também procura incentivar a colaboração na área de segurança em IA, de forma a enfrentar os desafios associados aos ataques adversariais.',
    keyWords: [
      'Ataques Adversariais',
      'Inteligência Artificial',
      'Reconhecimento Facial',
    ],
    projectRepoUrl: 'https://github.com/lcarva12/ReconhecimentoFacial-GAN',
  },
  {
    authors: [
      {
        authorName: 'Eduardo Bouhid Neto',
        socialUrl: 'https://www.linkedin.com/in/eduardo-bouhid-neto-227a56b7/',
      },
      {
        authorName: 'Paulo Roberto Costa Pedro',
        socialUrl: 'https://www.linkedin.com/in/paulo-costa-ab41851a1',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1KCCrJXu-rdFHBEQHhc2r8eY_jVvgHBRg',
    title:
      'Composições de Bandas do satélite Landsat-8 baseadas em Computação Evolutiva para Detecção de Desmatamento',
    summary:
      'A conservação das florestas tropicais é um assunto atual de relevância social e ecológica, devido ao importante papel que elas desempenham no ecossistema global. Infelizmente, milhões de hectares são desmatados e degradados todo ano, sendo necessários programas – governamentais ou de iniciativas privadas – para monitoramento das florestas tropicais. Tais programas contam tanto com o auxílio de profissionais especializados quanto de sistemas computacionais para detecção de padrões. Para que um modelo computacional consiga classificar uma determinada área como desmatamento ou não, geralmente se utilizam imagens de satélite, que possuem a vantagem de ter resolução multiespectral de captura. Porém, a captura de uma imagem em vários comprimentos de onda leva à redundância da informação e à alta quantidade de bandas, causando a "maldição da dimensionalidade". Para contornar esse problema, este trabalho propõe o uso de algoritmos genéticos em imagens capturadas pelo sensor óptico do satélite Landsat-8 visando selecionar a combinação de bandas que apresenta melhor resultado na classificação quanto à presença de desmatamento e melhor resume as imagens coletadas pelos satélites.',
    keyWords: [
      'Feature Selection',
      'Algoritmos Evolucionais',
      'Sensoriamento Remoto',
      'Desmatamento',
    ],
    projectRepoUrl: 'https://github.com/ebouhid/BandSelection.git',
  },
  {
    authors: [
      {
        authorName: 'Gustavo dos Santos Ferreira',
        socialUrl: 'https://github.com/GSF417',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1eq0OZmUbPluhhB9qsjsY3YYhuR8DQGA_',
    title: 'IA Aplicada ao Mercado Financeiro',
    summary:
      'Em tempos recentes, se vê um crescente interesse da população mundial no mercado de ações financeiras, que envolve grandes fluxos monetários que dependem de fatores praticamente imprevísiveis. Por esse motivo, ser capaz de prever tendências de súbida ou queda nos preços de ações abre a possibilidade de se obter um grande retorno monetário. Outra tendência moderna do interesse das pessoas está no campo de inteligência artificial, mais especificamente de redes neurais, poderosos modelos computacionais com vasto número de aplicações. Este trabalho busca investigar a eficácia de redes neurais artificiais na previsão de ações do mercado financeiro.',
    keyWords: [
      'aprendizado de máquina',
      'mercado financeiro',
      'rede neural',
      'LSTM',
      'ARIMA',
    ],
    projectRepoUrl: 'https://github.com/GSF417',
  },
  {
    authors: [
      {
        authorName: 'Eduardo Bouhid Neto',
        socialUrl: 'https://www.linkedin.com/in/eduardo-bouhid-neto-227a56b7/',
      },
      {
        authorName: 'Paulo Roberto Costa Pedro',
        socialUrl: 'https://www.linkedin.com/in/paulo-costa-ab41851a1',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1KCCrJXu-rdFHBEQHhc2r8eY_jVvgHBRg',
    title:
      'Composições de Bandas do satélite Landsat-8 baseadas em Computação Evolutiva para Detecção de Desmatamento',
    summary:
      'A conservação das florestas tropicais é um assunto atual de relevância social e ecológica, devido ao importante papel que elas desempenham no ecossistema global. Infelizmente, milhões de hectares são desmatados e degradados todo ano, sendo necessários programas – governamentais ou de iniciativas privadas – para monitoramento das florestas tropicais. Tais programas contam tanto com o auxílio de profissionais especializados quanto de sistemas computacionais para detecção de padrões. Para que um modelo computacional consiga classificar uma determinada área como desmatamento ou não, geralmente se utilizam imagens de satélite, que possuem a vantagem de ter resolução multiespectral de captura. Porém, a captura de uma imagem em vários comprimentos de onda leva à redundância da informação e à alta quantidade de bandas, causando a "maldição da dimensionalidade". Para contornar esse problema, este trabalho propõe o uso de algoritmos genéticos em imagens capturadas pelo sensor óptico do satélite Landsat-8 visando selecionar a combinação de bandas que apresenta melhor resultado na classificação quanto à presença de desmatamento e melhor resume as imagens coletadas pelos satélites.',
    keyWords: [
      'Feature Selection',
      'Algoritmos Evolucionais',
      'Sensoriamento Remoto',
      'Desmatamento',
    ],
    projectRepoUrl: 'https://github.com/ebouhid/BandSelection.git',
  },
  {
    authors: [
      {
        authorName: 'Matheus Rodrigues Borges Antonio',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1YL89ySECICTPJUiTN-hnEAvfvclHTuea',
    title: 'Gerador de Grades Horárias Utilizando Regras de Associação',
    summary:
      'Esse projeto busca criar um modelo que gere grades horárias para alunos do ICT-UNIFESP de São José dos Campos. Para a criação e modelagem desse projeto, foram utilizadas técnicas de inteligência artificial, tal como regras de associação, para determinar a melhor forma de se escolher as disciplinas para a organização da grade.',
    keyWords: ['IA', 'grades', 'regras', 'escolha'],
    projectRepoUrl: '',
  },
  {
    authors: [
      {
        authorName: 'André Eiki Hiratsuka',
        socialUrl: 'https://www.linkedin.com/in/andre-hiratsuka',
      },
      {
        authorName: 'Thiago Roberto Fernandes Rocha',
        socialUrl: 'https://www.linkedin.com/in/thiagorobertofrocha/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=14XkiLWctCgw-E3KsGyX5rBM8Cno4DBDU',
    title:
      'Inspeção Visual Automatizada de Equipamentos na Indústria para Detecção de Anomalias',
    summary:
      'A Inspeção Visual Automatizada (IVA) utiliza processamento de imagens para detectar defeitos e garantir a qualidade dos produtos. A automação dessa inspeção evita problemas e erros humanos, além de melhorar o desempenho e reduzir os custos de fabricação. Com o avanço das inteligências artificiais e reconhecimento de padrões, é possível criar um sistema de inspeção automatizada em tempo real, consistente e confiável.',
    keyWords: [
      'imagens',
      'indústria',
      'inteligência artificial',
      'inspeção visual',
    ],
    projectRepoUrl:
      'https://github.com/AndreHiratsuka/Projeto_Final_IA_Unifesp',
  },
  {
    authors: [
      {
        authorName: 'Juan Marcos Martins',
        socialUrl: '',
      },
      {
        authorName: 'Savio Augusto Machado Araujo',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1asyQFS6dq1kixIZFIpwjJZwxTbcrT1nU',
    title:
      'Visão computacional na estimativa da distância e altura de pessoas em cenas',
    summary:
      'O projeto visa a construção de uma ferramenta para detecção de pessoas em cenas que possa estimar sua distância da câmera e altura real, de forma a servir como base para aplicações assistentes na área da saúde, segurança e qualidade de vida.',
    keyWords: ['ferramenta', 'detecção', 'distância', 'altura'],
    projectRepoUrl: '',
  },
  {
    authors: [
      {
        authorName: 'Brenda Uemura',
        socialUrl: 'www.linkedin.com/in/brenda-uemura',
      },
      {
        authorName: 'Conrado Gobato',
        socialUrl: 'https://www.linkedin.com/in/conrado-gobato-2b679522b/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=19vdCqSZo41Iu2vTDPp0w5T0fCjCAx8JX',
    title: 'Uso de imagens de pulmão para identificação de Covid-19',
    summary:
      'Esse trabalho tem por objetivo auxiliar à área da saúde através do desenvolvimento com redes neurais e treinamento machine learn uma inteligência artificial capaz de detectar em imagens Raio X pulmonares características que possam ser advindas do vírus SARS-cov-2, visto que a doença possui a característica de atacar principalmente o trato respiratório.',
    keyWords: ['Pulmão', 'Covid-19', 'Raio X', 'Identificação'],
    projectRepoUrl:
      'https://colab.research.google.com/drive/1rjbDwkTAyWWBBmpk-urHg3Br8DENRo_B?usp=sharing',
  },
  {
    authors: [
      {
        authorName: 'Enzo Reis de Oliveira',
        socialUrl: 'https://github.com/ero2003730',
      },
      {
        authorName: 'Renan Augusto de Souza Leite',
        socialUrl: 'https://github.com/pqpnann',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1DM550hH_uhOe6ZOsOrLTHn6YY-e8zV0s',
    title:
      'Aplicação de Machine Learning para Predição de Partidas Baseada em Dados do Campeonato Brasileiro de Futebol',
    summary:
      'Este trabalho visa desenvolver um modelo de previsão para o Campeonato Brasileiro de Futebol, explorando o crescimento significativo do mercado de apostas esportivas no Brasil. O objetivo é analisar parâmetros específicos de cada partida e gerar uma previsão do vencedor, perdedor ou empate. O modelo será treinado e ajustado usando dados de campeonatos passados, até 2023. Por fim, o melhor modelo será utilizado para prever partidas futuras do Brasileirão de 2023.',
    keyWords: [
      'machine learning',
      'predição',
      'campeonato brasileiro',
      'redes neurais',
    ],
    projectRepoUrl:
      'https://github.com/ero2003730/Faculdade/blob/main/Intelig%C3%AAncia%20Artificial/2015.ipynb',
  },
  {
    authors: [
      {
        authorName: 'Marco Antonio Coral dos Santos',
        socialUrl: 'https://www.linkedin.com/in/raphaeldamascenomoraes',
      },
      {
        authorName: 'Raphael Damasceno Rocha de Moraes',
        socialUrl: 'https://www.linkedin.com/in/raphaeldamascenomoraes',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1cvlFMFZFRMK19yTpC9y1LTPH8Rbm9GTy',
    title: 'Algoritmo para Detecção de Deepfakes',
    summary:
      'O projeto se resume no treinamento de um algoritmo, por meio de transferência de aprendizagem, que possa ser capaz de identificar Deepfakes, criadas por StyleGAN’s. Com o objetivo de auxiliar na prevenção à a fraudes e utilização indevida das tecnologias generativas em conteúdos pornográficos.',
    keyWords: ['Deepfakes', 'Transfer Learning', 'Data Augmentation'],
    projectRepoUrl: 'https://github.com/mdrapha/Deepfake-Detection',
  },
  {
    authors: [
      {
        authorName: 'Marcos Vinicius Gasparoto Bauab',
        socialUrl: 'https://www.linkedin.com/in/marcos-bauab/',
      },
      {
        authorName: 'Vitor Gonçalves Reis da Silva',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1kVQ01uZiSxbqmqiUJhVHudQnkstz-SGM',
    title: 'Semi-supervisionado para o desmatamento da Amazônia',
    summary:
      'Aplicação de método semi-supervisionado para classificação de imagens de satélite da Floresta Amazônica',
    keyWords: [
      'semi-supervisionado',
      'classificação',
      'Amazônia',
      'Noisy Student',
    ],
    projectRepoUrl:
      'https://github.com/MarcosBauab/amazon-image-classification',
  },
  {
    authors: [
      {
        authorName: 'Pedro Figueiredo Dias',
        socialUrl: '',
      },
      {
        authorName: 'Tiago Kenzo Izumi',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1-L2gsaom-JEEd1HnzIcQzVTYTJFVcx_2',
    title:
      'Predeterminação do comportamento das curvas de fluência em palhetas de turbinas',
    summary:
      'O projeto propõe o desenvolvimento de um sistema de inteligência artificial (IA) capaz de predizer a curva de fluência da liga Ti-6Al-4V. A curva de fluência é uma representação gráfica que descreve a relação entre a deformação e o tempo sob tensão constante. Essa liga, conhecida por sua alta resistência e leveza, é amplamente utilizada na indústria aeroespacial para a fabricação de componentes críticos, como palhetas de avião. O objetivo principal é criar um modelo preditivo robusto que posteriormente será utilizado em um software para simular e extrapolar condições severas de trabalho em uma geometria correspondente à palheta de turbina de aeronaves.',
    keyWords: ['Fluência', 'Ti-6Al-4V', 'Ajuste de Curva'],
    projectRepoUrl: '',
  },
  {
    authors: [
      {
        authorName: 'Davi Seiji Kawai Santos',
        socialUrl: 'https://www.linkedin.com/in/davi-seiji-449b83251/',
      },
      {
        authorName: 'Pedro Henrique Masteguin',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1FY5EK06T2h3d97Z9XV91aaF-ePP0wDAC',
    title: 'Estacionamento inteligente na Unifesp',
    summary:
      'Com o objetivo de otimizar a eficiência e a economia de tempo na tarefa do estacionamento, utilizando o modelo de inteligência artificial do YOLO, o projeto consiste na detecção e identificação de automóveis nas vagas do estacionamento do campus da UNIFESP. Essa abordagem avançada proporcionará a contagem e monitoramento em tempo real da quantidade de vagas vazias e preenchidas provendo aos usuários uma gestão mais eficiente e inteligente, em uma experiência de estacionamento simplificada.',
    keyWords: [
      'Inteligência artificial',
      'YOLO',
      'aprendizado de máquina',
      'monitoramento do estacionamento',
      'detecção de carros',
    ],
    projectRepoUrl: 'https://github.com/P81000/AI-Project_SmartParking.git',
  },
  {
    authors: [
      {
        authorName: 'Guilherme Fernandes Medeiros',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1l6cI_N3yuEpvx3coFQXlADk5zAafy4Ls',
    title:
      'Aplicacão de Inteligência Artificial para Análise e Predicão do Desempenho Acadêmico em Faculdades Brasileiras: Uma Abordagem Baseada em Dados do Censo',
    summary:
      'Baseado em dados de diversas universidades públicas brasileiras, foi utiilizada inteligência artificial para avaliar e predizer o desempenho acadêmico de alunos do ensino superior.',
    keyWords: [
      'inteligência artificial',
      'performance acadêmica',
      'algoritmos',
    ],
    projectRepoUrl: '',
  },
  {
    authors: [
      {
        authorName: 'Murilo Capozzi dos Santos',
        socialUrl: 'https://www.linkedin.com/in/murilo-capozzi-b73995212/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=19FN7CaCkKYa5wW4LwpAMVhBif6jy9e4s',
    title: 'Detecção de falhas em equipamentos por meio de inspeção visual',
    summary:
      'Projeto que envolve aprendizado de máquina supervisionado, com foco nas redes neurais convolucionais (CNN) para detectar falhas em equipamentos por meio da inspeção visual de superfícies danificadas e em diversos cenários, esses sendo testes em diferentes modelos pré-treinados e na utilização de Data Augmentation, buscando avaliá-los em acurácia, tempo de processamento e predição.',
    keyWords: [
      'Deteçcão de falhas',
      'Deep Learning',
      'CNN',
      'Transfer Learning',
    ],
    projectRepoUrl:
      'https://github.com/murilocapozzi/DetectionEquipamentFailures',
  },
  {
    authors: [
      {
        authorName: 'Rafael Braga Ennes',
        socialUrl: 'www.linkedin.com/in/rafabraga13',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=12ke6SLaZPuyHAdNXMFzs6y67SjQ_FOsF',
    title:
      'Aprendizado de Máquina para Diagnóstico e Classificação da Doença de Alzheimer',
    summary:
      'Uso de Machine Learning para tentar prever o nível de demência de pacientes, a partir de duas bases de dados, uma com 10 atributos e outro com imagens.',
    keyWords: ['Inteligência Artificial', 'Predições', 'Alzheimer'],
    projectRepoUrl: 'https://github.com/rafaelbragae/Inteligencia_Artificial',
  },
  {
    authors: [
      {
        authorName: 'Rodrigo Augusto Alves Dias',
        socialUrl: '',
      },
      {
        authorName: 'Ulisses Auresco Damasio',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1RCAkBjf5F25RF1RPTzVL0Du4Uqg5vGvX',
    title:
      'Desenvolvimento de Behaviour Tree em Unity para criação de Inteligência Artificial para NPC em jogos.',
    summary:
      'Desenvolvimento da ferramenta de Behaviour Tree em Unity para criar NPC (Non-playable Character). Essa ferramenta permite criar comportamentos inteligentes de inimigos de forma clara e eficiente.',
    keyWords: [
      'Inteligência Artificial',
      'Behaviour Tree',
      'Jogos eletrônicos',
      'Unity',
    ],
    projectRepoUrl: 'https://github.com/diasrodrigo15/BehaviourTree',
  },
  {
    authors: [
      {
        authorName: 'Benjamim Rees Pereira do Nascimento',
        socialUrl:
          'https://www.linkedin.com/in/benjamim-rees-pereira-do-nascimento-26189018b/',
      },
      {
        authorName: 'Daniel Ferreira Martins',
        socialUrl: 'https://github.com/DanFeMartins',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1NLs8rW0dt41kUREzLnA5d3LTbAEm9z8P',
    title: 'Estacionamento Inteligente',
    summary:
      'Projeto de reconhecimento da quantidade de vagas ocupadas, vagas vazias e quantos carros estão em trânsito dentro de um estacionamento.',
    keyWords: ['Estacionamento', 'inteligente', 'IA', 'reconhecimento'],
    projectRepoUrl:
      'https://github.com/Benerees/estacionamento_inteligente/tree/main',
  },
  {
    authors: [
      {
        authorName: 'Pedro Henrique Barauna',
        socialUrl: 'https://www.linkedin.com/in/pedro-barauna/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1nP0Y3Eo8yXhvTGS_DDpTTA6N01oRcjbt',
    title:
      'Geração de descrição de obras de arte para deficientes visuais utilizando processamento de linguagem natural e visão computacional',
    summary:
      'Geração de descrição de quadrantes da obra de arte, bem como um resumo, a partir de um algoritmo de geração de descrições utilizando um modelo de inteligência artificial pré-treinado para deficientes visuais conseguirem entender o que está presente na obra.',
    keyWords: ['inteligência artificial', 'obra de arte', 'deficiência visual'],
  },
  {
    authors: [
      {
        authorName: 'Matheus de Sousa Meire da Silva',
        socialUrl: 'https://github.com/matheuxito/',
      },
      {
        authorName: 'Marcos Lucas da Silva',
        socialUrl: 'https://github.com/lmarcosz/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1020jvPHL72jjAN00TowwQAff0EBO5r5k',
    title:
      'Identificação de Veículos em Estacionamentos: Uma Abordagem Comparativa Entre Modelos YOLO',
    summary:
      'O projeto consiste em uma aplicação do YOLO (um método de detecção de objetos em imagens) em um sistema de identificação e contabilização de vagas e veículos no estacionamento do ICT-Unifesp. Além disso, será feita uma abordagem comparativa de eficiência do uso de diferentes versões do modelo YOLO nesse sistema.',
    keyWords: ['YOLO', 'Veículos', 'Estacionamentos', 'Inovação'],
  },
  // {
  //   authors: [
  //     {
  //       authorName: 'Isabela Cristina Silva Pedro',
  //       socialUrl: 'https://www.linkedin.com/in/isabela-cristina/',
  //     },
  //     {
  //       authorName: 'Nicolas Alves Suzuki',
  //       socialUrl: 'https://www.linkedin.com/in/nicolas-alves-suzuki/',
  //     },
  //   ],
  //   imageUrl: '',
  //   title:
  //     'Sinais da Libras para Áudio: primeiros passos de uma ferramenta inovadora',
  //   summary:
  //     'O estudo consiste em um sistema para receber sinais da Libras por meio da conexão com uma webcam e convertê-los em áudio em português das respectivas palavras e frases. Dessa forma, o artigo tem como objetivo fomentar o aumento das pesquisas em machine learning aplicada à linguagem de sinais, com ênfase na interação entre pessoas surdas e mudas.',
  //   keyWords: [
  //     'Libras',
  //     'machine learning',
  //     'CNN',
  //     'linguagem de sinais',
  //     'interação',
  //   ],
  // },
  {
    authors: [
      {
        authorName: 'Vinícius da Silva Dias',
        socialUrl: 'https://github.com/weinStag',
      },
      {
        authorName: 'Mateus da Silva Romani',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1ckJcichkF45qHS6Pst7GSj1diEHdvMsq',
    title:
      'Redes Neurais e Deep Learning no escopo econômico de colecionáveis digitais',
    summary:
      'Atualmente a indústria de jogos eletrônicos competitivos vem crescendo de maneira exponencial, e como esperado, o mesmo acontece com seus mercados externos e internos, desde venda de colecionáveis e cosméticos à campeonatos profissionais que movimentam um mercado milionário anualmente. Contudo, há uma lacuna no aproveitamento da grande gama de dados gerada pelo mercado em constante expansão, portanto com uma Rede Neural treinada em deep learning, seria possível analisar um conjunto de dados com características dos cosméticos, como raridade, popularidade e desgaste, e utilizá-las para prevermos valores do mercado referentes aos itens e suas características. Isso portanto permitiria aos usuários tomarem decisões mais informadas tanto ao comprar, vender ou trocar em sua coleção, maximizando assim os lucros e minimizando os riscos.',
    keyWords: [
      'Rede Neural',
      'Deep Learning',
      'Predição',
      'Mercado Digital',
      'Colecionáveis Digitais',
    ],
  },
  {
    authors: [
      {
        authorName: 'Kazuhiro Kojio',
        socialUrl: 'https://www.linkedin.com/in/kazuhirodk/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1Z-CQzET0lpgLNHLjm4y5OMspLWQAO9Sq',
    title:
      'Mineração de dados educacionais para identificar a influência de fatores socioeconômicos no desempenho dos estudantes no ENEM',
    summary:
      'A mineração de dados educacionais é uma ferramenta de extrema importância e pode auxiliar governos no desenvolvimento de políticas públicas efetivas na área da educação. No Brasil, uma rica fonte de informações na área de educação são os microdados do Exame Nacional do Ensino Médio (ENEM), disponibilizados anualmente, que contém diversas informações dos candidatos. Portanto, este trabalho explora o processo do KDD (Knowledge Discovery in Databases) para extrair conhecimentos a partir dos dados do ENEM. Utilizou-se o algoritmo Apriori para extrair regras que associam os fatores socioeconômicos com o desempenho dos candidatos. A análise foi feita utilizando os dados do ENEM entre os anos de 2019 a 2022, o que possibilitou verificar quais regras persistiram em todos estes anos. Assim, este trabalho identifica quais fatores socioeconômicos desempenham grande influência no desempenho dos candidatos.',
    keyWords: [
      'mineração',
      'dados',
      'KDD',
      'associação',
      'fatores socioeconômicos',
      'ENEM',
    ],
  },
  {
    authors: [
      {
        authorName: 'Vinícius Massaru Oliveira Tanaka',
        socialUrl: 'https://www.linkedin.com/in/vinicius-tanaka-67460b166/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1BAv4DVTHqt5J_wo8hbHPe80f-wqInZWA',
    title:
      'SmileDataAI: segmentação semântica de dentes em imagens de raio-x por meio de aprendizado profundo',
    summary:
      'A segmentação semântica por meio de aprendizado profundo é uma área em crescimento no processamento de imagens. Neste contexto, a odontologia se beneficia significativamente ao explorar o poder do processamento de imagens aliado ao uso de técnicas de aprendizado profundo. Este artigo apresenta uma abordagem de segmentação semântica baseada no modelo HRNet, aplicada a imagens radiográficas odontológicas. O objetivo principal é desenvolver um modelo de rede neural capaz de gerar máscaras nas imagens de raio-x, visando a classificação precisa de cada dente. Ao combinar as capacidades de segmentação semântica e aprendizado profundo, espera-se melhorar o diagnóstico odontológico, fornecendo informações valiosas para a tomada de decisões clínicas e personalizando o tratamento odontológico.',
    keyWords: [
      'Segmentação Semântica',
      'Aprendizado Profundo',
      'Odontologia',
      'HRNet',
      'Diagnóstico Odontológico',
    ],
  },
  // {
  //   authors: [
  //     {
  //       authorName: 'Guilherme Salgado Alves',
  //       socialUrl:
  //         'https://www.linkedin.com/in/guilherme-salgado-alves-1b3653182/',
  //     },
  //   ],
  //   imageUrl:
  //     'https://drive.google.com/uc?export=view&id=1C7wwL-KOikRPEhdukH7ID4FlTFZLO-m0',
  //   title:
  //     'Perfil Invest, utilização de técnicas de agrupamento para definição de ações para estudo de acordo com perfil de investidor',
  //   summary:
  //     'O mercado financeiro consiste na alocação de ativos entre as diversas opções de produtos oferecidos por bancos e corretoras. Considerando a imensa diversidade de opções, a melhor e talvez única possibilidade de ser bem-sucedido no mercado é estar corretamente alinhado com seus próprios objetivos. Com base nesta demanda que existem os perfis de investidores do mercado financeiro. O objetivo deste trabalho é fazer com que os investidores pessoa física possam estudar ações presentes no mercado de capitais brasileiro de maneira direcionada, com base em seu próprio perfil de investidor, com suas respectivas aversões a risco, tolerâncias a volatilidade, entre outros. Para isso, serão utilizadas técnicas de agrupamento presentes nas literaturas da inteligência artificial, para que possam selecionar e agrupar por afinidade determinados grupos de ações, para que investidores menos experientes possam mergulhar em estudos previamente analisados, e saibam o tipo de informação e ativos que estão lidando. Não se trata de recomendação de compra ou de venda de nenhum ativo, mas sim da pré-seleção de ações de acordo com determinados perfis de investidor, para que se possa haver um estudo guiado.',
  //   keyWords: ['perfil de investidor', 'ações', 'agrupamento'],
  // },
  {
    authors: [
      {
        authorName: 'Francine Gonçalves Franco',
        socialUrl: 'https://github.com/francinefranco',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1NGNQD8Gr1VIW50CagazVhDsU2a6xDF1Y',
    title:
      'ContaAI: Uma IA para a produção de textos literários assistida por computador',
    summary:
      'O projeto visa desenvolver um modelo de IA que atue na produção de textos literários. O modelo terá a função de auxiliar ou criar textos literários para diferentes propósitos, como fornecer inspiração para autores em suas obras ou desenvolver histórias para jogos, entre outras necessidades.',
    keyWords: [
      'Inteligência Artificial',
      'textos literários',
      'linguagem natural',
    ],
  },
  {
    authors: [
      {
        authorName: 'Leonardo Silva Pinto',
        socialUrl: '',
      },
      {
        authorName: 'Maria Paula Henriques Prandt',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1z_YFsmKGtaLmQwkF15EvlXC2tdJcxJtA',
    title:
      'A Inteligência Artificial aplicada para o estudo da mortalidade infantil e sua relação com o saneamento básico no Brasil',
    summary:
      'A Taxa de Mortalidade Infantil é um indicador que mensura a proporção de mortes de crianças antes de um ano. Nesse contexto, o presente trabalho busca aplicar técnicas de Inteligência Artificial, principalmente regressão, para analisar quais fatores socioeconômicos influenciam mais o crescimento dessa taxa em comparação com outros. Diante disso, pode-se tirar conclusões acerca de quais fatores econômicos, educacionais e sanitários podem ser usados para melhor predizer a TMI dos municípios brasileiros.',
    keyWords: [
      'mortalidade infantil',
      'inteligência artificial',
      'árvore de decisão',
      'regressão',
      'saneamento básico',
    ],
  },
  {
    authors: [
      {
        authorName: 'Felipe Fernandes',
        socialUrl: '',
      },
      {
        authorName: 'Henrique Dedini',
        socialUrl: '',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1TlS1Hc0_rgA0TYda4qGjVlURfFtbh7bu',
    title:
      'O Algoritmo de Naive Bayes, a Classificação e a comparação com outros algoritmos probabilísticos',
    summary:
      'O projeto em questão visa apresentar o conceito de algoritmos probabilísticos, usando como foco o algoritmo de Naive Bayes e a comparação deste com os demais métodos, apresentando suas variações e aplicações no mundo real.',
    keyWords: [
      'aprendizado',
      'algoritmos',
      'técnica',
      'classificação',
      'supervisão',
    ],
  },
  {
    authors: [
      {
        authorName: 'Lécio Oliveira Gonçalves de Assis',
        socialUrl: 'https://www.linkedin.com/in/lecioassis/',
      },
    ],
    imageUrl:
      'https://drive.google.com/uc?export=view&id=1HxAQl5L4O2nJoHcR_zCl4B8kJjclzodO',
    title:
      'Recomendação Musical Em Tempo Real: Algoritmo Contextualizado Para Personalização De Listas De Reprodução',
    summary:
      'O projeto visa romper com a abordagem atual de aleatoriedade aparente e criar uma nova forma de ordenação de músicas, levando em consideração critérios como histórico de reprodução, músicas recentemente ouvidas, contexto audiovisual e popularidade. A implementação será feita em Python, utilizando a API do Spotify e bibliotecas de interpretação de áudio e som.',
    projectRepoUrl: 'https://github.com/lecioassis/AIproject',
    keyWords: [
      'Regras de Associação',
      'Sistema de Recomendação Musical',
      'Plataformas de Streaming',
      'Listas de Reprodução',
    ],
  },
  // {
  //   authors: [
  //     {
  //       authorName: 'Gabriel Hiro Guedes Kobayakawa Fornel',
  //       socialUrl: 'https://www.linkedin.com/in/gabriel-hiroxd-249965279',
  //     },
  //     {
  //       authorName: 'Guilherme de Oliveira Sousa',
  //       socialUrl:
  //         'https://www.linkedin.com/in/guilherme-de-oliveira-sousa-370233260/',
  //     },
  //   ],
  //   imageUrl: '',
  //   title:
  //     'O aprendizado de máquina aplicado na compreensão da resposta de pacientes com artrite reumatoide tratados com anti-TNF',
  //   summary:
  //     'Diversas doenças inflamatórias autoimunes são tratadas com inibidores de TNF (uma importante citocina envolvida em diversos distúrbios imunológicos). Utilizando do aprendizado de máquina, o presente projeto pretende encontrar grupos de genes que sirvam como biomarcadores ao tratamento com anti-TNF. Isto é, grupos de genes que sinalizem, dentro de uma margem de erro satisfatória, uma resposta positiva ao tratamento (ou, até mesmo grupos de genes que sinalizem uma provável resposta negativa ao tratamento) com anti-TNF’s. A abordagem escolhida é baseada na transformação de dados não imagéticos em dados do tipo imagem imagens (ou seja, compostos por pixels), para que estratégias de deeplearning em imagens possam ser aplicadas em dados biológicos não imagéticos - neste caso, a expressão genética de pacientes acometidos com artrite reumatoide.',
  //   keyWords: ['Anti-TNF', 'Imunologia', 'VisionTransformers', 'DeepInsight'],
  // },
];
