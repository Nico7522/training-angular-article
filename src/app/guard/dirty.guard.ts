import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../auth/register/register.component';
import { RegisterGuard } from '../shared/interfaces/guard.interface';

// Guard version fonction avec interface en type générique
// export const dirtyGuard: CanDeactivateFn<RegisterGuard> = (
//   component: RegisterGuard,
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ):
//   | Observable<boolean | UrlTree>
//   | Promise<boolean | UrlTree>
//   | boolean
//   | UrlTree => {
//   return (
//     !component.isDirty() || window.confirm('Voulez-vous vraiment quitter ?')
//   );
// };

// Guard version fonction avec component en type générique
export const dirtyGuard: CanDeactivateFn<RegisterComponent> = (
  component: RegisterComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return (
    !component.isDirty() || window.confirm('Voulez-vous vraiment quitter ?')
  );
};
