import { Injectable } from '@angular/core';
import { MenuItems } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private menuItems: MenuItems[] = [
    {title: 'Home', url: '/portfolio/home'},
    {title: 'Projects', url: '/portfolio/projects'},
    {title: 'Resume', url: '/portfolio/resume'},
  ];

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
