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
  private _currentUserSubject: BehaviorSubject<UserResponse | null> =
    new BehaviorSubject<UserResponse | null>(null);
  $currentUser = this._currentUserSubject.asObservable();

  // Username pour set le cookie
  username: string | null = localStorage.getItem('name');

  private _userName: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this.username);
  $userName = this._userName.asObservable();

  public get currentUserValue(): UserResponse | null {
    return this._currentUserSubject.value;
  }

  relogMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
  $relogMessage = this.relogMessage.asObservable();

  constructor(
    private _httpClient: HttpClient,
    private _tokenService: TokenService,
    private _cookieService: CookieService
  ) {}
  setToken(token: string): void {
    this._currentUserSubject.subscribe({
      next: (user) => {
        if (user) {
          user.token.token = token;
        }
      },
    });
  }

  login(user: UserLogin): Observable<UserResponse> {
    return this._httpClient
      .post<UserResponse>(`${environment.apiUrl}/login`, user, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          localStorage.setItem('name', res.user.name);
          this._userName.next(res.user.name);

          this._tokenService.saveToken(res.token.token);
          this._currentUserSubject.next(res);
          this.$currentUser.subscribe((u) => console.log('currentUser =>', u));

          return res;
        })
      );
  }

  logout(): Observable<any> {
    return this._httpClient
      .get<any>(`${environment.apiUrl}/logout`, { withCredentials: true })
      .pipe(
        map((res) => {
          this._userName.next(null);
          localStorage.clear();
          sessionStorage.clear();
          console.log(res);

          return res;
        })
      );
  }

  register(user: any): Observable<UserResponse> {
 
    return this._httpClient
      .post<UserResponse>(`${environment.apiUrl}/register`, user, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          localStorage.setItem('name', res.user.name);
          this._userName.next(res.user.name);

          this._tokenService.saveToken(res.token.token);
          this._currentUserSubject.next(res);

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
