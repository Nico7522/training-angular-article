import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Article } from '../shared/models/article';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-section, TestDirective',
  templateUrl: './articles-section.html',
  styleUrls: ['./articles-section.css'],
})
export class ArticlesSectionComponent implements OnInit, OnDestroy {
  constructor(private _productService: ProductService) {
    this.productsSub = this._productService.$search.subscribe(
      (value: string) => {
        if (value === '') {
          this.products = this.productsSave;
        } else {
          this.products = this.products.filter((p) => {
            return p.title.toLowerCase().replaceAll('é', 'e').includes(value.toLowerCase().replaceAll('é', 'e'));
          });
        }
      }
    );
  }
  products: Product[] = [];
  productsSave: Product[] = [];
  productsSub!: Subscription;
  getByCategorie(categorie: string) {
    this._productService.getProductByCategorie(categorie).subscribe({
      next: (products) => {
        this.products = products;
        this.productsSave = products;
        console.log(products);
      },
    });
  }
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.productsSave = products;
        
      },
    });
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
  }
}
