// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if user is authenticated
    if (sessionStorage.getItem('token')) {
      return true; // User is authenticated, allow access
    } else {
      // If not authenticated, redirect to login page
      this.router.navigate(['/login-form']);
      return false;
    }
  }
}
