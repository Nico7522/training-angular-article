import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-categorie-selected',
  templateUrl: './categorie-selected.component.html',
  styleUrls: ['./categorie-selected.component.css'],
})
export class CategorieSelectedComponent implements OnInit, OnDestroy {
  filteredProduct: Product[] = []
  imgUrl = environment.apiUrlImg

  filteredProductSub!: Subscription
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {

    // TODO faire une requête api pour trier directement par filtre 
    const categorieSelected = this.route.snapshot.params['categorie'];
    if (categorieSelected) {
      console.log(categorieSelected);
      
      this.route.params.subscribe((params) => {
        this.filteredProductSub = this._productService.getProductByCategorie(params['categorie']).subscribe({
          next: (val) => {
            this.filteredProduct = val.filter((p) => {
              return p.categorie === params['categorie'];
            });
            
          },
        });
      });
    }
  }

  ngOnDestroy(): void {
      this.filteredProductSub.unsubscribe()
  }
}
