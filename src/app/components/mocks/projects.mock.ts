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
    ...projectCardMock,
    title: 'Projeto 1',
  },
  {
    ...projectCardMock,
    title: 'Projeto 2',
  },
  {
    ...projectCardMock,
    title: 'Projeto 3',
  },
  {
    ...projectCardMock,
    title: 'Projeto 4',
  },
  {
    ...projectCardMock,
    title: 'Projeto 5',
  },
  {
    ...projectCardMock,
    title: 'Projeto 6',
  },
  {
    ...projectCardMock,
    title: 'Projeto 7',
  },
];
