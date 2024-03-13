import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private viewportScroller = inject(ViewportScroller);

  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
