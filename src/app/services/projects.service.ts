import { Injectable } from '@angular/core';
import { projects } from '@data/projects';
import { Project, Projects } from '@shared/models/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Projects {
    return projects;
  }

  getProjectById(projects: Project[], id: number): Project | undefined {
    return projects.find(project => project.id === id);
  }
}
