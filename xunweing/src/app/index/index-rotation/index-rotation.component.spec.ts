import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRotationComponent } from './index-rotation.component';

describe('IndexRotationComponent', () => {
  let component: IndexRotationComponent;
  let fixture: ComponentFixture<IndexRotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexRotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
