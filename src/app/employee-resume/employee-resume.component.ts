import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDirectoryService } from '../employee-directory.service';

@Component({
  selector: 'app-employee-resume',
  templateUrl: './employee-resume.component.html',
  styleUrls: ['./employee-resume.component.css']
})
export class EmployeeResumeComponent implements OnInit {

  public employeeDetails;
  public employeeId;
  public employeeDetail;
  public page = "info";

  constructor(private activatedRouter: ActivatedRoute, private route: Router, private _employeeService: EmployeeDirectoryService) { }

  ngOnInit() {
    this.employeeDetails = this._employeeService.getEmployeeDetails();
    let employeeId = this.activatedRouter.snapshot.paramMap.get('id');
    this.employeeId = parseInt(employeeId);
    this.employeeDetails.forEach(employeeDetail => {
      if (employeeDetail.employeeId == employeeId) {
        this.employeeDetail = employeeDetail
      }
    });
    this.route.navigate(['info', this.employeeId], {relativeTo: this.activatedRouter});
  }

  navigateToEmployeeDetails() {
    this.route.navigate(['employeeDetails', this.employeeId]);
  }

  employeeInfo(){
    this.page = "info";
    this.route.navigate(['info', this.employeeId], {relativeTo: this.activatedRouter});
  }

  employeeProjects(){
    this.page = "project";
    this.route.navigate(['projects', this.employeeId], {relativeTo: this.activatedRouter});
  }

  employeeHobbies(){
    this.page = "hobbies";
    this.route.navigate(['hobbies', this.employeeId], {relativeTo: this.activatedRouter});
  }

  employeeNotes(){
    this.page = "notes";
    this.route.navigate(['notes', this.employeeId], {relativeTo: this.activatedRouter});
  }
}
