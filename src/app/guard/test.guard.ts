import { CanDeactivateFn } from '@angular/router';

export const testGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
