import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiachangComponent } from './jiachang.component';

describe('JiachangComponent', () => {
  let component: JiachangComponent;
  let fixture: ComponentFixture<JiachangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiachangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiachangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
