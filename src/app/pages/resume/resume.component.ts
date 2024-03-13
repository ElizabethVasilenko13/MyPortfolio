import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadCVService } from '@services/download-cv.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  protected downLoadService = inject(DownloadCVService);
}
