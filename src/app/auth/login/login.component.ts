import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, timeout } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { hasErrorAndTouched } from '../../utils/function';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  hasErrorAndTouched = hasErrorAndTouched;
  loginForm: FormGroup;
  mailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  status: string = '';
  timeout: string | number | NodeJS.Timeout | undefined;
  constructor(
    private _clientService: ClientService,
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.mailPattern),
        ],
      ],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  
  handleSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.status = 'Chargement...';
          this.timeout = setTimeout(() => {
            this._router.navigate(['/']);
            this.status = '';
          }, 2000);
        },
      });
    }
  }
  ngOnInit(): void {
    // this._clientService.getAll().pipe(map(x =>  {
    //   return {
    //     ...x,
    //     dateDuJour: new Date()
    //   }
    // })).subscribe(val => console.log(val)
    // )
  }

  ngOnDestroy(): void {
      clearTimeout(this.timeout)
  }
}

