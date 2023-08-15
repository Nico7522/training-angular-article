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


@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticlesSectionModule,
 
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
