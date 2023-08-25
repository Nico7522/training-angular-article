import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../auth/register/register.component';
import { isDirty } from '../shared/interfaces/guard.interface';

@Injectable({
  providedIn: 'root',
})
export class UnsubmitGuard implements CanDeactivate<isDirty> {
  canDeactivate(
    component: isDirty,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return (
      !component.isDirty() ||
      window.confirm('Voulez-vous vraiment quitter cette page ?')
    );
  }
}
