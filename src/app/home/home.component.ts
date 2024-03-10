import { Component, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private renderer = inject(Renderer2);

  downloadFile(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV_Yelyzaveta_Vasylenko_Frontend.pdf');
    link.setAttribute('download', 'CV_Yelyzaveta_Vasylenko_Frontend.pdf');
    link.click();
    link.remove();
  }
}
