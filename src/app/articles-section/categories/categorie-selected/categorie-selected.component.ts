import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article';
import { Product } from 'src/app/shared/models/product';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-categorie-selected',
  templateUrl: './categorie-selected.component.html',
  styleUrls: ['./categorie-selected.component.css'],
})
export class CategorieSelectedComponent implements OnInit {
  filteredProduct: Product[] = [];
  constructor(
    private articleList: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const categorieSelected = this.route.snapshot.params['categorie']
    
    // if (categorieSelected) {
    //   this.route.params.subscribe((params) => {
    //       this.filteredProduct = this.articleList.articleList.filter((a) => {
    //         return params['categorie'] === a.categorie;
    //       });
       
    //   }); 
    // } else {
    //   this.filteredArticle = this.articleList.articleList
    // }
  }
}
