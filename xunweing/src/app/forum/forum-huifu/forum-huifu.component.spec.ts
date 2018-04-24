import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumHuifuComponent } from './forum-huifu.component';

describe('ForumHuifuComponent', () => {
  let component: ForumHuifuComponent;
  let fixture: ComponentFixture<ForumHuifuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumHuifuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumHuifuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
