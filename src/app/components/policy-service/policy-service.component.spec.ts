import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyServiceComponent } from './policy-service.component';

describe('PolicyServiceComponent', () => {
  let component: PolicyServiceComponent;
  let fixture: ComponentFixture<PolicyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
