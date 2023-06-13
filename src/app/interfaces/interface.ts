export interface ProjectCard {
  imageUrl: string;
  title: string;
  summary: string;
  link: string;
  authors: Author[];
}

export interface Author {
  name: string;
  socialUrl?: string;
}
