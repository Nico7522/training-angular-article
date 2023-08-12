import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitleComponent } from './article/title/title.component';
import { PriceComponent } from './article/price/price.component';
import { LikeComponent } from './article/like/like.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './article/comment/comment.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    TitleComponent,
    PriceComponent,
    LikeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
