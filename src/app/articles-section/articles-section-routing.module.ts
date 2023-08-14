import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesSectionComponent } from './articles-section';
import { DetailsComponent } from './article/details/details.component';

const routes: Routes = [
  {path: '', component: ArticlesSectionComponent},
  {path: "article/:id", component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesSectionRoutingModule { }
