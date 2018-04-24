import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookbookDetailComponent } from './cookbook-detail.component';

describe('CookbookDetailComponent', () => {
  let component: CookbookDetailComponent;
  let fixture: ComponentFixture<CookbookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookbookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookbookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
