import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDetaicaiComponent } from './forum-detaicai.component';

describe('ForumDetaicaiComponent', () => {
  let component: ForumDetaicaiComponent;
  let fixture: ComponentFixture<ForumDetaicaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumDetaicaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDetaicaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
