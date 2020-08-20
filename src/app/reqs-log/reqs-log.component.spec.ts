import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqsLogComponent } from './reqs-log.component';

describe('ReqsLogComponent', () => {
  let component: ReqsLogComponent;
  let fixture: ComponentFixture<ReqsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
