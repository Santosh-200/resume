import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  
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
