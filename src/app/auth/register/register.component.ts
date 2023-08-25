import { Component, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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
export class RegisterComponent implements OnInit, isDirty  {
  mailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  registerForm: FormGroup;
  hasErrorAndTouched = hasErrorAndTouched
  constructor(private _authService: AuthService, private _fb: FormBuilder) {
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
    });
  }

  isDirty(): boolean {
    return this.registerForm.dirty;
  }

  handleSubmit() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe(res => console.log(res)
      )
    }
  }
  ngOnInit(): void {

  }


}
