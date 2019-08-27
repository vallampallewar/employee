import { Component, OnInit } from '@angular/core';
import { EmployeeDirectoryService } from '../employee-directory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails; 
  public employeeId: number;
  public employeeDetail;
  public imagePath;
  constructor(private _employeeService: EmployeeDirectoryService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employeeDetails = this._employeeService.getEmployeeDetails();
    let employeeId = this.activatedRouter.snapshot.paramMap.get('id');
    this.employeeId = parseInt(employeeId);
    this.employeeDetails.forEach(employeeDetail => {
      if (employeeDetail.employeeId == employeeId) {
        this.employeeDetail = employeeDetail
      }
    });
    this.imagePath = this.employeeDetail.gender == "M" ? "../../assets/img/boy.png" : "../../assets/img/girl.png"
  }

  employeeResumeOverview(){
    this.router.navigate(['/employeeDetails/resume', this.employeeId]);
  }
}
