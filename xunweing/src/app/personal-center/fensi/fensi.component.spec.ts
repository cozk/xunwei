import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FensiComponent } from './fensi.component';

describe('FensiComponent', () => {
  let component: FensiComponent;
  let fixture: ComponentFixture<FensiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FensiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
