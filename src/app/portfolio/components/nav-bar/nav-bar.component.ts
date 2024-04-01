import { Component, HostListener, Input } from '@angular/core';
import gsap from 'gsap';
import { MenuItems } from '../../interfaces/menu-item.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'portfolio-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public showMobileMenu: boolean = false;
  public menuItems: MenuItems[];
  private navHidden: boolean = false;
  private lastScrollPosition: number = 0;

  @Input()
  public textWhite: boolean = false;

  constructor(private portfolioService: PortfolioService) {
    this.menuItems = this.portfolioService.getMenuItems();
  }

  ngAfterViewInit() {
    this.updateNavbarColor();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition < this.lastScrollPosition) {
      this.navHidden = false; // Scrolling up
    } else {
      this.navHidden = true; // Scrolling down
      this.showMobileMenu = false; // Hide mobile menu when scrolling down
    }
    this.lastScrollPosition = currentScrollPosition;

    gsap.to('#navbar', { duration: 0.5, y: this.navHidden ? -100 : 0 });

    this.updateNavbarColor();
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.updateNavbarColor();
  }

  private updateNavbarColor() {
    const navbarElement = document.getElementById('navbar');
    if (!navbarElement) return;

    if (this.showMobileMenu) {
      gsap.to(navbarElement, {
        backgroundColor: 'rgba(50, 50, 50, 0.8)',
        color: 'white',
        duration: 0.5,
      });
    } else {
      const navbarHeight = navbarElement.offsetHeight + 10;
      const currentScrollPosition = window.pageYOffset;

      gsap.to(navbarElement, {
        backgroundColor:
          currentScrollPosition > navbarHeight ? 'rgba(50, 50, 50, 0.8)' : 'transparent',
        color: currentScrollPosition > navbarHeight ? 'white' : 'black',
        duration: 0.5,
      });
    }
  }
}
