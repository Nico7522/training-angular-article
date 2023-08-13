import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { LastArticleComponent } from './liste/last-article/last-article.component';

const routes: Routes = [
  {path: 'last', component: LastArticleComponent },
  {path: 'all', component: ListeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
