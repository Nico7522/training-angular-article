import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Article } from '../models/article';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.css'],
})
export class ModalDetailsComponent implements OnDestroy {
  product?: Product;
  productSub?: Subscription;
  urlImg: string = environment.apiUrlImg
  constructor(private list: DataService, private _productList: ProductService) {
    this.productSub = this._productList.$product.subscribe((prod) => {
      console.log(prod);
      
      this.product = prod;
    });

    //  this.list._$product.subscribe({
    //   next: (data) => { this.product = data}
    //  })
  }
ngOnDestroy(): void {
    this.productSub?.unsubscribe()
}
  @Input() idArticle!: number;

  @Input() descriptionArticle: string = '';

  getProduct(val: number) {
    this._productList.getById(val);
  }
}
