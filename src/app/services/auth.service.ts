import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin, UserRegister, UserResponse } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environment/environment';
import { CookieService } from 'ngx-cookie-service';
import { setUser } from '../utils/function';
import { LogoutResponse } from '../shared/interfaces/response.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // toutes les données de l'utilisateur
  private _currentUserSubject: BehaviorSubject<UserResponse | null> =
    new BehaviorSubject<UserResponse | null>(null);
  $currentUser = this._currentUserSubject.asObservable();

  // Username pour set le cookie
  private _username: string | null = localStorage.getItem('name');

  private _userName: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(this._username);
  $userName = this._userName.asObservable();

  // public get currentUserValue(): UserResponse | null {
  //   return this._currentUserSubject.value;
  // }

  private get _isLogged(): boolean  {
    console.log(this._cookieService.get('token') !== '');
    
    return this._cookieService.get('token') !== ''
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
         return setUser(res, this._userName, this._currentUserSubject)
        })
      );
  }

  logout(): Observable<LogoutResponse> {
    return this._httpClient
      .get<LogoutResponse>(`${environment.apiUrl}/logout`, { withCredentials: true })
      .pipe(
        map((res) => {
          this._userName.next(null);
          localStorage.clear();
          return res;
        })
      );
  }

  clearLocalStorage(){
    this._userName.next(null)
  }

  register(user: UserRegister): Observable<UserResponse> {
 
    return this._httpClient
      .post<UserResponse>(`${environment.apiUrl}/register`, user, {
        withCredentials: true,
      })
      .pipe(
        map((res) => {
          return setUser(res, this._userName, this._currentUserSubject)
        })
      );
  }

  isConnected(): boolean  {
    return this._isLogged
  }
}
