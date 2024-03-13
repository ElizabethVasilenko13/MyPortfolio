import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';
import { ProjectsService } from '@services/projects.service';
import { Projects } from '@shared/models/project.interface';
import { DownloadCVService } from '@services/download-cv.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected downLoadService = inject(DownloadCVService);
  private projectsService = inject(ProjectsService);

  projects: Projects = {};

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
