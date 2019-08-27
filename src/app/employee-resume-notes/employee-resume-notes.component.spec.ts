import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResumeNotesComponent } from './employee-resume-notes.component';

describe('EmployeeResumeNotesComponent', () => {
  let component: EmployeeResumeNotesComponent;
  let fixture: ComponentFixture<EmployeeResumeNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResumeNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResumeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
