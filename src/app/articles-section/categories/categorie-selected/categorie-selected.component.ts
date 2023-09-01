import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { LikeOrDislike } from 'src/app/shared/interfaces/like-dislike.interface';
import { LikeOrDislikeResponse } from 'src/app/shared/interfaces/response.interface';
import { Product } from 'src/app/shared/models/product';
import { checkIsLikedOrDisliked } from 'src/app/utils/function';
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
    private route: ActivatedRoute,
    private _cookieService: CookieService
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
        
        checkIsLikedOrDisliked(this.filteredProduct, "like", res as LikeOrDislikeResponse, "Already liked")
      },
    });
  }

  dislike(id: number) {
    this._productService.dislike(id).subscribe({
      next: (res) => {
        
          checkIsLikedOrDisliked(this.filteredProduct, "dislike", res as LikeOrDislikeResponse, "Already disliked")
          
        
      },
    })
  }
  ngOnDestroy(): void {
    this.filteredProductSub.unsubscribe();
  }
}
