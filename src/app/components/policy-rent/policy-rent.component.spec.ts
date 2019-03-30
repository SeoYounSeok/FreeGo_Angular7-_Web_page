import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRentComponent } from './policy-rent.component';

describe('PolicyRentComponent', () => {
  let component: PolicyRentComponent;
  let fixture: ComponentFixture<PolicyRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
