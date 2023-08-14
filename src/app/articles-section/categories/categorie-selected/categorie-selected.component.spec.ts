import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSelectedComponent } from './categorie-selected.component';

describe('CategorieSelectedComponent', () => {
  let component: CategorieSelectedComponent;
  let fixture: ComponentFixture<CategorieSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
