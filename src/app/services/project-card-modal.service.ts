import { Injectable, inject } from '@angular/core';
import { ProjectModalComponent } from '@shared/components/modal/modal.component';
import { Project } from '@shared/models/project.interface';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ProjectCardModalService {
  private modalService = inject(BsModalService);
  modalRef?: BsModalRef;

  openProjectModal(project: Project): void {
    if (project.inProgress) return;
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: project,
      },
    };
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
