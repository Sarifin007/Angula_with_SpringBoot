import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  constructor(private service:EmployeeserviceService) { }

  ngOnInit(): void {
  
  }
  // saveemp(emp:Employee){
  //   this.service.createSG(emp).subscribe(
  //     data=>{
  //       this.
  //     }
  //   )

  // }

}
