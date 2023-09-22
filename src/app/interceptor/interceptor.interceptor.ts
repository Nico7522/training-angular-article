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
  constructor(
    private _authService: AuthService,
    private _tokenService: TokenService,
    private _cookieService: CookieService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    // Check si le token est toujours présent dans les cookies et si le localstorage a encore le nom
    // Si le cookie a expiré et que le nom est encore dans le localstorage -> clear le local storage pour ne plus avoir le nom dans la navbar et pourvoir se reconnecter
    // Si pas pas de cookie ni de nom dans le localstorage on ne fait rien
    let token = this._cookieService.get('token');
    if (!token && localStorage.getItem('name')) {
   
      
      this._authService.clearLocalStorage();
    }


    // Si le token est dans les cookies on le décrype et on le met dans le header
    if (token) {
      const decrypted = atob(token);
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
