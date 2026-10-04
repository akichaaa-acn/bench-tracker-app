import { Routes } from '@angular/router';

export const routes: Routes = [
  // =====================================================
  // Admin
  // =====================================================

  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./pages/admin/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  // =====================================================
  // User
  // =====================================================

  {
    path: 'user/dashboard',
    loadComponent: () =>
      import('./pages/user/dashboard/dashboard')
        .then(m => m.UserDashboard)
  },

  {
    path: 'user/tasks',
    loadComponent: () =>
      import('./pages/user/tasks/tasks')
        .then(m => m.Tasks)
  },

  // =====================================================
  // Default
  // =====================================================

  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'admin/dashboard'
  }
];