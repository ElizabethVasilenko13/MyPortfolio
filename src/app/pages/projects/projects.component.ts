import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '@services/projects.service';
import { Projects } from '@shared/models/project.interface';
import { CardComponent } from '@shared/components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  private projectsService = inject(ProjectsService);

  projects: Projects = {};

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
