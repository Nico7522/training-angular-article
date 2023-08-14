import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesSectionComponent } from './articles-section/articles-section';
import { LastArticleComponent } from './articles-section/last-article/last-article.component';
import { HomeComponent } from './shared/home/home.component';
import { ArticlesSectionModule } from './articles-section/articles-section.module';





const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'last', component: LastArticleComponent },
  {path: 'article', component: ArticlesSectionComponent, loadChildren: () => import('./articles-section/articles-section.module').then(m => ArticlesSectionModule) },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
