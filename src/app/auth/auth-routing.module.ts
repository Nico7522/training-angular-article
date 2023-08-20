import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnsubmitGuard } from '../guard/unsubmit.guard';
import { dirtyGuard } from '../guard/dirty.guard';


const routes: Routes = [
  { path: "", component: LoginComponent},
  // New méthode version import direct du composant
  // { path: "register", canDeactivate: [(comp: RegisterComponent) => !comp.isDirty() || window.confirm('Voulez-vous vraiment quitter ?')], component: RegisterComponent},
  // { path: "register", canDeactivate: [UnsubmitGuard], component: RegisterComponent},
  // New méthode version guard
  { path: "register", canDeactivate: [dirtyGuard], component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
