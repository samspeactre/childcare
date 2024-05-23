
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  private profileImageUrlSubject: BehaviorSubject<string> = new BehaviorSubject<string>('../../assets/img/bydefault-img.png');
  profileImageUrl$: Observable<string> = this.profileImageUrlSubject.asObservable();

  constructor() { }

  updateProfileImage(imageUrl: string): void {
    this.profileImageUrlSubject.next(imageUrl); // Notify subscribers about the change
  }

  getProfileImage(): Observable<string> {
    return this.profileImageUrl$;
  }
}
