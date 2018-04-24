import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UprecipesComponent } from './uprecipes.component';

describe('UprecipesComponent', () => {
  let component: UprecipesComponent;
  let fixture: ComponentFixture<UprecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UprecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UprecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
