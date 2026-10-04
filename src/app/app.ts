import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './components/side-bar/side-bar';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBar,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  sidebarCollapsed = false;
  userRole: 'admin' | 'user' = 'admin';

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  switchRole(): void {
    this.userRole = this.userRole === 'admin' ? 'user' : 'admin';
    this.sidebarCollapsed = false;
  }
}