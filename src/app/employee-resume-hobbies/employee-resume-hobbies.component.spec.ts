import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResumeHobbiesComponent } from './employee-resume-hobbies.component';

describe('EmployeeResumeHobbiesComponent', () => {
  let component: EmployeeResumeHobbiesComponent;
  let fixture: ComponentFixture<EmployeeResumeHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResumeHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResumeHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
