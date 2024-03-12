import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@shared/components/card/card.component';
import { ProjectsService } from '@services/projects.service';
import { Projects } from '@shared/models/project.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private renderer = inject(Renderer2);
  private projectsService = inject(ProjectsService);

  projects: Projects = {};

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  downloadFile(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV_Yelyzaveta_Vasylenko_Frontend.pdf');
    link.setAttribute('download', 'CV_Yelyzaveta_Vasylenko_Frontend.pdf');
    link.click();
    link.remove();
  }
}
