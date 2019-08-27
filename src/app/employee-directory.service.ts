import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDirectoryService {

  constructor() { }

  public employeeId;

  getEmployeeDetails() {
    return [
      { employeeId: 1, firstName: "Ramesh", lastName: "Bhatia", address: "507-20A", city: "Pune", postCode: "411057", phone: "(020)67980030", country: "India", gender:"M" },
      { employeeId: 2, firstName: "Pratyush", lastName: "Patel", address: "734-67B", city: "Bangalore", postCode: "530068", phone: "(080)22256576", country: "India", gender:"M" },
      { employeeId: 3, firstName: "Meghana", lastName: "Singh", address: "576-20A", city: "Pune", postCode: "411072", phone: "(020)67982187", country: "India", gender:"F" },
      { employeeId: 4, firstName: "Yogeshwar", lastName: "Gadam", address: "603-34C", city: "Nanded", postCode: "431605", phone: "(024)62222454", country: "India", gender:"M" },
      { employeeId: 5, firstName: "Vikram", lastName: "Dube", address: "904-80A", city: "Mumbai", postCode: "400004", phone: "(022)24224438", country: "India", gender:"M" }
    ];
  }

}
