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

  {
    path: 'user/time-in',
    loadComponent: () =>
      import('./pages/user/time-in/time-in')
        .then(m => m.TimeIn)
  },

  {
    path: 'user/time-out',
    loadComponent: () =>
      import('./pages/user/time-out/time-out')
        .then(m => m.TimeOut)
  },

  // =====================================================
  // Admin Pages
  // =====================================================

  {
    path: 'resources',
    loadComponent: () =>
      import('./pages/admin/resources/resources')
        .then(m => m.Resources)
  },

  {
    path: 'attendance',
    loadComponent: () =>
      import('./pages/admin/attendance/attendance')
        .then(m => m.Attendance)
  },

  {
    path: 'productivity',
    loadComponent: () =>
      import('./pages/admin/productivity/productivity')
        .then(m => m.Productivity)
  },

  {
    path: 'learning',
    loadComponent: () =>
      import('./pages/admin/learning/learning')
        .then(m => m.Learning)
  },

  {
    path: 'action-items',
    loadComponent: () =>
      import('./pages/admin/action-items/action-items')
        .then(m => m.ActionItems)
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