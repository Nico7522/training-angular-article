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

  constructor(
    private articleList: DataService,
    private _productService: ProductService
  ) {
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

  like(id: number) {
    this._productService.like(id).subscribe({
      next: (res) => {
        this.products.find((p) => {
          if (p.id === id) {
            {
              p.like = res.product.like;
            }
          }
        });
      },
    });
  }
}
