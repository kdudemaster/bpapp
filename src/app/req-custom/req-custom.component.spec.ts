import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqCustomComponent } from './req-custom.component';

describe('ReqCustomComponent', () => {
  let component: ReqCustomComponent;
  let fixture: ComponentFixture<ReqCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
