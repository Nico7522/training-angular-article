import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { isDirty } from 'src/app/shared/interfaces/guard.interface';
import { UserLogin } from 'src/app/shared/models/user';
import { checkAge, hasErrorAndTouched } from 'src/app/utils/function';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
@Injectable()
export class RegisterComponent implements OnInit, isDirty, OnDestroy {
  mailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  registerForm: FormGroup;
  status: string = '';
  timeout: string | number | NodeJS.Timeout | undefined;
  hasErrorAndTouched = hasErrorAndTouched;
  constructor(private _authService: AuthService, private _fb: FormBuilder, private _router: Router) {
    this.registerForm = this._fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      birthdate: ['', [Validators.required, checkAge()]],
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

      adresse: new FormGroup({
        zip: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
      }),
    });
  }

  isDirty(): boolean {
    return this.registerForm.dirty && !this.registerForm.valid
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      console.log('valide');
      
      this._authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.status = 'Chargement...';
          this.timeout = setTimeout(() => {
            this._router.navigate(['/']);
            this.status = '';
          }, 2000);
        }
      })
    }
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    clearTimeout(this.timeout)
  }
}
