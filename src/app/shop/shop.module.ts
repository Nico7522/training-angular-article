import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CommandeComponent } from './commande/commande.component';
import { PanierComponent } from './panier/panier.component';
import { ShopComponent } from './shop.component';
import { DateFormaterPipe } from '../pipes/date-formater.pipe';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    ShopComponent,
    DateFormaterPipe
  ],
 
  imports: [
    CommonModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
