import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDirectoryService } from '../employee-directory.service';

@Component({
  selector: 'app-employee-resume-projects',
  templateUrl: './employee-resume-projects.component.html',
  styleUrls: ['./employee-resume-projects.component.css']
})
export class EmployeeResumeProjectsComponent implements OnInit {

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
