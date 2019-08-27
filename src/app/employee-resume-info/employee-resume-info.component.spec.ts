import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResumeInfoComponent } from './employee-resume-info.component';

describe('EmployeeResumeInfoComponent', () => {
  let component: EmployeeResumeInfoComponent;
  let fixture: ComponentFixture<EmployeeResumeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResumeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResumeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
