import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyLocationComponent } from './policy-location.component';

describe('PolicyLocationComponent', () => {
  let component: PolicyLocationComponent;
  let fixture: ComponentFixture<PolicyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
