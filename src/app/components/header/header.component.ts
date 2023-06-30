import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../../../features/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoPath: string = '../../assets/images/logo-wia.png';
  scrolled = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.header-container') as HTMLElement;

    if (header && window.pageYOffset > header.offsetHeight) {
      this.renderer.addClass(header, 'scrolled');
      this.scrolled = true;
    } else if (header) {
      this.renderer.removeClass(header, 'scrolled');
      this.scrolled = false;
    }
  }

  navigate(event: string): void {
    switch (event) {
      case 'home':
        this.router.navigate(['home']);
        break;
      case 'projects':
        this.router.navigate(['projects']);
        break;
      case 'contact':
        this.router.navigate(['contact']);
        break;
      case 'subscribe':
        const homeComponent = new HomeComponent();
        homeComponent.subscribe();
        break;
      default:
        console.error('parâmetro passado não existe');
        break;
    }
  }
}
