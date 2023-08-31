import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { LikeOrDislike } from 'src/app/shared/interfaces/like-dislike.interface';
import { Product } from 'src/app/shared/models/product';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-categorie-selected',
  templateUrl: './categorie-selected.component.html',
  styleUrls: ['./categorie-selected.component.css'],
})
export class CategorieSelectedComponent implements OnInit, OnDestroy {
  filteredProduct: Product[] = [];
  imgUrl = environment.apiUrlImg;
  save: Product[] = this.filteredProduct;

  filteredProductSub!: Subscription;
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.filteredProductSub = this._productService.$search.subscribe(
      (value: string) => {
        if (value === '') {
          this.filteredProduct = this.save;
        } else {
          this.filteredProduct = this.filteredProduct.filter((p) => {
            return p.title.toLowerCase().replaceAll('é', 'e').includes(value.toLowerCase().replaceAll('é', 'e'));
          });
        }
      }
    );
  }

  ngOnInit(): void {
    const categorieSelected = this.route.snapshot.params['categorie'];
    if (categorieSelected) {
      this.route.params.subscribe((params) => {
        this.filteredProductSub = this._productService
          .getProductByCategorie(params['categorie'])
          .subscribe({
            next: (val) => {
              this.filteredProduct = val;
              this.save = val;
            },
          });
      });
    }
  }
  
  // like(action: LikeOrDislike) {
  //   this._productService.like(action.id).subscribe({
  //     next: (res) => {
  //       this.filteredProduct.find((p) => {
  //         if (p.id === action.id) {
  //           {
  //             p.like = res.product.like;
  //           }
  //         }
  //       });
  //     },
  //   });
  // }

  ngOnDestroy(): void {
    this.filteredProductSub.unsubscribe();
  }
}
