import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditiconComponent } from './editicon.component';

describe('EditiconComponent', () => {
  let component: EditiconComponent;
  let fixture: ComponentFixture<EditiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
