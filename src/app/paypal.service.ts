import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayPalService {

  constructor(private http: HttpClient) { }

  
  submitOrder(formData: any): Observable<any> {
   
    return this.http.post<any>('http://localhost/AngularPhp/insert_order.php', formData);
  }
}
