import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadCVService {
  public renderer: Renderer2;
  constructor(private _renderer: RendererFactory2) {
    this.renderer = _renderer.createRenderer(null, null);
  }

  downloadCV(): void {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/CV_Yelyzaveta_Vasylenko.pdf');
    link.setAttribute('download', 'CV_Yelyzaveta_Vasylenko.pdf');
    link.click();
    link.remove();
  }
}
