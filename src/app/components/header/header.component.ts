import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarNav') navbarNav!: ElementRef;
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngAfterViewInit(): void {
    // Only execute client-side code if we're in a browser
    if (isPlatformBrowser(this.platformId)) {
      // Add click event listeners to nav links for mobile view
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        this.renderer.listen(link, 'click', () => {
          // Close the menu when a link is clicked in mobile view
          if (window.innerWidth < 992) {
            this.toggleNavbar();
          }
        });
      });
      
      // Add click event listener to navbar toggler
      if (this.navbarToggler) {
        this.renderer.listen(this.navbarToggler.nativeElement, 'click', () => {
          this.toggleNavbar();
        });
      }
    }
  }
  
  toggleNavbar(): void {
    if (this.navbarNav) {
      const navbarElement = this.navbarNav.nativeElement;
      if (navbarElement.classList.contains('show')) {
        this.renderer.removeClass(navbarElement, 'show');
      } else {
        this.renderer.addClass(navbarElement, 'show');
      }
    }
  }
}
