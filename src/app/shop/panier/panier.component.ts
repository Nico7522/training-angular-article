import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { CommandUser } from 'src/app/shared/models/command';
import { Product, ProductWithQuantity } from 'src/app/shared/models/product';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnDestroy {
  imgUrl = environment.apiUrlImg

  constructor(private _shopService: ShopService){}
  panier: ProductWithQuantity[] | undefined ;
  totalPrice: number = 0;
  panierSub?: Subscription
  showPreviousCommand: boolean = true;
  ngOnInit(): void {
    this.panierSub = this._shopService.$panier.subscribe({
      next: (p) => {
        this.panier = p;
        if (p) {
      for (const product of p) {
           this.totalPrice += product.price*product.quantity
      }
          
        }
      }
    })
  }
  ngOnDestroy(): void {
    this.panierSub?.unsubscribe();
  }

show() {
  this.showPreviousCommand = !this.showPreviousCommand
}
}
