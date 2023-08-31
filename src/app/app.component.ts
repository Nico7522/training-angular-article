import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private _authService: AuthService, private _cookieService: CookieService){
  if (!sessionStorage.getItem('token')) {
    localStorage.clear()
  }

}
}
