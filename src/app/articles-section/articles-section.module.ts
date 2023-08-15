import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesSectionRoutingModule } from './articles-section-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticlesSectionComponent } from './articles-section';
import { TitleComponent } from './article/title/title.component';
import { CommentComponent } from './article/comment/comment.component';
import { PriceComponent } from './article/price/price.component';
import { LikeComponent } from './article/like/like.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './article/details/details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieSelectedComponent } from './categories/categorie-selected/categorie-selected.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesSectionComponent,
    TitleComponent,
    CommentComponent,
    PriceComponent,
    LikeComponent,
    DetailsComponent,
    CategoriesComponent,
    CategorieSelectedComponent,
  
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    ArticlesSectionRoutingModule,
    FormsModule,
   
  ]
})
export class ArticlesSectionModule { }
