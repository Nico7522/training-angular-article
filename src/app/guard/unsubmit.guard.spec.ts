import { TestBed } from '@angular/core/testing';

import { UnsubmitGuard } from './unsubmit.guard';

describe('UnsubmitGuard', () => {
  let guard: UnsubmitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnsubmitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
