import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, HomeIcon, SettingsIcon, MenuIcon, MessageCircleIcon, LayoutDashboardIcon } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  readonly MessageCircleIcon = MessageCircleIcon;
  readonly MenuIcon = MenuIcon;
  readonly HomeIcon = HomeIcon;
  readonly SettingsIcon = SettingsIcon;
  readonly LayoutDashboardIcon = LayoutDashboardIcon;

collapsed = false;

toggleSidebar() {
  this.collapsed = !this.collapsed;
  document.body.classList.toggle('sidebar-collapsed', this.collapsed);
  console.log('Sidebar collapsed:', this.collapsed);
}
  
}
