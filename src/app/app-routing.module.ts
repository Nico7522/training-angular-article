import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LastArticleComponent } from './liste/last-article/last-article.component';
import { DetailsComponent } from './liste/article/details/details.component';

const routes: Routes = [
  {path: 'last', component: LastArticleComponent },
  {path: 'all', component: ListeComponent },
  {path: 'article/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
