import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product';
import { LikeOrDislike } from '../shared/interfaces/like-dislike.interface';
import { checkIsLikedOrDisliked } from '../utils/function';
import { LikeOrDislikeResponse } from '../shared/interfaces/response.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-articles-section, TestDirective',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css'],
})
export class ArticlesSectionComponent {
  errorMessage: string = '';

  constructor(private _productService: ProductService, private _cookieService: CookieService) {
    this._productService.$filteredProduct.subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  products: Product[] = [];

  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }

  likeOrDislike(action: LikeOrDislike) {
    if (action.action === 'like') {
      this.like(action.id);
    } else if (action.action === 'dislike') {
      this.dislike(action.id)
    }
  }

  like(id: number) {
    this._productService.like(id).subscribe({
      next: (res) => {
       
        console.log(this._cookieService.get('id'));
        
        checkIsLikedOrDisliked(this.products, "like", res as LikeOrDislikeResponse, "Already liked")
      },
    });
  }

  dislike(id: number) {
    this._productService.dislike(id).subscribe({
      next: (res) => {
        
          checkIsLikedOrDisliked(this.products, "dislike", res as LikeOrDislikeResponse, "Already disliked")
          
        
      },
    })
  }
}
