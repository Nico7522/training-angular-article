import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-categorie-selected',
  templateUrl: './categorie-selected.component.html',
  styleUrls: ['./categorie-selected.component.css'],
})
export class CategorieSelectedComponent implements OnInit {
  filteredProduct: Product[] = [];
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    const categorieSelected = this.route.snapshot.params['categorie'];
    if (categorieSelected) {
      this.route.params.subscribe((params) => {
        this._productService.getProducts().subscribe({
          next: (val) => {
            console.log('dd');

            this.filteredProduct = val.filter((p) => {
              return p.categorie === params['categorie'];
            });
          },
        });
      });
    }
  }
}
