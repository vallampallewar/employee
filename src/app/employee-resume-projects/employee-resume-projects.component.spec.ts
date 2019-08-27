import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResumeProjectsComponent } from './employee-resume-projects.component';

describe('EmployeeResumeProjectsComponent', () => {
  let component: EmployeeResumeProjectsComponent;
  let fixture: ComponentFixture<EmployeeResumeProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResumeProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResumeProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
