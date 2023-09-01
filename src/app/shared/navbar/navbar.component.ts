import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';
import { AuthService } from 'src/app/services/auth.service';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { LoggedComponentComponent } from 'src/app/auth/logged-component/logged-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  value: string = '';
  filteredProduct!: Article[];
  user!: string | null;
  constructor(
    private _productService: ProductService,
    private _authService: AuthService,
    private _cookieService: CookieService,
    private _router: Router
  ) {

  }

  getValue() {
    this._productService.onSearch(this.value);
  }

  logout(): void {
    localStorage.removeItem('name');
    this._authService.logout().subscribe({
      next: () => this._router.navigate(['/']),
    });
  }
  ngOnInit(): void {
    this._authService.$userName.subscribe((username) => {
      this.user = username;
    });

  }


}
