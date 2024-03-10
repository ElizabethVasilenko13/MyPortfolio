import { Component } from '@angular/core';
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
  menu_icon = BootstrapIcons.menu_icon;
  isMenuActive = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
    this.menu_icon = this.isMenuActive ? BootstrapIcons.close_icon : BootstrapIcons.menu_icon;
  }

  closeMenu(): void {
    if (this.isMenuActive) {
      this.isMenuActive = false;
      this.menu_icon = BootstrapIcons.menu_icon;
    }
    return;
  }
}
