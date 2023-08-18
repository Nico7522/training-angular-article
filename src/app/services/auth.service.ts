import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  $currentUser?: Observable<User>;
  public get currentUserValue(): User | null {
    return this._currentUserSubject.value
  }
  constructor(private _httpClient: HttpClient) { }
  setToken(token: any): void {
    this._currentUserSubject.next(token)
  }

  login(user: UserLogin): Observable<User> {
   return this._httpClient.post<User>('http://localhost:8080/api/user/login', user).pipe(map(user => {
    return {...user,
      
    }
   }))
  }
}
