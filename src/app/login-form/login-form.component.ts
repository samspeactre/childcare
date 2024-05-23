// login-form.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserServiceId } from '../service/userservice/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router, private userservice: UserServiceId) { }

  login(): void {
    this.registerService.login( this.email, this.password).subscribe(
      (response: any) => {
        if (response.success) {
        console.log('User ID from response:', response.user_id.id);
        sessionStorage.setItem('id', response.user_id.id);
        // sessionStorage.setItem('id', JSON.stringify(response.user_id.id));
        console.log('Session ID in sessionStorage:', sessionStorage.getItem('id'));
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        console.error('Error:', error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    );
  }
}
