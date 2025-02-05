import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  images: string[] = [
    'assets/images/car1.avif',
    'assets/images/car2.avif',
    'assets/images/car3.avif'
  ];

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
    }, 3000);  // Change image every 3 seconds
  }
}
