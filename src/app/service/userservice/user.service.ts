import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceId {
  constructor(private http: HttpClient) {}
 userid!: string;
  login(email: string, password: string): Observable<any> {
    // Your login logic here
    // For example:
    return this.http.post<any>(`http://localhost/childcarephp/login`, { email, password });
  }

  getUserDataById(userId: string): Observable<any> {
    return this.http.get<any>(`http://localhost/childcarephp/getCurrentUser${userId}`); // Adjust the endpoint accordingly
  }
  setuserid(userid:string){
    this.userid=userid
  }
  getuserid(){
    return this.userid
  }
}
