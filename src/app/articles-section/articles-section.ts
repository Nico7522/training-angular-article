import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product';

@Component({
  
  selector: 'app-articles-section, TestDirective',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css'],
  
})
export class ArticlesSectionComponent {
pain: any;

  constructor(private articleList: DataService, private _productService: ProductService) {
    this._productService.$filteredProduct.subscribe((products: Product[] ) => {
      this.products = products
    })
  }
  articles: Article[] = []
  products: Product[] = []
  title = 'labonneaffaire';
  message: string = ""
  getMessage(message: string) {
    this.message = message
  }
  ngOnInit(): void {
    this.articles = this.articleList.articleList
    this._productService.getProducts().subscribe({

      next: (products) => {this.products = products;
         console.log(products)
      }
    })
}
}
