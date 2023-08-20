import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterGuard } from 'src/app/shared/interfaces/guard.interface';
import { UserLogin } from 'src/app/shared/models/user';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit, RegisterGuard {
  constructor(private _authService: AuthService){}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    birthdate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)])

  })
   isDirty(): boolean {
    return this.registerForm.dirty
  }
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
