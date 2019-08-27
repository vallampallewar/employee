import { Component, OnInit } from '@angular/core';
import { EmployeeDirectoryService } from '../employee-directory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeListDetails = [];
  public searchKey = "";
  constructor(private _employeeService: EmployeeDirectoryService, private router: Router) { }

  ngOnInit() {
    this.employeeListDetails = this._employeeService.getEmployeeDetails();
  }

  employeeDetailsById(id){
    this.router.navigate(['/employeeDetails', id+1]);
  }

  ngDoCheck(){
    this.searchEmployee();
  }

  searchEmployee(){
    let employeeList = [];
    this.employeeListDetails = this._employeeService.getEmployeeDetails();
    if(this.searchKey != ""){
      this.employeeListDetails.forEach(employeeDetails => {
        if(employeeDetails.firstName.toLowerCase().indexOf(this.searchKey) != -1){
          employeeList.push(employeeDetails);
        }
      });      
      this.employeeListDetails = employeeList;
    }
  }
}
