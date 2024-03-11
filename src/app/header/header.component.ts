import { Component, Renderer2, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BootstrapIcons } from '@shared/enums/icons.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private renderer = inject(Renderer2);
  menu_icon = BootstrapIcons.menu_icon;
  isMenuActive = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
    this.menu_icon = this.isMenuActive ? BootstrapIcons.close_icon : BootstrapIcons.menu_icon;
    if (this.isMenuActive) {
      this.renderer.addClass(document.body, 'menu-active');
    } else {
      this.renderer.removeClass(document.body, 'menu-active');
    }
  }

  closeMenu(): void {
    if (this.isMenuActive) {
      this.isMenuActive = false;
      this.menu_icon = BootstrapIcons.menu_icon;
    }
    return;
  }
}
