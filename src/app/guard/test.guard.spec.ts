import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { testGuard } from './test.guard';

describe('testGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
