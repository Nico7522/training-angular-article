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
  errorMessage: string =''

  constructor(
 
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
        console.log(res);
        
        if (res.message === "Already liked") {
          return null
        } else {
        return this.products.find((p) => {
            if (p.id === id) {
              {
                p.like = res.product.like;
              }
            }
            
          });

        }
        
      },
      error: (err) => {
        console.log(err);
        if (err.statusText === "Not Modified") {
          this.errorMessage = 'Vous avez déjà aimé le produit'
          
          
        }
      }
    });
  }
}
