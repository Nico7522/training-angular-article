import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin, UserResponse } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environment/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // toutes les données de l'utilisateur
  private _currentUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);
  $currentUser = this._currentUserSubject.asObservable();

  // Username pour set le cookie
  username: string = this._cookieService.get('name');
  private _userName: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this.username);
  $userName = this._userName.asObservable();

  public get currentUserValue(): User | null {
    return this._currentUserSubject.value;
  }
  constructor(
    private _httpClient: HttpClient,
    private _tokenService: TokenService,
    private _cookieService: CookieService
  ) {}
  setToken(token: string): void {
    this._currentUserSubject.subscribe({
      next: (user) => {
        if (user) {
          user.token = token;
        }
      },
    });
  }

  login(user: UserLogin): Observable<UserResponse> {
    return this._httpClient
      .post<UserResponse>(`${environment.apiUrl}/login`, user)
      .pipe(
        map((res) => {
          this._tokenService.saveToken(res.token.token);
          this._currentUserSubject.next({ ...res.user });
          this.setInfoCookie(res.user)
          return res;
        })
      );
  }

  register(user: UserLogin): Observable<UserResponse> {
    return this._httpClient
      .post<UserResponse>(`${environment.apiUrl}/register`, user)
      .pipe(
        map((res) => {
          this._tokenService.saveToken(res.token.token);
          this._currentUserSubject.next({ ...res.user });
          this.setInfoCookie(res.user)
          return res;
        })
      );
  }

  setInfoCookie(user: User): void {
    this._cookieService.set('name', user.name);
    let name = this._cookieService.get('name');
    this._userName.next(name);
  }

  isConnected(): boolean {
    return this.currentUserValue !== null;
  }
}
