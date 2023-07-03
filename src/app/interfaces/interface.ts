export interface ProjectCard {
  imageUrl: string;
  title: string;
  summary: string;
  projectRepoUrl?: string;
  authors: Author[];
  keyWords: string[];
  hasImage: boolean;
}

export interface Author {
  authorName: string;
  socialUrl?: string;
}
