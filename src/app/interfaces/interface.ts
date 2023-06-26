export interface ProjectCard {
  imageUrl: string;
  title: string;
  summary: string;
  projectRepoUrl?: string;
  authors: Author[];
  keyWords: string[];
}

export interface Author {
  authorName: string;
  socialUrl?: string;
}
