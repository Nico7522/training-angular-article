import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environment/environment';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements  OnDestroy {
  product?: Product;
  productSub?: Subscription;
  urlImg: string = environment.apiUrlImg
  productAddMessage: string = "";
  constructor(private list: DataService, private _productList: ProductService, private _shopService: ShopService) {
    this.productSub = this._productList.$product.subscribe((prod) => {
     
      
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

  addProduct(product: Product | undefined) {
    this._shopService.addProduct(product)
    this.productAddMessage = "Produit ajouté !"
  }
}
