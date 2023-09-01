import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged-component',
  templateUrl: './logged-component.component.html',
  styleUrls: ['./logged-component.component.css'],

})
export class LoggedComponentComponent implements OnInit {
  user!: string | null;
  constructor(private _authService: AuthService, private _router: Router){}
  ngOnInit(): void {
    this._authService.$userName.subscribe((username) => {
      this.user = username;
  })}


  logout(): void {
    localStorage.removeItem('name');
    this._authService.logout().subscribe({
      next: () => this._router.navigate(['/']),
    });

}}


