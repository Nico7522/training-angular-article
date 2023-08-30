import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product';
import { LikeOrDislike } from '../shared/interfaces/like-dislike.interface';
import { checkIsLikedOrDisliked } from '../utils/function';

@Component({
  selector: 'app-articles-section, TestDirective',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css'],
})
export class ArticlesSectionComponent {
  errorMessage: string = '';

  constructor(private _productService: ProductService) {
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
        console.log(res);
        
        checkIsLikedOrDisliked(this.products, "like", res, "Already liked")
      },
    });
  }

  dislike(id: number) {
    this._productService.dislike(id).subscribe({
      next: (res) => {
        console.log(res)
        checkIsLikedOrDisliked(this.products, "dislike", res, "Already disliked")
      },
    })
  }
}
