import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@shared/models/project.interface';
import { ProjectCardModalService } from '@services/project-card-modal.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() project: Project = {} as Project;
  protected projectModalServie = inject(ProjectCardModalService);
}
