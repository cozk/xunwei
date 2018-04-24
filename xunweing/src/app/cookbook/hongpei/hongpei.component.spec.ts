import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HongpeiComponent } from './hongpei.component';

describe('HongpeiComponent', () => {
  let component: HongpeiComponent;
  let fixture: ComponentFixture<HongpeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HongpeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HongpeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
