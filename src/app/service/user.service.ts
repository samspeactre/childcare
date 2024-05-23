import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // getUserDataById(userId: any) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'http://localhost/childcarephp/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchUsers(name: string, dob: string): Observable<any[]> {
    // Implement search logic here, e.g., filter users by name and/or date of birth
    // You can modify the API endpoint to accept search parameters
    // Example: `${this.apiUrl}?name=${name}&dob=${dob}`
    return this.http.get<any[]>(this.apiUrl);
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'getCurrentUser.php');
  }
  

}
