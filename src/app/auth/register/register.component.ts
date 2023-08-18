import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from 'src/app/shared/models/user';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _authService: AuthService){}
ngOnInit(): void {
    let userLogin: UserLogin = {
      email: environment.email,
      password: environment.password
    }

    this._authService.login(userLogin).subscribe({
      next: (res) => console.log(res)
      
    })
}
}
