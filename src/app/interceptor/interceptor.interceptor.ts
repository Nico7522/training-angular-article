import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService, private _tokenService: TokenService, private _cS: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // let token: string | null = this._tokenService.getToken()
    // if (token) {
    //    token = token.replaceAll('"', "")
    // }
    let token = this._cS.get('token')
    if (token) {
      const decrypted = atob(token)
      token = decrypted.split('token":"')[1].split('","')[0];     
    }
    
    if (token) {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
