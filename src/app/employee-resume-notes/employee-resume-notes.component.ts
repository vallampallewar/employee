import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDirectoryService } from '../employee-directory.service';

@Component({
  selector: 'app-employee-resume-notes',
  templateUrl: './employee-resume-notes.component.html',
  styleUrls: ['./employee-resume-notes.component.css']
})
export class EmployeeResumeNotesComponent implements OnInit {

  public employeeDetails;
  constructor(private activatedRouter: ActivatedRoute, private _employeeService: EmployeeDirectoryService) { }

  ngOnInit() {
    let employeeId = this.activatedRouter.snapshot.paramMap.get('id');
    this.employeeDetails = this._employeeService.getEmployeeDetails();
    this.employeeDetails.forEach(details => {
      if(details.employeeId == employeeId){
        this.employeeDetails = details;
      }
    });
  }

}
