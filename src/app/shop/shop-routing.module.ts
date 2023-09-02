import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: PanierComponent,
    children: [{ path: 'commande', component: CommandeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
