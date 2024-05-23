import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router class
import { ProfileImageService } from '../service/profile-image.service'; // Import ProfileImageService

@Component({
  selector: 'app-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})
export class DashboardNavComponent implements OnInit {

  
  showSearch: boolean = false;
  isOpen: boolean = false;
  profileImageUrl: string = '';

  constructor(private router: Router, private profileImageService: ProfileImageService) { } 

  ngOnInit(): void {
    // Subscribe to profile image changes
    this.profileImageService.getProfileImage().subscribe(imageUrl => {
      this.profileImageUrl = imageUrl;
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  logout(): void {
    // Clear session storage
    // Redirect to login page
    this.router.navigate(['/login-form']);
    sessionStorage.clear();
  }

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
