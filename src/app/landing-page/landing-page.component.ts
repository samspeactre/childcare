import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private router: Router) {}

  navigateToLandingPage() {
    this.router.navigate(['/']);
  }

}
