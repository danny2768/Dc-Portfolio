import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

interface MenuItems {
  title: string;
  url: string;
}

@Component({
  selector: 'portfolio-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{

  public showMobileMenu: boolean = false;

  public menuItems: MenuItems[] = [
    {title: 'Home', url: 'home'},
    {title: 'Projects', url: 'projects'},
    {title: 'Resume', url: 'resume'},
  ];

  // GSAP annimations


  toggleMobileMenu( annimation?: boolean){
    this.showMobileMenu = !this.showMobileMenu;

  }

}

