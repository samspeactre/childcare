import { Component, OnInit } from '@angular/core';
import { ProfileImageService } from '../service/profile-image.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { UserServiceId } from '../service/userservice/user.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userid!: string;
  id: string = '';
  fname: string = '';
  email: string = '';
  phone: string = '';

  currentUser: any;


  // getData() {
  //   this.id = sessionStorage.getItem("id") || '';
  // }

  constructor(
    private profileImageService: ProfileImageService,
    private http: HttpClient,
    private userservice: UserService,
    private userservice2: UserServiceId,
    private registerService: RegisterService
  ) { }

  profileImageUrl: string = '';
  userData: any = {};

  ngOnInit(): void {
    // Subscribe to changes in the profile image URL
    this.profileImageService.getProfileImage().subscribe(imageUrl => {
      this.profileImageUrl = imageUrl; // Update the profile image URL
    });
    this.userid = this.userservice2.getuserid()
    this.userservice2.getUserDataById(this.userid).subscribe((res: any) => {
      console.log(res)
    })

    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.userservice.getCurrentUser().subscribe(data => {
      this.currentUser = data;
      // Log the current user data to check if it's fetched correctly
      console.log(this.currentUser);
    });
  }
  

  socialMediaLinks = [
    { name: 'Facebook', iconClass: 'fa-brands fa-facebook', url: 'https://www.facebook.com/' },
    { name: 'Twitter', iconClass: 'fa-brands fa-x-twitter', url: '' },
    { name: 'Instagram', iconClass: 'fa-brands fa-instagram', url: 'https://www.instagram.com/' },
    { name: 'Linkedin', iconClass: 'fa-brands fa-linkedin', url: 'https://pk.linkedin.com/' },
    // Add more social media platforms as needed
  ];

  // Function to update profile image
  changeProfileImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        // Update profile image in service
        this.profileImageService.updateProfileImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }

  updateUserData() {
    this.http.post<any>('http://localhost/childcarephp/update_user.php', this.userData)
      .subscribe(
        response => {
          console.log('User data updated successfully:', response);

        },
        error => {
          console.error('Failed to update user data:', error);

        }
      );
  }
}
