import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // getuser(): Observable<user[]> {
  //   return this.http.get<user[]>('http://localhost/childcarephp/list.php');
  // }

  createuser(user: user) {
    return this.http.post<any>('http://localhost/childcarephp/insert.php', user);
  }

  login( email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost/childcarephp/login.php', { email, password  });
  }
  
}
