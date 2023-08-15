import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesSectionComponent } from './articles-section';
import { DetailsComponent } from './article/details/details.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieSelectedComponent } from './categories/categorie-selected/categorie-selected.component';

const routes: Routes = [
  {path: '', component: ArticlesSectionComponent},
  {path: "article/categories", component: CategoriesComponent, children: [
    {path: "", component: CategorieSelectedComponent},
    {path: ":categorie", component: CategorieSelectedComponent},
  ]},
  {path: "article/:id", component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesSectionRoutingModule { }
