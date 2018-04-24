import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeginComponent } from './foregin.component';

describe('ForeginComponent', () => {
  let component: ForeginComponent;
  let fixture: ComponentFixture<ForeginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
