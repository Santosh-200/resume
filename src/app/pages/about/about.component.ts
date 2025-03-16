import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }
}
