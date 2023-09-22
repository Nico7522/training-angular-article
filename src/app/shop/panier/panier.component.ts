import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnDestroy {
  constructor(private _shopService: ShopService){}
  panier: Product[] | undefined = [];
  panierSub?: Subscription
  ngOnInit(): void {
    this.panierSub = this._shopService.$panier.subscribe(p => this.panier = p)

  }
  ngOnDestroy(): void {
    this.panierSub?.unsubscribe();
  }


}
