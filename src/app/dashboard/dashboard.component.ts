import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { imageUrl: '../../assets/img/search-employee.png', text: 'search employee',url:'/landing-page'},
    { imageUrl: '../../assets/img/search-parent.png', text: 'search parent',url:'' },
    { imageUrl: '../../assets/img/finfing-qualified.png', text: 'finding qualified',url:'' },
    { imageUrl: '../../assets/img/State-finding.png', text: 'state finding',url:'' },
    { imageUrl: '../../assets/img/hr compliance.png', text: 'HR compliance ',url:'' },
    { imageUrl: '../../assets/img/additional-info.png', text: 'additional information',url:'' },
  ];

  constructor(private router: Router) {}

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
