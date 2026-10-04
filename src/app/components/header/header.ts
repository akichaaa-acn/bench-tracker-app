import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() role: 'admin' | 'user' = 'admin';

  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  profileMenuOpen = false;

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }

  toggleProfileMenu(): void {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  closeProfileMenu(): void {
    this.profileMenuOpen = false;
  }

  logoutUser(): void {
    this.profileMenuOpen = false;
    this.logout.emit();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.closest('.profile-container')) {
      this.closeProfileMenu();
    }
  }

  get userName(): string {
    return this.role === 'admin'
      ? 'Admin User'
      : 'Bench Resource';
  }

  get userRole(): string {
    return this.role === 'admin'
      ? 'Admin / Bench Lead'
      : 'User / Bench Resource';
  }

  get initials(): string {
    return this.role === 'admin'
      ? 'AM'
      : 'BR';
  }
}