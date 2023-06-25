import { ProjectCard } from '../../interfaces/interface';

export const projectCardMock: ProjectCard = {
  title: 'Project Title',
  imageUrl:
    'https://www.zdnet.com/a/img/resize/1b0f3a471607ff123236026b04b964e1853ed41b/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&fit=crop&height=900&width=1200',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  link: 'https://via.placeholder.com/150',
  authors: [
    {
      name: 'Leonardo Loureiro Costa',
      socialUrl: 'leonardocosta.tech',
    },
  ],
};

export const projects: ProjectCard[] = [
  {
    imageUrl:
      'https://storage.googleapis.com/kaggle-datasets-images/854710/1457725/8c5784908d2d3cd58f5ce42115be1bf0/dataset-card.png?t=2020-09-02-06-59-59',
    title:
      'Illuminating Artistic Intuition: Exploring Zero-Shot Image Classification and Explainable AI through Diffusion Models and the LIME Algorithm',
    summary:
      'Um estudo sobre a classificação de imagens de pinturas usando dados artificialmente gerados e a rede neural EfficientNet. O objetivo é classificar pinturas por artista, utilizando modelos treinados exclusivamente em dados gerados por IA. O estudo também inclui áreas de explainable AI, dando luz a o que faz uma pintura ser classificada como tal.',
    authors: [
      {
        name: 'Leonardo Loureiro Costa',
        socialUrl: 'https://github.com/Leonardo-Costa',
      },
    ],
  },
];
