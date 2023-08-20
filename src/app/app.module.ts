import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './shared/services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './shared/home/home.component';

import { ArticlesSectionModule } from './articles-section/articles-section.module';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { ShopComponent } from './shop/shop.component';
import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, AuthComponent, ShopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticlesSectionModule,
    HttpClientModule,
    AuthModule
 
  ],
  providers: [DataService, 
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }, RegisterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
