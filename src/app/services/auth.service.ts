import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin, UserResponse } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  // $currentUser?: Observable<User | null>;
  $currentUser = this._currentUserSubject.asObservable();
  public get currentUserValue(): User | null {
    return this._currentUserSubject.value
  }
  constructor(private _httpClient: HttpClient, private _tokenService: TokenService) {
   }
  setToken(token: any): void {
    this._currentUserSubject.next(token)
  }

  login(user: UserLogin): Observable<UserResponse> {
   return this._httpClient.post<UserResponse>(`${environment.apiUrl}/user/login`, user).pipe(map(response => { 
      this._tokenService.saveToken(response.result.token);
      this._currentUserSubject.next({...response.result.user, token: response.result.token})
      this.$currentUser.subscribe(val => console.log('reponse login', val)
      )
      
      return response
    }))
  }
}
