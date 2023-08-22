import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  value: string = '';
  filteredProduct!: Article[];
  user!: string | null
  constructor(private productService: DataService, private _authService: AuthService, private _cookieService: CookieService) {
    // this._authService.$currentUser.subscribe((actualUser: User | null) => {
    //   this.user = actualUser
    
    // });
   
    
  }
  

  getValue() {
    this.productService.onSearch(this.value);
  }
  ngOnInit(): void {
    this._authService.$userName.subscribe((username) => this.user = username)

  }
}
