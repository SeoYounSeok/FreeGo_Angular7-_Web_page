import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPersonalInfoComponent } from './policy-personal-info.component';

describe('PolicyPersonalInfoComponent', () => {
  let component: PolicyPersonalInfoComponent;
  let fixture: ComponentFixture<PolicyPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
