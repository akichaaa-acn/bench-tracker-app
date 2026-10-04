import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {

  menuItems = [
    {
      label: 'Bench Lead View',
      route: '/bench-lead',
      icon: 'grid'
    },
    {
      label: 'Bench Resource View',
      route: '/bench-resource',
      icon: 'target'
    },
    {
      label: 'Tasks',
      route: '/tasks',
      icon: 'check'
    },
    {
      label: 'Learning',
      route: '/learning',
      icon: 'diamond'
    },
    {
      label: 'Action Items',
      route: '/action-items',
      icon: 'flag'
    }
  ];

}