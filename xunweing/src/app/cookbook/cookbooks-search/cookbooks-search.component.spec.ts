import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbooksSearchComponent } from './cookbooks-search.component';

describe('CookbooksSearchComponent', () => {
  let component: CookbooksSearchComponent;
  let fixture: ComponentFixture<CookbooksSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbooksSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbooksSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
