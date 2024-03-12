import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@shared/models/project.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() project: Project = {} as Project;
}
