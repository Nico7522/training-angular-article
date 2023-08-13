import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './shared/services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ListeComponent } from './liste/liste.component';
import { ArticleComponent } from './liste/article/article.component';
import { CommentComponent } from './liste/article/comment/comment.component';
import { TitleComponent } from './liste/article/title/title.component';
import { PriceComponent } from './liste/article/price/price.component';
import { LikeComponent } from './liste/article/like/like.component';
import { LastArticleComponent } from './liste/last-article/last-article.component';
import { DetailsComponent } from './liste/article/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    FooterComponent,
    TitleComponent,
    PriceComponent,
    LikeComponent,
    CommentComponent,
    ListeComponent,
    LastArticleComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
