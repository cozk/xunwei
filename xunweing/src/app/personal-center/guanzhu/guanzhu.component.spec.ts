import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanzhuComponent } from './guanzhu.component';

describe('GuanzhuComponent', () => {
  let component: GuanzhuComponent;
  let fixture: ComponentFixture<GuanzhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuanzhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuanzhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
