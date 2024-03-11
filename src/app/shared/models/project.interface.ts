export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  gitHubLink: string;
  deployLink?: string;
  pictures: string[];
  technologies: Technologies[];
}

interface Technologies {
  technologiName: string;
  technologiBootstrapIconName: string;
}
