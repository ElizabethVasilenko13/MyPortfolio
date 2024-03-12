import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '@shared/models/project.interface';

@Component({
  selector: 'app-projet-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ProjectModalComponent {
  protected modalRef = inject(BsModalRef);
  project = {} as Project;
}
