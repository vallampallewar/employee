import { Component, OnInit } from '@angular/core';
import { EmployeeDirectoryService } from '../employee-directory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pageName='Home';

  constructor(private _employeeService: EmployeeDirectoryService) { }

  ngOnInit() {
  }

}
