import { Injectable } from '@angular/core';
import { MenuItems } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private menuItems: MenuItems[] = [
    {title: 'Home', url: 'home'},
    {title: 'Projects', url: 'projects'},
    {title: 'Resume', url: 'resume'},
  ];

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }
}
