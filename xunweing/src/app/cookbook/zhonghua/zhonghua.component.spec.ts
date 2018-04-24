import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhonghuaComponent } from './zhonghua.component';

describe('ZhonghuaComponent', () => {
  let component: ZhonghuaComponent;
  let fixture: ComponentFixture<ZhonghuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhonghuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhonghuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
