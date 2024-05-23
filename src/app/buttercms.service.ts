import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtercmsService {

  private butterCMSUrl = 'https://api.buttercms.com/v2';
  private apiToken = 'c835831b6a53d2f6d4bcabf1471588ee2f1288ab';

  constructor(private http: HttpClient) { }

  getContent(page: string): Observable<any> {
    const url = `${this.butterCMSUrl}/pages/${page}/`;
    // Include API token in headers
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`
    });
    return this.http.get<any>(url, { headers });
  }
}
