import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedComponentComponent } from './logged-component.component';

describe('LoggedComponentComponent', () => {
  let component: LoggedComponentComponent;
  let fixture: ComponentFixture<LoggedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
