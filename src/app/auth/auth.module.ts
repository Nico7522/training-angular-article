import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { LoggedComponentComponent } from './logged-component/logged-component.component';
import { FirstLetterUpperCasePipe } from '../pipes/first-letter-uppercase.pipe';
import { ShopModule } from '../shop/shop.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfilComponent,
    LoggedComponentComponent,
    FirstLetterUpperCasePipe
  ],
  exports: [LoggedComponentComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ShopModule
  ]
})
export class AuthModule { }
