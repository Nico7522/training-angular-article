import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnsubmitGuard } from '../guard/unsubmit.guard';
import { dirtyGuard } from '../guard/dirty.guard';
import { ProfilComponent } from './profil/profil.component';
import { CommandeComponent } from '../shop/commande/commande.component';
import { ShopComponent } from '../shop/shop.component';
import { loginGuard } from '../guard/login.guard';
import { PanierComponent } from '../shop/panier/panier.component';


const routes: Routes = [
  { path: "", component: LoginComponent, canDeactivate: [dirtyGuard]},
  // New méthode version import direct du composant
  // { path: "register", canDeactivate: [(comp: RegisterComponent) => !comp.isDirty() || window.confirm('Voulez-vous vraiment quitter ?')], component: RegisterComponent},
  // { path: "register", canDeactivate: [UnsubmitGuard], component: RegisterComponent},
  // New méthode version guard
  { path: "register", canDeactivate: [dirtyGuard], component: RegisterComponent},
  { path: "profil", component: ProfilComponent}, 
  {path: "profil/panier", component: ShopComponent, loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)},
  {path: "profil/commande", component: CommandeComponent},
    // {path: "profil/panier", component: PanierComponent, loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
