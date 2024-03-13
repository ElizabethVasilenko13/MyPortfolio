export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  responsibilities?: string[];
  gitHubLink?: string;
  deployLink?: string;
  pictures: string[];
  technologies: string[];
  inProgress?: boolean;
}

export interface Projects {
  completedApps?: Project[];
  games?: Project[];
  smallProjects?: Project[];
}
