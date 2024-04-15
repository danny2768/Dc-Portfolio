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

  private resumeEnPath: string = '/assets/resume/DanielCobos-Resume(en).pdf';
  private resumeEsPath: string = '/assets/resume/DanielCobos-Resume(es).pdf';

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }

  getResumeEnPath() {
    return this.resumeEnPath;
  }

  getResumeEsPath() {
    return this.resumeEsPath;
  }

}
